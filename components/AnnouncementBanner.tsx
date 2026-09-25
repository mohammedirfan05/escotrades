import React from "react";
import { ArrowRight, Flame } from "lucide-react";
import { BRAND } from "@/app/data/brand";

export function AnnouncementBanner() {
  return (
    <div className="w-full bg-[#0a0d0b] border-b border-[#1b211e] text-xs font-mono py-2 px-4 relative z-50">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#0066FF]/15 border border-[#0066FF]/30 text-[#00D2FF] text-[10px] font-semibold tracking-wider uppercase">
            <Flame className="w-3 h-3 text-[#00D2FF]" />
            LIVE COMMUNITY
          </span>
          <span className="text-[#8E9590] hidden sm:inline text-[11px]">
            Daily Nasdaq & MNQ Pre-Market Playbooks + Live Execution Room
          </span>
        </div>

        <div className="flex items-center gap-3 ml-auto">
          <span className="text-[#555C57] text-[11px] hidden md:inline">
            Prop Firm Code: <strong className="text-[#EDEDED]">ESCO</strong>
          </span>
          <a
            href={BRAND.discordUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-[#00D2FF] hover:text-white font-sans text-xs font-medium transition-colors"
          >
            <span>Join Discord</span>
            <ArrowRight className="w-3 h-3 transition-transform hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </div>
  );
}
