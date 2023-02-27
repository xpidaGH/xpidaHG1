// ~/src/portfolio/NavbarBottom.js
import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";
import { NavLink } from "react-router-dom";
import Footer from "./Footer";
import CommentBox from "./CommentBox";

export default function NavbarBottom() {
  return (
    <div>
      <Footer />
      <CommentBox />
      <footer className="bg-teal-600 border-8 border-green-700">
        <div className="container mx-auto flex flex-wrap p-1 flex-col md:flex-row items-center">
          <a href="#home">
            <img src="./logo.png" alt="logo" />
          </a>
          <span className="title-font font-medium text-white mb-4 md:mb-0 ml-3 text-xl">
            Social Media:
          </span>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700 text-white flex flex-wrap items-center text-base justify-center">
            <a href="https://www.facebook.com/nana.tuffuor.79" className="mr-5">
              Facebook
            </a>
            <a
              href="https://twitter.com/tuffuornana"
              className="mr-5 hover:text-white"
            >
              Twitter
            </a>
            <a href="tuffuornana@gmail.com">
              &copy;2022 xpida.net - All rights reserved.
            </a>
          </nav>
          <NavLink
            to="/UsefulLinks"
            className="inline-flex items-center bg-teal-200 border-0 py-1 px-3 focus:outline-none hover:bg-teal-100 rounded text-base mt-4 md:mt-0"
          >
            Useful Links
            <ArrowRightIcon className="w-4 h-4 ml-1" />
          </NavLink>
        </div>
      </footer>
    </div>
  );
}
