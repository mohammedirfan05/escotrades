import React from "react";
import { BRAND } from "@/app/data/brand";
import { ArrowUpRight, MessageSquare } from "lucide-react";
import { CopyCodeButton } from "./CopyCodeButton";

export function Footer() {
  return (
    <footer className="bg-[#050706] border-t border-[#141b17] pt-12 pb-12 text-[#EDEDED] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[250px] bg-[#0066FF]/10 blur-[180px] pointer-events-none rounded-full" />

      <div className="max-w-7xl xl:max-w-[1440px] 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Editorial Callout */}
        <div className="py-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-3">
            <span className="text-xs font-mono uppercase tracking-widest text-[#00D2FF]">
              TAKE ACTION
            </span>
            <h3 className="text-lg font-bold text-[#EDEDED] uppercase mt-1">
              Join the Movement
            </h3>
          </div>

          <div className="lg:col-span-9 flex flex-col md:flex-row md:items-center justify-between gap-8">
            <p className="text-2xl sm:text-3xl font-medium text-[#8E9590] leading-snug max-w-2xl">
              Master the market with discipline.{" "}
              <strong className="text-[#EDEDED] font-bold">
                Step into the live room with Esco.
              </strong>{" "}
              Join the Discord community and trade with conviction.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
              <a
                href={BRAND.discordUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#0066FF] hover:bg-[#0055d4] text-white text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-[0_0_25px_rgba(0,102,255,0.4)] hover:shadow-[0_0_35px_rgba(0,102,255,0.6)]"
              >
                <MessageSquare className="w-4 h-4" />
                <span>JOIN DISCORD</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <CopyCodeButton code="ESCO" variant="navbar" />
            </div>
          </div>
        </div>

        {/* Massive Editorial Typography Statement */}
        <div className="pt-8 pb-16 border-t border-[#141b17] overflow-hidden select-none">
          <div className="text-[13vw] sm:text-[14vw] font-bold font-sans tracking-tighter text-[#131916] hover:text-[#18211d] transition-colors leading-none text-center whitespace-nowrap">
            ESCO TRADES
          </div>
        </div>

        {/* Social Links, Legal Disclaimer & Copyright */}
        <div className="pt-8 border-t border-[#111714] flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-[#555C57] font-mono">
          <div className="flex flex-wrap items-center gap-6">
            <a
              href={BRAND.socials.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#00D2FF] transition-colors"
            >
              TikTok: @escotrades
            </a>
            <a
              href={BRAND.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#00D2FF] transition-colors"
            >
              Instagram: @escotradess
            </a>
            <a
              href={BRAND.socials.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#00D2FF] transition-colors"
            >
              YouTube: @escotradess
            </a>
            <a
              href={BRAND.discordUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#00D2FF] transition-colors"
            >
              Discord Community
            </a>
          </div>

          <div>
            &copy; {new Date().getFullYear()} ESCO TRADES. All Rights Reserved.
          </div>
        </div>

        {/* Regulatory & Risk Disclaimer */}
        <div className="mt-8 p-4 rounded-xl bg-[#080b09] border border-[#141a17] text-[10px] text-[#4d534f] leading-relaxed font-sans">
          <strong className="text-[#69726c] uppercase font-mono">
            RISK &amp; REGULATORY DISCLAIMER:
          </strong>{" "}
          Futures trading (including Nasdaq 100 E-mini and Micro contracts) contains substantial risk of loss and is not suitable for all investors. An investor could potentially lose all or more than the initial investment. Risk capital is money that can be lost without jeopardizing financial security or lifestyle. Only risk capital should be used for trading. Proprietary trading evaluations are simulated performance benchmarks. Esco Trades does not provide personalized investment advice, guaranteed returns, or financial brokerage services. Content provided is strictly educational.
        </div>
      </div>
    </footer>
  );
}
