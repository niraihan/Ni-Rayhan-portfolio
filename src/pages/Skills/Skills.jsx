import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaDatabase,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiFirebase,
  SiVercel,
} from "react-icons/si";

const Skills = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-br from-base-100 to-base-200 text-base-content">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center text-orange-500 mb-16 tracking-wide uppercase">
          My Skills
        </h2>

        {/* Frontend */}
        <SkillCategory
          title="Frontend"
          skills={[
            {
              icon: <FaHtml5 />,
              label: "HTML5",
              colorStart: "from-orange-400",
              colorEnd: "to-orange-600",
              shadow: "shadow-orange-400/50",
            },
            {
              icon: <FaCss3Alt />,
              label: "CSS3",
              colorStart: "from-blue-400",
              colorEnd: "to-blue-600",
              shadow: "shadow-blue-400/50",
            },
            {
              icon: <SiTailwindcss />,
              label: "Tailwind CSS",
              colorStart: "from-cyan-400",
              colorEnd: "to-cyan-600",
              shadow: "shadow-cyan-400/50",
            },
            {
              icon: <FaJsSquare />,
              label: "JavaScript",
              colorStart: "from-yellow-300",
              colorEnd: "to-yellow-500",
              shadow: "shadow-yellow-400/50",
            },
            {
              icon: <FaReact />,
              label: "React",
              colorStart: "from-sky-400",
              colorEnd: "to-sky-600",
              shadow: "shadow-sky-400/50",
            },
            {
              icon: <SiFirebase />,
              label: "Firebase",
              colorStart: "from-amber-400",
              colorEnd: "to-amber-600",
              shadow: "shadow-amber-400/50",
            },
          ]}
        />

        {/* Backend */}
        <SkillCategory
          title="Backend"
          skills={[
            {
              icon: <FaNodeJs />,
              label: "Node.js",
              colorStart: "from-lime-400",
              colorEnd: "to-lime-600",
              shadow: "shadow-lime-400/50",
            },
            {
              icon: <SiExpress />,
              label: "Express.js",
              colorStart: "from-gray-600",
              colorEnd: "to-gray-800",
              shadow: "shadow-gray-600/50",
            },
            {
              icon: <SiMongodb />,
              label: "MongoDB",
              colorStart: "from-green-500",
              colorEnd: "to-green-700",
              shadow: "shadow-green-500/50",
            },
            {
              icon: <FaDatabase />,
              label: "REST API",
              colorStart: "from-purple-600",
              colorEnd: "to-purple-800",
              shadow: "shadow-purple-600/50",
            },
          ]}
        />

        {/* Tools */}
        <SkillCategory
          title="Tools"
          skills={[
            {
              icon: <FaGithub />,
              label: "GitHub",
              colorStart: "from-gray-700",
              colorEnd: "to-gray-900",
              shadow: "shadow-gray-700/50",
            },
            {
              icon: <SiVercel />,
              label: "Vercel",
              colorStart: "from-black",
              colorEnd: "to-gray-900",
              shadow: "shadow-black/50",
            },
            {
              icon: <FaGithub />,
              label: "Git",
              colorStart: "from-orange-600",
              colorEnd: "to-orange-800",
              shadow: "shadow-orange-600/50",
            },
            {
              icon: <FaDatabase />,
              label: "MongoDB Atlas",
              colorStart: "from-emerald-600",
              colorEnd: "to-emerald-800",
              shadow: "shadow-emerald-600/50",
            },
          ]}
        />
      </div>
    </section>
  );
};

const SkillCategory = ({ title, skills }) => (
  <div className="mb-16">
    <h3 className="text-3xl font-semibold mb-8 text-center text-orange-400">{title}</h3>
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
      {skills.map((skill, index) => (
        <SkillCard
          key={index}
          icon={skill.icon}
          label={skill.label}
          colorStart={skill.colorStart}
          colorEnd={skill.colorEnd}
          shadow={skill.shadow}
        />
      ))}
    </div>
  </div>
);

const SkillCard = ({ icon, label, colorStart, colorEnd, shadow }) => (
  <div className="flex flex-col items-center gap-4 p-6 rounded-xl bg-base-200 border border-base-300 shadow-sm hover:shadow-xl transform hover:scale-105 transition-all duration-300 cursor-default">
    <div
      className={`text-white text-4xl p-5 rounded-full bg-gradient-to-tr ${colorStart} ${colorEnd} ${shadow} shadow-lg`}
    >
      {icon}
    </div>
    <p className="text-base font-semibold text-base-content">{label}</p>
  </div>
);

export default Skills;
