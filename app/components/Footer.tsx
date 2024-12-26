import React from "react";

export default function Footer() {
  return (
    <div className="max-w-[1440px] mx-auto w-full relative flex flex-col gap-6 px-5 bg-white py-6">
      <div className="w-full flex flex-wrap items-start justify-between gap-6">
        {/* Intro Section */}
        <div className="flex flex-col gap-2 w-full md:w-1/2 lg:w-auto">
          <h1 className="text-[#3563e9] text-2xl lg:text-3xl font-bold text-center lg:text-left">
            MORENT
          </h1>
          <p className="text-gray-500 text-center lg:text-left">
            Our vision is to provide convenience and help increase your sales
            business.
          </p>
        </div>

        {/* Lists Section */}
        <div className="flex flex-wrap gap-6 justify-center md:justify-start lg:justify-between w-full md:w-1/2 lg:w-auto lg:mr-10">
          <div className="flex flex-col gap-1">
            <h1 className="font-bold text-lg">About</h1>
            <ul>
              <li>How it works</li>
              <li>Featured</li>
              <li>Partnership</li>
              <li>Business Relation</li>
            </ul>
          </div>
          <div className="flex flex-col gap-1">
            <h1 className="font-bold text-lg">Community</h1>
            <ul>
              <li>Events</li>
              <li>Blog</li>
              <li>Podcast</li>
              <li>Invite a friend</li>
            </ul>
          </div>
          <div className="flex flex-col gap-1">
            <h1 className="font-bold text-lg">Socials</h1>
            <ul>
              <li>Discord</li>
              <li>Instagram</li>
              <li>Facebook</li>
              <li>Twitter</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Divider Line */}
      <div className="border-t w-full border-[#e7eef6]"></div>

      {/* Bottom Section */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="text-center md:text-left w-full md:w-auto">
          <h1 className="font-bold text-sm">©2022 MORENT. All rights reserved</h1>
        </div>
        <div className="flex flex-wrap justify-center md:justify-end items-center gap-4 w-full md:w-auto">
          <h1 className="font-bold text-sm">Privacy & Policy</h1>
          <h1 className="font-bold text-sm">Terms & Conditions</h1>
        </div>
      </div>
    </div>
  );
}
