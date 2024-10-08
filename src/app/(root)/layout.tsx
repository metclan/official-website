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
import { headers } from 'next/headers';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Metclan | Software Development Company",
  description:
    "Point of sales systems, Hotel Management System, Inventory Software, Web development, UI/UX Development",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const headersList = headers();
  const pathname = headersList.get('x-invoke-path') || '';
  const isUserRoute = pathname.startsWith('/user');
  return (
    <html lang="en" className="px-0 scroll-smooth">
      <body className="px-0 relative">
        <Navbar />
        {children}
        
          <Link
            href="#nav"
            className="bg-orange-500 text-white rounded-full p-3 w-max fixed right-10 bottom-28 cursor-pointer hover:bg-orange-600 transition opacity-80 hover:opacity-100"
          >
            <PiCaretUpBold className="text-xl md:text-3xl pointer-events-none" />
          </Link>
          <Footer />
      </body>
    </html>
  );
}
