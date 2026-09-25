import React from "react";

export function MarketTicker() {
  const items = [
    "Nasdaq Futures Specialization",
    "MNQ & NQ Scalps",
    "9:30 AM EST NY Open Live",
    "Partner Code: ESCO",
    "Discord Trading Room",
    "Risk Management First",
  ];

  return (
    <div className="w-full bg-[#050706] border-y border-[#161c19] py-3.5 overflow-hidden select-none">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-center">
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-mono text-[#8E9590]">
          {items.map((item, idx) => (
            <React.Fragment key={idx}>
              <span className="hover:text-[#EDEDED] transition-colors">{item}</span>
              {idx < items.length - 1 && (
                <span className="text-[#232b26] hidden sm:inline">•</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
