"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Check, Copy } from "lucide-react";

interface PropPartner {
  id: string;
  name: string;
  subtitle: string;
  code: string;
  link: string;
  bgGradient: string;
  borderAccent: string;
  buttonColor: string;
  logoSrc: string;
  logoAlt: string;
  logoClass?: string;
  radarBg?: boolean;
}

export function PropFirmsSection() {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const partners: PropPartner[] = [
    {
      id: "apex",
      name: "Apex Funding",
      subtitle: "20 account copies = insane scale ability",
      code: "ESCO",
      link: "https://apextraderfunding.com/",
      bgGradient: "from-[#08152e] via-[#09101f] to-[#070a0f]",
      borderAccent: "border-[#1e2f4d]/80 hover:border-[#3b82f6]/60",
      buttonColor: "bg-gradient-to-r from-[#0055ff] to-[#0070f3] shadow-[0_0_15px_rgba(0,102,255,0.4)] text-white",
      logoSrc: "/assets/apex-trader-funding.png",
      logoAlt: "Apex Trader Funding Logo",
      logoClass: "h-9 w-auto max-w-[170px]",
    },
    {
      id: "alpha",
      name: "Alpha Futures",
      subtitle: "Trader-first evaluation & seamless scaling",
      code: "ESCO",
      link: "https://alpha-futures.com/",
      // Emerald Green theme matching the reference screenshot
      bgGradient: "from-[#071d17] via-[#05291f] to-[#03140e]",
      borderAccent: "border-[#0d4734]/80 hover:border-[#00e599]/60 hover:shadow-[0_0_30px_rgba(0,229,153,0.2)]",
      buttonColor: "bg-gradient-to-r from-[#00b874] to-[#00e599] text-[#021d14] font-extrabold shadow-[0_0_16px_rgba(0,229,153,0.5)]",
      logoSrc: "/assets/alpha-futures.png",
      logoAlt: "Alpha Futures Logo",
      logoClass: "h-9 w-auto max-w-[170px]",
      radarBg: true,
    },
    {
      id: "topone",
      name: "Top One Futures",
      subtitle: "Direct live feeds & rapid payout execution",
      code: "ESCO",
      link: "https://www.toponefutures.com/",
      bgGradient: "from-[#081a1f] via-[#091417] to-[#060b0d]",
      borderAccent: "border-[#193138]/80 hover:border-[#00D2FF]/60",
      buttonColor: "bg-gradient-to-r from-[#0088ff] to-[#0055ff] shadow-[0_0_15px_rgba(0,102,255,0.4)] text-white",
      logoSrc: "/assets/top-one.png",
      logoAlt: "Top One Futures Logo",
      logoClass: "h-9 w-auto max-w-[170px]",
    },
  ];

  const handleCopyCode = async (partner: PropPartner, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(partner.code);
      setCopiedId(partner.id);
      setTimeout(() => setCopiedId(null), 2500);
    } catch {
      setCopiedId(partner.id);
      setTimeout(() => setCopiedId(null), 2500);
    }
  };

  return (
    <section id="deals" className="py-24 bg-[#080908] relative border-t border-[#141a17]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white font-sans">
            Our Trusted Prop Firm Partners
          </h2>
          <p className="text-xs sm:text-sm text-[#8E9590] mt-3 max-w-md mx-auto font-mono">
            Apply discount code <strong className="text-[#00D2FF]">ESCO</strong> at checkout for maximum evaluation savings.
          </p>
        </div>

        {/* 3 Partner Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {partners.map((partner) => {
            const isCopied = copiedId === partner.id;

            return (
              <a
                key={partner.id}
                href={partner.link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  navigator.clipboard.writeText(partner.code);
                }}
                className={`group relative flex flex-col justify-between h-[360px] rounded-3xl bg-gradient-to-b ${partner.bgGradient} border ${partner.borderAccent} p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.8)] overflow-hidden`}
              >
                {/* Subtle Horizon Glow Overlay */}
                <div className="absolute top-0 inset-x-0 h-28 bg-gradient-to-b from-white/[0.06] via-transparent to-transparent pointer-events-none" />

                {/* Radar Concentric Rings for Alpha Futures (Reference image match) */}
                {partner.radarBg && (
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
                    <div className="w-[120px] h-[120px] rounded-full border border-[#00e599]/40" />
                    <div className="absolute w-[200px] h-[200px] rounded-full border border-[#00e599]/30" />
                    <div className="absolute w-[280px] h-[280px] rounded-full border border-[#00e599]/20" />
                    <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#00e599]/15 to-transparent blur-xl" />
                  </div>
                )}

                {/* Card Top: Logo & Title Section */}
                <div className="relative z-10 flex flex-col items-center text-center mt-3">
                  {/* Real PNG Logo */}
                  <div className="h-14 flex items-center justify-center mb-5">
                    <Image
                      src={partner.logoSrc}
                      alt={partner.logoAlt}
                      width={220}
                      height={70}
                      className={`${partner.logoClass} object-contain transition-transform duration-300 group-hover:scale-105 filter drop-shadow-md`}
                      priority
                    />
                  </div>

                  {/* Firm Name */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white font-sans tracking-tight mb-2">
                    {partner.name}
                  </h3>

                  {/* Tagline / Benefit */}
                  <p className={`text-xs sm:text-sm leading-relaxed max-w-[220px] ${
                    partner.radarBg ? "text-[#a7f3d0]" : "text-[#94A3B8]"
                  }`}>
                    {partner.subtitle}
                  </p>
                </div>

                {/* Card Bottom: Pill Container with "Use Code" + "ESCO" Capsule */}
                <div className="relative z-10 w-full mt-auto">
                  <div className={`w-full flex items-center justify-between px-3.5 py-1.5 rounded-full backdrop-blur-md shadow-inner ${
                    partner.radarBg
                      ? "bg-[#041a13]/90 border border-[#0d4734]"
                      : "bg-[#0b0f14]/90 border border-[#1e2736]"
                  }`}>
                    <span className="text-xs font-sans text-[#8E9590] pl-2 font-medium">
                      Use Code
                    </span>

                    <button
                      type="button"
                      onClick={(e) => handleCopyCode(partner, e)}
                      title={`Copy discount code ${partner.code}`}
                      className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono transition-all duration-200 ${partner.buttonColor} hover:scale-105 active:scale-95`}
                    >
                      <span>{isCopied ? "COPIED!" : partner.code}</span>
                      {isCopied ? (
                        <Check className="w-3.5 h-3.5" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>
                </div>
              </a>
            );
          })}
        </div>

      </div>
    </section>
  );
}
