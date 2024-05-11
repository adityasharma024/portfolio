import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const menuLinks = [
    { title: "Home", link: "/", id: 1 },
    { title: "About", link: "/about", id: 2 },
    { title: "Services", link: "/services", id: 3 },
    { title: "Expertise", link: "/expertise", id: 4 },
    { title: "Contact", link: "/contact", id: 5 },
  ];

  const actionButton = {
    title: "Download CV",
    link: "https://drive.google.com/file/d/1w1Bo81eChwvGgtshTL4yPOFWS1byGJzB/view?usp=sharing",
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="h-20 border main flex justify-between items-center px-4 sm:px-8 md:px-16 lg:px-32 xl:px-64 bg-gray-200">
        <div>
          <h1 className="text-3xl font-bold">Aditya Sharma</h1>
        </div>
        <div className="hidden sm:flex space-x-6 items-center">
          {menuLinks.map((link) => (
            <Link
              key={link.id}
              to={link.link}
              className="hover:text-orange-600 font-serif"
            >
              {link.title}
            </Link>
          ))}
          <a href={actionButton.link} className="hover:text-orange-600">
            <FontAwesomeIcon icon={faDownload} size="lg" />
          </a>
        </div>
        <div className="sm:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <img
              src="https://img.icons8.com/ios/50/000000/menu--v1.png"
              alt="Menu"
            />
          </button>
        </div>
        {isMenuOpen && (
          <ul className="sm:hidden absolute top-20 left-0 right-0 bg-gray-200 flex flex-col items-center">
            {menuLinks.map((link) => (
              <li key={link.id}>
                <a href={link.link} className="hover:text-orange-600 font-serif py-2"> {link.title}</a>
              </li>
            ))}
            <li>
              <a href={actionButton.link} className="hover:text-orange-600 font-serif py-2"> {actionButton.title}</a>
            </li>
          </ul>
        )}
      </nav>
    </>
  );
};

export default Header;
