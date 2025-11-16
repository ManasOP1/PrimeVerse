import React from 'react';
import { FaInstagram, FaLinkedinIn, FaDribbble } from 'react-icons/fa';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const footerLinks = {
        services: [
            { name: 'Website Building', href: '#services' },
            { name: 'Creative Design', href: '#services' },
            { name: 'Video Production', href: '#services' },
            { name: 'AI Agents', href: '#services' },
        ],
        company: [
            { name: 'About Us', href: '#why-us' },
            { name: 'Portfolio', href: '#portfolio' },
            { name: 'Testimonials', href: '#testimonials' },
            { name: 'Contact', href: '#contact' },
        ],
        resources: [
            { name: 'Blog', href: '#home' },
            { name: 'Case Studies', href: '#portfolio' },
            { name: 'Privacy Policy', href: '#home' },
            { name: 'Terms of Service', href: '#home' },
        ],
    };

    const socialLinks = [
        { icon: <FaInstagram />, href: 'https://www.instagram.com/manas_gadge_/', label: 'Instagram', color: 'hover:bg-secondary' },
        { icon: <FaLinkedinIn />, href: 'https://www.linkedin.com/in/manas-gadge/', label: 'LinkedIn', color: 'hover:bg-primary' },
        { icon: <FaDribbble />, href: 'https://dribbble.com/', label: 'Dribbble', color: 'hover:bg-secondary' },
    ];

    return (
        <footer className="bg-dark text-white relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-yellow/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan/5 rounded-full blur-3xl"></div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
                {/* Top Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-8 sm:mb-12">
                    {/* Brand Section */}
                    <div className="lg:col-span-1">
                        <a href="#home" className="inline-block mb-4 sm:mb-6 group">
                            <h3 className="text-2xl sm:text-3xl font-bold font-heading">
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary via-accent to-purple group-hover:from-purple group-hover:via-secondary group-hover:to-accent smooth-transition">PrimeVerse</span>
                            </h3>
                        </a>
                        <p className="text-sm sm:text-base text-gray-400 leading-relaxed mb-4 sm:mb-6">
                            Delivering exceptional digital solutions through innovative website development, creative design services, professional video production, and cutting-edge AI automation technologies.
                        </p>

                        {/* Social Links */}
                        <div className="flex gap-2 sm:gap-3">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.label}
                                    className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/5 ${social.color} flex items-center justify-center smooth-transition hover:scale-110 border border-white/10 text-sm sm:text-base`}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Services Links */}
                    <div>
                        <h4 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 font-heading text-yellow">Services</h4>
                        <ul className="space-y-2 sm:space-y-3">
                            {footerLinks.services.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        className="text-sm sm:text-base text-gray-400 hover:text-cyan smooth-transition flex items-center gap-2 group"
                                    >
                                        <span className="w-0 group-hover:w-2 h-0.5 bg-cyan smooth-transition"></span>
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h4 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 font-heading text-cyan">Company</h4>
                        <ul className="space-y-2 sm:space-y-3">
                            {footerLinks.company.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        className="text-sm sm:text-base text-gray-400 hover:text-yellow smooth-transition flex items-center gap-2 group"
                                    >
                                        <span className="w-0 group-hover:w-2 h-0.5 bg-yellow smooth-transition"></span>
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 font-heading text-secondary">Contact</h4>
                        <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
                            <p className="text-gray-400">
                                <span className="text-white font-semibold">Email:</span><br />
                                infoprimeverse@gmail.com
                            </p>
                            <p className="text-gray-400">
                                <span className="text-white font-semibold">Phone:</span><br />
                                +91 7058615811
                            </p>
                            <p className="text-gray-400">
                                <span className="text-white font-semibold">Address:</span><br />
                                Shivam Greens<br />
                                Mumbai, Maharashtra
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 pt-6 sm:pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4">
                        <p className="text-gray-400 text-xs sm:text-sm text-center md:text-left">
                            © {currentYear} PrimeVerse. All rights reserved.
                        </p>
                        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
                            <a href="#home" className="text-gray-400 hover:text-yellow text-xs sm:text-sm smooth-transition">Privacy Policy</a>
                            <a href="#home" className="text-gray-400 hover:text-yellow text-xs sm:text-sm smooth-transition">Terms of Service</a>
                            <a href="#home" className="text-gray-400 hover:text-yellow text-xs sm:text-sm smooth-transition">Cookie Policy</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
