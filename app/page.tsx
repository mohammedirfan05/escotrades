import React from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { MarketTicker } from "@/components/MarketTicker";
import { PropFirmsSection } from "@/components/PropFirmsSection";
import { DiscordCommunitySection } from "@/components/DiscordCommunitySection";
import { SocialsSection } from "@/components/SocialsSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#080908] text-[#EDEDED] flex flex-col selection:bg-[#0066FF] selection:text-white">
      {/* Floating pill navigation bar */}
      <Navbar />

      {/* Minimal clean Hero */}
      <Hero />

      {/* Ticker bar */}
      <MarketTicker />

      {/* Best Prop Firm Deals with Code ESCO */}
      <PropFirmsSection />

      {/* Discord Trading Room & Community */}
      <DiscordCommunitySection />

      {/* Official Media & Social Channels */}
      <SocialsSection />

      {/* Editorial Footer */}
      <Footer />
    </main>
  );
}
