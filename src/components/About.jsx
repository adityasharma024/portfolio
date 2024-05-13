import React, { useState } from 'react';
import bannerImage from '../assets/adityasharma.jpeg';

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  const truncatedDesc = isExpanded ? data.desc1 + ' ' + data.desc2 : data.desc1;

  return (
    <div className="main-container mt-6 bg-gray-200 border py-16 p-4 md:p-16">
      <h1 className="text-5xl pb-8 md:pb-16 text-center underline font-bold">About Me</h1>
      <div className="flex flex-col md:flex-row items-center md:items-start">
        {/* image container */}
        <div className="w-full md:w-1/2 flex justify-center mb-4 md:mb-0">
          <img className="w-full md:w-3/4 lg:w-2/3 rounded-full" src={bannerImage} alt="" />
        </div>
        {/* text-container */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-start">
          <div className="space-y-5 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-semibold">C++ Developer & Web Developer</h1>
            <p className="text-sm md:text-base">{truncatedDesc}</p>
            {!isExpanded && (
              <button
                onClick={toggleReadMore}
                className="bg-orange-500 px-3 text-xl font-semibold rounded-full shadow-lg"
              >
                Read More...
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const data = {
  image: bannerImage,
  title: "C++ Developer & Web Developer",
  desc1: `Hello there! 👋 I'm Aditya, a passionate C++ developer and a creative mind in the realm of web development. With a knack for crafting robust and efficient C++ code, I thrive on solving complex problems and turning ideas into reality. In the dynamic world of web development, I specialize in creating captivating and user-friendly front-end experiences. From responsive design to seamless user interactions, I'm dedicated to delivering web solutions that not only meet but exceed expectations.My journey into the world of programming began with a fascination for problem-solving and a deep love for technology. Over the years, I've honed my skills in C++, delving into the intricacies of software development and algorithmic thinking. Simultaneously, I've embraced the ever-evolving landscape of web technologies, refining my expertise in front-end development to create visually stunning and intuitive user interfaces.`,
  desc2: `Currently, I am enrolled in ABES Engineering College located in Ghaziabad, where I am pursuing a degree in Artificial Intelligence and Machine Learning. With a current CGPA of 8.1, I have actively engaged in a diverse set of coursework, including Data Structures and Algorithms, Operating Systems, Database Management Systems, and Artificial Intelligence.

  My academic journey reflects a strong foundation in core computer science concepts, emphasizing both theoretical knowledge and practical application. I have dedicated myself to mastering essential programming and problem-solving skills, crucial for success in the fields of artificial intelligence and machine learning.
  
  Residing in a town in the district of Bareilly in Uttar Pradesh, I have seamlessly blended my academic pursuits with the rich cultural and community experiences offered by my hometown. This unique environment has provided me with a holistic education, fostering personal and intellectual growth.
  
  My passion for technology and learning extends beyond the classroom. I am particularly interested in exploring the interdisciplinary applications of artificial intelligence and machine learning, envisioning innovative solutions to real-world challenges. As I continue to excel in my studies, I am eager to contribute my skills and knowledge to the ever-evolving landscape of artificial intelligence, making a meaningful impact in the field.
  
  
  
  
  
  
  `,
  actionButton: {
    title: 'Read More...',
    link: ''
  }
};

export default About;
