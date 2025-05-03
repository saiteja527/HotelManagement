import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import ErrorPage from "./components/ErrorPage";
import AllRoomsList from "./pages/AllRoomsList";
import RoomDetails from "./pages/RoomDetails";
import MyBookings from "./pages/MyBookings";

const App = () => {
  const isOwnerPath = useLocation().pathname.includes("owner");
  return (
    <>
      {!isOwnerPath && <Navbar />}
      <div className="min-h-[70vh]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/rooms" element={<AllRoomsList />} />
          <Route path="/rooms/:id" element={<RoomDetails />} />
          <Route path="/my-bookings" element={<MyBookings />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};
export default App;
