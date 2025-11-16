import React from 'react';
import { FaLightbulb, FaRocket, FaStar, FaDollarSign, FaUsers, FaCheckCircle } from 'react-icons/fa';

const WhyChooseUs = () => {
    const reasons = [
        {
            icon: <FaLightbulb />,
            title: 'Innovative Solutions',
            description: 'Fresh approaches to digital challenges',
            color: 'bg-yellow',
            textColor: 'text-yellow',
        },
        {
            icon: <FaRocket />,
            title: 'Timely Execution',
            description: 'Projects completed on schedule',
            color: 'bg-cyan',
            textColor: 'text-cyan',
        },
        {
            icon: <FaStar />,
            title: 'Superior Quality',
            description: 'Excellence in every deliverable',
            color: 'bg-secondary',
            textColor: 'text-secondary',
        },
        {
            icon: <FaDollarSign />,
            title: 'Fair Pricing',
            description: 'Quality services at competitive rates',
            color: 'bg-green',
            textColor: 'text-green',
        },
        {
            icon: <FaUsers />,
            title: 'Skilled Professionals',
            description: 'Experienced team dedicated to results',
            color: 'bg-primary',
            textColor: 'text-primary',
        },
        {
            icon: <FaCheckCircle />,
            title: 'Client Success',
            description: 'Your goals are our priority',
            color: 'bg-purple',
            textColor: 'text-purple',
        },
    ];

    return (
        <section id="why-us" className="py-24 bg-dark relative overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-20 left-20 w-96 h-96 bg-yellow rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan rounded-full blur-3xl"></div>
            </div>

            {/* Decorative Shapes */}
            <div className="absolute top-10 right-10 text-yellow/20 text-6xl">★</div>
            <div className="absolute bottom-20 left-10 text-cyan/20 text-4xl">●</div>
            <div className="absolute top-1/3 right-1/4 text-secondary/20 text-5xl">◆</div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16 animate-slide-up">
                    <div className="inline-block bg-cyan/10 text-cyan px-4 py-2 rounded-full text-sm font-semibold mb-4">
                        WHY CHOOSE US
                    </div>
                    <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-4 font-heading">
                        Your Trusted <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-yellow via-cyan to-secondary">Partner</span>
                        <br />
                        for Digital Growth
                    </h2>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto mt-6">
                        We combine technical expertise with creative thinking to deliver comprehensive digital solutions that help businesses establish strong online presence and achieve measurable results.
                    </p>
                </div>

                {/* Reasons Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16">
                    {reasons.map((reason, index) => (
                        <div
                            key={index}
                            className="group bg-white/5 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:bg-white/10 smooth-transition border border-white/10"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            {/* Icon */}
                            <div className={`w-14 h-14 sm:w-16 sm:h-16 ${reason.color} rounded-xl sm:rounded-2xl flex items-center justify-center text-dark text-2xl sm:text-3xl mb-4 sm:mb-6 group-hover:scale-110 group-hover:rotate-6 smooth-transition`}>
                                {reason.icon}
                            </div>

                            {/* Content */}
                            <h3 className={`text-lg sm:text-xl font-bold text-white mb-2 font-heading group-hover:${reason.textColor} smooth-transition`}>
                                {reason.title}
                            </h3>
                            <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                                {reason.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Stats Section with Avatar */}
                <div className="bg-gradient-to-br from-yellow/10 to-cyan/10 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 border border-white/10">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
                        {/* Left: Stats */}
                        <div className="grid grid-cols-2 gap-4 sm:gap-8 flex-1 w-full">
                            {[
                                { number: '500+', label: 'Projects Successfully Delivered', badge: '01' },
                                { number: '98%', label: 'Client Satisfaction Rate', badge: '02' },
                            ].map((stat, index) => (
                                <div key={index} className="text-left">
                                    <div className="flex items-center gap-2 sm:gap-3 mb-1 sm:mb-2">
                                        <span className="text-3xl sm:text-4xl md:text-5xl font-black text-white">{stat.number}</span>
                                        <span className="w-8 h-8 sm:w-10 sm:h-10 bg-yellow rounded-lg flex items-center justify-center text-dark font-bold text-xs sm:text-sm">
                                            {stat.badge}
                                        </span>
                                    </div>
                                    <p className="text-xs sm:text-sm md:text-base text-gray-400">{stat.label}</p>
                                </div>
                            ))}
                        </div>

                        {/* Right: Team Avatars */}
                        <div className="flex-shrink-0 w-full md:w-auto">
                            <div className="flex items-center justify-center md:justify-start gap-3 sm:gap-4">
                                <div className="flex -space-x-2 sm:-space-x-3">
                                    <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop" alt="PrimeVerse expert team member - Digital solutions professional" loading="lazy" className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-dark" />
                                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop" alt="PrimeVerse expert team member - Web development specialist" loading="lazy" className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-dark" />
                                    <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop" alt="PrimeVerse expert team member - Creative design professional" loading="lazy" className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-dark" />
                                </div>
                                <div className="text-left">
                                    <p className="text-white font-bold text-sm sm:text-base">Expert Support Team</p>
                                    <a href="#contact" className="text-yellow text-xs sm:text-sm font-semibold flex items-center gap-1 hover:gap-2 smooth-transition">
                                        Contact Us →
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
