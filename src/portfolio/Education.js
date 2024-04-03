import React from "react";
import {
  AcademicCapIcon,
  LocationMarkerIcon,
  PencilIcon,
} from "@heroicons/react/solid";

export default function Education({education}) {
  return (
    <section id="education">
      <div className="container px-5 py-10 mx-auto text-center">
        <AcademicCapIcon className="w-10 inline-block mb-4" />
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">
          Educational Journey
        </h1>
        <div className="flex flex-wrap m-4 justify-center overflow-wrap-anywhere">
          {education.map((education,key) => (
            <div key={key} className="p-4 md:w-1/2 w-full">
              <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded">
                <div className="flex">
                  <PencilIcon className="block w-8 text-gray-500 mb-4" />
                  <div className="w-full">
                    <div className="font-medium text-xl text-white ml-[-32px]">
                      {education.course}
                    </div>
                  </div>
                </div>

                <div className="inline-flex items-center">
                  <span className="flex-grow flex flex-col justify-center">
                    <div className="font-medium text-lg">
                      {education.university}
                    </div>
                    <div className="font-medium text-base text-white py-1">
                      {education.institution}
                    </div>
                    <div className="flex place-self-center gap-1">
                      <LocationMarkerIcon className="w-4" />
                      <span className="text-gray-500 text-sm uppercase">
                        {education.location}
                      </span>
                    </div>
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
