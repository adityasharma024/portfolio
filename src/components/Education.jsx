import React from 'react';

const Education = () => {
  return (
    <div className="main-container py-8 sm:py-16">
      <h1 className="text-3xl sm:text-5xl font-bold text-center underline mb-8">
        My Education
      </h1>
      <div className="projects-container space-y-8 sm:space-y-0 sm:space-x-5 px-4 sm:px-10 flex flex-col sm:flex-row">
        <div className="hover:bg-slate-400 w-full sm:w-1/2 bg-slate-200 p-4 sm:p-5 text-center project1 space-y-4 shadow-lg rounded-full">
          <i className="text-3xl sm:text-5xl fa-solid fa-graduation-cap"></i>
          <h1 className="text-xl sm:text-4xl">Bachelor of Technology</h1>
          <div>
            <p className="font-bold text-sm sm:text-base">
              College: ABES Engineering College, Ghaziabad, U.P.<br />
              Specialization: Artificial Intelligence & Machine Learning <br />
              Current CGPA: 8.1
            </p>
          </div>
        </div>
        <div className="hover:bg-slate-400 w-full sm:w-1/2 bg-slate-200 p-4 sm:p-5 text-center project1 space-y-4 shadow-lg rounded-full mt-4 sm:mt-0">
          <i className="text-3xl sm:text-5xl fa-solid fa-school"></i>
          <h1 className="text-xl sm:text-4xl">School Education</h1>
          <div className="font-bold">
            <h1>Krishna Public School, Bareilly, U.P.</h1>
            <p className="text-sm sm:text-base">
              Class 12 (Senior Secondary):
              Percentage: 95.6%,
              Year of Completion: 2019
            </p>
            <p className="text-sm sm:text-base">
              Class 10 (Secondary):
              Percentage: 95.2%
              Year of Completion: 2021
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
