"use client";
//import hooks
import { useEffect, useRef } from "react";
//import next essentials
import Link from "next/link";
//import icons
import { FiArrowUpRight } from "react-icons/fi";
//import libs
import {
  motion,
  useInView,
  useAnimation,
  AnimatePresence,
} from "framer-motion";

//define custom types
type Props = {
  service: Service;
  animationDelay: number;
};

//animation variants
export default function ServiceCard({ service, animationDelay }: Props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControl = useAnimation();
  const showEllipsis = (text: string): string => {
    if (text.length <= 250) return text;
    const editedText = text.slice(0, 220) + "...";
    return editedText;
  };
  useEffect(() => {
    if (true) {
      mainControl.start("visible");
    }
  }, [isInView]);
  return (
    <AnimatePresence>
      <motion.div
        ref={ref}
        variants={{
          invisible: { y: 15, opacity: 0 },
          visible: { y: 0, opacity: 1 },
        }}
        initial={"invisible"}
        animate={mainControl}
        transition={{
          duration: 0.25,
          delay: animationDelay,
        }}
        className="border-2 border-transparent rounded-xl p-4 transition hover:shadow-lg md:p-8 bg-white"
      >
        <h4 className="text-black font-semibold mb-2">{service.title}</h4>
        <p className="text-sm font-light text-black mb-4 overflow-hiddens -webkit-box -webkit-line-clamp-2 -webkit-box-orient-vertical">
          {showEllipsis(service.description)}
        </p>
        <Link
          className="text-sm font-medium text-orange-600 flex items-center transition hover:text-orange-500"
          href={`${service.link}`}
        >
          Read more
          <FiArrowUpRight />
        </Link>
      </motion.div>
    </AnimatePresence>
  );
}
