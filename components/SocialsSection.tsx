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
        <div className="w-9 h-9 rounded-xl bg-black border border-white/10 flex items-center justify-center shadow-inner">
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
            <path
              d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .57.04.84.11V9.38a6.38 6.38 0 0 0-5.74 6.37 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.35-6.34V9.05a8.16 8.16 0 0 0 4.91 1.64v-3.5a4.83 4.83 0 0 1-2.59-.5z"
              fill="#FFFFFF"
            />
          </svg>
        </div>
      ),
      cta: "Watch on TikTok",
      hoverBorder: "hover:border-[#25F4EE]/50 hover:shadow-[0_0_25px_rgba(37,244,238,0.15)]",
      ctaColor: "text-[#EDEDED] group-hover:text-[#25F4EE]",
    },
    {
      name: "YouTube",
      handle: "@escotradess",
      url: BRAND.socials.youtube,
      description: "In-depth trade reviews, full session replays, and complete futures strategy breakdown videos.",
      icon: (
        <div className="w-9 h-9 rounded-xl bg-[#FF0000] flex items-center justify-center shadow-[0_0_15px_rgba(255,0,0,0.35)]">
          <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
          </svg>
        </div>
      ),
      cta: "Subscribe on YouTube",
      hoverBorder: "hover:border-[#FF0000]/50 hover:shadow-[0_0_25px_rgba(255,0,0,0.15)]",
      ctaColor: "text-[#EDEDED] group-hover:text-[#FF0000]",
    },
    {
      name: "Instagram",
      handle: "@escotradess",
      url: BRAND.socials.instagram,
      description: "Behind-the-scenes daily chart markups, stories, and community trading highlights.",
      icon: (
        <div className="w-9 h-9 rounded-xl overflow-hidden flex items-center justify-center shadow-[0_0_15px_rgba(214,36,159,0.35)] bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888]">
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
            <rect x="2" y="2" width="20" height="20" rx="5" stroke="#FFFFFF" strokeWidth="2" />
            <circle cx="12" cy="12" r="3.8" stroke="#FFFFFF" strokeWidth="2" />
            <circle cx="17.5" cy="6.5" r="1.2" fill="#FFFFFF" />
          </svg>
        </div>
      ),
      cta: "Follow on Instagram",
      hoverBorder: "hover:border-[#d6249f]/50 hover:shadow-[0_0_25px_rgba(214,36,159,0.15)]",
      ctaColor: "text-[#EDEDED] group-hover:text-[#f09433]",
    },
    {
      name: "Discord",
      handle: "Esco's Discord",
      url: BRAND.discordUrl,
      description: "The primary home of Esco Trades. Live session voice, pre-market analysis, and member chat.",
      icon: (
        <div className="w-9 h-9 rounded-xl bg-[#5865F2] flex items-center justify-center shadow-[0_0_18px_rgba(88,101,242,0.45)]">
          <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
            <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
          </svg>
        </div>
      ),
      cta: "Join the Discord",
      featured: true,
      hoverBorder: "border-[#5865F2]/60 shadow-[0_0_25px_rgba(88,101,242,0.25)] hover:border-[#5865F2]",
      ctaColor: "text-[#5865F2] group-hover:text-white",
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
              className={`p-6 rounded-2xl flex flex-col justify-between transition-all duration-300 group bg-[#0b0e0c] border border-[#1b221e] hover:-translate-y-1 ${social.hoverBorder}`}
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="transition-transform duration-200 group-hover:scale-110">
                    {social.icon}
                  </div>
                  <span className="text-xs font-mono text-[#585E5A] group-hover:text-[#EDEDED] transition-colors">
                    {social.name}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#EDEDED] font-mono group-hover:text-white transition-colors">
                  {social.handle}
                </h3>
                <p className="text-xs text-[#8E9590] mt-2 leading-relaxed">
                  {social.description}
                </p>
              </div>

              <div className={`mt-8 pt-4 border-t border-[#161c19] flex items-center justify-between text-xs font-mono font-medium transition-colors ${social.ctaColor}`}>
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
