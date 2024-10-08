// ** Nextjs Imports
import { Gemunu_Libre } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

// ** CSS Imports
import "./globals.css";

// ** Custom Components
import Header from "@/components/navbar";
import Footer from "@/components/Footer";

const inter = Gemunu_Libre({ subsets: ["latin"] });

export const metadata = {
  title: "Yunus's Portfolio",
  description:
    "Explore the portfolio of Yunus Turan, a full-stack web developer and Computer Engineering graduate from Eskişehir Osmangazi University. With a passion for building visually appealing and highly functional websites, Yunus is a fast learner skilled in the latest technologies and frameworks. Eager to grow in web development and collaborate in dynamic teams.",
  url: "https://yunsturann.vercel.app/",
  type: "website",
  siteName: "Yunus's Portfolio",
  keywords: [
    "Yunus Turan",
    "frontend developer",
    "web development",
    "programming",
    "portfolio",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
