
import React from "react";
import { Link, NavLink } from "react-router-dom";
import ThemeToggle from "../Theme/ThemeToggle";

const Navbar = () => {
  const navLinks = (
    <>
      <li><NavLink to="/" className="font-medium" end>Home</NavLink></li>
      <li><NavLink to="/about" className="font-medium">About</NavLink></li>
      {/* <li><NavLink to="/skills" className="font-medium">Skills</NavLink></li> */}
      {/* <li><NavLink to="/education" className="font-medium">Education</NavLink></li> */}
      {/* <li><NavLink to="/experience" className="font-medium">Experience</NavLink></li> */}
      <li><NavLink to="/projects" className="font-medium">Projects</NavLink></li>
      <li><NavLink to="/contact" className="font-medium">Contact</NavLink></li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow fixed top-0 z-50 px-4 lg:px-16">
      <div className="navbar-start">
        <Link to="/" className="text-xl font-bold text-primary">
          NI<span className="text-secondary">Dev</span>
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2">
          {navLinks}
        </ul>
      </div>

      <div className="navbar-end gap-0.5 md:gap-2">
        <ThemeToggle></ThemeToggle>
        <a
          href="/resume.pdf"
          download
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-sm btn-primary"
        >
          Resume
        </a>
        <div className="dropdown dropdown-end lg:hidden">
          <label tabIndex={0} className="btn btn-sm btn-ghost ml-2">
            ☰
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
