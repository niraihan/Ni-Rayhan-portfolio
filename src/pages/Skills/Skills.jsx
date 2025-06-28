import React from "react";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaGithub, FaDatabase } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiExpress, SiFirebase, SiVercel } from "react-icons/si";

const Skills = () => {
  return (
    <section className="py-20 px-6 bg-base-100 text-base-content">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-primary mb-12">My Skills</h2>

        {/* Frontend Skills */}
        <div className="mb-10">
          <h3 className="text-2xl font-semibold mb-4 text-secondary">Frontend</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            <Skill icon={<FaHtml5 />} label="HTML5" />
            <Skill icon={<FaCss3Alt />} label="CSS3" />
            <Skill icon={<SiTailwindcss />} label="Tailwind CSS" />
            <Skill icon={<FaJsSquare />} label="JavaScript" />
            <Skill icon={<FaReact />} label="React" />
            <Skill icon={<SiFirebase />} label="Firebase" />
          </div>
        </div>

        {/* Backend Skills */}
        <div className="mb-10">
          <h3 className="text-2xl font-semibold mb-4 text-secondary">Backend</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            <Skill icon={<FaNodeJs />} label="Node.js" />
            <Skill icon={<SiExpress />} label="Express.js" />
            <Skill icon={<SiMongodb />} label="MongoDB" />
            <Skill icon={<FaDatabase />} label="REST API" />
          </div>
        </div>

        {/* Tools */}
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-secondary">Tools</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            <Skill icon={<FaGithub />} label="GitHub" />
            <Skill icon={<SiVercel />} label="Vercel" />
            <Skill icon={<FaGithub />} label="Git" />
            <Skill icon={<FaDatabase />} label="MongoDB Atlas" />
          </div>
        </div>
      </div>
    </section>
  );
};

const Skill = ({ icon, label }) => (
  <div className="flex flex-col items-center gap-2 p-4 bg-base-200 rounded-lg shadow hover:shadow-lg transition duration-300">
    <div className="text-4xl text-primary">{icon}</div>
    <p className="text-sm font-medium">{label}</p>
  </div>
);

export default Skills;