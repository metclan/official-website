import Link from "next/link";
export default function Hero() {
  return (
    <section className="bg-hero bg-cover bg-center w-full h-96 py-8 sm:h-[500px] transition md:h-[700px] border border-transparent">
      <div className="w-[90%] mx-auto">
        <h4 className="text-white text-4xl mt-10 sm:mt-20 font-medium sm:text-5xl sm:mt-24 md:text-7xl md:font-semibold shadow">
          Pain Point Nexus
        </h4>
        <p className="text-sm mt-4 text-white mb-4 sm:text-xl sm:mb-8">
          Improving your business with cutting-edge and <br />
          transformative innovations
        </p>
        <div className="border-2 border-white py-2 sm:py-3 rounded-[5px] md:py-4 shadow-lg inline">
          <Link
            target="_blank"
            href="https://calendly.com/metclan/15min"
            className="bg-orange-500 text-sm px-4 py-2 sm:px-6 sm:py-3 rounded-[5px] mt-4 text-white inline-block transition hover:bg-orange-60 sm:translate-y-[-10px] sm:hover:translate-y-0 md:py-4 md:px-10"
          >
            Schedule a session
          </Link>
        </div>
      </div>
    </section>
  );
}
