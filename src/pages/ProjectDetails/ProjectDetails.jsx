import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const projectData = {
  "plant-care-tracker": {
    name: "Plant Care Tracker",
    image: "/assets/projects/plant-care.jpg",
    description: "Track watering schedules, growth, and notes for houseplants.",
    tech: ["React", "Firebase Auth", "MongoDB", "Express"],
    live: "https://assignment10-f3015.web.app",
    github: "https://github.com/niraihan/plant-care-tracker",
    challenges: [
      "Building dynamic plant schedules.",
      "Handling authentication and route protection.",
    ],
    improvements: [
      "Add notifications for watering reminders.",
      "Enable photo uploads per plant.",
    ],
  },
  jobtrack: {
    name: "JobTrack",
    image: "/assets/projects/jobtrack.jpg",
    description: "Job listing platform with authentication and admin features.",
    tech: ["React", "Tailwind CSS", "Node.js", "MongoDB"],
    live: "https://niraihan-assignment09.surge.sh/",
    github: "https://github.com/niraihan/jobtrack-client",
    challenges: [
      "Dynamic dashboard rendering by role.",
      "Filtering, sorting, and search implementation.",
    ],
    improvements: ["Add resume upload feature.", "Implement email alerts."],
  },
  "marathon-management": {
    name: "Marathon Management System",
    image: "/assets/projects/marathon.jpg",
    description:
      "Manage, register and explore marathons with secure user login and dashboard.",
    tech: ["React", "Express", "MongoDB", "Firebase Auth"],
    live: "https://assignment11-d7122.web.app",
    github: "https://github.com/niraihan/marathon-client",
    challenges: [
      "Secure route protection with JWT.",
      "Dynamic filtering by registration deadline.",
    ],
    improvements: ["Add payment integration.", "Introduce event review system."],
  },
};

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projectData[id];
  const navigate = useNavigate();

  if (!project) return <p className="text-center py-20 text-error">Project Not Found</p>;

  return (
    <section className="py-20 px-6 bg-base-100 text-base-content">
      <div className="max-w-4xl mx-auto">
        <button onClick={() => navigate(-1)} className="btn btn-sm mb-6">
          ← Back
        </button>

        <h2 className="text-3xl font-bold text-primary mb-4">{project.name}</h2>
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-64 object-cover rounded-xl mb-6"
        />
        <p className="mb-4 text-base-content">{project.description}</p>

        <div className="mb-4">
          <h4 className="font-semibold text-secondary">Tech Stack:</h4>
          <div className="flex flex-wrap gap-2 mt-2">
            {project.tech.map((t, idx) => (
              <span key={idx} className="badge badge-outline badge-primary">
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-4">
          <h4 className="font-semibold text-secondary">Challenges:</h4>
          <ul className="list-disc ml-5">
            {project.challenges.map((c, idx) => (
              <li key={idx}>{c}</li>
            ))}
          </ul>
        </div>

        <div className="mb-6">
          <h4 className="font-semibold text-secondary">Improvements:</h4>
          <ul className="list-disc ml-5">
            {project.improvements.map((imp, idx) => (
              <li key={idx}>{imp}</li>
            ))}
          </ul>
        </div>

        <div className="flex gap-4">
          <a
            href={project.live}
            target="_blank"
            className="btn btn-primary"
            rel="noreferrer"
          >
            Live Site
          </a>
          <a
            href={project.github}
            target="_blank"
            className="btn btn-outline"
            rel="noreferrer"
          >
            GitHub Repo
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;
