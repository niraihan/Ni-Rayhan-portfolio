import React from "react";

const Experience = () => {
  return (
    <section className="py-20 px-6 bg-base-100 text-base-content">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-primary mb-12">Experience</h2>

        <div className="space-y-8">
          <div className="bg-base-200 p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-secondary">Frontend Developer (Intern)</h3>
            <p className="text-sm text-gray-500">TechNest Solutions | Jan 2024 – Apr 2024</p>
            <ul className="list-disc ml-5 mt-2 text-sm leading-relaxed">
              <li>Worked with React, Tailwind CSS, and Firebase on client dashboard.</li>
              <li>Collaborated with designers to improve UI/UX consistency.</li>
              <li>Integrated REST APIs and handled dynamic routing.</li>
            </ul>
          </div>

          <div className="bg-base-200 p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-secondary">Freelance Web Developer</h3>
            <p className="text-sm text-gray-500">Remote | May 2023 – Dec 2023</p>
            <ul className="list-disc ml-5 mt-2 text-sm leading-relaxed">
              <li>Developed 5+ responsive websites for small businesses using MERN stack.</li>
              <li>Delivered SEO-optimized and mobile-first websites with great performance scores.</li>
              <li>Handled client communication, deployment, and post-launch support.</li>
            </ul>
          </div>

          {/* Add more experience if applicable */}
        </div>
      </div>
    </section>
  );
};

export default Experience;