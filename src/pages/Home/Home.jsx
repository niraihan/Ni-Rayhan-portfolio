import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";
import About from "../About/About";
import Skills from "../Skills/Skills";
import Projects from "../Projects/Projects";
import Experience from "../Experience/Experience";
import profileimg from "../../assets/profile.png"
const Home = () => {
    return (
        <>
            {/* Hero Section */}
            <section className="hero min-h-screen bg-base-100 px-6 pt-24 pb-10 text-center">
                <div className="flex flex-col items-center gap-6">
                    {/* Profile Image */}
                    <div className="relative">
                        <img
                            src={profileimg}
                            alt="Nurul Islam Rayhan"
                            className="w-40 h-40 rounded-full border-4 border-primary shadow-lg hover:scale-105 duration-300"
                        />
                        <span className="absolute bottom-0 right-2 w-3 h-3 bg-green-500 border-2 border-white rounded-full animate-ping"></span>
                    </div>

                    {/* Name with gradient look using DaisyUI color */}
                    <h1 className="text-4xl lg:text-5xl font-bold text-primary">
                        Hi, I'm <span className="text-secondary">Nurul Islam Rayhan</span>
                    </h1>

                    <p className="text-lg text-base-content font-medium">
                        Full Stack Developer | MERN Stack | JavaScript Lover
                    </p>

                    {/* Resume Button */}
                    <a
                        href="/assets/resume.pdf"
                        download
                        className="btn btn-primary mt-2 hover:brightness-110 hover:scale-105 duration-300"
                    >
                        ⬇ Download Resume
                    </a>

                    {/* Social Icons */}
                    <div className="flex justify-center gap-6 mt-6 text-2xl">
                        <a
                            href="https://github.com/niraihan"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                            className="hover:text-primary transition"
                        >
                            <FaGithub />
                        </a>
                        <a
                            href="https://linkedin.com/in/niraihan"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                            className="hover:text-primary transition"
                        >
                            <FaLinkedin />
                        </a>
                        <a
                            href="https://twitter.com/iamniraihan"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Twitter"
                            className="hover:text-primary transition"
                        >
                            <FaTwitter />
                        </a>
                        <a
                            href="https://facebook.com/niraihan2"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Facebook"
                            className="hover:text-primary transition"
                        >
                            <FaFacebook />
                        </a>
                    </div>
                </div>
            </section>


            {/* Other Sections */}
            <About />
            <Skills />
            <Projects />
            <Experience />
        </>
    );
};

export default Home;
