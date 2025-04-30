import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

const HotelCArd = ({ room, index }) => {
  return (
    <Link
      to={"/rooms/" + room._id}
      onClick={() => scrollTo(0, 0)}
      key={room._id}
    >
      <img src={room.images[0]} alt="" />
      <p>Best Seller</p>
      <div>
        <div className="flex justify-between items-center">
          <p className="font-playfair text-xl font-medium text-gray-800">
            {room.hotel.name}
          </p>
          <div className="flex items-center gap-1">
            <img src={assets.starIconFilled} alt={starIcon} /> 4.5
          </div>
        </div>
      </div>
    </Link>
  );
};

export default HotelCArd;
