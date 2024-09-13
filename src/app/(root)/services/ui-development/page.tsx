// Import Next.js essentials
import Image from "next/image";
import Link from "next/link";

// Import icons
import { BsCheckCircle } from "react-icons/bs";
import { FiArrowUpRight } from "react-icons/fi";
export const metadata = {
  title:
    "Let's Create A Stunning Design For Your Website/Mobile App- UI/UX Experts",
  description:
    "We Produce high-quality UI/UX design solutions through wireframes, visual and graphic designs, flow diagrams, storyboards, site maps,and prototypes",
};
export default function UIDevelopment() {
  return (
    <section className="my-10 transition">
      <div className="flex gap-10 flex-col mx-auto lg:flex-row w-[95%]">
        <Image
          src={"/images/ui-development.jpg"}
          width={500}
          height={200}
          className="lg:w-[450px] w-full rounded-[40px]"
          alt="Web development"
        />
        <div className="lg:w-1/2 ">
          <h2 className="text-xl font-semibold my-10 sm:text-3xl md:text-4xl transition text-black">
            UI/UX Development
          </h2>
          <p className="text-sm">
            At Metclan, Our Team Of UX-UI Designers are generally responsible
            for collecting, researching, investigating and evaluating user
            requirements. Their responsibility is to deliver an outstanding user
            experience providing an exceptional and intuitive application design
            <br />
            <br />
            We Produce high-quality UX design solutions through wireframes,
            visual and graphic designs, flow diagrams, storyboards, site maps,
            and prototypes.
            <br />
            <br />
            We also provide advice and guidance on the implementation of UX
            research methodologies and testing activities in order to analyze
            and predict user behavior.
          </p>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
            <div className="flex items-center gap-2">
              <div className="text-2xl gap-4">
                <BsCheckCircle />
              </div>
              <p className="text-sm ">
                We can develop UI mockups and prototypes that clearly illustrate
                how sites function and look like
              </p>
            </div>
            <div className="flex items-center gap-2">
              <div className="text-2xl gap-4">
                <BsCheckCircle />
              </div>
              <p className="text-sm ">
                Develop technical and business requirements and always strive to
                deliver intuitive and user-centered solutions
              </p>
            </div>
            <div className="flex items-center gap-2">
              <div className="text-2xl gap-4">
                <BsCheckCircle />
              </div>
              <p className="text-sm ">
                Test new ideas before implementing and Conduct an ongoing user
                research
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
