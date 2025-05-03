import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  assets,
  facilityIcons,
  roomCommonData,
  roomsDummyData,
} from "./../assets/assets";
import StarRating from "./../components/StarRating";

const RoomDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [room, setRoom] = useState(null);
  const [mainImage, setMainImage] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRoom = async () => {
      const foundRoom = roomsDummyData.find((room) => room._id === id);
      if (foundRoom) {
        setRoom(foundRoom);
        setMainImage(foundRoom.images[0]);
      }
      setLoading(false);
    };

    fetchRoom();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="flex flex-col items-center space-y-4">
          <div className="w-12 h-12 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-lg font-medium text-gray-700 animate-pulse">
            Fetching room details...
          </p>
        </div>
      </div>
    );
  }

  if (!room) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-red-500 mb-4 ">
          Oops! No Room Found
        </h2>
        <p className="text-gray-600 text-lg max-w-xl font-playfair">
          The room you're looking for doesn't exist or might have been removed.
          Please check the URL or browse available rooms.
        </p>
        <button
          onClick={() => navigate("/")}
          className="cursor-pointer mt-6 px-6 py-3 bg-primary hover:bg-primary-dull text-white rounded-lg shadow-md transition-all"
        >
          Go Back Home
        </button>
      </div>
    );
  }

  return (
    <div className="py-28 md:py-35 px-4 md:px-16 lg:px-24 xl:px-32">
      <div className="flex flex-col md:flex-row items-start md:items-center gap-2">
        <h1 className="text-3xl md:text-4xl font-playfair">
          {room.hotel.name}{" "}
          <span className="font-inter text-sm">({room.roomType})</span>
        </h1>
        <p className="text-sm py-1.5 px-3 font-inter text-white bg-orange-500 rounded-full">
          20% OFF
        </p>
      </div>

      <div className="flex gap-1 items-center mt-2">
        <StarRating />
        <p className="ml-2">200+ Reviews</p>
      </div>

      <div className="flex items-center gap-1 text-gray-500 mt-2">
        <img src={assets.locationIcon} alt="location-icon" />
        <span>{room.hotel.address}</span>
      </div>

      <div className="flex flex-col lg:flex-row mt-6 gap-6">
        <div className="lg:w-1/2 w-full">
          <img
            src={mainImage}
            alt="room-image"
            className="w-full rounded-xl shadow-lg object-cover"
          />
        </div>
        <div className="grid grid-cols-2 gap-4 lg:w-1/2 w-full">
          {room?.images.length > 1 &&
            room.images.map((image, index) => (
              <img
                onClick={() => setMainImage(image)}
                src={image}
                alt="room-thumbnail"
                key={index}
                className={`w-full rounded-xl shadow-md object-cover cursor-pointer ${
                  mainImage === image && "outline-3 outline-orange-500"
                }`}
              />
            ))}
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:justify-between mt-10">
        <div className="flex flex-col">
          <h1 className="font-playfair text-3xl md:text-4xl">
            Experience Luxury Like Never Before
          </h1>
          <div className="flex flex-wrap items-center mt-3 mb-6 gap-4">
            {room.amenities.map((item, index) => (
              <div
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100"
                key={index}
              >
                <img src={facilityIcons[item]} alt={item} className="w-5 h-5" />
                <p className="text-xs">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <p className="text-2xl font-medium">₹{room.pricePerNight}/night</p>
      </div>

      <form className="flex flex-col md:flex-row items-start md:items-center justify-between bg-white shadow-[0px_0px_20px_rgba(0,0,0,0.15)] p-6 rounded-xl mx-auto mt-16 max-w-6xl">
        <div className="flex flex-col flex-wrap md:flex-row items-start md:items-center gap-4 md:gap-10 text-gray-500">
          <div className="flex flex-col">
            <label htmlFor="checkInDate" className="font-medium">
              Check-In
            </label>
            <input
              type="date"
              id="checkInDate"
              className="w-full rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none"
              required
            />
          </div>

          <div className="w-px h-15 bg-gray-300/70 max-md:hidden"></div>

          <div className="flex flex-col">
            <label htmlFor="checkOutDate" className="font-medium">
              Check-Out
            </label>
            <input
              type="date"
              id="checkOutDate"
              className="w-full rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none"
              required
            />
          </div>

          <div className="w-px h-15 bg-gray-300/70 max-md:hidden"></div>

          <div className="flex flex-col">
            <label htmlFor="guests" className="font-medium">
              Guests
            </label>
            <input
              type="number"
              id="guests"
              placeholder="0"
              className="max-w-20 rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none"
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="bg-primary hover:bg-primary-dull active:scale-95 transition-all text-white rounded-md max-md:w-full max-md:mt-6 md:px-25 py-3 md:py-4 text-base cursor-pointer"
        >
          Check Availability
        </button>
      </form>

      <div className="mt-25 space-y-4">
        {roomCommonData.map((item, index) => (
          <div key={index} className="flex items-start gap-2">
            <img src={item.icon} alt={`${item.title}-icon`} className="w-6.5" />
            <div>
              <p className="text-base">{item.title}</p>
              <p className="text-gray-500">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="max-w-3xl border-y border-gray-300 my-15 py-10 text-gray-500">
        <p>
          Guests will be accommodated on the ground floor based on availability.
          Enjoy a comfortable two-bedroom apartment that offers an authentic
          city experience. The listed price covers two guests. Please select the
          total number of guests in the booking section to receive accurate
          pricing for larger groups.
        </p>
      </div>

      <div className="flex flex-col items-start gap-4">
        <div className="flex gap-4">
          <img
            src={room.hotel.owner.image}
            alt="owner"
            className="h-14 w-14 md:h-18 md:w-18 rounded-full"
          />
          <div>
            <p className="text-lg md:text-xl">Posted By {room.hotel.name}</p>
            <div className="flex items-center mt-1">
              <StarRating />
              <p className="ml-2">200+ Reviews</p>
            </div>
          </div>
        </div>

        <button
          onClick={() => {
            navigate("/contact");
            scrollTo(0, 0);
          }}
          className="px-6 py-2.5 mt-4 rounded text-white bg-primary hover:bg-primary-dull transition-all cursor-pointer"
        >
          Contact Now
        </button>
      </div>
    </div>
  );
};

export default RoomDetails;
