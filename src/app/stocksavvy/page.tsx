//import nextjs essentials
import Image from "next/image";
import { Metadata } from "next";
import Link from "next/link";

//import icons
import { FiArrowUpRight } from "react-icons/fi";

export const metadata: Metadata = {
  title: "Stocksavvy Inventory Management And Bookkeeping Software",
  description:
    "Advanced inventory and bookkeeping software to manage big and small business. Prevent theft and losses in your business.",
};
export default function Stocksavvy() {
  return (
    <section className="relative mb-20 w-[90%] mx-auto mt-20">
      <div>
        <h1 className="text-3xl font-bold leading-tight sm:text-3xl md:text-5xl transition text-black md:leading-tight md:w-2/3">
          Manage your retail and wholesale businesses with ease using{" "}
          <span className="text-orange-600">Stocksavvy</span> - anytime,
          anywhere
        </h1>
      </div>
      <div>
        <Link
          className="bg-black text-sm px-4 py-2 sm:px-6 sm:py-3 rounded-[5px] mt-8 text-white inline-block transition hover:bg-gray-800 md:py-3 md:px-10 flex items-center gap-2 w-max"
          href="/contact"
        >
          <span>Contact us</span>
          <FiArrowUpRight className="text-xl" />
        </Link>
      </div>
      <div className="mt-14 md:mt-20">
        <h2 className="text-xl font-semibold mt-10 sm:text-3xl md:text-4xl transition text-black">
          What is stocksavvy?
        </h2>
        <p className="my-5 md:w-2/3">
          Stocksavvy is a user-friendly software designed to make life easier
          for business owners like you. With Stocksavvy, you can effortlessly
          monitor your inventory, sales, and even keep an eye on products that
          are close to their expiration date. It&apos;s not just about tracking;
          this tool also does the math for you, helping you figure out your
          profits and losses. Running low on a popular product? Stocksavvy gives
          you a heads-up so you can restock before it&apos;s too late. And if
          you&apos;re managing multiple locations, no worries – Stocksavvy is
          your go-to solution for seamless tracking across all your spots.
        </p>
      </div>
      <Image
        src={"/images/stocksavvy.png"}
        width={1000}
        height={1000}
        alt="Stocksavvy Image"
        className="shadow-lg border-8 border-white rounded-lg overflow-hidden"
      />
      <div className="">
        <h2 className="text-xl font-semibold mt-16 sm:text-3xl md:text-4xl transition text-black">
          Features
        </h2>
      </div>
      <div className="flex justify-between mt-16 gap-10 md:flex-row flex-col">
        <div className="flex-1">
          <h3 className="text-xl font-semibold mt-10 sm:text-2xl md:text-2xl transition text-black">
            Calculate profit and loss
          </h3>
          <p className="text-sm mt-2 leading-relaxed">
            If you own a store, Stocksavvy is like having a superhero friend to
            help you. Stocksavvy tells you if your store is not making enough
            money. It&apos;s like a special detective friend that helps you find
            out why this is happening. Maybe you&apos;re buying too many of one
            thing, or someone who works with you is doing something wrong.
            Stocksavvy, your special friend, also tells you how much all your
            things in the store are worth. It&apos;s like having a magic helper,
            Stocksavvy, that makes sure your store is doing great!
          </p>
        </div>
        <Image
          src={"/images/profit-loss.png"}
          width={500}
          height={500}
          alt="Stocksavvy Image"
          className="shadow-lg border-8 border-white rounded-lg overflow-hidden flex-1"
        />
      </div>
      <div className="flex justify-between mt-10 gap-10 md:flex-row flex-col">
        <Image
          src={"/images/stock-report.png"}
          width={500}
          height={500}
          alt="Stocksavvy Image"
          className="shadow-lg border-8 border-white rounded-lg overflow-hidden flex-1"
        />
        <div className="flex-1 order-first md:order-last">
          <h3 className="text-xl font-semibold mt-10 sm:text-2xl md:text-2xl transition text-black">
            Detailed Stock Report
          </h3>
          <p className="text-sm mt-2 leading-relaxed">
            As the boss of your business, it&apos;s super important to know all
            about your stock report. This report tells you how much money you
            used to buy all your stuff, how much money you could get by selling
            everything, and how much extra money you might make. Your profit
            margin on your individual products will be shown to you. Guess what?
            With Stocksavvy, you can find all this out by just clicking a
            button! It&apos;s like magic for your business!
          </p>
        </div>
      </div>
      <div className="flex justify-between mt-16 gap-10 md:flex-row flex-col">
        <div className="flex-1 order-last md:order-first">
          <h3 className="text-xl font-semibold mt-10 sm:text-2xl md:text-2xl transition text-black">
            Track sold products
          </h3>
          <p className="text-sm mt-2 leading-relaxed">
            Stocksavvy gives you the awesome ability to keep an eye on
            everything about the products you sell! You can know what was sold,
            when it was sold, how much of it was sold, who bought it, who sold
            it, how much it was sold for, and even how the customer paid for it.
            It&apos;s like having a superpower for your business, making you the
            superhero boss!
          </p>
        </div>
        <Image
          src={"/images/sold-products.png"}
          width={500}
          height={500}
          alt="Stocksavvy Image"
          className="shadow-lg border-8 border-white rounded-lg overflow-hidden flex-1"
        />
      </div>
      <div className="flex justify-between mt-16 gap-10 md:flex-row flex-col">
        <div className="flex-1 order-first md:order-last">
          <h3 className="text-xl font-semibold mt-10 sm:text-2xl md:text-2xl transition text-black">
            End of day reports
          </h3>
          <p className="text-sm mt-2 leading-relaxed">
            Stocksavvy is like a super assistant for you and your team when
            it&apos;s time to wrap up the day. Instead of spending a lot of time
            with pen and paper, Stocksavvy gives you a special report. This
            report tells you everything you need to know, like how much stuff
            you sold for the day, how much money you got in cash, through the
            bank, pos and from card payments. It even adds up all your sales to
            give you a big total! This saves a ton of time and makes sure
            everything adds up correctly at the end of the day. Super handy,
            right?
          </p>
        </div>
        <Image
          src={"/images/eod.png"}
          width={500}
          height={500}
          alt="Stocksavvy Image"
          className="shadow-lg border-8 border-white rounded-lg overflow-hidden flex-1"
        />
      </div>
      <h2 className="text-xl font-semibold mt-10 sm:text-3xl md:text-4xl transition text-black">
        What are you still waiting for?
      </h2>
      <div>
        <Link
          className="bg-black text-sm px-4 py-2 sm:px-6 sm:py-3 rounded-[5px] mt-8 text-white inline-block transition hover:bg-gray-800 md:py-3 md:px-10 flex items-center gap-2 w-max"
          href="/contact"
        >
          <span>Contact us</span>
          <FiArrowUpRight className="text-xl" />
        </Link>
      </div>
    </section>
  );
}
