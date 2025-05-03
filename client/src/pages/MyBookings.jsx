import React from "react";
import Title from "./../components/Title";

const MyBookings = () => {
  return (
    <div className=" py-28 md:pb-35 px-4 md:px-16 lg:px-24 xl:px-32">
      <Title
        align="left"
        title="My Bookings"
        subTitle="Effortlessly track your past, current, and upcoming hotel bookings all in one place. Plan your travels with ease in just a few clicks."
      />
    </div>
  );
};

export default MyBookings;
