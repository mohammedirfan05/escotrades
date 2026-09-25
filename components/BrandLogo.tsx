import React from "react";
import Image from "next/image";

interface BrandLogoProps {
  size?: "sm" | "md" | "lg";
  showText?: boolean;
}

export function BrandLogo({ size = "md", showText = true }: BrandLogoProps) {
  const iconSizes = {
    sm: "w-6 h-6",
    md: "w-8 h-8",
    lg: "w-10 h-10",
  };

  const textSizes = {
    sm: "text-base tracking-wider",
    md: "text-lg tracking-wider",
    lg: "text-2xl tracking-widest",
  };

  return (
    <div className="flex items-center gap-3 select-none group cursor-pointer">
      <div className={`relative ${iconSizes[size]} flex items-center justify-center`}>
        <Image
          src="/assets/logo.png"
          alt="Esco Trades Logo"
          width={40}
          height={40}
          className="w-full h-full object-contain transition-transform duration-200 group-hover:scale-105"
          priority
        />
      </div>

      {showText && (
        <div className="flex flex-col">
          <span
            className={`font-bold font-sans text-white uppercase ${textSizes[size]}`}
          >
            Esco<span className="text-slate-400 font-light ml-1">Trades</span>
          </span>
        </div>
      )}
    </div>
  );
}
