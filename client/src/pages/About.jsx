import React, { useState } from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";
import Title from "./../components/Title";
import thumbnail1 from "../assets/thumbnail1.jpg";
import thumbnail2 from "../assets/thumbnail2.jpg";
import thumbnail3 from "../assets/thumbnail3.jpg";
import thumbnail4 from "../assets/thumbnail4.jpg";

const About = () => {
  const thumbnails = [thumbnail1, thumbnail2, thumbnail3, thumbnail4];

  const [mainImage, setMainImage] = useState(thumbnails[0]);
  return (
    <div className="mt-20">
      <div className="flex items-center justify-center">
        <div className="flex flex-wrap items-center justify-center p-1 rounded-full bg-white border border-gray-300 text-sm">
          <div className="flex items-center">
            <img
              className="w-[30px] rounded-full border-3 border-white"
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=50"
              alt="userImage1"
            />
            <img
              className="w-[30px] rounded-full border-3 border-white -translate-x-2"
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=50"
              alt="userImage2"
            />
            <img
              className="w-[30px] rounded-full border-3 border-white -translate-x-4"
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=50&h=50&auto=format&fit=crop"
              alt="userImage3"
            />
          </div>
          <p className="-translate-x-2">Trusted by 10,000+ people</p>
        </div>
      </div>

      <div className="mx-auto px-6 md:px-16 lg:px-24 xl:px-32 flex flex-col-reverse md:flex-row items-center md:justify-between gap-5 pb-16 min-h-[600px]">
        <div className="w-full md:w-1/2 max-md:mb-8 text-center md:text-left">
          <p className="flex justify-center md:justify-start items-center gap-1 text-gray-500 text-xs mb-2">
            <span>✨</span> BOOK LUXURY STAYS EFFORTLESSLY
          </p>
          <h1 className="font-extrabold text-4xl md:text-6xl text-gray-900 mb-4 leading-tight">
            Find Your
            <br /> Perfect
            <span className="inline-block bg-orange-400 text-white font-extrabold px-3 -mb-1 border-b-2 border-indigo-700">
              Hotel Stay.
            </span>
          </h1>
          <p className="text-gray-600 text-sm mb-6">
            Discover handpicked stays around the world for every budget.
            <br />
            Hassle-free bookings, best deals guaranteed.
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 space-y-3 sm:space-y-0 justify-center md:justify-start">
            <Link
              className="bg-blue-600 text-white text-sm font-semibold px-5 py-2.5 rounded shadow hover:bg-blue-700 transition"
              to="/rooms"
            >
              Book Now
            </Link>
            <Link
              className="text-sm font-normal flex items-center justify-center space-x-1 hover:underline"
              to="/rooms"
            >
              <span>Explore Destinations</span>
              <img
                src={assets.arrowIcon}
                alt="arrow-icon"
                className="w-4 h-4"
              />
            </Link>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex justify-center">
          <img
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
            src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/rightSideImage.svg"
            alt="rightSideImage"
          />
        </div>
      </div>

      <div className="py-10 bg-slate-50 px-5">
        <Title
          title="Discover Exclusive Destinations"
          subTitle="Explore handpicked luxury retreats, hidden gems, and scenic escapes tailored just for you."
        />

        <div className="flex flex-col items-center space-y-4 mt-5">
          <div className="w-full max-w-3xl">
            <img src={mainImage} alt="Main" className="w-full rounded-lg" />
          </div>

          <div className="grid grid-cols-4 max-w-3xl gap-4">
            {thumbnails.map((thumb, index) => (
              <img
                key={index}
                src={thumb}
                alt={`Thumb ${index + 1}`}
                onClick={() => setMainImage(thumb)}
                className="thumb rounded-lg md:h-24 h-14 object-cover cursor-pointer hover:opacity-80"
              />
            ))}
          </div>
        </div>
      </div>

      <div className="py-20 max-sm:mx-2 px-2">
        <div className="flex flex-col items-center justify-center text-gray-800">
          <p className="text-blue-600 font-medium mb-2">
            5000+ Happy Customers
          </p>
          <p className="text-4xl font-bold max-w-160 mb-[72px]">
            Don't just take our word for it
          </p>

          <div className="flex flex-wrap items-center justify-center gap-10">
            <div className="flex flex-col md:flex-row items-start gap-4">
              <img
                className="h-60 rounded-lg"
                src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/userImage/userImage1.png"
                alt="userImage1"
              />
              <div className="flex flex-col justify-between h-60">
                <div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, index) => (
                      <img key={index} src={assets.starIconFilled} alt="" />
                    ))}
                  </div>
                  <p className="max-w-[280px] text-gray-500 mt-6">
                    “The best hotel experience I've ever had. The staff was
                    incredibly friendly, the room was perfect, and the amenities
                    were top-notch. I highly recommend staying here if you're
                    looking for a relaxing getaway.”
                  </p>
                </div>
                <p className="text-lg font-medium">Donald Jackman</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-start gap-4">
              <img
                className="h-60 rounded-lg"
                src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/userImage/userImage3.png"
                alt="userImage2"
              />
              <div className="flex flex-col justify-between h-60">
                <div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, index) => (
                      <img key={index} src={assets.starIconFilled} alt="" />
                    ))}
                  </div>
                  <p className="max-w-[280px] text-gray-500 mt-6">
                    “I had a wonderful stay! The hotel was in a great location,
                    the room was spacious and clean, and the breakfast was
                    amazing. Definitely planning to return for my next trip.”
                  </p>
                </div>
                <p className="text-lg font-medium">Sarah Lee</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center bg-slate-50 py-5 ">
        <div className="w-full flex items-center justify-center space-x-2 max-w-md py-2.5 rounded-lg font-medium text-sm text-white text-center bg-gray-800">
          <p>
            Get 20% OFF on Your First Booking!{" "}
            <span className="underline">Get your Stay</span>
          </p>
          <img
            src={assets.arrowIcon}
            alt="arrow-icon"
            className="w-4 h-4 invert"
          />
        </div>
      </div>

      <div className="pt-5 pb-20 bg-slate-50 flex flex-col items-center justify-center px-5">
        <Title
          title="Subscribe To Our Hotel Offers"
          subTitle="Be the first to know about our latest deals, promotions, and exclusive offers!"
        />
        <div className="flex md:flex-row flex-col border border-gray-500/30 rounded-lg items-start md:items-center justify-between gap-5 text-sm max-w-5xl bg-white p-8 mt-5">
          <div className="max-w-md w-full">
            <h1 className="text-3xl font-semibold text-gray-700 ">
              Don't miss our hotel offers
            </h1>
            <p className="text-gray-500 mt-2">
              Get the best deals and discounts on your next hotel booking. We
              offer exclusive offers for our subscribers!
            </p>
            <div className="flex items-center gap-4 mt-10">
              <input
                className="py-2 px-3 w-full outline-none focus:border-indigo-500/60 transition max-w-64 border border-gray-500/30 rounded-md"
                type="text"
                placeholder="Enter your email"
              />
              <button className="bg-indigo-500 hover:bg-indigo-600 transition-all px-6 py-2 rounded text-white font-medium">
                Subscribe
              </button>
            </div>
          </div>
          <div className="space-y-4 md:max-w-48">
            <div className="flex items-center gap-3">
              <div className="bg-gray-500/10 w-max p-2.5 rounded">
                <img
                  src={assets.calenderIcon}
                  alt="calendar-icon"
                  className="w-7 h-7"
                />
              </div>
              <h3 className="text-base font-medium text-gray-800">
                Exclusive hotel discounts
              </h3>
            </div>
            <p className="text-gray-500">
              Get up to 50% off on selected hotels worldwide. Special deals
              available for our subscribers only.
            </p>
          </div>
          <div className="space-y-4 md:max-w-48">
            <div className="flex items-center gap-3">
              <div className="bg-gray-500/10 w-max p-2.5 rounded">
                <img
                  src={assets.badgeIcon}
                  alt="badge-icon"
                  className="w-7 h-7"
                />
              </div>
              <h3 className="text-base font-medium text-gray-800">
                No spam, guaranteed
              </h3>
            </div>
            <p className="text-gray-500">
              We respect your privacy. You will only receive exclusive offers
              and updates related to hotel bookings.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
