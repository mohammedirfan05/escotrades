import React from "react";
import { ArrowUpRight, CheckCircle2, MessageSquare, Mic, Sparkles } from "lucide-react";
import { BRAND } from "@/app/data/brand";

export function DiscordCommunitySection() {
  const communityPerks = [
    { title: "Daily NQ Live", desc: "Live voice & chart sessions during NY Open" },
    { title: "Learn The Model", desc: "Master the exact setup framework step by step" },
    { title: "Active Community", desc: "Interact, ask questions, and share daily charts" },
    { title: "Free Giveaways", desc: "Regular prop firm account giveaways & perks" },
  ];

  return (
    <section id="community" className="py-24 bg-[#080908] relative overflow-hidden border-t border-[#161c19]">
      {/* Glow effect */}
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[350px] bg-[#0066FF]/15 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-3xl bg-gradient-to-b from-[#0e1319] via-[#0b0e0c] to-[#080a09] border border-[#1e2722] p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-2xl">
          {/* Top badge */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0066FF]/20 border border-[#0066FF]/40 text-[#00D2FF] text-xs font-mono">
              <MessageSquare className="w-3.5 h-3.5" />
              <span>DISCORD COMMUNITY</span>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-[#8E9590]">
              <span className="w-2 h-2 rounded-full bg-[#00D2FF] animate-ping" />
              <span className="text-[#EDEDED]">LIVE NY OPEN SESSIONS</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Editorial Headline & Perks */}
            <div className="lg:col-span-7">
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#EDEDED] uppercase leading-[1.1] mb-6">
                JOIN ESCO&apos;S <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D2FF] via-[#0066FF] to-[#60A5FA]">
                  DISCORD COMMUNITY
                </span>
              </h2>

              <p className="text-base text-[#8E9590] leading-relaxed mb-8 max-w-xl">
                Trade live with Esco, learn the core execution model, interact with other traders, and grow together every single day.
              </p>

              {/* Minimal Perks Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {communityPerks.map((perk, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-[#090d0b] border border-[#17221c]">
                    <CheckCircle2 className="w-4 h-4 text-[#00D2FF] shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-bold text-white font-mono">{perk.title}</div>
                      <div className="text-xs text-[#8E9590] mt-0.5">{perk.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Join Discord Primary CTA */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <a
                  href={BRAND.discordUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-[#0066FF] hover:bg-[#0055d4] text-white text-sm font-bold uppercase tracking-wider transition-all duration-300 shadow-[0_0_35px_rgba(0,102,255,0.5)] hover:shadow-[0_0_50px_rgba(0,102,255,0.75)] hover:scale-[1.02]"
                >
                  <MessageSquare className="w-5 h-5" />
                  <span>JOIN ESCO&apos;S DISCORD</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                <span className="text-xs font-mono text-[#585E5A]">
                  Official Invite: discord.gg/jAWYDNQBf
                </span>
              </div>
            </div>

            {/* Right Column: Discord Room HUD Preview */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-[#070908] border border-[#1a221e] p-6 space-y-4 shadow-xl">
                <div className="flex items-center justify-between pb-4 border-b border-[#141b17]">
                  <div className="flex items-center gap-2.5">
                    <div className="w-3 h-3 rounded-full bg-[#00D2FF]" />
                    <span className="text-xs font-mono font-bold text-[#EDEDED] uppercase">
                      #live-trading-room
                    </span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#0066FF]/20 text-[#00D2FF] border border-[#0066FF]/30">
                    VOICE &amp; CHAT
                  </span>
                </div>

                {/* Clean Discord Preview Messages */}
                <div className="space-y-3">
                  <div className="p-3.5 rounded-xl bg-[#0e1210] border border-[#1a211e]">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-xs font-bold text-[#00D2FF] font-mono">
                        ESCO
                      </span>
                      <span className="text-[10px] font-mono text-[#585E5A]">09:15 AM</span>
                    </div>
                    <p className="text-xs text-[#EDEDED] leading-relaxed">
                      Live in voice for NY Open. Walking through today&apos;s NQ levels and model setup step by step.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#0e1210] border border-[#1a211e]">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-xs font-bold text-[#00E599] font-mono flex items-center gap-1.5">
                        <Sparkles className="w-3 h-3" /> GIVEAWAYS
                      </span>
                      <span className="text-[10px] font-mono text-[#585E5A]">TODAY</span>
                    </div>
                    <p className="text-xs text-[#A1A7A2] leading-relaxed">
                      Free funded account giveaway happening in the community this week. Join voice to enter!
                    </p>
                  </div>
                </div>

                {/* Bottom Room Controls */}
                <div className="pt-3 border-t border-[#141b17] flex items-center justify-between text-xs font-mono text-[#8E9590]">
                  <span className="flex items-center gap-1.5 text-[#00D2FF]">
                    <Mic className="w-3.5 h-3.5" />
                    Daily Live Voice
                  </span>
                  <span>NQ / MNQ Community</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
