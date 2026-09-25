import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "ESCO TRADES | Nasdaq & MNQ Futures Trading Community",
  description:
    "Master the Nasdaq open with systematic futures execution, daily Discord live trade rooms, and exclusive prop firm discounts with code ESCO.",
  keywords: [
    "Esco Trades",
    "Nasdaq Futures",
    "MNQ",
    "NQ",
    "Prop Firm Discounts",
    "Code ESCO",
    "Futures Trading Discord",
    "Apex Trader Funding Code ESCO",
    "Topstep Code ESCO",
  ],
  openGraph: {
    title: "ESCO TRADES | Nasdaq & MNQ Futures Trading Community",
    description:
      "Join Esco's Discord trading room. Precision execution on Nasdaq futures (NQ/MNQ) and top prop firm evaluation deals with code ESCO.",
    url: "https://escotrades.com",
    siteName: "ESCO TRADES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ESCO TRADES | Nasdaq & MNQ Futures Trading",
    description: "Join Esco's Discord community for live Nasdaq futures execution and prop firm deals.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} dark scroll-smooth`}
    >
      <body className="min-h-screen bg-[#080908] text-[#EDEDED] font-sans antialiased selection:bg-[#0066FF] selection:text-white flex flex-col">
        {children}
      </body>
    </html>
  );
}
