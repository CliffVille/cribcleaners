//src/pages/Body.js
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import hero from '../Assets/hero.png';
import background from '../Assets/background.gif';
import serviceOne from '../Assets/serviceOne.svg';
import serviceTwo from '../Assets/serviceTwo.svg';
import serviceThree from '../Assets/serviceThree.svg';
import serviceFour from '../Assets/serviceFour.svg';
import serviceFive from '../Assets/serviceFive.svg';
import beforeAfter1 from '../Assets/beforeAfter1.png';
import beforeAfter2 from '../Assets/beforeAfter2.png';
import beforeAfter3 from '../Assets/beforeAfter3.png';
import beforeAfter4 from '../Assets/beforeAfter4.png';
import beforeAfter5 from '../Assets/beforeAfter5.png';
import beforeAfter6 from '../Assets/beforeAfter6.png';
import beforeAfter7 from '../Assets/beforeAfter7.png';
import beforeAfter8 from '../Assets/beforeAfter8.png';
import profile1 from '../Assets/Rob.jpg';
import profile2 from '../Assets/Amanda.jpg';
import profile3 from '../Assets/Bob.jpg';
import Before1 from '../Assets/Before1.png';
import Before2 from '../Assets/Before2.png';
import Before3 from '../Assets/Before3.png';
import team from '../Assets/Cam.png';

const Body = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const reviewSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <section
        className="relative h-[628px] bg-cover bg-center top"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
          <img src={hero} alt="Logo" className="h-24 mb-4" />
          <h1 className="text-4xl md:text-6xl font-bold">YOUR HOME DETAILING EXPERTS</h1>
          <p className="text-lg md:text-2xl mt-4">Serving the Vancouver area since 2022</p>
          <Link to="/contact" className="mt-8 px-8 py-3 bg-blue-500 text-white font-bold uppercase rounded hover:bg-blue-700 transition">
            Get A Free Quote
          </Link>
        </div>
      </section>
      <section className="p-8 bg-white flex flex-col justify-center items-center text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#0582ca] w-full max-w-screen-lg mb-4 md:mb-8">
          "A TEAM OF YOUNG PROFESSIONAL CLEANERS"
        </h2>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-black w-full max-w-screen-xl">
          We are a premier home detailing company, specializing in the cleaning and detailing of exterior windows, siding, and gutters. Locally based in Vancouver, we are a team of young professionals looking to service and satisfy customers all over the lower mainland.
        </p>
      </section>
      <section className="p-8 bg-gray-100 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">OUR SERVICES</h2>
        <p className="text-lg md:text-xl text-gray-700 mb-8">
          Our friendly technicians are available around the clock, providing prompt same-day or next-day service. We understand that issues can arise unexpectedly, and we are committed to being there for residents whenever they need us, 24/7.
        </p>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-blue-900 text-white p-6 rounded-lg">
            <img src={serviceOne} alt="Pressure Washing" className="h-12 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">Pressure Washing</h3>
            <p>
              CribCleaners offers expert pressure washing to maintain your property's pristine condition. We remove dirt, grime, mold, and mildew, ensuring a clean, safe, and attractive environment for all properties.
            </p>
          </div>
          <div className="bg-blue-900 text-white p-6 rounded-lg">
            <img src={serviceTwo} alt="Window Cleaning" className="h-12 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">Window Cleaning</h3>
            <p>
              CribCleaners offers professional window cleaning to keep your property spotless. We ensure crystal-clear, streak-free windows, enhancing the appearance and brightness of your home or business. Reliable, efficient, and thorough service.
            </p>
          </div>
          <div className="bg-blue-900 text-white p-6 rounded-lg">
            <img src={serviceThree} alt="Gutter Cleaning" className="h-12 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">Gutter Cleaning</h3>
            <p>
              CribCleaners offers expert gutter cleaning to keep your property in top condition. We remove debris and ensure proper water flow, preventing damage and maintaining a safe, attractive environment for all properties.
            </p>
          </div>
          <div className="bg-blue-900 text-white p-6 rounded-lg">
            <img src={serviceFour} alt="Soft Wash" className="h-12 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">Soft Wash</h3>
            <p>
              CribCleaners offers expert soft wash services to keep your property spotless. We use gentle, effective cleaning methods to remove dirt and stains, ensuring a clean, safe, and attractive environment for all properties.
            </p>
          </div>
          <div className="bg-blue-900 text-white p-6 rounded-lg">
            <img src={serviceFive} alt="Roof Cleaning" className="h-12 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">Roof Cleaning</h3>
            <p>
              CribCleaners offers expert roof cleaning to keep your property in pristine condition. We remove moss, algae, and debris, ensuring a clean, safe, and attractive roof that enhances the overall appearance of your home or business.
            </p>
          </div>
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
      <section className="p-8 bg-[#1c274c] text-white">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col justify-center text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">SEE OUR WORK</h2>
            <p className="text-lg md:text-xl mb-8">
              See the stunning transformations in our before and after photos, showcasing the meticulous care and attention to detail we bring to every job.
            </p>
            <Link to="/#see-more" className="px-3 py-2 bg-blue-500 text-white font-bold uppercase rounded hover:bg-blue-700 transition w-[150px] text-center mx-auto md:mx-0">
              See more
            </Link>
          </div>
          <div className="flex justify-center items-center">
            <Slider {...settings} className="w-full max-w-4xl">
              <div className="flex justify-center">
                <img src={beforeAfter1} alt="Before and After 1" className="w-full h-64 object-cover rounded-lg" />
              </div>
              <div className="flex justify-center">
                <img src={beforeAfter2} alt="Before and After 2" className="w-full h-64 object-cover rounded-lg" />
              </div>
              <div className="flex justify-center">
                <img src={beforeAfter3} alt="Before and After 3" className="w-full h-64 object-cover rounded-lg" />
              </div>
              <div className="flex justify-center">
                <img src={beforeAfter4} alt="Before and After 4" className="w-full h-64 object-cover rounded-lg" />
              </div>
              <div className="flex justify-center">
                <img src={beforeAfter5} alt="Before and After 5" className="w-full h-64 object-cover rounded-lg" />
              </div>
              <div className="flex justify-center">
                <img src={beforeAfter6} alt="Before and After 5" className="w-full h-64 object-cover rounded-lg" />
              </div>
              <div className="flex justify-center">
                <img src={beforeAfter7} alt="Before and After 5" className="w-full h-64 object-cover rounded-lg" />
              </div>
              <div className="flex justify-center">
                <img src={beforeAfter8} alt="Before and After 5" className="w-full h-64 object-cover rounded-lg" />
              </div>
            </Slider>
          </div>
        </div>
      </section>
      <section className="p-8 bg-gray-100 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1c274c] mb-8">WHAT PEOPLE ARE SAYING</h2>
        <Slider {...reviewSettings}>
          <div className="p-4">
            <div className="bg-white shadow-lg rounded-[20px] overflow-hidden relative">
              <img src={Before1} alt="Review 1" className="w-full h-70 object-cover" />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-60">
                <div className="flex items-center mb-2">
                  <img src={profile1} alt="Rob W" className="w-12 h-12 rounded-full mr-4" />
                  <div>
                    <h3 className="text-xl font-bold text-white text-left">Rob W</h3>
                    <p className="text-yellow-500 text-left">★★★★★</p>
                  </div>
                </div>
                <p className="text-gray-300 text-left">CribCleaners did an amazing job on my house! The team was professional, efficient, and left my place spotless. Highly recommend their services!</p>
              </div>
            </div>
          </div>
          <div className="p-4">
            <div className="bg-white shadow-lg rounded-[20px] overflow-hidden relative">
              <img src={Before2} alt="Review 2" className="w-full h-70 object-cover" />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-60">
                <div className="flex items-center mb-2">
                  <img src={profile2} alt="Amanda A" className="w-12 h-12 rounded-full mr-4" />
                  <div>
                    <h3 className="text-xl font-bold text-white text-left">Amanda A</h3>
                    <p className="text-yellow-500 text-left">★★★★★</p>
                  </div>
                </div>
                <p className="text-gray-300 text-left">Absolutely thrilled with the results! The team was courteous, on time, and did a fantastic job. My windows have never been cleaner!</p>
              </div>
            </div>
          </div>
          <div className="p-4">
            <div className="bg-white shadow-lg rounded-[20px] overflow-hidden relative">
              <img src={Before3} alt="Review 3" className="w-full h-70 object-cover" />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-60">
                <div className="flex items-center mb-2">
                  <img src={profile3} alt="Bob J" className="w-12 h-12 rounded-full mr-4" />
                  <div>
                    <h3 className="text-xl font-bold text-white text-left">Bob J</h3>
                    <p className="text-yellow-500 text-left">★★★★★</p>
                  </div>
                </div>
                <p className="text-gray-300 text-left">Excellent service from start to finish. The crew was friendly and thorough, and my gutters are now debris-free. Will definitely use CribCleaners again!</p>
              </div>
            </div>
          </div>
        </Slider>
      </section>
      <section className="p-8 bg-[#1c274c] text-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <img src={team} alt="Team Photo" className="w-fill 2xl:ml-[50px] rounded-lg object-cover" />
          <div className="2xl:mr-[50px]">
            <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">MEET CAM</h2>
            <p className="text-lg md:text-xl mb-8 text-center">
              Crib Cleaners was founded in 2022 by Cam. Cam has a keen eye for detail and it shows in his work. The Crib Cleaners work hard to maintain a professional, yet friendly, dynamic with their customers.
            </p>
            <Link to="/contact" className="px-3 py-3 flex justify-center items-center mx-auto w-[150px] bg-blue-500 text-white font-bold uppercase rounded hover:bg-blue-700 transition">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Body;
