"use client";

import React, { useState } from "react";
import Image from "next/image";
import { BRAND } from "@/app/data/brand";
import { ChevronRight, Menu, X } from "lucide-react";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Prop Firm Deals", href: "#deals" },
    { name: "Discord Community", href: "#community" },
    { name: "Social Channels", href: "#socials" },
  ];

  return (
    <nav className="fixed top-4 sm:top-5 inset-x-0 z-50 flex flex-col items-center px-4 pointer-events-none">
      {/* Compact Minimal Pill Container */}
      <div className="pointer-events-auto flex items-center justify-between gap-3 sm:gap-6 px-3.5 sm:px-5 py-2 rounded-full bg-[#0a0d0c]/90 backdrop-blur-xl border border-white/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.85),0_0_20px_rgba(0,102,255,0.12)] transition-all">

        {/* Brand Section (Logo + Name + Divider) */}
        <div className="flex items-center gap-3 shrink-0">
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 sm:w-9 sm:h-9 relative flex items-center justify-center shrink-0">
              <Image
                src="/assets/logo.png"
                alt="Esco Trades Logo"
                width={40}
                height={40}
                className="w-full h-full object-contain transition-transform duration-200 group-hover:scale-105"
                priority
              />
            </div>

            <span className="font-sans font-bold text-xs sm:text-sm tracking-tight text-white group-hover:text-slate-200 transition-colors">
              Esco Trades
            </span>
          </a>

          {/* Thin Vertical Divider */}
          <div className="hidden md:block w-[1px] h-4 bg-white/15 ml-0.5" />
        </div>

        {/* Center Nav Links (Desktop) */}
        <div className="hidden md:flex items-center gap-5 text-xs font-sans text-slate-300">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-white transition-colors py-0.5 font-medium"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Right CTA Button Group with Glowing Border */}
        <div className="flex items-center gap-2">
          {/* Glowing Border Pill Button */}
          <a
            href={BRAND.discordUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center gap-1.5 px-3.5 sm:px-4 py-1.5 rounded-full bg-gradient-to-b from-[#0055ff] to-[#0038b8] hover:from-[#0066ff] hover:to-[#0047cc] text-white text-[11px] sm:text-xs font-semibold tracking-wide border border-[#00D2FF] shadow-[0_0_15px_rgba(0,210,255,0.7),inset_0_0_8px_rgba(0,210,255,0.35)] hover:shadow-[0_0_25px_rgba(0,210,255,0.95),inset_0_0_12px_rgba(0,210,255,0.5)] hover:scale-105 active:scale-95 transition-all duration-200"
          >
            <span>Join Discord</span>
            <ChevronRight className="w-3.5 h-3.5 text-white/95 transition-transform group-hover:translate-x-0.5" />
          </a>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            type="button"
            className="md:hidden p-1 rounded-full bg-[#121714] border border-white/10 text-white hover:text-slate-200"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-3.5 h-3.5" /> : <Menu className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="pointer-events-auto mt-2 w-full max-w-xs rounded-2xl bg-[#0a0d0c]/95 backdrop-blur-xl border border-white/10 p-3.5 shadow-2xl space-y-2.5 animate-in fade-in zoom-in-95 duration-150">
          <div className="flex flex-col space-y-1.5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-2.5 py-1.5 rounded-lg text-xs text-slate-300 hover:text-white hover:bg-white/5 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
            <span>Prop Firm Code:</span>
            <span className="font-mono font-bold text-[#00D2FF]">ESCO</span>
          </div>
        </div>
      )}
    </nav>
  );
}
