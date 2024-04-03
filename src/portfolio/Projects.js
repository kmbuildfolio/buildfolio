import { CodeIcon } from "@heroicons/react/solid";
import React, { useState } from "react";

export default function Projects({ projects }) {
  const [projectsDetails, setProjectDetails] = useState(projects);
  const handleChangeProjectInfo = (index, project) => {
    setProjectDetails((prev) => {
      const updatedProjects = [...prev];
      updatedProjects[index] = project;
      return updatedProjects;
    })
  }
  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Apps I've Built
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Explore a curated collection of projects exemplifying my dedication and proficiency.
            From concept to execution, witness the manifestation of creative ingenuity.
            Let's transform ideas into impactful realities.
          </p>
        </div>
        <div className="flex flex-wrap justify-center">
          {projectsDetails.map((project, key) => (
            <div
              key={key}
              className="sm:w-1/2 w-full p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={project.image ? project.image : "./project-default.png"}
                  onError={() => { handleChangeProjectInfo(key, { ...project, image: "./project-default.png" }) }}
                />
                <div className="px-8 pt-10 pb-5 relative z-10 w-full border-4 border-gray-800
                 bg-gray-900 opacity-0 hover:opacity-100">
                  <a href={project.url === "" ? null : project.url} target="_blank" className="overflow-wrap-anywhere">
                    <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                      {project.tech}
                    </h2>
                    <h1 className="title-font text-lg font-medium text-white mb-3">
                      {project.name}
                    </h1>
                    <p className="leading-relaxed mb-5">{project.description}</p>
                  </a>
                  <span><a href={project.code} target="_blank" className="hover:underline hover:text-blue-500">Code</a></span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}