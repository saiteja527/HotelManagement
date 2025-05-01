import React from "react";
import Title from "./Title";

const PricingCards = () => {
  return (
    <div className="flex items-center justify-center flex-col py-10  bg-slate-50">
      <Title
        title="Our Pricing Plans"
        subTitle="Choose the best plan that fits your needs. We offer flexible pricing options to help you get started."
      />
      <div className="flex flex-wrap items-center justify-center gap-6 py-20 px-4">
        <div className="w-72 bg-white text-center text-gray-800/80 border border-gray-500/30 p-6 pb-16 rounded-lg">
          <p className="font-semibold">Basic Room</p>
          <h1 className="text-3xl font-semibold">
            ₹499
            <span className="text-gray-500 text-sm font-normal">/night</span>
          </h1>
          <ul className="list-none text-gray-500 text-sm mt-6 space-y-1">
            {[
              "Single bed room",
              "Free Wi-Fi",
              "Air Conditioning",
              "Complimentary breakfast",
              "24/7 Front Desk support",
            ].map((item) => (
              <li className="flex items-center gap-2" key={item}>
                <CheckIcon color="#6366F1" />
                <p>{item}</p>
              </li>
            ))}
          </ul>
          <button
            type="button"
            className="bg-indigo-500 text-sm w-full py-2 rounded text-white font-medium mt-7 hover:bg-indigo-600 transition-all cursor-pointer"
          >
            Recharge Now
          </button>
        </div>

        <div className="w-72 bg-indigo-500 relative text-center text-white border border-gray-500/30 p-6 pb-14 rounded-lg">
          <p className="absolute px-3 text-sm -top-3.5 left-3.5 py-1 bg-[#8789FB] rounded-full">
            Most Popular
          </p>
          <p className="font-semibold pt-2">Deluxe Room</p>
          <h1 className="text-3xl font-semibold">
            ₹999<span className="text-sm font-normal">/night</span>
          </h1>
          <ul className="list-none text-white text-sm mt-6 space-y-1">
            {[
              "Queen-sized bed",
              "Ocean view balcony",
              "Free Wi-Fi & Netflix",
              "Mini fridge & room service",
              "Late checkout (2 PM)",
              "Airport pickup included",
            ].map((item) => (
              <li className="flex items-center gap-2" key={item}>
                <CheckIcon color="currentColor" />
                <p>{item}</p>
              </li>
            ))}
          </ul>
          <button
            type="button"
            className="bg-white text-sm w-full py-2 rounded text-indigo-500 font-medium mt-7 hover:bg-gray-200 transition-all cursor-pointer"
          >
            Recharge Now
          </button>
        </div>

        <div className="w-72 bg-white text-center text-gray-800/80 border border-gray-500/30 p-6 pb-16 rounded-lg">
          <p className="font-semibold">Executive Suite</p>
          <h1 className="text-3xl font-semibold">
            ₹1999
            <span className="text-gray-500 text-sm font-normal">/night</span>
          </h1>
          <ul className="list-none text-gray-500 text-sm mt-6 space-y-1">
            {[
              "King-sized bed + Living area",
              "Private lounge access",
              "Personal butler service",
              "Business workspace & printer",
              "Free airport transfers",
              "Daily housekeeping + laundry",
              "Conference room access",
            ].map((item) => (
              <li className="flex items-center gap-2" key={item}>
                <CheckIcon color="#6366F1" />
                <p>{item}</p>
              </li>
            ))}
          </ul>
          <button
            type="button"
            className="bg-indigo-500 text-sm w-full py-2 rounded text-white font-medium mt-7 hover:bg-indigo-600 transition-all cursor-pointer"
          >
            Contact Sales
          </button>
        </div>
      </div>
    </div>
  );
};

const CheckIcon = ({ color }) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7.162 13.5 2.887 9.225l1.07-1.069 3.205 3.207 6.882-6.882 1.069 1.07z"
      fill={color}
    />
  </svg>
);

export default PricingCards;
