import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Providers from "@/components/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Turanflix | Homepage",
    template: "%s | Turanflix",
  },
  description: "Review movies",
  keywords:
    "movies, reviews, ratings, youtube, youtube trailers, trailers, turanflix, turan, yunus",
};

export default function RootLayout({ children }) {
  return (
    <Providers>
      <html lang="en">
        <body className={inter.className}>
          <main className="min-h-screen  relative">
            <Navbar />
            {children}
            <Footer />
          </main>
        </body>
      </html>
    </Providers>
  );
}
