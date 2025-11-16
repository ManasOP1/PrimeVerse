import React from 'react';
import { FaLaptopCode, FaPalette, FaVideo, FaBullhorn } from 'react-icons/fa';

const Services = () => {
    const services = [
        {
            icon: <FaLaptopCode />,
            title: 'Website Building & Management',
            description: 'Custom-built websites with responsive design and continuous maintenance support. We create digital platforms that drive results and engage your audience effectively.',
            color: 'bg-yellow',
            iconBg: 'bg-yellow/20',
            iconColor: 'text-yellow',
        },
        {
            icon: <FaPalette />,
            title: 'Creative Posters & Design',
            description: 'Stunning visual designs including promotional posters, social media creatives, and brand graphics. Our designs capture attention and communicate your message clearly.',
            color: 'bg-cyan',
            iconBg: 'bg-cyan/20',
            iconColor: 'text-cyan',
        },
        {
            icon: <FaVideo />,
            title: 'Video Making for Brands',
            description: 'High-quality video content crafted for brand storytelling. From product showcases to promotional campaigns, we create videos that connect with your audience.',
            color: 'bg-purple',
            iconBg: 'bg-purple/20',
            iconColor: 'text-purple',
        },
        {
            icon: <FaBullhorn />,
            title: 'AI Agents for Business',
            description: 'Smart automation solutions powered by artificial intelligence. We build AI agents that optimize workflows, improve efficiency, and enhance customer interactions.',
            color: 'bg-secondary',
            iconBg: 'bg-secondary/20',
            iconColor: 'text-secondary',
        },
    ];

    return (
        <section id="services" className="py-24 bg-light relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-yellow/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan/5 rounded-full blur-3xl"></div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16 animate-slide-up">
                    <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
                        WHAT WE DO
                    </div>
                    <h2 className="text-4xl md:text-6xl font-extrabold text-dark mb-4 font-heading">
                        Services we can
                        <br />
                        help you with
                    </h2>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group relative bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:shadow-2xl smooth-transition cursor-pointer overflow-hidden border border-gray-100"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            {/* Icon */}
                            <div className={`w-14 h-14 sm:w-16 sm:h-16 ${service.iconBg} rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 smooth-transition`}>
                                <div className={`text-2xl sm:text-3xl ${service.iconColor}`}>
                                    {service.icon}
                                </div>
                            </div>

                            {/* Content */}
                            <h3 className="text-xl sm:text-2xl font-bold text-dark mb-2 sm:mb-3 font-heading group-hover:text-primary smooth-transition">
                                {service.title}
                            </h3>
                            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-3 sm:mb-4">
                                {service.description}
                            </p>

                            {/* Read More Link */}
                            <a href="#contact" className="text-primary font-semibold flex items-center gap-2 group-hover:gap-3 smooth-transition text-sm sm:text-base">
                                Get Started
                                <span className="text-sm">→</span>
                            </a>

                            {/* Decorative Circle */}
                            <div className={`absolute -bottom-10 -right-10 w-24 h-24 sm:w-32 sm:h-32 ${service.color} rounded-full opacity-0 group-hover:opacity-10 smooth-transition`}></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;

