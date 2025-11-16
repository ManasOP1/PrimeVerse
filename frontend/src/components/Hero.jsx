import React from 'react';
import { FaArrowRight, FaStar, FaLightbulb } from 'react-icons/fa';

const Hero = () => {
    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark pt-32 sm:pt-36 pb-32"
        >
            {/* Decorative Shapes - Subtle and Professional */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Gradient Orbs */}
                <div className="absolute top-32 -left-20 w-96 h-96 bg-yellow/10 rounded-full blur-3xl animate-float"></div>
                <div className="absolute top-1/3 -right-20 w-80 h-80 bg-cyan/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
                <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>

                {/* Geometric Shapes */}
                <div className="absolute top-40 right-1/4 w-20 h-20 border-2 border-yellow/20 rounded-lg rotate-45 animate-spin-slow"></div>
                <div className="absolute bottom-1/3 left-1/4 w-16 h-16 border-2 border-cyan/20 rounded-full animate-pulse"></div>

                {/* Subtle Grid Pattern */}
                <div className="absolute inset-0 opacity-5" style={{
                    backgroundImage: 'radial-gradient(circle, #fbbf24 1px, transparent 1px)',
                    backgroundSize: '50px 50px'
                }}></div>
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="animate-slide-up">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 bg-yellow/20 backdrop-blur-sm border-2 border-yellow text-yellow px-3 sm:px-6 py-2 rounded-full mb-6 sm:mb-8 animate-bounce-slow text-xs sm:text-base">
                        <FaLightbulb className="text-sm sm:text-base" />
                        <span className="font-semibold">Complete Digital Solutions Partner</span>
                    </div>

                    {/* Main Headline with Creative Typography */}
                    <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-white mb-4 sm:mb-6 font-heading leading-tight tracking-tight px-2">
                        ELEVATE <span className="text-yellow">YOUR</span>
                        <br />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow via-cyan to-secondary">
                            BUSINESS
                        </span>{' '}
                        WITH
                        <br />
                        <span className="relative inline-block">
                            <span className="relative z-10">DIGITAL SOLUTIONS</span>
                            <span className="absolute bottom-1 sm:bottom-2 left-0 w-full h-2 sm:h-4 bg-yellow/30 -skew-y-2"></span>
                        </span>
                    </h1>

                    <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-4">
                        PrimeVerse is a leading digital solutions agency in Mumbai, Maharashtra, specializing in professional website development, creative design services, video production, and AI automation. Transform your business with custom digital solutions designed for growth and success.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
                        <a
                            href="#contact"
                            className="w-full sm:w-auto group bg-gradient-to-r from-cyan via-blue-500 to-primary text-white px-6 sm:px-10 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg shadow-2xl shadow-cyan/30 hover:shadow-cyan/60 smooth-transition hover:scale-110 flex items-center justify-center gap-2 sm:gap-3 border-2 border-cyan/30 hover:border-cyan relative overflow-hidden"
                        >
                            <span className="relative z-10">Get Started</span>
                            <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 smooth-transition relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                            <div className="absolute inset-0 bg-gradient-to-r from-cyan/20 to-primary/20 opacity-0 group-hover:opacity-100 smooth-transition"></div>
                        </a>

                        <a
                            href="#portfolio"
                            className="w-full sm:w-auto group bg-yellow text-dark px-6 sm:px-10 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg shadow-2xl shadow-yellow/30 hover:shadow-yellow/60 smooth-transition hover:scale-110 flex items-center justify-center gap-2 sm:gap-3 border-2 border-yellow/30 hover:border-yellow relative overflow-hidden"
                        >
                            <span className="relative z-10">View Portfolio</span>
                            <svg className="w-4 h-4 sm:w-5 sm:h-5 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                            <div className="absolute inset-0 bg-yellow/20 opacity-0 group-hover:opacity-100 smooth-transition"></div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;

