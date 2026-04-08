import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WalletProvider } from "@/components/WalletProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Phantom Capital | Autonomous AI Capital Platform",
  description:
    "Autonomous AI agents compounding capital. One operator. A fleet of agents.",
  openGraph: {
    title: "Phantom Capital",
    description: "Autonomous AI agents compounding capital.",
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
      className={`${inter.variable} ${jetbrains.variable} h-full antialiased dark`}
      style={{ backgroundColor: "#0A0A0A", colorScheme: "dark" }}
    >
      <body className="min-h-full flex flex-col bg-[#0A0A0A] text-white" style={{ backgroundColor: "#0A0A0A" }}>
        <WalletProvider>
          <Navbar />
          <main className="flex-1 bg-[#0A0A0A]">{children}</main>
          <Footer />
        </WalletProvider>
      </body>
    </html>
  );
}
