import React, { useState } from 'react';

const Portfolio = () => {
    const [filter, setFilter] = useState('all');

    const projects = [
        {
            id: 1,
            title: 'E-Commerce Platform',
            role: 'Website Building',
            category: 'websites',
            image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?w=400&h=500&fit=crop',
            color: 'bg-yellow',
        },
        {
            id: 2,
            title: 'Brand Poster Design',
            role: 'Creative Design',
            category: 'design',
            image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=400&h=500&fit=crop',
            color: 'bg-cyan',
        },
        {
            id: 3,
            title: 'Product Video',
            role: 'Video Production',
            category: 'video',
            image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=400&h=500&fit=crop',
            color: 'bg-purple',
        },
        {
            id: 4,
            title: 'Social Media Graphics',
            role: 'Creative Content',
            category: 'design',
            image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=400&h=500&fit=crop',
            color: 'bg-secondary',
        },
        {
            id: 5,
            title: 'Corporate Website',
            role: 'Web Development',
            category: 'websites',
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=500&fit=crop',
            color: 'bg-red',
        },
        {
            id: 6,
            title: 'AI Chatbot Solution',
            role: 'AI Integration',
            category: 'ai',
            image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=500&fit=crop',
            color: 'bg-green',
        },
    ];

    const categories = [
        { id: 'all', label: 'All Projects' },
        { id: 'websites', label: 'Websites' },
        { id: 'design', label: 'Creative Design' },
        { id: 'video', label: 'Video Production' },
        { id: 'ai', label: 'AI Solutions' },
    ];

    const filteredProjects = filter === 'all'
        ? projects
        : projects.filter(project => project.category === filter);

    return (
        <section id="portfolio" className="py-24 bg-white relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-20 right-10 w-64 h-64 bg-secondary/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-12 animate-slide-up">
                    <div className="inline-block bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-semibold mb-4">
                        OUR WORK
                    </div>
                    <h2 className="text-4xl md:text-6xl font-extrabold text-dark mb-4 font-heading">
                        Showcasing Our
                        <br />
                        <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-yellow via-cyan to-secondary">Latest Projects</span>
                        <br />
                        and Success Stories
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-6">
                        Browse through our diverse portfolio featuring websites, creative designs, video productions, and AI solutions. Each project represents our commitment to excellence and innovation.
                    </p>
                </div>

                {/* Filter Buttons */}
                <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12 sm:mb-16 px-4">
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setFilter(cat.id)}
                            className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-full font-semibold smooth-transition text-sm sm:text-base ${filter === cat.id
                                ? 'bg-dark text-white shadow-lg'
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                }`}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>

                {/* Portfolio Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {filteredProjects.map((project, index) => (
                        <div
                            key={project.id}
                            className="group relative rounded-2xl sm:rounded-3xl overflow-hidden card-hover bg-white"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            {/* Project Image */}
                            <div className="h-64 sm:h-80 relative overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={`${project.title} - ${project.role} project by PrimeVerse Digital Solutions Agency`}
                                    loading="lazy"
                                    className="w-full h-full object-cover group-hover:scale-110 smooth-transition"
                                />
                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent opacity-0 group-hover:opacity-100 smooth-transition"></div>

                                {/* Category Badge */}
                                <div className={`absolute top-3 right-3 sm:top-4 sm:right-4 ${project.color} text-dark px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-bold`}>
                                    {project.role}
                                </div>
                            </div>

                            {/* Info Card */}
                            <div className="p-4 sm:p-6">
                                <h3 className="text-lg sm:text-xl font-bold text-dark mb-1 sm:mb-2">
                                    {project.title}
                                </h3>
                                <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                                    {project.role}
                                </p>
                                <button className="text-primary font-semibold flex items-center gap-2 hover:gap-3 smooth-transition text-sm sm:text-base">
                                    View Details →
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA Button */}
                <div className="text-center mt-12 sm:mt-16 px-4">
                    <button className="w-full sm:w-auto bg-yellow text-dark px-8 sm:px-10 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:shadow-2xl hover:shadow-yellow/50 smooth-transition hover:scale-105">
                        Contact Us
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
