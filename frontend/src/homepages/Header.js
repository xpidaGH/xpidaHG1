//  ~\frontend\src\components\Header.js
import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";

function Header() {
  return (
    <header className="bg-green-600">
      <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
        <a href="#home">
          <img src="./logo.png" alt="logo" />
        </a>
        <a
          href="#download"
          className="title-font font-medium text-white mb-4 md:mb-0 ml-3 text-xl"
        >
          E-commerce
        </a>
        <span className="text-xl text-center text-white animate-pulse bg-rose-600">
          Under Construction
        </span>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700 text-white flex flex-wrap items-center text-xl justify-center">
          <a href="#Cart" className="mr-5 hover:text-white">
            Cart
          </a>
          <a href="#Users" className="mr-5 hover:text-white">
            Users
          </a>
          <a href="#Products" className="mr-5 hover:text-white">
            Products
          </a>
        </nav>
        <a
          href="#Orders"
          className="inline-flex items-center bg-teal-200 border-0 py-1 px-3 focus:outline-none hover:bg-teal-100 rounded text-base mt-4 md:mt-0"
        >
          Orders
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </a>
      </div>
    </header>
  );
}

export default Header;
