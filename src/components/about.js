// src/pages/About.js
import React from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from '../Assets/banner2.jpeg';
import reliableIcon from '../Assets/serviceFour.svg';   
import professionalIcon from '../Assets/serviceFive.svg'; 
import thoroughIcon from '../Assets/serviceTwo.svg'; 
import camImage from '../Assets/Cam.png'; 
import jacobImage from '../Assets/Jacob.png';
import banner from '../Assets/banner.png';

const features = [
  {
    img: reliableIcon,
    title: 'RELIABLE',
    description:
      'At Crib Cleaners, we\'re dedicated to excellence. Our team delivers reliable, top-notch cleaning services you can trust.',
  },
  {
    img: professionalIcon,
    title: 'PROFESSIONAL',
    description:
      'With meticulous attention to detail, we ensure every space is immaculate. Choose Crib Cleaners for consistent, exceptional results.',
  },
  {
    img: thoroughIcon,
    title: 'THOROUGH',
    description:
      'Our team is thorough in every task, ensuring a clean and safe environment for your property.',
  },
];

const experts = [
  {
    img: camImage,
    name: 'CAM',
    title: 'Co-Founder',
  },
  {
    img: jacobImage,
    name: 'JACOB',
    title: 'Co-Founder',
  },
];


function About() {
  return (
    <div>
      <section
        className="relative h-64 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}>
          
        <div className="absolute inset-0 bg-blue-900 bg-opacity-50 flex justify-start items-center p-8">
          <h1 className="text-white text-3xl font-bold">ABOUT US</h1>
        </div>
      </section>
      <section className="p-8 bg-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">WHY US</h2>
        <p className="text-lg md:text-xl text-center md:text-left text-gray-700 mb-8">
          At Crib Cleaners, we're dedicated to excellence. Our team delivers reliable, top-notch cleaning services you can trust. With meticulous attention to detail, we ensure every space is immaculate. Choose Crib Cleaners for consistent, exceptional results.
        </p>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div key={index} className="bg-blue-900 text-white p-6 rounded-lg">
              <img src={feature.img} alt={feature.title} className="h-12 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
            </div>
          ))}
        </div>
      </section>
      <section className="p-8 bg-white flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8">
      <div className="md:w-1/2 text-left">
        <h2 className="text-3xl text-center font-bold mb-4">OUR GOAL</h2>
        <p className="text-lg justify-center items-center mx-auto mx-0 text-gray-700 text-center md:text-left mb-4">
          At Crib Cleaners, our mission is clear: to surpass your expectations with every cleaning service we offer. We are dedicated to making your space shine, leaving you thoroughly satisfied with the results. Trust us to elevate your cleaning experience to a whole new level of excellence.
        </p>
      </div>
      <div className="md:w-1/2 bg-blue-900 text-white p-6 rounded-lg">
        <ul className="space-y-4">
          <li className="flex items-center">
            <span className="text-2xl mr-2">•</span>
            <span className="text-lg font-bold">CUSTOMER SATISFACTION</span>
          </li>
          <li className="flex items-center">
            <span className="text-2xl mr-2">•</span>
            <span className="text-lg font-bold">QUALITY SERVICE</span>
          </li>
          <li className="flex items-center">
            <span className="text-2xl mr-2">•</span>
            <span className="text-lg font-bold">SAFETY ASSURANCE</span>
          </li>
          <li className="flex items-center">
            <span className="text-2xl mr-2">•</span>
            <span className="text-lg font-bold">ECO-FRIENDLY PRACTICES</span>
          </li>
        </ul>
      </div>
    </section>
    <section className="p-8 bg-white text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">OUR EXPERTS</h2>
      <p className="text-lg md:text-xl text-center md:text-left text-gray-700 mb-24">
        Crib Cleaners was founded in 2022 by Cam, and Jacob. The guys have a keen eye for detail and it shows in their work. Passionate about providing a quality service like no other, the Crib Cleaners work hard to maintain a professional, yet friendly, dynamic with their customers.
      </p>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 justify-items-center">
        {experts.map((expert, index) => (
          <div key={index} className="bg-white mx-auto shadow-lg rounded-lg overflow-hidden">
            <img src={expert.img} alt={expert.name} className="w-[100vw] h-60 object-contain" />
            <div className="p-4">
              <h3 className="text-4xl font-bold">{expert.name}</h3>
              <p className="text-gray-600 text-2xl text-transform: uppercase">{expert.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
    <section
      className="relative h-64 bg-cover bg-center"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <div className="absolute inset-0 bg-blue-900 bg-opacity-50 flex flex-col justify-center items-center">
        <h1 className="text-white text-4xl text-center font-bold mb-4">LOOKING FOR A QUOTE?</h1>
          <Link to="/contact" className="mt-4 px-6 py-2 bg-black text-white font-bold uppercase rounded hover:bg-gray-800 transition">
              Contact
          </Link>
      </div>
    </section>
    </div>
  );
}

export default About;
