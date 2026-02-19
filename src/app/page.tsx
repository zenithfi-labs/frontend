import Hero from "@/components/sections/Hero";
import StatsBar from "@/components/sections/StatsBar";
import HowItWorks from "@/components/sections/HowItWorks";
import Features from "@/components/sections/Features";
import Ecosystem from "@/components/sections/Ecosystem";
import CtaBand from "@/components/sections/CtaBand";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A0A0B] text-white overflow-x-hidden">
      <Hero />
      <StatsBar />
      <HowItWorks />
      <Features />
      <Ecosystem />
      <CtaBand />
      <Footer />
    </main>
  );
}
