import React from "react";
import { NavLink } from "react-router";


const projectList = [
  {
    id: "plant-care-tracker",
    name: "Plant Care Tracker",
    image: "/assets/projects/plant-care.jpg",
    live: "https://assignment10-f3015.web.app",
    github: "https://github.com/niraihan/plant-care-tracker",
    tech: ["React", "Firebase", "MongoDB"],
    description:
      "A web application to manage and track your plants' watering schedules and growth.",
  },
  {
    id: "jobtrack",
    name: "JobTrack",
    image: "/assets/projects/jobtrack.jpg",
    live: "https://niraihan-assignment09.surge.sh/",
    github: "https://github.com/niraihan/jobtrack-client",
    tech: ["React", "Tailwind", "Node.js"],
    description:
      "A job listing portal for companies and job seekers with user auth and dashboard.",
  },
  {
    id: "marathon-management",
    name: "Marathon Management System",
    image: "/assets/projects/marathon.jpg",
    live: "https://assignment11-d7122.web.app",
    github: "https://github.com/niraihan/marathon-client",
    tech: ["React", "Express", "MongoDB"],
    description:
      "Manage and register for marathons, complete with filtering, search, and authentication.",
  },
];

const Projects = () => {
  return (
    <section className="py-20 px-6 bg-base-200 text-base-content">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-primary mb-12">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectList.map((project) => (
            <div key={project.id} className="bg-base-100 shadow rounded-xl overflow-hidden">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-52 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-secondary mb-2">
                  {project.name}
                </h3>
                <p className="text-sm mb-3">{project.description}</p>
                <div className="flex flex-wrap gap-2 text-sm mb-4">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="badge badge-outline badge-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <a
                    href={project.live}
                    className="btn btn-sm btn-primary"
                    target="_blank"
                  >
                    Live Site
                  </a>
                  <NavLink to={`/projects/${project.id}`} className="btn btn-sm btn-outline">
                    View Details
                  </NavLink>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;