"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

// ── Satellite orbital configs ──────────────────────────────
// Each satellite = one yield protocol orbiting the Zenith hub
interface SatConfig {
  radius: number;
  tiltX: number; // how much Y-axis varies (gives 3D tilt to orbit)
  speed: number;
  phase: number;
  color: string;
  size: number;
}

const SAT_CONFIGS: SatConfig[] = [
  { radius: 2.4,  tiltX:  0.55, speed:  0.20, phase: 0.00, color: "#28A0F0", size: 0.13 },
  { radius: 2.2,  tiltX: -0.40, speed: -0.15, phase: 1.26, color: "#FFD60A", size: 0.10 },
  { radius: 2.5,  tiltX:  0.75, speed:  0.12, phase: 2.51, color: "#28A0F0", size: 0.12 },
  { radius: 2.3,  tiltX: -0.65, speed: -0.22, phase: 3.77, color: "#FFD60A", size: 0.09 },
  { radius: 2.45, tiltX:  0.30, speed:  0.17, phase: 5.03, color: "#28A0F0", size: 0.11 },
];

const N_FLOW = 5; // flow particles per connection line

// ── Central Zenith hub ─────────────────────────────────────
function Hub() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = clock.elapsedTime * 0.12;
    groupRef.current.rotation.x = Math.sin(clock.elapsedTime * 0.3) * 0.05;
  });

  return (
    <Float speed={1.2} rotationIntensity={0.08} floatIntensity={0.3}>
      <group ref={groupRef}>
        {/* Dark fill — gives the hub visible volume */}
        <mesh>
          <icosahedronGeometry args={[1.0, 2]} />
          <meshBasicMaterial color="#040d1e" transparent opacity={0.88} />
        </mesh>
        {/* Primary wireframe */}
        <mesh scale={1.01}>
          <icosahedronGeometry args={[1.0, 2]} />
          <meshBasicMaterial color="#28A0F0" wireframe transparent opacity={0.45} />
        </mesh>
        {/* Outer halo — low-detail, very faint */}
        <mesh scale={1.22}>
          <icosahedronGeometry args={[1.0, 1]} />
          <meshBasicMaterial color="#28A0F0" wireframe transparent opacity={0.09} />
        </mesh>
      </group>
    </Float>
  );
}

// ── Satellite nodes + connection lines + flow particles ────
function NodeGraph() {
  // Build all Three.js objects once — updated imperatively each frame
  const objects = useMemo(() => {
    return SAT_CONFIGS.map((cfg) => {
      // Satellite sphere
      const satMesh = new THREE.Mesh(
        new THREE.SphereGeometry(cfg.size, 12, 12),
        new THREE.MeshBasicMaterial({
          color: cfg.color,
          transparent: true,
          opacity: 0.95,
        })
      );

      // Wireframe halo around satellite
      const haloMesh = new THREE.Mesh(
        new THREE.SphereGeometry(cfg.size * 2.0, 6, 6),
        new THREE.MeshBasicMaterial({
          color: cfg.color,
          wireframe: true,
          transparent: true,
          opacity: 0.12,
        })
      );

      // Connection line: hub (origin) → satellite
      const lineGeo = new THREE.BufferGeometry();
      lineGeo.setAttribute(
        "position",
        new THREE.BufferAttribute(new Float32Array(6), 3)
      );
      const line = new THREE.Line(
        lineGeo,
        new THREE.LineBasicMaterial({
          color: cfg.color,
          transparent: true,
          opacity: 0.18,
        })
      );
      line.frustumCulled = false;

      // Flow particles traveling from hub → satellite
      const flowGeo = new THREE.BufferGeometry();
      flowGeo.setAttribute(
        "position",
        new THREE.BufferAttribute(new Float32Array(N_FLOW * 3), 3)
      );
      const flow = new THREE.Points(
        flowGeo,
        new THREE.PointsMaterial({
          size: 0.06,
          color: cfg.color,
          transparent: true,
          opacity: 0.85,
          sizeAttenuation: true,
        })
      );
      flow.frustumCulled = false;

      return { satMesh, haloMesh, line, lineGeo, flow, flowGeo, cfg };
    });
  }, []);

  useFrame(({ clock }) => {
    const t = clock.elapsedTime;

    objects.forEach(({ satMesh, haloMesh, lineGeo, flowGeo, cfg }) => {
      // Compute satellite world position on its tilted orbit
      const angle = cfg.phase + t * cfg.speed;
      const x = Math.cos(angle) * cfg.radius;
      const y = Math.sin(angle) * cfg.radius * cfg.tiltX;
      const z = Math.sin(angle * 0.6 + cfg.phase) * 0.35; // subtle Z depth

      satMesh.position.set(x, y, z);
      haloMesh.position.set(x, y, z);

      // Update line: origin → satellite
      const lp = lineGeo.attributes.position as THREE.BufferAttribute;
      lp.setXYZ(0, 0, 0, 0);
      lp.setXYZ(1, x, y, z);
      lp.needsUpdate = true;
      lineGeo.computeBoundingSphere();

      // Update flow particles (each travels from hub to satellite at staggered phases)
      const fp = flowGeo.attributes.position as THREE.BufferAttribute;
      for (let j = 0; j < N_FLOW; j++) {
        const tFlow = (t * 0.45 + j / N_FLOW) % 1;
        fp.setXYZ(j, x * tFlow, y * tFlow, z * tFlow);
      }
      fp.needsUpdate = true;
      flowGeo.computeBoundingSphere();
    });
  });

  return (
    <group>
      {objects.map((o, i) => (
        <group key={i}>
          <primitive object={o.satMesh} />
          <primitive object={o.haloMesh} />
          <primitive object={o.line} />
          <primitive object={o.flow} />
        </group>
      ))}
    </group>
  );
}

// ── Scene ──────────────────────────────────────────────────
export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6.5], fov: 48 }}
      gl={{ antialias: true, alpha: true }}
      dpr={[1, 2]}
    >
      <ambientLight intensity={0.06} />
      <pointLight position={[5, 5, 4]}   color="#6acfff" intensity={5} />
      <pointLight position={[-4, -2, 2]} color="#28A0F0" intensity={1.2} />
      <pointLight position={[-2, -4, -2]} color="#FFD60A" intensity={2.0} />

      <Hub />
      <NodeGraph />
    </Canvas>
  );
}
