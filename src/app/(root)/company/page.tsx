//import nextjs essentials
import Image from "next/image";

export default function Company() {
  return (
    <section className="relative mb-20 w-[90%] mx-auto mt-20">
      <div className="flex justify-between sm:flex-row flex-col gap-8">
        <div className="flex-1">
          <div className="text-xl text-orange-600 mb-2">
            <h3>Safety | Speed | Stability</h3>
          </div>
          <h1 className="text-3xl font-bold leading-tight sm:text-3xl md:text-5xl transition text-black md:leading-tight">
            About our company <br />
            <span className="text-orange-600">Metclan</span>
          </h1>
          <p>
            We exist to deliver comprehensive business solutions, reliable
            services, and robust security. Our aim is to assist you in handling
            the intricacies of your business, allowing you to concentrate on the
            core aspects that matter most.
          </p>
        </div>
        <div className="flex-1 flex justify-end">
          <div className="w-full sm:w-[350px]">
            <Image
              src={"/images/company-2.webp"}
              width={1000}
              height={300}
              alt="Company"
              className="border-4 border-white rounded-lg overflow-hidden shadow-lg"
            />
          </div>
        </div>
      </div>
      <div className="mt-10">
        <Image
          src={"/images/happy-teamates.webp"}
          width={2000}
          height={300}
          alt="Company"
          className="border-4 border-white rounded-lg overflow-hidden shadow-lg"
        />
      </div>
      {/* Why metclan */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-2 gap-2 transition">
        <div className="border p-4 bg-white rounded-lg">
          <h3 className="text-2xl text-3xl">100%</h3>
          <h3 className="text-xl sm:text-xl mt-1 text-orange-600">
            Data security
          </h3>
          <p className="tex-xs sm:text-sm mt-2">
            Ensure your data is safe and secure with cutting-edge encryption
          </p>
        </div>
        <div className="border p-4 bg-white rounded-lg">
          <h3 className="text-2xl text-3xl">99%</h3>
          <h3 className="text-xl sm:text-xl mt-1 text-orange-600">Fast</h3>
          <p className="tex-xs sm:text-sm mt-2">
            Optimize performance to provide a seamless and swift user
            experience.
          </p>
        </div>
        <div className="border p-4 bg-white rounded-lg">
          <h3 className="text-2xl text-3xl">99%</h3>
          <h3 className="text-xl sm:text-xl mt-1 text-orange-600">
            Quality Services
          </h3>
          <p className="tex-xs sm:text-sm mt-2">
            We have happy clients across the globe.
          </p>
        </div>
        <div className="border p-4 bg-white rounded-lg">
          <h3 className="text-2xl text-3xl">2+</h3>
          <h3 className="text-xl sm:text-xl mt-1 text-orange-600">Products</h3>
          <p className="tex-xs sm:text-sm mt-2">
            We provide quality products in solving business solutions.
          </p>
        </div>
      </div>
      {/* Our story */}
      <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-10 mt-14 md:p-4">
        <div className="flex-1">
          <Image
            src={"/images/mission.jpeg"}
            width={2000}
            height={300}
            alt="Company"
            className="border-4 border-white rounded-lg overflow-hidden shadow-lg"
          />
        </div>
        <div className="flex-1">
          <p className="text-orange-600 text-xl">Our Mission </p>
          <h2 className="text-3xl mt-4 font-medium leading-relaxed">
            Empowering Businesses, Delivering with Metclan{" "}
            <span className="text-orange-600">Excellence</span>
          </h2>
          <p className="text-sm mt-2">
            At Metclan, our mission is twofold, reflecting our unwavering
            commitment to excellence. Primarily, we specialize in crafting
            dynamic business solutions, meticulously designed to enhance
            operational efficiency for businesses of all sizes. Our dedication
            to affordability ensures accessibility, particularly for small
            businesses, as we engineer innovative tools such as inventory and
            attendance management software. Beyond our focus on solutions, we
            prioritize delivering unparalleled quality services. From web
            development and UI-UX design to mobile app development and
            cutting-edge blockchain solutions, Metclan consistently exceeds
            customer expectations by providing nothing but the best. Rooted in
            our name, Metclan is synonymous with empowering businesses and
            delivering exceptional services that propel our clients toward
            unparalleled success.
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-10 mt-14 md:p-4">
        <div className="flex-1">
          <p className="text-orange-600 text-xl">Our Story </p>
          <h2 className="text-3xl mt-4 font-medium leading-relaxed">
            We Believe In The <span className="text-orange-600">Power</span> Of
            Unity And <span className="text-orange-600">Team</span> Work
          </h2>
          <p className="text-sm mt-2">
            At our core, we firmly believe in the transformative power of unity
            and teamwork. We understand that true strength lies in
            collaboration, where diverse perspectives converge to create
            innovative solutions. Embracing the collective talents and ideas of
            our team, we cultivate an environment where collaboration thrives.
          </p>
        </div>
        <div className="flex-1">
          <Image
            src={"/images/team-work.webp"}
            width={2000}
            height={300}
            alt="Company"
            className="border-4 border-white rounded-lg overflow-hidden shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
