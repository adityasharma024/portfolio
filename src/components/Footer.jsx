import React from 'react';

const Footer = () => {
  return (
    <div className="pt-5 mt-6 bg-gray-100 flex flex-col sm:flex-row justify-between px-4 sm:px-8 md:px-16 lg:px-32 xl:px-64">
      <div className="mb-4 sm:mb-0">
        <p>@2024 Aditya Sharma  <span>All Rights Reserved</span></p>
      </div>
      <div className="space-y-2 sm:space-y-0 space-x-5 flex flex-col sm:flex-row">
        <a className="hover:underline" href="./about">About</a>
        <a className="hover:underline" href="./privacy-policy">Privacy Policy</a>
        <a className="hover:underline" href="./licensing">Licensing</a>
        <a className="hover:underline" href="./contact">Contact</a>
      </div>
    </div>
  );
};

export default Footer;
