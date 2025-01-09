import React from 'react';
import logo from '../Assets/logoblue.png'; 
import facebookIcon from '../Assets/facebook.png'; 
import linkedinIcon from '../Assets/linkedin.png'; 
import instagramIcon from '../Assets/insta.png'; 
import twitterIcon from '../Assets/twitter.png'; 

const Footer = () => {
  return (
    <footer className="bg-white text-black py-4 border-t border-gray-300">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center ml-4">
          <img src={logo} alt="Logo" className="h-8 w-auto mx-2" />
          <span className="font-bold"></span>
        </div>
        <div className="flex flex-col justify-center items-center border-l border-gray-300 pl-6 mr-6">
          <h3 className="font-bold">Contacts</h3>
          <h1 className="text-center px-1">Vancouver, BC</h1>
          <p className="pr-1">thecribcleaners@gmail.com</p>
          <div className="flex space-x-4 mr-2 mt-2">
            <a href="https://facebook.com" className="flex items-center text-blue-500 hover:text-blue-700">
              <img src={facebookIcon} alt="Facebook" className="h-5 w-5 mr-1" />
            </a>
            <a href="https://linkedin.com" className="flex items-center text-blue-500 hover:text-blue-700">
              <img src={linkedinIcon} alt="LinkedIn" className="h-5 w-5 mr-1" />
            </a>
            <a href="https://instagram.com" className="flex items-center text-blue-500 hover:text-blue-700">
              <img src={instagramIcon} alt="Instagram" className="h-5 w-5 mr-1" />
            </a>
            <a href="https://twitter.com" className="flex items-center text-blue-500 hover:text-blue-700">
              <img src={twitterIcon} alt="Twitter" className="h-5 w-5 mr-1" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;