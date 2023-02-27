// ~/src/portfolio/Navbar.js
import React from "react";
import { NavLink } from "react-router-dom";
import Header from "../homepages/Header";
import { sites } from "../general/sites";

export default function Navbar() {
  const style = ({ isActive }) => ({
    fontWeight: isActive ? "bold" : "normal",
  });
  const normalLink =
    "inline-flex items-center bg-teal-200 border-0 py-1 px-3 focus:outline-none hover:bg-teal-100 rounded text-base mt-4 md:mt-0";

  return (
    <div>
      <header className="bg-green-800 border-8 border-lime-400">
        <div className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center">
          <NavLink to="/Homescreen" style={style}>
            <img src="./nana_2.jpg" alt="nana_1" />
          </NavLink>
          <NavLink
            to="/Contact"
            className="title-font font-medium text-white mb-4 md:mb-0 ml-3 text-xl"
          >
            Nana Tuffuor
          </NavLink>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700 text-orange-300 flex f*lex-wrap items-center text-xl justify-center">
            <NavLink
              to="/Projects"
              className="mr-5 hover:text-white"
              style={style}
            >
              Past Work
            </NavLink>
            <NavLink
              to="/Skills"
              className="mr-5 hover:text-white"
              style={style}
            >
              Skills
            </NavLink>
            <NavLink
              to="/Testimonials"
              className="mr-5 hover:text-white"
              style={style}
            >
              Testimonials
            </NavLink>
          </nav>
          <span>
            {sites.map((item) => (
              <span key={item.title}>
                <span className="title-font font-medium text-white mb-4 md:mb-0 mr-1 text-lg">
                  {item.title}
                </span>
                {item.sites.map((link) => (
                  <>
                    <span className=" space-x-1">|</span>
                    {/* With later routers, NavLink may be used for external url */}
                    <a href={link.url} className={normalLink}>
                      {link.name}
                    </a>
                  </>
                ))}
              </span>
            ))}
          </span>
        </div>
      </header>
      <Header />
    </div>
  );
}
