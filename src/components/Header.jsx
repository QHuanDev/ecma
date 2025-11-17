import React from "react";

const Header = () => {
  return (
    <header className="bg-white shadow-md py-4 px-6 z-99 relative">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <a
            href=""
            className="text-4xl font-bold text-green-400 transition duration-300 ease-in-out transform hover:scale-110"
          >
            TRAVEL
          </a>
        </div>

        <nav className="hidden md:flex space-x-14">
          <a
            href="/"
            className="text-gray-700 hover:text-blue-600 transition duration-300 ease-in-out transform hover:scale-105"
          >
            Trang chủ
          </a>
          <a
            href="#"
            className="text-gray-700 hover:text-blue-600 transition duration-300 ease-in-out transform hover:scale-105"
          >
            Tour
          </a>
          <a
            href="/about"
            className="text-gray-700 hover:text-blue-600 transition duration-300 ease-in-out transform hover:scale-105"
          >
            Giới thiệu
          </a>
          <a
            href="#"
            className="text-gray-700 hover:text-blue-600 transition duration-300 ease-in-out transform hover:scale-105"
          >
            Liên hệ
          </a>
        </nav>

        <div className="flex items-center space-x-4">
          <a
            href="<?= BASE_URL ?>?act=cart&id=1"
            className="relative inline-block group transition-transform duration-200 hover:scale-110"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              ></path>
            </svg>
          </a>
          <div className="relative inline-block text-left">
            <button
              onclick="toggleDropdown()"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700  focus:outline-none transition duration-300 ease-in-out transform hover:scale-110"
            >
              <div className=" flex gap-2 text-sm text-gray-600 hover:text-green-600 border-gray-200">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  ></path>
                </svg>
                Xin chào, <span className="font-medium text-gray-900"></span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
