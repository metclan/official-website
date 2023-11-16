// Import Next.js essentials
import Image from "next/image";
import Link from "next/link";

// Import icons
import { BsCheckCircle } from "react-icons/bs";
import { FiArrowUpRight } from "react-icons/fi";
export const metadata = {
  title:
    "Development, Redesign, And Revamp Your Website - Professionals | Metclan ",
  description:
    "From SEO Optimization, website revamping, web redesign, and load time optimization to improving user experience on your website, we've got you covered.",
};
export default function WebDevelopment() {
  return (
    <section className="my-10 transition">
      <div className="flex gap-10 flex-col mx-auto lg:flex-row w-[95%]">
        <Image
          src={"/images/web-development.jpg"}
          width={500}
          height={200}
          className="lg:w-[450px] w-full rounded-[40px]"
          alt="Web development"
        />
        <div className="lg:w-1/2 ">
          <h2 className="text-xl font-semibold my-10 sm:text-3xl md:text-4xl transition text-black">
            Web Development
          </h2>
          <p className="text-sm">
            Metclan is the designation of our esteemed company. We specialize in
            providing comprehensive web development services to our valued
            clients, prioritizing elements such as webpage design, user
            interface, load time optimization, and overall user experience.
            <br />
            <br />
            We employ a diverse array of tools to adeptly achieve our
            clients&apos; objectives. Our motivation stems from the satisfaction
            reflected in our clients&apos; faces, propelling us to continually
            strive for excellence.
            <br />
            <br />
            Comprising a team of dedicated designers, full-stack developers, and
            backend specialists, we are committed to delivering premium
            services. Our work stands as a testament to our commitment to
            quality and client satisfaction.
          </p>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
            <div className="flex items-center gap-2">
              <div className="text-2xl gap-4">
                <BsCheckCircle />
              </div>
              <p className="text-sm ">
                We specialize in SEO optimization to enhance your online
                presence, ensuring popular search engines like Google list your
                website on their first search page.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <div className="text-2xl gap-4">
                <BsCheckCircle />
              </div>
              <p className="text-sm ">
                Utilising a range of tools, we revamp your website for a
                professional appearance, recognizing it as the pivotal selling
                point for any quality product
              </p>
            </div>
            <div className="flex items-center gap-2">
              <div className="text-2xl gap-4">
                <BsCheckCircle />
              </div>
              <p className="text-sm ">
                We enhance website load times, achieving lightning-fast speeds
                through effective optimization. This acceleration contributes to
                increased sales and revenue.
              </p>
            </div>
          </div>
          <div>
            <Link
              className="bg-orange-500 text-sm px-4 py-2 sm:px-6 sm:py-3 rounded-[5px] mt-4 text-white inline-block transition hover:bg-orange-600 md:py-3 md:px-10 flex items-center gap-2 w-max"
              target="_blank"
              href="https://calendly.com/metclan/15min"
            >
              <span>Book Now</span>
              <FiArrowUpRight className="text-xl" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
