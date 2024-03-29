import { Merriweather } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const merri = Merriweather({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Mini Blog",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${merri.className} bg-page`}>
        <ToastContainer />
        <main className="max-xl:px-[4%] max-w-5xl mx-auto text-default-text min-h-screen  ">
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
