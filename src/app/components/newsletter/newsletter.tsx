"use client";
import { useState } from "react";
export default function Newsletter() {
  const [form, setForm] = useState("");
  return (
    <section className="w-[90%] mx-auto bg-orange-500 rounded-xl p-8 transition hover:shadow-lg md:p-15 sm:p-24 mb-20">
      <div className="">
        <h2 className="text-2xl mb-2 font-semibold text-center text-white sm:text-left">
          Join our newsletter now
        </h2>
        <p className=" mb-4 text-center text-sm text-white sm:text-left">
          Register now and get our latest updates and promos.
        </p>
        <form className="flex gap-4 flex-col sm:flex-row md:w-[500px]">
          <input
            name="email"
            className="px-4 py-3 rounded-lg w-full placeholder:text-xs text-sm font-semibold text-gray-600 border-none outline-none"
            placeholder="Enter email address"
          />
          <button className="bg-black text-white px-4 py-3 rounded-lg outline-none focus:border-white-500 border-2 border-transparent md:px-10 transition ">
            Join
          </button>
        </form>
      </div>
    </section>
  );
}
