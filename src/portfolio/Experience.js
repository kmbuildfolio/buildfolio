import React from "react";
import { TerminalIcon, OfficeBuildingIcon } from "@heroicons/react/solid";

export default function Experience({experience}) {
  return (
    <section id="experience">
      <div className="container px-5 py-10 mx-auto text-center">
        <OfficeBuildingIcon className="w-10 inline-block mb-4" />
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">
          Professional Journey
        </h1>
        <div className="flex flex-wrap m-4">
          {experience.map((experience,key) => (
            <div key={key} className="p-4 md:w-1/2 w-full">
              <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded">
                <div className="flex">
                  <TerminalIcon className="block w-8 text-gray-500 mb-4" />
                  <div className="w-full">
                    <div className="title-font font-medium text-white">
                      {experience.role}
                    </div>
                  </div>
                </div>

                <div className="inline-flex items-center">
                  <span className="flex-grow flex flex-col">
                    <div className="flex self-center items-center w-2/5 justify-around pb-4">
                      <img
                        alt="logo"
                        src={experience.image ? experience.image : "./experience-default.png"}
                        className="w-8 rounded-full flex-shrink-0 object-cover object-center"
                      />
                      <div className="font-medium text-lg">{experience.company}</div>
                    </div>

                    <span className="text-gray-500 text-sm uppercase">
                      {experience.description}
                    </span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
