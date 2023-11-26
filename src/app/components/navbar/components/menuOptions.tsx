"use client";
//import Next Js essentials
import Link from "next/link";
import Image from "next/image";

//import libs
import { motion } from "framer-motion";

//import icons
import { IoClose } from "react-icons/io5";
import { MdProductionQuantityLimits } from "react-icons/md";
import { RxCaretDown } from "react-icons/rx";
import { SiJirasoftware } from "react-icons/si";
import { FaBlog } from "react-icons/fa6";
import { FaHandshake } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
//types
type Props = {
  handleClose: () => void;
};
export default function MenuOptions({ handleClose }: Props) {
  return (
    <nav className="bg-opacity-50 bg-black h-screen w-screen fixed top-0 left-0 z-100">
      <div className="w-[98%] bg-white fixed top-4 translate-x-[-50%] left-[50%] rounded-lg p-4 sm:w-[400px] sm:translate-x-0 sm:left-[calc(99%-400px)]">
        <ul className="">
          <motion.div
            variants={{
              hidden: { y: -10, opacity: 0 },
              visible: { y: 0, opacity: 1 },
            }}
            initial={"hidden"}
            animate={"visible"}
            transition={{
              duration: 1,
            }}
            className="flex items-center gap-2 justify-between"
          >
            <Link href={"/"} className="flex items-center gap-2">
              <Image
                src={"/images/logo.png"}
                alt="logo"
                width={50}
                height={50}
              />
              <span className="logo__text text-orange sm:text-xl sm:block transition">
                Metclan
              </span>
            </Link>
            <IoClose
              onClick={handleClose}
              className="text-3xl text-gray-400 hover:text-gray-500 transition cursor-pointer"
            />
          </motion.div>
          <motion.ul
            variants={{
              hidden: { y: -10, opacity: 0 },
              visible: { y: 0, opacity: 1 },
            }}
            initial={"hidden"}
            animate={"visible"}
            transition={{
              duration: 0.15,
            }}
            className="py-10"
          >
            <li>
              <div className="flex items-center gap-2">
                <div className="text-sm text-orange-600 bg-orange-100 p-2 rounded-full">
                  <MdProductionQuantityLimits />
                </div>
                <p className="font-medium text-black">Products</p>
                <RxCaretDown className="text-xl" />
              </div>
              <ul className="mt-2 ml-10">
                <li className="mb-1">
                  <Link
                    href={"/stocksavvy"}
                    className="text-[14px] text-gray-600 hover:text-gray-800"
                  >
                    Stocksavvy(Bookkeeping software)
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/stocksavvy"}
                    className="text-[14px] text-gray-600 hover:text-gray-800"
                  >
                    Attendsure
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/blogs" className="flex items-center gap-2 mt-6">
                <div className="text-sm text-orange-600 bg-orange-100 p-2 rounded-full">
                  <FaBlog />
                </div>
                <p className="font-medium text-black">Blog</p>
              </Link>
            </li>
            <li>
              <div className="flex items-center gap-2 mt-6">
                <div className="text-sm text-orange-600 bg-orange-100 p-2 rounded-full">
                  <SiJirasoftware />
                </div>
                <p className="font-medium text-black">Services</p>
                <RxCaretDown className="text-xl" />
              </div>
              <ul className="mt-2 ml-10">
                <li className="mb-1">
                  <Link
                    href={"/services/web-development"}
                    className="text-[14px] text-gray-600 hover:text-gray-800"
                  >
                    Web Development
                  </Link>
                </li>
                <li className="mb-1">
                  <Link
                    href={"/services/ui-development"}
                    className="text-[14px] text-gray-600 hover:text-gray-800"
                  >
                    UI/UX Development
                  </Link>
                </li>
                <li className="mb-1">
                  <Link
                    href={"/services/blockchain-development"}
                    className="text-[14px] text-gray-600 hover:text-gray-800"
                  >
                    Blockchain Development
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/blogs" className="flex items-center gap-2 mt-6">
                <div className="text-sm text-orange-600 bg-orange-100 p-2 rounded-full">
                  <FaHandshake />
                </div>
                <p className="font-medium text-black">Company</p>
              </Link>
            </li>
            <li>
              <Link href="/contact" className="flex items-center gap-2 mt-6">
                <div className="text-sm text-orange-600 bg-orange-100 p-2 rounded-full">
                  <FaPhone />
                </div>
                <p className="font-medium text-black">Contact</p>
              </Link>
            </li>
          </motion.ul>
        </ul>
      </div>
    </nav>
  );
}
