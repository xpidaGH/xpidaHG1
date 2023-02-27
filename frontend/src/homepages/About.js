// ~/src/portfolio/About.js
import React from "react";
import { NavLink } from "react-router-dom";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-2 py-2 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-4 md:pr-2 flex flex-col mb-6 md:mb-0 items-center text-center">
          <p className="text-xl text-indigo-900 font-extrabold mb-2 px-2 leading-tight bg-white">
            I have a Tutorial for creating a Django/React/Tailwind WebApp
            exactly like this website. It consists of a Portfolio, Customer
            Relations Management (CRM), Ecommerce and other sections. The
            tutorial is very easy to use to create the app in a few days - even
            by minors. The starter Portfolio section is ready and more
            functionalities will be added later.
          </p>
          <p className="text-xl text-indigo-900 font-extrabold mb-2 leading-tight bg-white">
            <NavLink
              to="/Tutorial"
              className="text-red-900 animate-pulse border-green-900 border-4"
            >
              Tutorials
            </NavLink>{" "}
          </p>
        </div>
      </div>
    </section>
  );
}
