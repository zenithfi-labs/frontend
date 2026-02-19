"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Float } from "@react-three/drei";
import * as THREE from "three";

// ── Soft circular sprite texture (makes particles round) ──
function useCircleTexture() {
  return useMemo(() => {
    const size = 64;
    const canvas = document.createElement("canvas");
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext("2d")!;
    const gradient = ctx.createRadialGradient(
      size / 2, size / 2, 0,
      size / 2, size / 2, size / 2
    );
    gradient.addColorStop(0, "rgba(255,255,255,1)");
    gradient.addColorStop(0.35, "rgba(255,255,255,0.7)");
    gradient.addColorStop(1, "rgba(255,255,255,0)");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, size, size);
    return new THREE.CanvasTexture(canvas);
  }, []);
}

// ── Central orb — 3 layers for visible depth ──────────────
function Orb() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = clock.elapsedTime * 0.09;
    groupRef.current.rotation.x = Math.sin(clock.elapsedTime * 0.28) * 0.06;
  });

  return (
    <Float speed={1.4} rotationIntensity={0.12} floatIntensity={0.45}>
      <group ref={groupRef}>
        {/* Inner fill — gives the sphere volume so it reads as 3D, not hollow */}
        <mesh>
          <icosahedronGeometry args={[1.35, 2]} />
          <meshBasicMaterial color="#050f22" transparent opacity={0.55} />
        </mesh>

        {/* Wireframe overlay — reduced opacity for more ethereal look */}
        <mesh scale={1.008}>
          <icosahedronGeometry args={[1.35, 2]} />
          <meshBasicMaterial
            color="#28A0F0"
            wireframe
            transparent
            opacity={0.35}
          />
        </mesh>
      </group>
    </Float>
  );
}

// ── Orbiting ring ──────────────────────────────────────────
interface RingProps {
  radius: number;
  tube: number;
  color: string;
  rx: number;
  ry: number;
  rz: number;
  speed: number;
  opacity: number;
}

function Ring({ radius, tube, color, rx, ry, rz, speed, opacity }: RingProps) {
  const mesh = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (!mesh.current) return;
    mesh.current.rotation.z = clock.elapsedTime * speed;
  });

  return (
    <mesh ref={mesh} rotation={[rx, ry, rz]}>
      <torusGeometry args={[radius, tube, 20, 120]} />
      <meshBasicMaterial color={color} transparent opacity={opacity} />
    </mesh>
  );
}

// ── Circular particle cloud ────────────────────────────────
interface ParticlesProps {
  count?: number;
  color?: string;
  speed?: number;
  size?: number;
  radiusMin?: number;
  radiusMax?: number;
}

function Particles({
  count = 120,
  color = "#28A0F0",
  speed = 0.035,
  size = 0.08,
  radiusMin = 2.3,
  radiusMax = 4.5,
}: ParticlesProps) {
  const points = useRef<THREE.Points>(null);
  const texture = useCircleTexture();

  const geometry = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = radiusMin + Math.random() * (radiusMax - radiusMin);
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    return geo;
  }, [count, radiusMin, radiusMax]);

  useFrame(({ clock }) => {
    if (!points.current) return;
    points.current.rotation.y = clock.elapsedTime * speed;
    points.current.rotation.x = Math.sin(clock.elapsedTime * 0.014) * 0.07;
  });

  return (
    <points ref={points} geometry={geometry}>
      <pointsMaterial
        size={size}
        color={color}
        transparent
        opacity={0.85}
        sizeAttenuation
        depthWrite={false}
        alphaMap={texture}
        alphaTest={0.01}
      />
    </points>
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
      {/* Lighting — strong key light creates clear bright/dark gradient */}
      <ambientLight intensity={0.08} />
      {/* Key light — upper right, main illumination */}
      <pointLight position={[5, 5, 4]} color="#6acfff" intensity={6} />
      {/* Fill light — opposite side, cooler + dimmer */}
      <pointLight position={[-4, -2, 2]} color="#28A0F0" intensity={1.5} />
      {/* Gold rim light — lower left for warm accent edge */}
      <pointLight position={[-2, -4, -2]} color="#FFD60A" intensity={2.5} />
      {/* Back glow — creates silhouette depth */}
      <pointLight position={[0, 0, -4]} color="#1a3a70" intensity={4} />

      {/* Central orb */}
      <Orb />

      {/*
        Two rings only — both at oblique angles so neither is
        edge-on to the camera. The old third ring (rx = PI/2)
        was exactly 90° to the view, causing the horizontal line.
      */}
      <Ring
        radius={2.1}
        tube={0.022}
        color="#28A0F0"
        rx={Math.PI / 3}
        ry={0}
        rz={0.12}
        speed={0.22}
        opacity={0.82}
      />
      <Ring
        radius={1.78}
        tube={0.015}
        color="#FFD60A"
        rx={Math.PI / 5.5}
        ry={0}
        rz={Math.PI / 3}
        speed={-0.17}
        opacity={0.68}
      />

      {/* Circular particle clouds */}
      <Particles count={120} color="#28A0F0" speed={0.035} size={0.045} radiusMin={2.3} radiusMax={4.5} />
      <Particles count={42} color="#FFD60A" speed={-0.055} size={0.038} radiusMin={2.0} radiusMax={3.2} />
    </Canvas>
  );
}
