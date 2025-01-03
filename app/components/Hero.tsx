import Link from 'next/link';
import React from 'react';

const Hero = () => {
  return (
    <div className="bg-gray-50 max-w-[1440px] mx-auto flex flex-col items-center justify-center">
      <section className="container px-4 py-8 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Card */}
          <div
            className="bg-blue-100 p-6 rounded-lg shadow-md"
            style={{
              backgroundImage: 'url("/bg2.jpg")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 w-full md:w-[272px]">
              The Best Platform for Car Rental
            </h2>
            <p className="text-white mb-6 w-full md:w-[284px]">
              Ease of doing a car rental safely and reliably. Of course at a low price.
            </p>
            <Link href={"/detailPage"}>
              <button className="bg-blue-600 text-white px-4 md:px-6 py-2 rounded-lg hover:bg-blue-700">
                Rental Car
              </button>
            </Link>
            <img
              src="/carp1.png"
              alt="Car"
              className="mt-4 w-full md:w-[340px] h-auto md:h-[108px] object-cover"
            />
          </div>

          {/* Right Card */}
          <div
            className="bg-blue-200 p-6 rounded-lg shadow-md"
            style={{
              backgroundImage: 'url("/bg1.jpg")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 w-full md:w-[272px]">
              Easy way to rent a car at a low price
            </h2>
            <p className="text-white mb-6 w-full md:w-[284px]">
              Providing cheap car rental services and safe and comfortable facilities.
            </p>
            <Link href={"/detailPage"}>
              <button className="bg-[#54A6FF] text-white px-4 md:px-6 py-2 rounded-lg hover:bg-blue-700">
                Rental Car
              </button>
            </Link>
            <img
              src="/car (1).png"
              alt="Car"
              className="mt-4 w-full md:w-[340px] h-auto md:h-[108px] object-cover"
            />
          </div>
        </div>

        {/* Booking Section */}
        <div className="flex flex-col md:flex-row items-center gap-4 mt-8 bg-white p-6 rounded-lg shadow-md">
          {/* Pick-Up Section */}
          <div className="flex-1 w-full">
            <h3 className="text-lg font-medium mb-2">Pick-Up</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm mb-1">Locations</label>
                <select className="w-full border rounded-md p-2">
                  <option>Select your city</option>
                  <option>Karachi</option>
                  <option>Lahore</option>
                  <option>Islamabad</option>
                  <option>Hyderabad</option>
                  <option>Larkana</option>
                  <option>Multan</option>
                </select>
              </div>
              <div>
                <label className="block text-sm mb-1">Date</label>
                <input
                  type="date"
                  className="w-full border rounded-md p-2"
                />
              </div>
              <div>
                <label className="block text-sm mb-1">Time</label>
                <input
                  type="time"
                  className="w-full border rounded-md p-2"
                />
              </div>
            </div>
          </div>

          {/* Swap Button */}
          <div>
            <button className="bg-blue-500 text-white p-4 rounded-full shadow-md hover:bg-blue-600">
              ↔
            </button>
          </div>

          {/* Drop-Off Section */}
          <div className="flex-1 w-full">
            <h3 className="text-lg font-medium mb-2">Drop-Off</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm mb-1">Locations</label>
                <select className="w-full border rounded-md p-2">
                  <option>Select your city</option>
                  <option>Karachi</option>
                  <option>Lahore</option>
                  <option>Islamabad</option>
                  <option>Hyderabad</option>
                  <option>Larkana</option>
                  <option>Multan</option>
                </select>
              </div>
              <div>
                <label className="block text-sm mb-1">Date</label>
                <input
                  type="date"
                  className="w-full border rounded-md p-2"
                />
              </div>
              <div>
                <label className="block text-sm mb-1">Time</label>
                <input
                  type="time"
                  className="w-full border rounded-md p-2"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
