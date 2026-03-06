import type { Metadata } from "next";
import { Inter, Noto_Sans_Arabic } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const notoArabic = Noto_Sans_Arabic({
  subsets: ["arabic"],
  variable: "--font-noto-arabic",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Watheeq AI — AI-Powered Healthcare Claims Adjudication",
  description:
    "Streamline Saudi healthcare insurance claims with AI-driven analysis, clause matching, and draft generation. CHI-compliant, human-in-the-loop.",
  keywords: [
    "healthcare claims",
    "AI adjudication",
    "Saudi insurance",
    "CHI compliant",
    "nphies",
    "claims management",
  ],
  openGraph: {
    title: "Watheeq AI — AI-Powered Healthcare Claims Adjudication",
    description:
      "From 15-day average to 5-day target. Reduce denial rates with AI-driven document analysis.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${notoArabic.variable} font-sans antialiased`}
        style={{ background: "#fafafd", color: "#050508" }}
      >
        {children}
      </body>
    </html>
  );
}
