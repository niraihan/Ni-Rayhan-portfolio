import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaFacebook,
} from "react-icons/fa";
import profileimg from "../../assets/profile.png";

const Banner = () => {
  return (
    <section className="hero min-h-[80vh] bg-base-100 px-4  md:px-10">
      <div className="hero-content flex-col lg:flex-row-reverse gap-10">
        <img
          src={profileimg}
          className="max-w-xs rounded-full shadow-2xl border-4 border-primary"
          alt="Nazrul Islam"
        />
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-primary">
            Hi, I’m <span className="text-secondary">Nurul Islam Rayhan</span>
          </h1>
          <p className="py-4 text-lg md:text-xl font-medium">
            A Passionate <span className="text-accent"> Full Stack Developer | MERN Stack | JavaScript Lover</span>
          </p>
          <p className="mb-6 max-w-xl text-base text-justify">
            I love crafting beautiful, responsive, and user-friendly web applications.
            I’m currently focused on building full-stack applications using React, Node.js,
            and MongoDB. Let's build something amazing together!
          </p>

          <div className="flex flex-wrap gap-4 mb-6">
            <a
              href="/assets/resume.pdf"
              download="Nurul_Resume.pdf"
              className="btn btn-primary"
            >
              Download Resume
            </a>
            <a href="/contact" className="btn btn-outline btn-secondary">
              Hire Me
            </a>
          </div>

          <div className="flex gap-4 text-2xl text-primary">
            <a
              href="https://github.com/niraihan"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/niraihan"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://twitter.com/iamniraihan"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition"
            >
              <FaTwitter />
            </a>
            <a
              href="https://facebook.com/niraihan2"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition"
            >
              <FaFacebook />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
