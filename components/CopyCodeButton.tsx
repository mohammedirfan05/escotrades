"use client";

import React, { useState } from "react";
import { Check, Copy } from "lucide-react";

interface CopyCodeButtonProps {
  code?: string;
  variant?: "primary" | "compact" | "card" | "navbar";
  className?: string;
}

export function CopyCodeButton({
  code = "ESCO",
  variant = "primary",
  className = "",
}: CopyCodeButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      // Fallback
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    }
  };

  if (variant === "navbar") {
    return (
      <button
        onClick={handleCopy}
        type="button"
        title="Copy discount code ESCO"
        className={`relative inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono font-medium transition-all duration-200 border ${
          copied
            ? "bg-[#0066FF]/20 border-[#0066FF] text-[#00D2FF]"
            : "bg-[#0e1210] border-[#1e2522] text-[#8E9590] hover:text-[#EDEDED] hover:border-[#2a332f]"
        } ${className}`}
      >
        <span className="text-[#555C57] font-sans">CODE:</span>
        <span className="font-bold text-[#EDEDED]">{code}</span>
        {copied ? (
          <Check className="w-3.5 h-3.5 text-[#00D2FF] animate-in fade-in zoom-in" />
        ) : (
          <Copy className="w-3 h-3 text-[#8E9590] group-hover:text-white" />
        )}
      </button>
    );
  }

  if (variant === "card") {
    return (
      <button
        onClick={handleCopy}
        type="button"
        className={`w-full relative group flex items-center justify-between px-3.5 py-2.5 rounded-lg border transition-all duration-200 font-mono text-xs ${
          copied
            ? "bg-[#0066FF]/15 border-[#0066FF] text-[#00D2FF] shadow-[0_0_15px_rgba(0,102,255,0.2)]"
            : "bg-[#0b0e0c] border-[#1c221e] hover:border-[#0066FF]/50 text-[#EDEDED]"
        } ${className}`}
      >
        <div className="flex items-center gap-2">
          <span className="text-[10px] uppercase tracking-wider text-[#8E9590] font-sans">
            Discount Code:
          </span>
          <span className="font-bold tracking-wider text-sm text-[#00D2FF]">
            {code}
          </span>
        </div>

        <div className="flex items-center gap-1.5 text-[11px] font-sans">
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-[#00D2FF]" />
              <span className="text-[#00D2FF] font-medium">COPIED!</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5 text-[#8E9590] group-hover:text-[#EDEDED] transition-colors" />
              <span className="text-[#8E9590] group-hover:text-[#EDEDED] transition-colors">
                COPY CODE
              </span>
            </>
          )}
        </div>
      </button>
    );
  }

  return (
    <button
      onClick={handleCopy}
      type="button"
      className={`relative inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-mono text-xs tracking-wider transition-all duration-200 border ${
        copied
          ? "bg-[#0066FF]/20 border-[#0066FF] text-[#00D2FF]"
          : "bg-[#0e1210] border-[#1e2522] text-[#EDEDED] hover:border-[#0066FF]/50"
      } ${className}`}
    >
      <span className="text-[#8E9590] font-sans">CODE:</span>
      <span className="font-bold text-white">{code}</span>
      {copied ? (
        <Check className="w-3.5 h-3.5 text-[#00D2FF]" />
      ) : (
        <Copy className="w-3.5 h-3.5 text-[#8E9590]" />
      )}
    </button>
  );
}
