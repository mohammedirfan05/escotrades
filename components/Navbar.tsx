"use client";

import React, { useState } from "react";
import { BRAND } from "@/app/data/brand";
import { CopyCodeButton } from "./CopyCodeButton";
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
      {/* Pill-Shaped Navigation Bar Container */}
      <div className="pointer-events-auto w-full max-w-4xl flex items-center justify-between gap-3 sm:gap-6 px-3.5 sm:px-5 py-2 rounded-full bg-[#0a0d0c]/90 backdrop-blur-xl border border-[#202723] shadow-[0_12px_40px_rgba(0,0,0,0.8),0_0_0_1px_rgba(255,255,255,0.06)] transition-all">
        
        {/* Brand Section (Icon + Name + Divider) */}
        <div className="flex items-center gap-3 shrink-0">
          <a href="#" className="flex items-center gap-2.5 group">
            {/* Esco Futuristic Emblem */}
            <div className="w-7 h-7 rounded-lg bg-[#0e1411] border border-[#0066FF]/60 flex items-center justify-center shadow-[0_0_12px_rgba(0,102,255,0.35)] group-hover:border-[#00D2FF] group-hover:shadow-[0_0_16px_rgba(0,210,255,0.5)] transition-all">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 text-[#00D2FF]"
              >
                <path
                  d="M4 6H13M4 12H10M4 18H13"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                />
                <path
                  d="M16 6L20 18M20 6L16 18"
                  stroke="#0066FF"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            {/* Brand Title: Esco Trades */}
            <span className="font-sans font-bold text-sm sm:text-base tracking-tight text-[#EDEDED] group-hover:text-white transition-colors">
              Esco Trades
            </span>
          </a>

          {/* Thin Vertical Divider (as shown in reference) */}
          <div className="hidden md:block w-[1px] h-4 bg-[#262f2a]" />
        </div>

        {/* Center Nav Links (Desktop) */}
        <div className="hidden md:flex items-center gap-6 text-xs sm:text-sm font-sans text-[#8E9590]">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-[#EDEDED] transition-colors py-1"
            >
              {link.name}
            </a>
          ))}

          {/* Code ESCO quick-copy pill */}
          <CopyCodeButton code="ESCO" variant="navbar" className="hidden lg:inline-flex" />
        </div>

        {/* Right CTA Button Group */}
        <div className="flex items-center gap-2">
          {/* Main Glowing Capsule Button (Direct reference match) */}
          <a
            href={BRAND.discordUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center gap-1.5 px-4 sm:px-5 py-2 rounded-full bg-gradient-to-b from-[#0066FF] to-[#0047cc] hover:from-[#0077ff] hover:to-[#0055dd] text-white text-xs sm:text-sm font-semibold tracking-wide border border-[#38bdf8]/40 shadow-[0_0_20px_rgba(0,102,255,0.5),inset_0_1px_1px_rgba(255,255,255,0.35)] hover:shadow-[0_0_30px_rgba(0,102,255,0.75)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
          >
            <span>Join Discord</span>
            <ChevronRight className="w-4 h-4 text-white/90 transition-transform group-hover:translate-x-0.5" />
          </a>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            type="button"
            className="md:hidden p-1.5 rounded-full bg-[#121714] border border-[#202723] text-[#EDEDED] hover:text-white"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer (Pill Popover) */}
      {mobileMenuOpen && (
        <div className="pointer-events-auto mt-2 w-full max-w-sm rounded-2xl bg-[#0a0d0c]/95 backdrop-blur-xl border border-[#202723] p-4 shadow-2xl space-y-3 animate-in fade-in zoom-in-95 duration-150">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-sm text-[#8E9590] hover:text-white hover:bg-[#121714] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-2 border-t border-[#1a221e] flex items-center justify-between">
            <span className="text-xs text-[#8E9590]">Prop Firm Code:</span>
            <CopyCodeButton code="ESCO" variant="navbar" />
          </div>
        </div>
      )}
    </nav>
  );
}
