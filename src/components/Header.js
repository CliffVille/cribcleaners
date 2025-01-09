import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../Assets/logo.png';
import '../index.css';

const Header = () => {

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };


    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <header className="bg-[#1c274c] p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center">
                    <Link to="/"><img src={logo} alt="Crib Cleaners" className="h-8 w-auto mr-2" /></Link>
                </div>
                <div className="hidden md:flex space-x-8 ml-2 mr-4 text-white font-semibold text-base tracking-wider uppercase">
                    <Link to="/" className="relative after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-current after:scale-x-0 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">Home</Link>
                    <Link to="/Services" className="relative after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-current after:scale-x-0 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">Services</Link>
                    <Link to="/About" className="relative after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-current after:scale-x-0 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">About</Link>
                    <Link to="/Contact" className="relative after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-current after:scale-x-0 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">Contact</Link>
                </div>
                <div className="md:hidden">
                    <button onClick={toggleMobileMenu} className="text-white focus:outline-none">
                        {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>
                </div>
            </div>
            {isMobileMenuOpen && (
                 <div className="fixed inset-0 bg-black mt-16 flex flex-col items-center justify-start z-50 transform transition-transform duration-300">
                 <ul className="space-y-6 text-white font-semibold text-xl tracking-wider uppercase text-center">
                     <li className="staggered-item">
                         <Link to="/" className="hover:underline" onClick={closeMobileMenu}>Home</Link>
                     </li>
                     <li className="staggered-item">
                         <Link to="/services" className="hover:underline" onClick={closeMobileMenu}>Services</Link>
                     </li>
                     <li className="staggered-item">
                         <Link to="/about" className="hover:underline" onClick={closeMobileMenu}>About</Link>
                     </li>
                     <li className="staggered-item">
                         <Link to="/contact" className="hover:underline" onClick={closeMobileMenu}>Contact</Link>
                     </li>
                 </ul>
             </div>
             )}
        </header>
    );
};

export default Header;