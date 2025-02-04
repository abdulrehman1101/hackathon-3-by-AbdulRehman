import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiSearch, FiSettings, FiHeart, FiBell } from "react-icons/fi";

const Header = () => {
  return (
    <div className="max-w-[1440px] mx-auto w-full bg-white py-4 px-4 md:px-8 shadow-md flex flex-wrap items-center justify-between">
      <div className="flex items-center space-x-4 lg:space-x-60 w-full lg:w-auto">
        {/* Logo */}
        <h1 className="font-bold text-[30px] sm:text-[40px] text-[#3563E9]">
          <Link href="/">MORENT</Link>
        </h1>

        {/* Profile icon for mobile */}
        <button className="text-gray-500 sm:hidden">
        <Image src="/Prof.svg" alt="profile" width={44} height={44} />
        </button>
      </div>

      {/* Search Bar - Visible on all screens */}
      <div className="w-full sm:w-auto sm:flex-grow sm:max-w-2xl mb-4 sm:mb-0 sm:mx-4">
        <div className="flex items-center border rounded-full p-2 w-full">
          <FiSearch className="text-gray-500 w-5 h-5 ml-2" />
          <input
            type="text"
            placeholder="Search something here"
            className="w-full outline-none bg-transparent placeholder:text-sm mx-2"
          />
          <FiSettings className="text-gray-500 w-7 h-7 mr-2" />
        </div>
      </div>

      {/* Right-aligned icons */}
      <div className="hidden sm:flex items-center space-x-4">
        <button className="text-gray-500">
          <FiHeart size={32} />
        </button>
        <button className="text-gray-500">
          <FiBell size={32} />
        </button>
        <button className="text-gray-500">
          <FiSettings size={32} />
        </button>
         {/* Profile Picture */}
         <Link href="/userProfile">
          <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-gray-300 flex items-center justify-center overflow-hidden cursor-pointer">
            <Image src="/profile.png" alt="Profile" width={40} height={40} />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
