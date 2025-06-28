import { createBrowserRouter } from "react-router";
import MainLayout from "../component/Layouts/MainLayout";
import Home from "../pages/Home/Home";
import Contact from "../pages/Contact/Contact";
import Experience from "../pages/Experience/Experience";
import Education from "../pages/Education/Education";
import Projects from "../pages/Projects/Projects";
import ProjectDetails from "../pages/ProjectDetails/ProjectDetails";
import About from "../pages/About/About";
import Skills from "../pages/Skills/Skills";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <h2>Not found</h2>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/about",
                element: <About></About>
            },
            {
                path: "/contact",
                element: <Contact></Contact>
            },
            {
                path: "/experience",
                element: <Experience></Experience>
            },
            {
                path: "/education",
                element: <Education></Education>
            },
            {
                path: "/projects",
                element: <Projects></Projects>
            },
            {
                path: "/projects/:id",
                element: <ProjectDetails></ProjectDetails>
            },
               {
                path: "/skills",
                element: <Skills></Skills>
            },
        ]
    }
])