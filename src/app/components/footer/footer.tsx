//import nextJs essentials
import Link from "next/link";
import Image from "next/image";
//import icons
import { BsFacebook, BsTwitter, BsLinkedin } from "react-icons/bs";
import { PiInstagramLogoFill } from "react-icons/pi";

export default function Footer() {
  return (
    <footer className="bg-orange-900">
      <div className="w-[90%] mx-auto py-10">
        <Link href={"/"} className="flex items-center gap-2">
          <Image src={"/images/logo.png"} alt="logo" width={50} height={50} />
          <span className="logo__text transition ">Metclan</span>
        </Link>
        <div className="grid grid-cols-1 gap-4 mt-4 sm:grid-cols-3 md:grid-cols-4">
          <div>
            <h5 className="text-white font-semibold mb-1">Services</h5>
            <ul>
              <li>
                <Link href="/" className="text-white text-sm">
                  UI/UX
                </Link>
              </li>
              <li>
                <Link href="/" className="text-white text-sm">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/" className="text-white text-sm">
                  Blockchain Development
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="text-white font-semibold mb-1">Our Company</h5>
            <ul>
              <li>
                <Link href="/about-us" className="text-white text-sm">
                  About us
                </Link>
              </li>
              <li>
                <Link href="/our-mission" className="text-white text-sm">
                  Our mission
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white text-sm">
                  Contact us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="text-white font-semibold mb-1">Products</h5>
            <ul>
              <li>
                <Link href="/stocksavvy" className="text-sm text-white">
                  Stocksavvy
                </Link>
              </li>
              <li>
                <Link
                  href="https://attendsure.metclan.com"
                  className="text-sm text-white"
                >
                  Attendsure
                </Link>
              </li>
            </ul>
          </div>
          <div className="">
            <h4 className="font-semibold text-gray-300 mb-2">
              Connect with us
            </h4>
            <div className="flex text-gray-300 gap-6 text-[22px]">
              <Link
                target="_blank"
                className="flex items-center gap-1"
                href="https://www.linkedin.com/company/metclan"
              >
                <BsLinkedin />
              </Link>
              <Link
                className="flex items-center gap-1"
                target="_blank"
                href="https://twitter.com/metclantech"
              >
                <BsTwitter />
              </Link>
              <Link
                className="flex items-center gap-1"
                target="_blank"
                href="https://www.facebook.com/metclantech/"
              >
                <BsFacebook />
              </Link>
              <Link
                className="flex items-center gap-1"
                target="_blank"
                href="https://www.instagram.com/metclantech/"
              >
                <PiInstagramLogoFill />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
