import dynamic from "next/dynamic";
import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import StatsBar from "@/components/sections/StatsBar";

// Lazy load below-the-fold sections — reduces initial JS bundle significantly
const HowItWorks = dynamic(() => import("@/components/sections/HowItWorks"));
const IntelligenceLayer = dynamic(() => import("@/components/sections/IntelligenceLayer"));
const Features = dynamic(() => import("@/components/sections/Features"));
const Ecosystem = dynamic(() => import("@/components/sections/Ecosystem"));
const CtaBand = dynamic(() => import("@/components/sections/CtaBand"));
const Footer = dynamic(() => import("@/components/sections/Footer"));

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A0A0B] text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <StatsBar />
      <HowItWorks />
      <IntelligenceLayer />
      <Features />
      <Ecosystem />
      <CtaBand />
      <Footer />
    </main>
  );
}
