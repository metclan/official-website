"use client";
//import hooks
import { useEffect, useRef } from "react";

//import lib
import { useInView, useAnimation } from "framer-motion";
//import components
import ServiceCard from "./components/servicecard/servicescard";

//import services
let animationDuration = 0.1;
import { services } from "../../../../constants/constants";
export default function Services() {
  const servicesData: Service[] = services;
  const content = servicesData.map((service) => {
    animationDuration += 0.15;
    return (
      <ServiceCard
        service={service}
        key={service.id}
        animationDelay={animationDuration}
      />
    );
  });
  return (
    <section className="w-[90%] mx-auto">
      <h2 className="text-center text-xl font-semibold my-10 sm:text-3xl md:text-4xl transition text-black">
        What we do
      </h2>
      <div className="grid sm:grid-cols-2 gap-6 md:grid-cols-3">{content}</div>
    </section>
  );
}
