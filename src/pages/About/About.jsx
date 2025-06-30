import React from "react";
import profileImg from "../../assets/profile.png"; 
import Skills from "../Skills/Skills";

const About = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-br from-base-200 to-base-100 text-base-content">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl font-bold mb-12 text-center text-primary uppercase tracking-widest relative">
          {/* About Me */} LET ME <span className="text-orange-500">INTRODUCE</span>  MYSELF
          <span className="block w-20 h-[3px] bg-primary mx-auto mt-2 rounded-full"></span>
        </h2>

        {/* Flex Layout */}
        <div className="flex flex-col-reverse md:flex-row items-center gap-10">
          {/* Text Content */}
          <div className="md:w-2/3 space-y-6 text-lg leading-relaxed">
            <p>
              👋 Hello! I'm <span className="font-bold text-secondary">Nurul Islam Rayhan</span>, a
              passionate <span className="text-primary font-semibold">Full Stack Developer</span>{" "}
              with strong MERN stack experience.
            </p>

            <p>
              💡 I started my coding journey out of curiosity, and it quickly turned into a
              profession. From solving simple problems to building full-scale web apps, I enjoy
              every moment of it.
            </p>

            <p>
              ⚙️ I work with <span className="text-primary">React</span>,{" "}
              <span className="text-primary">Tailwind CSS</span>,{" "}
              <span className="text-primary">Node.js</span>, and{" "}
              <span className="text-primary">MongoDB</span> to build dynamic and user-friendly
              applications.
            </p>

            <p>
              ⚽ Outside of tech, I enjoy playing football, reading development blogs, and exploring
              creative UI design ideas. I believe in{" "}
              <span className="font-semibold">continuous improvement</span> and always strive to
              learn and grow.
            </p>
          </div>

          {/* Profile Image */}
          <div className="md:w-1/3 flex justify-center">
            <img
              src={profileImg}
              alt="Nurul Islam Rayhan"
              className="w-64 h-64 rounded-2xl object-cover border-4 border-primary shadow-lg"
            />
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default About;



