// src/pages/Contact.js
import { useState } from 'react';
import contactImage from '../Assets/Cam.png';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    emailjs.sendForm(
      'service_w9h9g0p',
      'template_vn8lkdq',
      e.target,
      'o2gpz--FtKrMkd15b'
    )
  
 
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
};

  return (
    <div>

      <section
        className="relative h-[300px] bg-cover bg-[center_25%]"
        style={{ backgroundImage: `url(${contactImage})`}}
      >
        <div className="absolute inset-0 bg-blue-900 bg-opacity-50 flex justify-center md:justify-start items-center p-8">
          <h1 className="text-white text-3xl font-bold">CONTACT US</h1>
        </div>
      </section>
      <section className="p-8 bg-white text-center">
        <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8">
          <div className="md:w-1/2 text-centermd:text-left">
            <h2 className="text-3xl text-center md:text-left font-bold mb-4">Get in touch</h2>
            <p className="text-lg text-center md:text-left text-gray-700 mb-4">
              <a href="mailto:camcribcleaners@gmail.com" className="text-black-500 hover:text-blue-700 text-transform: uppercase font-bold">Cameron Danylchuk </a>
            </p>
            <p className="text-lg text-center md:text-left text-gray-700 mb-4">
              <strong>Location</strong><br />
              Vancouver, BC!
            </p>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">Send us a message</h2>
            <p className="text-lg text-center text-gray-700 mb-4">
              Contact CribCleaners today for professional, reliable cleaning services tailored to your needs!
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex space-x-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-1/2 p-2 border border-gray-300 rounded"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your E-mail"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-1/2 p-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div className="flex space-x-4">
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-1/2 p-2 border border-gray-300 rounded"
                  required
                />
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-1/2 p-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
              <button
                type="submit"
                className="px-8 py-3 bg-blue-600 text-white font-bold uppercase rounded hover:bg-blue-800 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
      <section className="p-8 bg-white text-center">
        <h2 className="text-3xl font-bold mb-4">Our Location</h2>
        <div className="flex justify-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d666316.7885831394!2d-124.30975837970666!3d49.28018767735656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5462ce9005f9dfa5%3A0xce9c6c979ef4fca6!2sMetro%20Vancouver%2C%20BC!5e0!3m2!1sen!2sca!4v1770015941117!5m2!1sen!2sca"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Metro Vancouver Service Area"
          />
        </div>
      </section>
    </div>
  );
};

export default Contact;
