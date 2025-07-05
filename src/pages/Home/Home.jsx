import React from "react";

import About from "../About/About";
import Skills from "../Skills/Skills";
import Projects from "../Projects/Projects";
import Experience from "../Experience/Experience";
import Banner from "../../component/Banner/Banner";

const Home = () => {
  return (
    <>
      <Banner />
      <About />
      <Skills />
      <Projects />
      {/* <Experience /> */}
    </>
  );
};

export default Home;



