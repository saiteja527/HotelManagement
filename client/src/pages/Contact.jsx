import React from "react";
import PricingCards from "./../components/PricingCards";

const Contact = () => {
  return (
    <div className="mt-10 ">
      <div className="py-20 flex flex-col items-center justify-center max-sm:px-5">
        <p className="text-lg text-blue-600 font-semibold pb-2">Contact Us</p>
        <h1 className="text-4xl font-extrabold text-slate-700 pb-4">
          Get in Touch With Us
        </h1>
        <p className="text-sm text-gray-500 text-center pb-10 px-6 md:px-12">
          We would love to hear from you. Reach out with any questions,
          concerns, or feedback!
          <br />
          Our team is ready to assist you with anything you need.
        </p>

        <form className="flex flex-col items-center text-sm w-full max-w-3xl">
          <div className="flex flex-col md:flex-row items-center gap-8 w-full">
            <div className="w-full">
              <label
                className="text-black/70 text-lg font-medium mb-2"
                htmlFor="name"
              >
                Your Name
              </label>
              <input
                className="h-12 p-3 mt-2 w-full border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-indigo-500 outline-none transition duration-300 ease-in-out"
                type="text"
                required
                placeholder="Enter your full name"
              />
            </div>
            <div className="w-full">
              <label
                className="text-black/70 text-lg font-medium mb-2"
                htmlFor="email"
              >
                Your Email
              </label>
              <input
                className="h-12 p-3 mt-2 w-full border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-indigo-500 outline-none transition duration-300 ease-in-out"
                type="email"
                required
                placeholder="Enter your email address"
              />
            </div>
          </div>

          <div className="mt-6 w-full">
            <label
              className="text-black/70 text-lg font-medium mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              className="w-full mt-2 p-3 h-40 border border-gray-300 rounded-xl shadow-sm resize-none outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300 ease-in-out"
              required
              placeholder="Write your message here"
            ></textarea>
          </div>

          <button
            type="submit"
            className="mt-6 bg-indigo-600 text-white h-12 w-56 px-6 rounded-full active:scale-95 transition-transform duration-200 hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-300"
          >
            Send Message
          </button>
        </form>
      </div>

      <PricingCards />
    </div>
  );
};

export default Contact;
