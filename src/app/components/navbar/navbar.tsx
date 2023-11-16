"use client";
//import hooks
import { useState, useRef, useEffect } from "react";
//import icons
import { BiSolidTime } from "react-icons/bi";
import { BsFillFileEarmarkSpreadsheetFill } from "react-icons/bs";

//import next js essentials
import Image from "next/image";
import Link from "next/link";

//import icons
import { CgCloseO } from "react-icons/cg";
import { LuMenuSquare } from "react-icons/lu";
import { TbWorld } from "react-icons/tb";
import { BiLogoBitcoin } from "react-icons/bi";
import { AiOutlineAntDesign } from "react-icons/ai";
//import components
import PreNav from "./components/preNav";

//import libs
import { motion, AnimatePresence } from "framer-motion";
export default function Navbar() {
  const [menuIsOpened, setMenuIsOpened] = useState(false);
  const productContainerRef = useRef<HTMLDivElement>(null);
  const serviceContainerRef = useRef<HTMLDivElement>(null);
  const [isShowingProductOptions, setIsShowingProductOptions] = useState(false);
  const [isShowingServicesOptions, setIsShowingServicesOptions] =
    useState(false);
  const productOptionsRef = useRef<HTMLDivElement>(null);
  const serviceOptionsRef = useRef<HTMLDivElement>(null);
  const handleMenu = () => setMenuIsOpened((prev) => !prev);
  useEffect(() => {
    const showProductOptions = (ev: globalThis.MouseEvent) => {
      if (ev.target === productContainerRef.current) {
        setIsShowingProductOptions(true);
        setIsShowingServicesOptions(false);
      }
      if (ev.target === serviceContainerRef.current) {
        setIsShowingServicesOptions(true);
        setIsShowingProductOptions(false);
      }
    };
    const removeProductOptions = () => {
      setIsShowingProductOptions(false);
    };
    const removeServiceOptions = () => {
      setIsShowingServicesOptions(false);
    };
    productContainerRef.current?.addEventListener(
      "mouseenter",
      showProductOptions
    );
    serviceContainerRef.current?.addEventListener(
      "mouseenter",
      showProductOptions
    );
    serviceContainerRef.current?.addEventListener(
      "mouseenter",
      showProductOptions
    );
    productOptionsRef.current?.addEventListener(
      "mouseleave",
      removeProductOptions
    );
    serviceOptionsRef.current?.addEventListener(
      "mouseleave",
      removeServiceOptions
    );
    const removeOnClick = (ev: MouseEvent) => {
      if (
        ev.target instanceof HTMLElement &&
        !productContainerRef.current?.contains(ev.target)
      ) {
        setIsShowingProductOptions(false);
      }
      if (
        ev.target instanceof HTMLElement &&
        !serviceContainerRef.current?.contains(ev.target)
      ) {
        setIsShowingServicesOptions(false);
      }
    };
    document.addEventListener("click", removeOnClick);
    return () => {
      productContainerRef.current?.removeEventListener(
        "mouseenter",
        showProductOptions
      );
      productOptionsRef.current?.removeEventListener(
        "mouseleave",
        removeProductOptions
      );
      serviceContainerRef.current?.removeEventListener(
        "mouseenter",
        showProductOptions
      );
      serviceOptionsRef.current?.removeEventListener(
        "mouseleave",
        removeServiceOptions
      );
      document.removeEventListener("click", removeOnClick);
    };
  }, [isShowingProductOptions]);

  return (
    <>
      <PreNav />
      <nav
        id="nav"
        className="py-4 sticky top-0 left-0 w-full bg-white z-10 shadow-lg"
      >
        <div className="w-[90%] mx-auto">
          <div className="flex items-center justify-between">
            <Link href={"/"} className="flex items-center gap-2">
              <Image
                src={"/images/logo.png"}
                alt="logo"
                width={50}
                height={50}
              />
              <span className="logo__text text-orange hidden sm:text-xl sm:block transition">
                Metclan
              </span>
            </Link>
            <ul className="flex gap-10 transition">
              <li className="relative">
                <div
                  ref={productContainerRef}
                  className="font-medium text-gray-700 text-sm hover:text-orange-700 transition cursor-pointer"
                >
                  Products
                </div>
                <AnimatePresence>
                  {isShowingProductOptions && (
                    <motion.div
                      ref={productOptionsRef}
                      variants={{
                        hidden: { y: -10, opacity: 0 },
                        visible: { y: 0, opacity: 1 },
                        exit: { y: -2, opacity: 0 },
                      }}
                      initial={"hidden"}
                      animate={"visible"}
                      exit={"exit"}
                      className="absolute bg-white w-80 h-40 rounded-lg p-6 shadow-lg"
                    >
                      <motion.ul
                        variants={{
                          hidden: { y: -10, opacity: 0 },
                          visible: { y: 0, opacity: 1 },
                        }}
                        initial={"hidden"}
                        animate={"visible"}
                        transition={{ duration: 0.5, delay: 0.25 }}
                        className="flex flex-col justify-center h-full gap-5"
                      >
                        <li>
                          <Link
                            className="flex items-center gap-2 hover:text-orange-600 transition"
                            target="_blank"
                            href="https://attendsure.metclan.com"
                          >
                            <div className="text-xl text-orange-600 bg-orange-100 p-1 rounded-full">
                              <BsFillFileEarmarkSpreadsheetFill />
                            </div>
                            <span className="text-sm font-medium">
                              Stocksavvy
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="flex items-center gap-2 hover:text-orange-600 transition"
                            target="_blank"
                            href="https://attendsure.metclan.com"
                          >
                            <div className="text-xl text-orange-600 bg-orange-100 p-1 rounded-full">
                              <BiSolidTime />
                            </div>
                            <span className="text-sm font-medium">
                              Attendsure
                            </span>
                          </Link>
                        </li>
                      </motion.ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
              <li className="relative">
                <div
                  ref={serviceContainerRef}
                  className="font-medium text-gray-700 text-sm hover:text-orange-700 transition cursor-pointer"
                >
                  Services
                </div>
                <AnimatePresence>
                  {isShowingServicesOptions && (
                    <motion.div
                      ref={serviceOptionsRef}
                      variants={{
                        hidden: { y: -10, opacity: 0 },
                        visible: { y: 0, opacity: 1 },
                        exit: { y: -2, opacity: 0 },
                      }}
                      initial={"hidden"}
                      animate={"visible"}
                      exit={"exit"}
                      className="absolute bg-white w-80 h-48 rounded-lg p-6 shadow-lg"
                    >
                      <motion.ul
                        variants={{
                          hidden: { y: -10, opacity: 0 },
                          visible: { y: 0, opacity: 1 },
                        }}
                        initial={"hidden"}
                        animate={"visible"}
                        transition={{ duration: 0.5, delay: 0.25 }}
                        className="flex flex-col justify-center h-full gap-5"
                      >
                        <li>
                          <Link
                            className="flex items-center gap-2 hover:text-orange-600 transition"
                            href="/services/web-development"
                          >
                            <div className="text-xl text-orange-600 bg-orange-100 p-1 rounded-full">
                              <TbWorld />
                            </div>
                            <span className="text-sm font-medium">
                              Web Development
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="flex items-center gap-2 hover:text-orange-600 transition"
                            href="/services/blockchain-development"
                          >
                            <div className="text-xl text-orange-600 bg-orange-100 p-1 rounded-full">
                              <BiLogoBitcoin />
                            </div>
                            <span className="text-sm font-medium">
                              Blockchain Development
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="flex items-center gap-2 hover:text-orange-600 transition"
                            href="/services/ui-development"
                          >
                            <div className="text-xl text-orange-600 bg-orange-100 p-1 rounded-full">
                              <AiOutlineAntDesign />
                            </div>
                            <span className="text-sm font-medium">
                              UI/UX Development
                            </span>
                          </Link>
                        </li>
                      </motion.ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
              <li>
                <Link
                  className="font-medium text-gray-700 text-sm hover:text-orange-700 transition"
                  href="/"
                >
                  Blogs
                </Link>
              </li>
              <li>
                <Link
                  className="font-medium text-gray-700 text-sm hover:text-orange-700 transition"
                  href="/company"
                >
                  Company
                </Link>
              </li>
            </ul>
            <div>
              {menuIsOpened ? (
                <CgCloseO
                  className="text-pink-600 text-4xl cursor-pointer"
                  onClick={handleMenu}
                />
              ) : (
                <LuMenuSquare
                  className="text-pink-600 text-4xl cursor-pointer"
                  onClick={handleMenu}
                />
              )}
            </div>
          </div>
        </div>
        {/* <MenuOptions /> */}
      </nav>
    </>
  );
}
