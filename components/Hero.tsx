import React from "react";
import { BRAND } from "@/app/data/brand";
import { Activity, Clock, ShieldCheck, Tag, Users } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[85vh] flex flex-col items-center justify-center pt-32 pb-20 px-4 overflow-hidden">
      {/* Subtle radial ambient blue spotlight */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[300px] bg-[#0066FF]/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-4xl mx-auto flex flex-col items-center text-center relative z-10">
        
        {/* Giant Iconic Typography (Inspired by BNQ reference in Image 3) */}
        <div className="relative select-none mb-2">
          <h1 className="text-6xl sm:text-8xl md:text-9xl font-extrabold tracking-tighter text-white uppercase leading-none font-sans">
            ESCO
          </h1>
          <span className="block text-xs sm:text-sm font-mono tracking-[0.4em] text-[#00D2FF] uppercase mt-2 font-semibold">
            TRADES • NASDAQ FUTURES
          </span>
        </div>

        {/* Clean Editorial Subtitle (Inspired by Image 2 reference) */}
        <p className="text-sm sm:text-base text-[#8E9590] max-w-lg mx-auto leading-relaxed mt-4 mb-12">
          A dedicated community of futures traders focused on Nasdaq &amp; MNQ execution, daily NY open live planning, and disciplined risk management.
        </p>

        {/* 4 Minimal Diamond / Cluster Pillars (Inspired directly by Reference Image 3) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 w-full max-w-3xl mb-12">
          {/* Node 1 */}
          <div className="flex flex-col items-center p-4 rounded-2xl bg-[#0a0d0c]/80 border border-[#1b221e] hover:border-[#0066FF]/40 transition-colors">
            <div className="p-2 rounded-xl bg-[#101512] text-[#00D2FF] mb-2.5">
              <Activity className="w-4 h-4" />
            </div>
            <span className="text-xs font-mono font-bold text-[#EDEDED] uppercase tracking-wider">
              MNQ / NQ MODEL
            </span>
            <span className="text-[11px] text-[#8E9590] font-sans mt-0.5">
              Futures Price Action
            </span>
          </div>

          {/* Node 2 */}
          <div className="flex flex-col items-center p-4 rounded-2xl bg-[#0a0d0c]/80 border border-[#1b221e] hover:border-[#0066FF]/40 transition-colors">
            <div className="p-2 rounded-xl bg-[#101512] text-[#0066FF] mb-2.5">
              <Clock className="w-4 h-4" />
            </div>
            <span className="text-xs font-mono font-bold text-[#EDEDED] uppercase tracking-wider">
              NY OPEN LIVE
            </span>
            <span className="text-[11px] text-[#8E9590] font-sans mt-0.5">
              9:30 AM EST Stream
            </span>
          </div>

          {/* Node 3 */}
          <div className="flex flex-col items-center p-4 rounded-2xl bg-[#0a0d0c]/80 border border-[#1b221e] hover:border-[#0066FF]/40 transition-colors">
            <div className="p-2 rounded-xl bg-[#101512] text-[#00D2FF] mb-2.5">
              <Tag className="w-4 h-4" />
            </div>
            <span className="text-xs font-mono font-bold text-[#EDEDED] uppercase tracking-wider">
              CODE: ESCO
            </span>
            <span className="text-[11px] text-[#8E9590] font-sans mt-0.5">
              Prop Firm Savings
            </span>
          </div>

          {/* Node 4 */}
          <div className="flex flex-col items-center p-4 rounded-2xl bg-[#0a0d0c]/80 border border-[#1b221e] hover:border-[#0066FF]/40 transition-colors">
            <div className="p-2 rounded-xl bg-[#101512] text-[#0066FF] mb-2.5">
              <Users className="w-4 h-4" />
            </div>
            <span className="text-xs font-mono font-bold text-[#EDEDED] uppercase tracking-wider">
              DISCORD ROOM
            </span>
            <span className="text-[11px] text-[#8E9590] font-sans mt-0.5">
              Live Trade Community
            </span>
          </div>
        </div>

        {/* Primary Clean Glowing Pill Button (Inspired by Reference Images 2 & 3) */}
        <a
          href={BRAND.discordUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-full bg-gradient-to-b from-[#0066FF] to-[#0047cc] hover:from-[#0077ff] hover:to-[#0055dd] text-white text-sm font-bold tracking-wide border border-[#38bdf8]/40 shadow-[0_0_30px_rgba(0,102,255,0.55),inset_0_1px_1px_rgba(255,255,255,0.4)] hover:shadow-[0_0_45px_rgba(0,102,255,0.8)] hover:scale-105 active:scale-95 transition-all duration-200"
        >
          {/* Discord SVG icon */}
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.893.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
          </svg>
          <span>Join Free Discord</span>
        </a>

      </div>
    </section>
  );
}
