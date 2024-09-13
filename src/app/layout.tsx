import Link from "next/link";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
//import components
import Navbar from "@/app/components/navbar/navbar";
import Footer from "@/app/components/footer/footer";
//import icons
import { PiCaretUpBold } from "react-icons/pi";
//import css
import "@/app/globals.css";
const inter = Inter({ subsets: ["latin"] });
export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="px-0 scroll-smooth">
      <body className="px-0 relative">
        {children}
      </body>
    </html>
  );
}
