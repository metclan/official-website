"use client";
//import nextjs essentials
import Link from "next/link";
export default function PreNav() {
  return (
    <div className="bg-black py-2">
        <ul className="flex justify-end w-[90%] mx-auto gap-3">
          <li>
            <Link className="text-white text-sm font-medium" href="/career">
              Career
            </Link>
          </li>
          <li>
            <Link className="text-white text-sm font-medium" href="/contact">
              Contact us
            </Link>
          </li>
        </ul>
    </div>
  );
}
