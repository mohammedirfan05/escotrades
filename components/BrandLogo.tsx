import React from "react";

interface BrandLogoProps {
  size?: "sm" | "md" | "lg";
  showText?: boolean;
}

export function BrandLogo({ size = "md", showText = true }: BrandLogoProps) {
  const iconSizes = {
    sm: "w-6 h-6",
    md: "w-8 h-8",
    lg: "w-12 h-12",
  };

  const textSizes = {
    sm: "text-base tracking-wider",
    md: "text-lg tracking-wider",
    lg: "text-2xl tracking-widest",
  };

  return (
    <div className="flex items-center gap-3 select-none group cursor-pointer">
      {/* Modern geometric matrix emblem */}
      <div
        className={`relative ${iconSizes[size]} flex items-center justify-center rounded-lg bg-[#0e1210] border border-[#1e2522] group-hover:border-[#0066FF] transition-all duration-300 shadow-sm group-hover:shadow-[0_0_15px_rgba(0,102,255,0.3)]`}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-3/4 h-3/4 text-[#0066FF] transition-transform duration-300 group-hover:scale-110"
        >
          {/* Stylized geometric Esco 'E/X' futuristic mark */}
          <path
            d="M4 6H12M4 12H10M4 18H12"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <path
            d="M15 6L20 18M20 6L15 18"
            stroke="#00D2FF"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {showText && (
        <div className="flex flex-col">
          <span
            className={`font-bold font-sans text-[#EDEDED] group-hover:text-white transition-colors duration-200 uppercase ${textSizes[size]}`}
          >
            ESCO<span className="text-[#0066FF] ml-1.5 font-light">TRADES</span>
          </span>
          <span className="text-[9px] tracking-[0.25em] text-[#8E9590] uppercase font-mono -mt-0.5">
            NQ / MNQ FUTURES
          </span>
        </div>
      )}
    </div>
  );
}
