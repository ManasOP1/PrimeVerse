import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const menuItems = [
        { name: 'Home', href: '#home' },
        { name: 'Services', href: '#services' },
        { name: 'Portfolio', href: '#portfolio' },
        { name: 'Why Us', href: '#why-us' },
    ];

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-dark/95 backdrop-blur-lg shadow-2xl py-4' : 'bg-dark/50 backdrop-blur-sm py-6'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <a href="#home" className="text-2xl sm:text-3xl font-bold font-heading group smooth-transition">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary via-accent to-purple group-hover:from-purple group-hover:via-secondary group-hover:to-accent smooth-transition">PrimeVerse</span>
                    </a>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8">
                        {menuItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="font-medium text-gray-300 hover:text-yellow smooth-transition relative group"
                            >
                                {item.name}
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow group-hover:w-full smooth-transition"></span>
                            </a>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <a
                        href="#contact"
                        className="hidden md:block bg-yellow text-dark px-6 py-2.5 rounded-full font-bold hover:shadow-lg hover:shadow-yellow/50 smooth-transition hover:scale-105"
                    >
                        Contact Us
                    </a>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden text-2xl text-white"
                    >
                        {isOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden mt-4 pb-4 space-y-3 animate-slide-up bg-dark/95 rounded-2xl p-4">
                        {menuItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                                className="block text-gray-300 hover:text-yellow smooth-transition font-medium"
                            >
                                {item.name}
                            </a>
                        ))}
                        <a
                            href="#contact"
                            onClick={() => setIsOpen(false)}
                            className="block w-full text-center bg-yellow text-dark px-6 py-2.5 rounded-full font-bold mt-4"
                        >
                            Contact Us
                        </a>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;

