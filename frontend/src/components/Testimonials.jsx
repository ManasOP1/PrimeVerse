import React, { useState, useEffect } from 'react';
import { FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const testimonials = [
        {
            id: 1,
            name: 'Sarah Mitchell',
            position: 'Marketing Director',
            company: 'TechVision Inc',
            image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
            rating: 5,
            text: 'Working with this team has been transformative for our business. They delivered a stunning website and engaging creative content that perfectly captured our brand identity. Their professionalism and attention to detail exceeded our expectations at every stage.',
            color: 'bg-yellow',
        },
        {
            id: 2,
            name: 'James Rodriguez',
            position: 'Founder & CEO',
            company: 'StartHub',
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
            rating: 5,
            text: 'Exceptional service from start to finish! The AI automation solution they built has streamlined our operations significantly. The team was responsive, creative, and delivered beyond our requirements. Highly recommend their services!',
            color: 'bg-cyan',
        },
        {
            id: 3,
            name: 'Emily Chen',
            position: 'Brand Manager',
            company: 'Creative Studios',
            image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
            rating: 5,
            text: 'The video production quality was outstanding! They understood our vision perfectly and created compelling content that resonated with our audience. Professional, creative, and efficient - everything we were looking for.',
            color: 'bg-secondary',
        },
    ];

    // Auto-rotate carousel
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(interval);
    }, [testimonials.length]);

    const goToNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
    };

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
        );
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    return (
        <section id="testimonials" className="py-24 bg-gradient-to-br from-light via-white to-light relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-10 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-12 sm:mb-16 animate-slide-up">
                    <div className="inline-block bg-gradient-to-r from-purple/10 to-secondary/10 text-purple px-4 sm:px-6 py-2 rounded-full text-sm font-semibold mb-4">
                        ⭐ TESTIMONIALS
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-dark mb-4 font-heading">
                        What Our Clients
                        <br />
                        <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-purple via-secondary to-accent">Say About Us</span>
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto mt-4">
                        Real feedback from amazing clients we've had the pleasure to work with
                    </p>
                </div>

                {/* Carousel Container */}
                <div className="max-w-5xl mx-auto relative">
                    {/* Testimonial Cards */}
                    <div className="relative overflow-hidden rounded-3xl">
                        <div
                            className="flex transition-transform duration-700 ease-in-out"
                            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                        >
                            {testimonials.map((testimonial) => (
                                <div
                                    key={testimonial.id}
                                    className="w-full flex-shrink-0"
                                >
                                    <div className="relative bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 shadow-2xl mx-2 sm:mx-4">
                                        {/* Decorative Quote */}
                                        <div className="absolute -top-4 sm:-top-6 left-4 sm:left-8 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-yellow via-cyan to-secondary rounded-xl sm:rounded-2xl flex items-center justify-center text-2xl sm:text-4xl text-white rotate-12 shadow-lg">
                                            "
                                        </div>

                                        <div className="flex flex-col md:flex-row gap-6 sm:gap-8 items-center mt-4 sm:mt-0">
                                            {/* Left: Photo with colored background */}
                                            <div className="flex-shrink-0">
                                                <div className={`${testimonial.color} rounded-2xl sm:rounded-3xl p-4 sm:p-6 relative transform hover:scale-105 smooth-transition`}>
                                                    <img
                                                        src={testimonial.image}
                                                        alt={testimonial.name}
                                                        className="w-24 h-24 sm:w-32 sm:h-32 rounded-xl sm:rounded-2xl object-cover"
                                                    />
                                                    {/* Decorative circle */}
                                                    <div className="absolute -bottom-2 -right-2 sm:-bottom-3 sm:-right-3 w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full border-3 sm:border-4 border-yellow flex items-center justify-center shadow-lg">
                                                        <FaStar className="text-yellow text-base sm:text-xl" />
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Right: Content */}
                                            <div className="flex-1 text-center md:text-left">
                                                {/* Rating */}
                                                <div className="flex gap-1 mb-3 sm:mb-4 justify-center md:justify-start">
                                                    {[...Array(testimonial.rating)].map((_, i) => (
                                                        <FaStar key={i} className="text-yellow text-base sm:text-xl drop-shadow-sm" />
                                                    ))}
                                                </div>

                                                {/* Testimonial Text */}
                                                <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6 italic">
                                                    "{testimonial.text}"
                                                </p>

                                                {/* Client Info */}
                                                <div className="border-t border-gray-200 pt-4 sm:pt-6">
                                                    <h4 className="font-bold text-lg sm:text-xl text-dark mb-1">
                                                        {testimonial.name}
                                                    </h4>
                                                    <p className="text-sm sm:text-base text-gray-600">
                                                        {testimonial.position} • <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary font-semibold">{testimonial.company}</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Arrows */}
                    <button
                        onClick={goToPrevious}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-6 w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full shadow-xl flex items-center justify-center text-dark hover:bg-yellow smooth-transition hover:scale-110 z-10"
                        aria-label="Previous testimonial"
                    >
                        <FaChevronLeft className="text-lg sm:text-xl" />
                    </button>
                    <button
                        onClick={goToNext}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-6 w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full shadow-xl flex items-center justify-center text-dark hover:bg-yellow smooth-transition hover:scale-110 z-10"
                        aria-label="Next testimonial"
                    >
                        <FaChevronRight className="text-lg sm:text-xl" />
                    </button>

                    {/* Dots Indicator */}
                    <div className="flex justify-center gap-2 sm:gap-3 mt-8 sm:mt-12">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`h-2 sm:h-3 rounded-full smooth-transition ${index === currentIndex
                                    ? 'w-8 sm:w-12 bg-gradient-to-r from-yellow via-cyan to-secondary'
                                    : 'w-2 sm:w-3 bg-gray-300 hover:bg-gray-400'
                                    }`}
                                aria-label={`Go to testimonial ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>

                {/* Client Logos */}
                <div className="mt-16 sm:mt-20 text-center px-4">
                    <p className="text-sm sm:text-base text-gray-500 mb-6 sm:mb-8 font-semibold">Trusted by 100+ leading brands worldwide</p>
                    <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10">
                        {[1, 2, 3, 4, 5].map((i) => (
                            <div
                                key={i}
                                className="w-24 h-12 sm:w-32 sm:h-14 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center text-gray-400 font-bold text-xs sm:text-sm shadow-md hover:shadow-lg smooth-transition hover:scale-105"
                            >
                                BRAND {i}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
