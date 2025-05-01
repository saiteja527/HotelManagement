import React from "react";
import Title from "./Title";
import newLetterImg from "../assets/newsLetter.jpg";

const NewsLetter = () => {
  return (
    <div className=" bg-slate-50 pt-10">
      <Title
        title="Subscribe To Our Newsletter"
        subTitle="Be the first to get the latest news about trends, promotions,
                and much more!"
      />

      
      <div className="flex flex-col md:flex-row mt-5 mb-10">
        <div className="md:grid md:grid-cols-2 max-w-4xl bg-white mx-4 md:mx-auto rounded-xl">
          <img
            src={newLetterImg}
            alt="newsletter"
            className="w-full max-w-lg rounded-xl"
          />
          <div className="relative flex items-center justify-center">
            <div className="max-md:py-20 px-6 md:px-10 text-center">
              <h1 className="text-3xl font-bold">Never Miss a Deal!</h1>
              <p className="mt-4 text-gray-500">
                Join our newsletter and be the first to discover new updates,
                exclusive offers, and inspiration.
              </p>
              <form className="mt-8 flex">
                <input
                  type="email"
                  placeholder="Your email address"
                  required
                  className="w-full outline-none rounded-l-md border border-r-0 border-gray-300 p-4 text-gray-900"
                />
                <button
                  type="submit"
                  className="rounded-r-md bg-blue-600 px-7 py-2 text-white cursor-pointer"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>


      <div className="w-full flex items-center justify-between px-4 md:px-14 py-1 font-medium text-sm text-white text-center bg-gray-800">
        <p>Get 20% OFF on Your First Order!</p>
        <div className="flex items-center space-x-6">
          <button
            type="button"
            className="font-normal text-gray-800 bg-white px-7 py-2 rounded-full"
          >
            Claim Offer
          </button>
          <button type="button">
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                y="12.532"
                width="17.498"
                height="2.1"
                rx="1.05"
                transform="rotate(-45.74 0 12.532)"
                fill="#fff"
              />
              <rect
                x="12.533"
                y="13.915"
                width="17.498"
                height="2.1"
                rx="1.05"
                transform="rotate(-135.74 12.533 13.915)"
                fill="#fff"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
