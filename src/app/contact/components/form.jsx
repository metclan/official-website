"use client";
//import icons
import { FiArrowUpRight } from "react-icons/fi";

export default function ContactForm() {
  return (
    <form>
      {/* Name and email */}
      <div className="mt-8 transition sm:flex items-center justify-between gap-4 sm:mb-6 sm:mt-10">
        <div className="flex flex-col mb-4 sm:mb-0 sm:flex-1 transition">
          <label htmlFor="name" className="text-sm mb-1">
            Your name
          </label>
          <input
            placeholder="Full name"
            name="fullName"
            className="px-4 py-3 rounded-lg border outline-none text-sm border focus:border-orange-500"
            required
          />
        </div>
        <div className="flex flex-col mb-4 sm:mb-0 sm:flex-1 transition">
          <label htmlFor="email" className="text-sm mb-1">
            Your email
          </label>
          <input
            placeholder="example@gmail.com"
            className="px-4 py-3 rounded-lg border outline-none text-sm border focus:border-orange-500 transition"
            name="email"
            required
          />
        </div>
      </div>
      {/*  Interest*/}
      <div className="flex flex-col mb-4 sm:mb-6">
        <label htmlFor="interest" className="text-sm mb-1">
          What are you interested in?
        </label>
        <select className="px-4 py-3 rounded-lg border outline-none text-sm border focus:border-orange-500 transition bg-white sm:w-1/2">
          <option>Support</option>
          <option>Web Development</option>
          <option>Blockchain Development</option>
          <option>UI/UX Development</option>
        </select>
      </div>
      {/* Message */}
      <div className="flex flex-col mb-4 sm:mb-6">
        <label htmlFor="message" className="text-sm mb-1">
          Message
        </label>
        <textarea
          name="message"
          rows={5}
          className="px-4 py-3 rounded-lg border outline-none text-sm border focus:border-orange-500 transition"
        ></textarea>
      </div>
      {/* Submit button */}
      <div className="">
        <button className="px-4 py-3 text-center bg-black text-white text-sm rounded-lg hover:opacity-80 inline-block w-full flex items-center justify-center gap-1 transition sm:w-1/2">
          <span>Just send</span>
          <FiArrowUpRight className="text-[15px]" />
        </button>
      </div>
    </form>
  );
}
