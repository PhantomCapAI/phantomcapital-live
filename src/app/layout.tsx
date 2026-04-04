import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Phantom Capital | The Organism That Builds Itself",
  description:
    "One Human. A Fleet of Phantoms. Autonomous AI agents compounding alpha across content, trading, and SaaS.",
  keywords: [
    "phantom capital",
    "AI agents",
    "autonomous trading",
    "SaaS",
    "crypto",
  ],
  openGraph: {
    title: "Phantom Capital",
    description: "The Organism That Builds Itself",
    type: "website",
    url: "https://phantomcapital.live",
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
      className={`${inter.variable} ${jetbrains.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-void text-ghost">
        <Navbar />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
