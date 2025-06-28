import React from "react";

const Education = () => {
  return (
    <section className="py-20 px-6 bg-base-200 text-base-content">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-primary mb-12">Education</h2>

        <div className="timeline timeline-vertical">
          <div className="timeline-item">
            <div className="timeline-start">2021 - Present</div>
            <div className="timeline-middle bg-primary w-4 h-4 rounded-full"></div>
            <div className="timeline-end mb-10">
              <h3 className="text-xl font-semibold text-secondary">B.Sc in Computer Science & Engineering</h3>
              <p className="text-sm">XYZ University, CGPA: 3.85/4.00</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-start">2018 - 2020</div>
            <div className="timeline-middle bg-primary w-4 h-4 rounded-full"></div>
            <div className="timeline-end mb-10">
              <h3 className="text-xl font-semibold text-secondary">Higher Secondary Certificate (HSC)</h3>
              <p className="text-sm">ABC College, GPA: 5.00</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-start">2016 - 2018</div>
            <div className="timeline-middle bg-primary w-4 h-4 rounded-full"></div>
            <div className="timeline-end">
              <h3 className="text-xl font-semibold text-secondary">Secondary School Certificate (SSC)</h3>
              <p className="text-sm">XYZ High School, GPA: 5.00</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;