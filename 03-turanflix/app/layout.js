//font
import { Inter } from "next/font/google";
// css
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
// components
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/Footer";
import Providers from "@/components/Providers";
// libs
import { ToastContainer } from "react-toastify";
import { Analytics } from "@vercel/analytics/react";

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
          <ToastContainer style={{ marginTop: "90px" }} />
          <main
            id="main"
            className="min-h-screen flex flex-col justify-between relative"
          >
            <Navbar />
            {children}
            <Footer />
          </main>
          <Analytics />
        </body>
      </html>
    </Providers>
  );
}
