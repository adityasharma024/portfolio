import bannerImage from '../assets/Untitled.jpeg';
import Typed from 'typed.js';
import bannerBackground from '../assets/banner_wallpaper.svg';
import { useEffect, useRef } from 'react';

const Banner = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Software Developer", "Web Developer", "Problem Solver"],
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      loop: true,
    });

    // Destroying the Typed instance on component unmount
    return () => {
      typed.destroy();
    };
  }, []);
  const emailLink = 'mailto:adityatrigunayat040@gmail.com';
  const linkedinlink = 'https://www.linkedin.com/in/adityasharma024';
  const githublikn='https://github.com/adityasharma024';
  const instagramlink='https://www.instagram.com/aditya____sharma_/';
 

  return (
    <>
     
      <div
        style={{
          backgroundImage: `url(${bannerBackground})`,
          backgroundSize: 'cover',
        }}
        className="main-container flex flex-col md:flex-row items-center justify-between mt-10 py-16 px-6 md:px-16"
      >
        <div className="w-full md:w-1/2">
          <div className="container mx-auto text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-semibold">Hi, I am</h3>
            <h1 className="mt-2 text-3xl md:text-5xl font-bold">Aditya Sharma</h1>
            <h2 className="mt-2 text-xl md:text-3xl">
              And I am <span ref={el}></span>
            </h2>
            <p className="mt-2 text-sm md:text-base">
              Passionate Software Engineer & Continuous and Eternal Learner in
              the World of Bits and Bytes, Crafting Code with Precision and
              Curiosity
            </p>
            <div className="icons-container space-x-5 flex mt-4">
              <a
                href={linkedinlink} target='_black' 
                className="border-green-700 hover:bg-orange-600 animate-pulse px-2 md:px-3 py-3 md:py-4 h-12 md:h-16 w-12 md:w-16 rounded-full flex justify-center bg-gray-800 item-center"
              >
                <i className="fa-brands text-white text-2xl md:text-4xl fa-linkedin"></i>
              </a>
              <a
                href={githublikn} target='_blank'
                className="border-green-700 hover:bg-orange-600 animate-pulse cursor-pointer px-2 md:px-3 py-3 md:py-4 h-12 md:h-16 w-12 md:w-16 rounded-full flex justify-center bg-gray-800 item-center"
              >
                <i className="fa-brands text-2xl md:text-4xl text-white fa-github"></i>
              </a>
              <a
                href={instagramlink} target='_same'
                className="border-green-700 hover:bg-orange-600 animate-pulse cursor-pointer px-2 md:px-3 py-3 md:py-4 h-12 md:h-16 w-12 md:w-16 rounded-full flex justify-center bg-gray-800 item-center"
              >
                <i className="fa-brands text-2xl md:text-4xl text-white fa-instagram"></i>
              </a>
            </div>
            <br />
            <a
              className="bg-orange-600 rounded-full font-bold text-white px-3 py-2 font-serif mt-2 md:mt-4 text-sm md:text-base"
              href={emailLink}
            >
              Contact Me
            </a>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center mt-4 md:mt-0">
          <img
            className=" size-72 md:size-80 my-6 shadow-lg rounded-full"
            src={bannerImage}
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Banner;
