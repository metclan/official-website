"use client";
//import nextjs essentials
import Link from "next/link";
export default function PreNav() {
  return (
    <div className="bg-black py-2">
      <div className="flex justify-end w-[90%] mx-auto">
        <Link className="text-white text-sm font-medium" href="/contact">
          Contact us
        </Link>
      </div>
    </div>
  );
}
