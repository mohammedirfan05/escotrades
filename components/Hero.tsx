import React from "react";
import Image from "next/image";
import { BRAND } from "@/app/data/brand";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-black text-white">
      {/* Massive Ambient Royal / Electric Blue Glowing Fog */}
      <div className="absolute -bottom-40 -right-20 w-[800px] h-[800px] bg-gradient-to-tl from-[#0055ff] via-[#0040cc]/60 to-transparent blur-[160px] pointer-events-none rounded-full opacity-85" />
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-[#0066ff]/25 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute -bottom-20 left-1/4 w-[600px] h-[400px] bg-[#0038aa]/30 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* Left Column: Left-Aligned Editorial Typography & CTAs */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          
          {/* Status Badges Row */}
          <div className="flex flex-wrap items-center gap-2.5 mb-8">
            <div className="px-3 py-1 rounded-md bg-[#10141a] border border-white/10 text-[11px] font-mono tracking-wider text-slate-300 uppercase">
              NQ &amp; MNQ FUTURES
            </div>

            <div className="px-3 py-1 rounded-md bg-[#10141a] border border-white/10 text-[11px] font-mono tracking-wider text-slate-300 uppercase flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-emerald-400 font-semibold">ICT &bull; IFVG &bull; PO3</span>
            </div>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-black tracking-tight text-white leading-[1.05] font-sans mb-6">
            JOIN THE COMMUNITY. <br />
            <span className="text-white">LEARN. TRADE. GET FUNDED.</span>
          </h1>

          {/* Subhead */}
          <p className="text-lg sm:text-xl text-slate-300 max-w-xl leading-relaxed mb-10 font-sans">
            Free NQ education, real community, and exclusive prop firm deals. Use code <span className="text-white font-bold underline decoration-blue-500 underline-offset-4">ESCO</span>.
          </p>

          {/* Primary Action Button */}
          <div className="flex flex-wrap items-center gap-4 mb-16">
            <a
              href={BRAND.discordUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-lg bg-gradient-to-r from-[#3b82f6] to-[#1d4ed8] hover:from-[#60a5fa] hover:to-[#2563eb] text-white text-sm font-semibold tracking-wide shadow-[0_0_25px_rgba(37,99,235,0.6)] hover:shadow-[0_0_35px_rgba(59,130,246,0.8)] transition-all duration-200 group"
            >
              <span>Join Esco&apos;s Discord</span>
              <div className="w-6 h-6 rounded-md bg-white/20 flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
                <ArrowRight className="w-3.5 h-3.5 text-white" />
              </div>
            </a>

            <a
              href="#deals"
              className="inline-flex items-center justify-center px-5 py-3.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 text-sm font-medium transition-colors"
            >
              <span>Prop Firm Deals (Code ESCO)</span>
            </a>
          </div>

          {/* Social Proof / Trusted Partners Bar */}
          <div className="pt-8 border-t border-white/10 w-full">
            <div className="text-[10px] font-mono tracking-widest text-slate-400 uppercase mb-4">
              TRUSTED PROP FIRM PARTNERS
            </div>

            <div className="flex flex-wrap items-center gap-8 opacity-80 hover:opacity-100 transition-opacity">
              <a href="https://apextraderfunding.com/" target="_blank" rel="noopener noreferrer" className="h-6 flex items-center">
                <Image
                  src="/assets/apex-trader-funding.png"
                  alt="Apex Trader Funding"
                  width={110}
                  height={30}
                  className="h-5 w-auto object-contain brightness-0 invert opacity-75 hover:opacity-100 transition-opacity"
                />
              </a>

              <a href="https://app.alpha-futures.com/signup/ESCO/" target="_blank" rel="noopener noreferrer" className="h-6 flex items-center">
                <Image
                  src="/assets/alpha-futures.png"
                  alt="Alpha Futures"
                  width={110}
                  height={30}
                  className="h-5 w-auto object-contain brightness-0 invert opacity-75 hover:opacity-100 transition-opacity"
                />
              </a>

              <a href="https://www.toponefutures.com/" target="_blank" rel="noopener noreferrer" className="h-6 flex items-center">
                <Image
                  src="/assets/top-one.png"
                  alt="Top One Futures"
                  width={110}
                  height={30}
                  className="h-5 w-auto object-contain brightness-0 invert opacity-75 hover:opacity-100 transition-opacity"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Custom Saved Trading Graphic from /assets/replace.png */}
        <div className="lg:col-span-5 relative flex items-center justify-center">
          <div className="relative w-full max-w-[540px] flex items-center justify-center select-none">
            
            {/* Ambient Platform Radial Spotlight */}
            <div className="absolute inset-0 bg-[#0055ff]/35 blur-3xl rounded-full pointer-events-none" />

            {/* Custom Trading Image */}
            <div className="relative z-10 w-full rounded-2xl overflow-hidden drop-shadow-[0_25px_50px_rgba(0,40,180,0.6)]">
              <Image
                src="/assets/replace.png"
                alt="Nasdaq Futures Trading Interface"
                width={700}
                height={600}
                className="w-full h-auto object-contain rounded-2xl transition-transform duration-300 hover:scale-[1.02]"
                priority
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
