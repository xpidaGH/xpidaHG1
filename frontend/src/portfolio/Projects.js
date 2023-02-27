// ~/src/portfolio/Projects.js
import React from "react";
import { projects } from "./data";

export default function Projects() {
  return (
    <section
      id="projects"
      className="text-orange-800 bg-teal-300 body-font 5-6"
    >
      <div className="container px-2 py-2 mx-auto text-center lg:px-20">
        <div className="flex flex-col w-full mb-10">
          {/* <CodeIcon className="mx-auto inline-block w-10 mb-4" /> */}
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            I Build Apps similar to the ones below:
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            My template uses Django, React and Tailwind. The full-stack consists
            of Portfolio and E-commerce sections. The present notes contain the
            frontend section and feature mainly the Portfolio in different
            languages.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {projects.map((project) => (
            <a
              href={project.link}
              key={project.image}
              className="sm:w-1/2 w-100 p-4"
            >
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={project.image}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-teal-200 bg-teal-300 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-orange-400 mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed">{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
