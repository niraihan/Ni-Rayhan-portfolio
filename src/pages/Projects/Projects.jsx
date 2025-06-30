import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/project.json")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch projects data");
        return res.json();
      })
      .then((data) => {
        setProjects(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <section className="py-20 px-6 bg-base-200 text-base-content min-h-screen flex justify-center items-center">
        <p className="text-xl font-semibold">Loading projects...</p>
      </section>
    );
  }

  return (
    <section className="py-20 px-6 bg-base-200 text-base-content min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-primary mb-12">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-base-100 shadow rounded-xl overflow-hidden flex flex-col"
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-52 object-cover"
              />
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-secondary mb-2">
                  {project.name}
                </h3>
                <p className="text-sm mb-3 flex-grow">{project.description}</p>
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
                <div className="flex justify-between items-center mt-auto">
                  <a
                    href={project.live}
                    className="btn btn-sm btn-primary"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Live Site
                  </a>
                  <NavLink
                    to={`/projects/${project.id}`}
                    className="btn btn-sm btn-outline"
                  >
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