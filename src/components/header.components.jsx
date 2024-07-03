import React from "react";
import { CiLocationOn } from "react-icons/ci";

const Header = () => {
  return (
    <nav className="bg-white shadow p-2">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center justify-between w-full md:w-auto">
          <div className="text-red-500 text-lg font-bold">BookUsNow</div>
          <div className="flex items-center md:hidden">
            <CiLocationOn />
            <span>Mumbai, India</span>
          </div>
          <button className="md:hidden bg-black text-white px-4 py-2 rounded-md flex items-center space-x-2">
            <span>☰</span>
            <span>Categories</span>
          </button>
        </div>

        <div className="hidden md:flex md:items-center space-x-4">
          <div className="flex items-center space-x-2">
            <CiLocationOn />
            <span>Mumbai, India</span>
          </div>
          <div className="relative w-full md:w-64">
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="DJI phantom"
            />
            <button className="absolute right-0 top-0 mt-2 mr-2">
              <svg
                className="w-5 h-5 text-gray-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M12.9 14.32a8 8 0 111.41-1.41l5.38 5.38a1 1 0 01-1.42 1.42l-5.38-5.38zM8 14A6 6 0 108 2a6 6 0 000 12z" />
              </svg>
            </button>
          </div>
          <div className="text-sm hidden md:flex space-x-4">
            <a href="#" className="hover:text-red-500">
              Live shows
            </a>
            <a href="#" className="hover:text-red-500">
              Streams
            </a>
            <a href="#" className="hover:text-red-500">
              Movies
            </a>
            <a href="#" className="hover:text-red-500">
              Plays
            </a>
            <a href="#" className="hover:text-red-500">
              Events
            </a>
            <a href="#" className="hover:text-red-500">
              Sports
            </a>
            <a href="#" className="hover:text-red-500">
              Activities
            </a>
          </div>
        </div>

        <div className="flex items-center space-x-4 mt-2 md:mt-0">
          <a href="#" className="hover:text-red-500">
            ♥ Favorites
          </a>
          <button className="border text-sm px-4 py-2 rounded-md hover:bg-gray-200">
            Sign In
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
