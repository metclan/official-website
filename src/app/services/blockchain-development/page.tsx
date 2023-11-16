// Import Next.js essentials
import Image from "next/image";
import Link from "next/link";

// Import icons
import { BsCheckCircle } from "react-icons/bs";
import { FiArrowUpRight } from "react-icons/fi";
export const metadata = {
  title: "Hire our professional Smart Contract Developers | Blockchain Experts",
  description:
    "Our smart contract developers can design and develop secure and foolproof smart contracts and blockchain technology.",
};
export default function BlockchainDevelopment() {
  return (
    <section className="my-10 transition">
      <div className="flex gap-10 flex-col mx-auto lg:flex-row w-[95%]">
        <Image
          src={"/images/blockchain-development.jpg"}
          width={500}
          height={200}
          className="lg:w-[450px] w-full rounded-[40px]"
          alt="Web development"
        />
        <div className="lg:w-1/2 ">
          <h2 className="text-xl font-semibold my-10 sm:text-3xl md:text-4xl transition text-black">
            Blockchain Development
          </h2>
          <p className="text-sm">
            In the fast-paced world of blockchain, where technology is the
            driving force, our developers specialize in the primary language of
            smart contracts—Solidity. With a profound understanding of Ethereum
            Virtual Machine (EVM)-compatible chains, including Ethereum,
            Avalanche, Polygon, and Binance Smart Chain (BSC), our team ensures
            seamless development across diverse ecosystems.
            <br />
            <br />
            Choosing the right blockchain for your project is crucial, and our
            experts guide you through the decision-making process. Whether you
            prioritize Ethereum&apos;s established history and liquidity or opt
            for scaling solutions like Arbitrum, our team tailors solutions to
            meet your unique needs.
            <br />
            <br />
            Our commitment to excellence extends beyond Solidity, as we navigate
            the intricacies of alternative blockchain languages like Rust and
            C/C++. Metclan stands at the forefront of smart contract
            development, offering a comprehensive range of skills and knowledge
            to propel your project forward.
          </p>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
            <div className="flex items-center gap-2">
              <div className="text-2xl gap-4">
                <BsCheckCircle />
              </div>
              <p className="text-sm ">
                Design and develop secure and foolproof smart contracts and
                blockchain technology for chip ownership attribution.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <div className="text-2xl gap-4">
                <BsCheckCircle />
              </div>
              <p className="text-sm ">
                Develop NFT marketplace and building out wallet infrastructure.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <div className="text-2xl gap-4">
                <BsCheckCircle />
              </div>
              <p className="text-sm ">
                Building out L2 scaling technology and Create indexing solutions
                using node tooling
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
