export interface PropFirmDeal {
  id: string;
  name: string;
  tagline: string;
  discountBadge: string;
  highlightText: string;
  code: string;
  features: string[];
  platforms: string[];
  evaluationTypes: string;
  payoutHighlights: string;
  link: string;
  recommended?: boolean;
  popular?: boolean;
}

export const PROP_FIRM_DEALS: PropFirmDeal[] = [
  {
    id: "apex-trader-funding",
    name: "Apex Trader Funding",
    tagline: "Leading Futures Prop Firm",
    discountBadge: "UP TO 80% OFF",
    highlightText: "Most Popular for NQ/MNQ Sizing",
    code: "ESCO",
    features: [
      "Trade up to 20 funded accounts simultaneously",
      "No daily drawdown limit on standard plans",
      "Keep 100% of your first $25k per account",
      "Full NinjaTrader & Tradovate support",
    ],
    platforms: ["NinjaTrader", "Tradovate", "Rithmic", "TradingView"],
    evaluationTypes: "25k to 300k Accounts",
    payoutHighlights: "Fast bi-weekly payout cycles",
    link: "https://apextraderfunding.com/",
    recommended: true,
  },
  {
    id: "alpha-futures",
    name: "Alpha Futures",
    tagline: "Next-Gen Futures Evaluation",
    discountBadge: "MAX ESCO RATE",
    highlightText: "Trader-First Scaling & Rules",
    code: "ESCO",
    features: [
      "Straightforward evaluation profit targets",
      "Competitive drawdown parameters",
      "Fast payout processing & reliable execution",
      "Optimized for micro and mini index futures",
    ],
    platforms: ["Tradovate", "NinjaTrader", "TradingView", "Rithmic"],
    evaluationTypes: "50k, 100k, 150k Accounts",
    payoutHighlights: "Transparent drawdown & payout schedule",
    link: "https://alpha-futures.com/",
    popular: true,
  },
  {
    id: "top-one-futures",
    name: "Top One Futures",
    tagline: "Elite Proprietary Funding",
    discountBadge: "EXCLUSIVE DISCOUNT",
    highlightText: "High Multiplier Funded Accounts",
    code: "ESCO",
    features: [
      "Simple rules with no hidden restrictions",
      "Direct live market feeds & tight latency",
      "Rapid account activation upon passing",
      "Dedicated 24/7 trader support desk",
    ],
    platforms: ["Tradovate", "NinjaTrader", "TradingView"],
    evaluationTypes: "25k to 200k Evaluations",
    payoutHighlights: "Consistent profit splits & rapid payouts",
    link: "https://www.toponefutures.com/",
  },
];
