import React, { useState, useRef } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const formRef = useRef();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    const [status, setStatus] = useState({ type: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus({ type: '', message: '' });

        try {
            // Send email notification to YOU (owner) with form details
            const result = await emailjs.sendForm(
                'service_wpzakbu',        // Your Service ID
                'template_1a886x8',       // Your Template ID
                formRef.current,
                'MbwvwSM7c5Ex3_-S_'       // Your Public Key
            );

            console.log('Email sent successfully:', result.text);
            setStatus({
                type: 'success',
                message: 'Thank you for reaching out! We will contact you shortly.',
            });
            setFormData({
                name: '',
                email: '',
                phone: '',
                message: '',
            });
        } catch (error) {
            console.error('Email sending failed:', error);
            setStatus({
                type: 'error',
                message: 'Oops! Something went wrong. Please try again or email us directly.',
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    const contactInfo = [
        {
            icon: <FaEnvelope />,
            title: 'Email Us',
            content: 'infoprimeverse@gmail.com',
            link: 'mailto:infoprimeverse@gmail.com',
            color: 'bg-yellow',
        },
        {
            icon: <FaPhone />,
            title: 'Call Us',
            content: '+91 7058615811',
            link: 'tel:+917058615811',
            color: 'bg-cyan',
        },
        {
            icon: <FaMapMarkerAlt />,
            title: 'Visit Us',
            content: 'Shivam Greens, Mumbai, Maharashtra',
            link: '#',
            color: 'bg-secondary',
        },
    ];

    return (
        <section id="contact" className="py-24 bg-white relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-20 right-20 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 left-20 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16 animate-slide-up">
                    <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
                        GET IN TOUCH
                    </div>
                    <h2 className="text-4xl md:text-6xl font-extrabold text-dark mb-4 font-heading">
                        Contact <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-yellow via-cyan to-secondary">Us</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Have a project in mind? Let's discuss how we can help bring your ideas to life.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
                    {/* Contact Information */}
                    <div className="space-y-4 sm:space-y-6">
                        <div className="animate-slide-up">
                            <h3 className="text-xl sm:text-2xl font-bold text-dark mb-4 sm:mb-6 font-heading">
                                Let's Start a Conversation
                            </h3>
                            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-6 sm:mb-8">
                                Ready to transform your digital presence? Reach out to us through any of the channels below, and our team will get back to you within 24 hours.
                            </p>
                        </div>

                        {/* Contact Cards */}
                        <div className="space-y-3 sm:space-y-4">
                            {contactInfo.map((info, index) => (
                                <a
                                    key={index}
                                    href={info.link}
                                    className="flex items-center gap-3 sm:gap-4 bg-light rounded-xl sm:rounded-2xl p-4 sm:p-6 card-hover group"
                                    style={{ animationDelay: `${index * 0.1}s` }}
                                >
                                    <div className={`w-12 h-12 sm:w-14 sm:h-14 ${info.color} rounded-lg sm:rounded-xl flex items-center justify-center text-dark text-lg sm:text-xl group-hover:scale-110 smooth-transition shadow-lg`}>
                                        {info.icon}
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-dark mb-0.5 sm:mb-1 text-sm sm:text-base">
                                            {info.title}
                                        </h4>
                                        <p className="text-gray-600 text-xs sm:text-sm">
                                            {info.content}
                                        </p>
                                    </div>
                                </a>
                            ))}
                        </div>

                        {/* Business Hours */}
                        <div className="bg-gradient-to-br from-yellow/10 to-cyan/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 mt-6 sm:mt-8">
                            <h4 className="font-bold text-dark mb-2 sm:mb-3 text-sm sm:text-base">Business Hours</h4>
                            <div className="space-y-1 sm:space-y-2 text-gray-600 text-xs sm:text-base">
                                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                                <p>Saturday: 10:00 AM - 4:00 PM</p>
                                <p>Sunday: Closed</p>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-light rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 animate-slide-up shadow-xl">
                        <form ref={formRef} onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                            <div>
                                <label className="block text-dark font-medium mb-2 text-sm sm:text-base">
                                    Your Name *
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none smooth-transition bg-white text-sm sm:text-base"
                                    placeholder="enter your name"
                                />
                            </div>

                            <div>
                                <label className="block text-dark font-medium mb-2 text-sm sm:text-base">
                                    Email Address *
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none smooth-transition bg-white text-sm sm:text-base"
                                    placeholder="enter your email"
                                />
                            </div>

                            <div>
                                <label className="block text-dark font-medium mb-2 text-sm sm:text-base">
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none smooth-transition bg-white text-sm sm:text-base"
                                    placeholder="enter your phone number"
                                />
                            </div>

                            <div>
                                <label className="block text-dark font-medium mb-2 text-sm sm:text-base">
                                    Your Message *
                                </label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="5"
                                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none smooth-transition resize-none bg-white text-sm sm:text-base"
                                    placeholder="Tell us about your project..."
                                ></textarea>
                            </div>

                            {status.message && (
                                <div
                                    className={`p-3 sm:p-4 rounded-lg sm:rounded-xl text-sm sm:text-base ${status.type === 'success'
                                        ? 'bg-green-100 text-green-700'
                                        : 'bg-red-100 text-red-700'
                                        }`}
                                >
                                    {status.message}
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-gradient-to-r from-primary to-secondary text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-semibold text-base sm:text-lg hover:shadow-xl smooth-transition hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                            >
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                                <FaPaperPlane className="text-sm sm:text-base" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
