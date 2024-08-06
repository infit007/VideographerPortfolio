// src/pages/Main.js
import React from "react";
import videoBg from "../assets/videos/Vhst.mp4"; // Correct path to the video file
import circularImage from "../assets/images/pic4.jpg"; // Path to your circular image
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video
        src={videoBg}
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white">
        {/* Circular image with zoom effect and space for text below */}
        <div className="flex flex-col items-center justify-center">
          <div className="relative h-48 w-48 overflow-hidden rounded-full">
            <img
              src={circularImage}
              alt="Circular"
              className="transform scale-110 absolute inset-0 h-full w-full object-cover"
            />
          </div>
          {/* Space for text */}
          <div className="mt-6 text-center">
            <p className="text-lg font-semibold text-gray-200">
              Hello, I'm Jayesh, a passionate videography artist.
            </p>
            <p className="text-lg font-semibold text-gray-200">
              I'm delighted to have you explore my gallery.
            </p>
          </div>
        </div>
        {/* Grey Button */}
        <Link
          to="/gallery"
          className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600 mt-6"
        >
          View my Gallery
        </Link>
      </div>
    </div>
  );
};

export default Main;
