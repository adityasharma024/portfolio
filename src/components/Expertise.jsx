import React from 'react';
import bannerBackground from '../assets/banner_wallpaper.svg';
import Contact from './Contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
const Expertise = () => {
  const hire=<Contact></Contact>;
  return (
    <div className="mt-2">
      <h1 className="mb-8 text-3xl sm:text-5xl font-bold underline text-center">
        My Expertise
      </h1>
      {/* box section */}
      <div
        style={{
          backgroundImage: `url(${bannerBackground})`,
          backgroundSize: 'cover',
        }}
        className="box-container flex flex-col md:flex-row items-center py-16 px-4 md:px-16"
      >
        <div className="flex text-white justify-center mb-8 md:mb-0 md:mr-8">
          {/* text container */}
          <div className="w-full md:w-2/3 text-center ml-10 md:text-left space-y-4">
            <h1 className="text-2xl md:text-4xl font-bold">
              I love these technologies
            </h1>
            <p className="w-2/3 md:text-center md:ml-24">
              "In the enchanting realm of technology, I navigate with a dance of
              exploration. With the grace of a twirl, I indulge in beginner's
              curiosity, progress to a waltz of intermediate proficiency, and
              culminate in a tango of expert finesse. Each step, a rhythmic
              journey through the ever-evolving landscape of innovation and
              mastery."
            </p>
            <a href={
              <div>
                <Router>
               <Route path="/contact" element={<Contact />} />
               </Router>
              </div>
            } className="text-xl md:text-2xl px-4 py-2 bg-orange-500 rounded-full shadow-lg ">
              Hire Me
            </a>
          </div>
        </div>
        <div className="flex justify-center md:justify-start w-full md:w-2/3 flex-wrap">
          {/* skills container */}
          <p className="bg-gray-300 w-full sm:w-1/2 md:w-auto mt-2 px-3 py-3 sm:mr-2 md:mr-3 sm:mb-2 md:mb-0 hover:bg-orange-500 hover:shadow-lg hover:border-gray-600 border-4 rounded-full skill-item">
            Core C language
          </p>
          <p className="bg-gray-300 w-full sm:w-1/2 md:w-auto mt-2 px-3 py-3 sm:mr-2 md:mr-3 sm:mb-2 md:mb-0 hover:bg-orange-500 hover:shadow-lg hover:border-gray-600 border-4 rounded-full skill-item">
            C++
          </p>
          {/* Add other skills similarly */}
          <p className="bg-gray-300 w-full sm:w-1/2 md:w-auto mt-2 px-3 py-3 sm:mr-2 md:mr-3 sm:mb-2 md:mb-0 hover:bg-orange-500 hover:shadow-lg hover:border-gray-600 border-4 rounded-full skill-item">
            Problem Solving
          </p>
          <p className="bg-gray-300 w-full sm:w-1/2 md:w-auto mt-2 px-3 py-3 sm:mr-2 md:mr-3 sm:mb-2 md:mb-0 hover:bg-orange-500 hover:shadow-lg hover:border-gray-600 border-4 rounded-full skill-item">
            Data Structures
          </p>
          <p className="bg-gray-300 w-full sm:w-1/2 md:w-auto mt-2 px-3 py-3 sm:mr-2 md:mr-3 sm:mb-2 md:mb-0 hover:bg-orange-500 hover:shadow-lg hover:border-gray-600 border-4 rounded-full skill-item">
            Algorithms
          </p>
          <p className="bg-gray-300 w-full sm:w-1/2 md:w-auto mt-2 px-3 py-3 sm:mr-2 md:mr-3 sm:mb-2 md:mb-0 hover:bg-orange-500 hover:shadow-lg hover:border-gray-600 border-4 rounded-full skill-item">
            Java Script
          </p>
          <p className="bg-gray-300 w-full sm:w-1/2 md:w-auto mt-2 px-3 py-3 sm:mr-2 md:mr-3 sm:mb-2 md:mb-0 hover:bg-orange-500 hover:shadow-lg hover:border-gray-600 border-4 rounded-full skill-item">
            Advanced JavaScript
          </p>
          <p className="bg-gray-300 w-full sm:w-1/2 md:w-auto mt-2 px-3 py-3 sm:mr-2 md:mr-3 sm:mb-2 md:mb-0 hover:bg-orange-500 hover:shadow-lg hover:border-gray-600 border-4 rounded-full skill-item">
            React Js
          </p>
          <p className="bg-gray-300 w-full sm:w-1/2 md:w-auto mt-2 px-3 py-3 sm:mr-2 md:mr-3 sm:mb-2 md:mb-0 hover:bg-orange-500 hover:shadow-lg hover:border-gray-600 border-4 rounded-full skill-item">
            HTML
          </p>
          <p className="bg-gray-300 w-full sm:w-1/2 md:w-auto mt-2 px-3 py-3 sm:mr-2 md:mr-3 sm:mb-2 md:mb-0 hover:bg-orange-500 hover:shadow-lg hover:border-gray-600 border-4 rounded-full skill-item">
            CSS
          </p>
          <p className="bg-gray-300 w-full sm:w-1/2 md:w-auto mt-2 px-3 py-3 sm:mr-2 md:mr-3 sm:mb-2 md:mb-0 hover:bg-orange-500 hover:shadow-lg hover:border-gray-600 border-4 rounded-full skill-item">
            Tailwind CSS Framework
          </p>
          <p className="bg-gray-300 w-full sm:w-1/2 md:w-auto mt-2 px-3 py-3 sm:mr-2 md:mr-3 sm:mb-2 md:mb-0 hover:bg-orange-500 hover:shadow-lg hover:border-gray-600 border-4 rounded-full skill-item">
            SQL
          </p>
          <p className="bg-gray-300 w-full sm:w-1/2 md:w-auto mt-2 px-3 py-3 sm:mr-2 md:mr-3 sm:mb-2 md:mb-0 hover:bg-orange-500 hover:shadow-lg hover:border-gray-600 border-4 rounded-full skill-item">
            Python
          </p>
          <p className="bg-gray-300 w-full sm:w-1/2 md:w-auto mt-2 px-3 py-3 sm:mr-2 md:mr-3 sm:mb-2 md:mb-0 hover:bg-orange-500 hover:shadow-lg hover:border-gray-600 border-4 rounded-full skill-item">
            Operating System
          </p>
          <p className="bg-gray-300 w-full sm:w-1/2 md:w-auto mt-2 px-3 py-3 sm:mr-2 md:mr-3 sm:mb-2 md:mb-0 hover:bg-orange-500 hover:shadow-lg hover:border-gray-600 border-4 rounded-full skill-item">
            Database Management system
          </p>
        </div>
      </div>
    </div>
  );
};

export default Expertise;
