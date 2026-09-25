import React from "react";
import { BRAND } from "@/app/data/brand";
import { ArrowUpRight, MessageSquare } from "lucide-react";

export function SocialsSection() {
  const socialChannels = [
    {
      name: "TikTok",
      handle: "@escotrades",
      url: BRAND.socials.tiktok,
      description: "Quick market execution tips, daily NY open highlights, and futures risk management lessons.",
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64c.29 0 .57.04.84.11V9.38a6.38 6.38 0 00-5.74 6.37 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.35-6.34V9.05a8.16 8.16 0 004.91 1.64v-3.5a4.83 4.83 0 01-2.59-.5z" />
        </svg>
      ),
      cta: "Watch on TikTok",
    },
    {
      name: "YouTube",
      handle: "@escotradess",
      url: BRAND.socials.youtube,
      description: "In-depth trade reviews, full session replays, and complete futures strategy breakdown videos.",
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
      cta: "Subscribe on YouTube",
    },
    {
      name: "Instagram",
      handle: "@escotradess",
      url: BRAND.socials.instagram,
      description: "Behind-the-scenes daily chart markups, stories, and community trading highlights.",
      icon: (
        <svg className="w-5 h-5 fill-none stroke-current" strokeWidth="2" viewBox="0 0 24 24">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
      ),
      cta: "Follow on Instagram",
    },
    {
      name: "Discord",
      handle: "Esco's Discord",
      url: BRAND.discordUrl,
      description: "The primary home of Esco Trades. Live session voice, pre-market analysis, and member chat.",
      icon: <MessageSquare className="w-5 h-5" />,
      cta: "Join the Discord",
      featured: true,
    },
  ];

  return (
    <section id="socials" className="py-24 bg-[#080908] relative border-t border-[#161c19]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#181f1c] gap-6">
          <div>
            <span className="text-xs font-mono text-[#00D2FF] uppercase tracking-widest">
              OFFICIAL CHANNELS
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#EDEDED] uppercase mt-2">
              CONNECT WITH <span className="text-[#00D2FF]">ESCO</span>
            </h2>
          </div>
          <p className="text-xs text-[#8E9590] max-w-md font-mono">
            Follow our verified media channels for daily Nasdaq futures analysis, education, and market updates.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {socialChannels.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-6 rounded-2xl flex flex-col justify-between transition-all duration-300 group ${
                social.featured
                  ? "bg-[#0b1016] border border-[#0066FF]/60 shadow-[0_0_20px_rgba(0,102,255,0.2)] hover:border-[#0066FF]"
                  : "bg-[#0b0e0c] border border-[#1b221e] hover:border-[#0066FF]/40"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div
                    className={`p-3 rounded-xl transition-colors ${
                      social.featured
                        ? "bg-[#0066FF] text-white"
                        : "bg-[#0e1311] border border-[#1d2522] text-[#00D2FF] group-hover:text-white group-hover:bg-[#0066FF]"
                    }`}
                  >
                    {social.icon}
                  </div>
                  <span className="text-xs font-mono text-[#585E5A] group-hover:text-[#EDEDED]">
                    {social.name}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#EDEDED] font-mono group-hover:text-white">
                  {social.handle}
                </h3>
                <p className="text-xs text-[#8E9590] mt-2 leading-relaxed">
                  {social.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-[#161c19] flex items-center justify-between text-xs font-mono font-medium text-[#00D2FF] group-hover:text-white">
                <span>{social.cta}</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
