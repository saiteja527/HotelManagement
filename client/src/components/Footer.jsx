import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="text-gray-500/80 pt-8 px-6 md:px-16 lg:px-24 xl:px-32">
      <div className="flex flex-wrap justify-between gap-12 md:gap-6">
        <div className="max-w-80">
          <img
            src={assets.logo}
            alt="logo"
            className="mb-4 h-8 md:h-9 invert"
          />
          <p className="text-sm">
            Indulge in world-class elegance and personalized comfort at iconic
            hotels and resorts. Your unforgettable journey begins here.
          </p>
          <div className="flex items-center gap-3 mt-4">
            <img
              className="cursor-pointer w-6 h-6 "
              src={assets.instagramIcon}
            />
            <img
              className="cursor-pointer w-6 h-6 "
              src={assets.facebookIcon}
            />
            <img className="cursor-pointer w-6 h-6 " src={assets.twitterIcon} />
            <img
              className="cursor-pointer w-6 h-6 "
              src={assets.linkendinIcon}
            />
          </div>
        </div>

        <div>
          <p className="text-lg text-gray-800">COMPANY</p>
          <ul className="mt-3 flex flex-col gap-2 text-sm">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/rooms">Hotels</Link>
            </li>
            <li>
              <Link to="/">Experience</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/owner">Dashboard</Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-lg text-gray-800">SUPPORT</p>
          <ul className="mt-3 flex flex-col gap-2 text-sm">
            <li>
              <Link to="/">Help Center</Link>
            </li>
            <li>
              <Link to="/">Safety Information</Link>
            </li>
            <li>
              <Link to="/">Cancellation Options</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            <li>
              <Link to="/">Accessibility</Link>
            </li>
          </ul>
        </div>

        <div className="max-w-80">
          <p className="text-lg text-gray-800">STAY UPDATED</p>
          <p className="mt-3 text-sm">
            Subscribe to our newsletter for inspiration and special offers.
          </p>
          <div className="flex items-center mt-4">
            <input
              type="text"
              className="bg-white rounded-l border border-gray-300 h-9 px-3 outline-none"
              placeholder="Your email"
            />
            <button className="flex items-center justify-center bg-black h-9 w-9 aspect-square rounded-r">
              <img
                src={assets.arrowIcon}
                alt="arrow-icon"
                className="invert w-4 h-4 cursor-pointer"
              />
            </button>
          </div>
        </div>
      </div>
      <hr className="border-gray-300 mt-8" />
      <div className="flex flex-col md:flex-row gap-2 items-center justify-between py-5">
        <p>© {new Date().getFullYear()} Brand. All rights reserved.</p>
        <ul className="flex items-center gap-4">
          <li>
            <Link to="/">Privacy</Link>
          </li>
          <li>
            <Link to="/">Terms</Link>
          </li>
          <li>
            <Link to="/">Sitemap</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
