// src/pages/Services.js
import React from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from '../Assets/banner-1st-1.jpg';
import serviceOne from '../Assets/serviceOne.svg';
import serviceTwo from '../Assets/serviceTwo.svg';
import serviceThree from '../Assets/serviceThree.svg';
import serviceFour from '../Assets/serviceFour.svg';
import serviceFive from '../Assets/serviceFive.svg';
import banner from '../Assets/banner.png';

const services = [
  {
    img: serviceOne,
    title: 'Pressure Washing',
    description:
      'CribCleaners offers expert pressure washing to maintain your property\'s pristine condition. We remove dirt, grime, mold, and mildew, ensuring a clean, safe, and attractive environment for all properties.',
  },
  {
    img: serviceTwo,
    title: 'Window Cleaning',
    description:
      'CribCleaners offers professional window cleaning to keep your property spotless. We ensure crystal-clear, streak-free windows, enhancing the appearance and brightness of your home or business. Reliable, efficient, and thorough service.',
  },
  {
    img: serviceThree,
    title: 'Gutter Cleaning',
    description:
      'CribCleaners offers expert gutter cleaning to keep your property in top condition. We remove debris and ensure proper water flow, preventing damage and maintaining a safe, attractive environment for all properties.',
  },
  {
    img: serviceFour,
    title: 'Soft Wash',
    description:
      'CribCleaners offers expert soft wash services to keep your property spotless. We use gentle, effective cleaning methods to remove dirt and stains, ensuring a clean, safe, and attractive environment for all properties.',
  },
  {
    img: serviceFive,
    title: 'Roof Cleaning',
    description:
      'CribCleaners offers expert roof cleaning to keep your property in pristine condition. We remove moss, algae, and debris, ensuring a clean, safe, and attractive roof that enhances the overall appearance of your home or business.',
  },
];

function Services() {
  return (
    <div>
      <section
        className="relative h-64 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <h1 className="text-white text-3xl font-bold">OUR SERVICES</h1>
        </div>
      </section>
      <section className="p-8 bg-gray-100 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">OUR SERVICES</h2>
        <p className="text-lg md:text-xl text-gray-700 mb-8">
          Our friendly technicians are available around the clock, providing prompt same-day or next-day service. We understand that issues can arise unexpectedly, and we are committed to being there for residents whenever they need us, 24/7.
        </p>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div key={index} className="bg-blue-900 text-white p-6 rounded-lg">
              <img src={service.img} alt={service.title} className="h-12 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
          <div className="bg-blue-500 text-white p-6 rounded-lg flex flex-col justify-center items-center">
            <h3 className="text-2xl font-bold mb-2">GET QUOTE</h3>
            <p>
              Get a quote from CribCleaners for our top-notch services. We provide customized estimates to meet your specific needs, ensuring high-quality and affordable solutions for maintaining a clean, safe, and attractive property. Contact us today!
            </p>
            <Link to="/contact" className="mt-4 px-6 py-2 bg-black text-white font-bold uppercase rounded hover:bg-gray-800 transition">
              Contact
            </Link>
          </div>
        </div>
      </section>
      <section
        className="relative h-64 bg-cover bg-center"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="absolute inset-0 bg-blue-900 bg-opacity-50 flex flex-col justify-center items-center">
          <h1 className="text-white text-4xl font-bold mb-4">NEED A QUOTE?</h1>
          <Link to="/contact" className="px-8 py-3 bg-blue-600 text-white font-bold uppercase rounded hover:bg-blue-800 transition">
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Services;
