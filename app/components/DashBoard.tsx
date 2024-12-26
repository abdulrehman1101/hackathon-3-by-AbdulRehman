"use client"
import React, { useState } from "react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark", !darkMode);
  };

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className=" top-4 left-4 z-50 p-2  bg-white rounded-md md:hidden"
      >
        {isOpen ? "✖" : "☰"}
      </button>

      {/* Sidebar */}
      <div
        className={` inset-y-0 left-0 z-40 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition-transform duration-300 bg-white  text-gray-900 dark:text-gray-700 w-64 md:w-72 lg:w-80 h-[130vh]`}
      >
        <div className="p-4">
          <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase">
            Main Menu
          </h3>
          <ul className="mt-4 space-y-2">
            <li className="flex items-center p-3 rounded-md bg-blue-100 dark:bg-blue-600 text-blue-700 dark:text-blue-200">
              <span className="mr-3 text-xl">🏠</span>
              Dashboard
            </li>
            <li className="flex items-center p-3 rounded-md hover:bg-gray-200 dark:hover:bg-blue-600">
              <span className="mr-3 text-xl">🚗</span>
              Car Rent
            </li>
            <li className="flex items-center p-3 rounded-md hover:bg-gray-200 dark:hover:bg-blue-600">
              <span className="mr-3 text-xl">📊</span>
              Insight
            </li>
            <li className="flex items-center p-3 rounded-md hover:bg-gray-200 dark:hover:bg-blue-600">
              <span className="mr-3 text-xl">💵</span>
              Reimburse
            </li>
            <li className="flex items-center p-3 rounded-md hover:bg-gray-200 dark:hover:bg-blue-600">
              <span className="mr-3 text-xl">📥</span>
              Inbox
            </li>
            <li className="flex items-center p-3 rounded-md hover:bg-gray-200 dark:hover:bg-blue-600">
              <span className="mr-3 text-xl">📅</span>
              Calendar
            </li>
          </ul>
        </div>

        <div className="p-4 mt-auto">
          <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase">
            Preferences
          </h3>
          <ul className="mt-4 space-y-2">
            <li className="flex items-center p-3 rounded-md hover:bg-gray-200 dark:hover:bg-blue-600">
              <span className="mr-3 text-xl">⚙️</span>
              Settings
            </li>
            <li className="flex items-center p-3 rounded-md hover:bg-gray-200 dark:hover:bg-blue-600">
              <span className="mr-3 text-xl">❓</span>
              Help & Center
            </li>
            <li className="flex items-center p-3 rounded-md">
              <span className="mr-3 text-xl">🌞</span>
              Dark Mode
              <button
                onClick={toggleDarkMode}
                className="ml-auto bg-gray-300 dark:bg-gray-700 p-2 rounded-full focus:outline-none"
              >
                {darkMode ? "🌙" : "🌞"}
              </button>
            </li>
          </ul>
        </div>

        <div className="p-4">
          <div className="flex items-center p-3 rounded-md hover:bg-gray-200 dark:hover:bg-blue-700 cursor-pointer">
            <span className="mr-3 text-xl">🚪</span>
            Log Out
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
