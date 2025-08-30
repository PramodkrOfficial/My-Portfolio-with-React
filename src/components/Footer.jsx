// import React from 'react';
// import { FaGithub } from "react-icons/fa6";
// import { FaSquareFacebook } from "react-icons/fa6";
// import { FaLinkedin } from "react-icons/fa";
// import { FaSquareInstagram } from "react-icons/fa6";


// function Footer() {
//     return (
//         <>
//             <hr />
//             <footer className='py-12'>
//                 <div className='max-w-screen-2xl container mx-auto px-4 md:px-20'>
//                     <div className='flex flex-col items-center justify-center'>
//                         <div className='flex space-x-4 cursor-pointer'>
//                             <FaGithub size={30} />
//                             <FaSquareFacebook size={30} />
//                             <FaLinkedin size={30} />
//                             <FaSquareInstagram size={30} />
//                         </div>
//                         <div className='mt-8 border-t border-gray-700 pt-8 flex flex-col items-center'>
//                             <p className='text-sm'>&copy; 2024 Your Company. All copyrights reserved.</p>
//                             <p className='text-sm'>Supportive Partner Surya</p>
//                         </div>
//                     </div>
//                 </div>
//             </footer>
//         </>
//     )
// }

// export default Footer;

// Update Footer with advanced animations


import React, { useState, useEffect } from 'react';
import { FaGithub, FaSquareFacebook, FaLinkedin, FaSquareInstagram } from "react-icons/fa6";

function Footer() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        const footerElement = document.querySelector('#footer-section');
        if (footerElement) {
            observer.observe(footerElement);
        }

        return () => observer.disconnect();
    }, []);

    const socialLinks = [
        { 
            icon: FaGithub, 
            href: "https://github.com/your-username", 
            label: "GitHub",
            color: "hover:text-gray-400 hover:shadow-gray-400/30"
        },
        { 
            icon: FaSquareFacebook, 
            href: "https://facebook.com/your-profile", 
            label: "Facebook",
            color: "hover:text-blue-500 hover:shadow-blue-500/30"
        },
        { 
            icon: FaLinkedin, 
            href: "https://linkedin.com/in/your-profile", 
            label: "LinkedIn",
            color: "hover:text-blue-600 hover:shadow-blue-600/30"
        },
        { 
            icon: FaSquareInstagram, 
            href: "https://instagram.com/your-profile", 
            label: "Instagram",
            color: "hover:text-pink-500 hover:shadow-pink-500/30"
        }
    ];

    return (
        <>
            {/* Gradient divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
            
            <footer 
                id="footer-section"
                className="relative overflow-hidden bg-gradient-to-br from-slate-50 to-gray-100 dark:from-gray-900 dark:to-slate-800"
            >
                {/* Animated background elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
                </div>

                <div className="relative py-16">
                    <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
                        <div className="flex flex-col items-center justify-center space-y-8">
                            
                            {/* Logo/Brand Section */}
                            <div className={`transform transition-all duration-1000 ${
                                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                            }`}>
                                <div className="text-center mb-6">
                                    <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                        Pramod Kumar
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400 mt-2">
                                        Full Stack Developer
                                    </p>
                                </div>
                            </div>

                            {/* Social Media Icons */}
                            <div className={`transform transition-all duration-1000 delay-300 ${
                                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                            }`}>
                                <div className="flex space-x-6">
                                    {socialLinks.map((social, index) => {
                                        const Icon = social.icon;
                                        return (
                                            <a
                                                key={social.label}
                                                href={social.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={`group relative p-3 rounded-xl bg-white dark:bg-gray-800 
                                                    shadow-lg border border-gray-200 dark:border-gray-700
                                                    transform transition-all duration-300 ease-out
                                                    hover:scale-110 hover:-translate-y-2 hover:shadow-xl
                                                    ${social.color}
                                                    animate-fadeInUp`}
                                                style={{ 
                                                    animationDelay: `${600 + index * 150}ms`,
                                                    animationFillMode: 'backwards'
                                                }}
                                                aria-label={social.label}
                                            >
                                                <Icon 
                                                    size={24} 
                                                    className="transition-all duration-300 group-hover:scale-110" 
                                                />
                                                
                                                {/* Tooltip */}
                                                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 
                                                    bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-800 
                                                    px-2 py-1 rounded text-xs font-medium
                                                    opacity-0 group-hover:opacity-100 transition-all duration-300
                                                    pointer-events-none whitespace-nowrap">
                                                    {social.label}
                                                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 
                                                        border-l-4 border-r-4 border-t-4 border-transparent 
                                                        border-t-gray-800 dark:border-t-gray-200"></div>
                                                </div>

                                                {/* Ripple effect */}
                                                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20 
                                                    bg-current transition-opacity duration-300"></div>
                                            </a>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Copyright Section */}
                            <div className={`transform transition-all duration-1000 delay-600 ${
                                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                            }`}>
                                <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700 
                                    flex flex-col items-center space-y-3">
                                    <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-gray-600 dark:text-gray-400">
                                        <p className="hover:text-gray-800 dark:hover:text-gray-200 transition-colors duration-300">
                                            &copy; 2024 Pramod Kumar. All rights reserved.
                                        </p>
                                        <div className="hidden md:block w-px h-4 bg-gray-300 dark:bg-gray-600"></div>
                                        <p className="hover:text-gray-800 dark:hover:text-gray-200 transition-colors duration-300 
                                            flex items-center space-x-1">
                                            <span>💜</span>
                                            <span>Supportive Partner Surya</span>
                                        </p>
                                    </div>
                                    
                                    {/* Back to top button */}
                                    <button
                                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                        className="mt-4 group flex items-center space-x-2 px-4 py-2 
                                            bg-gradient-to-r from-blue-500 to-purple-600 
                                            text-white rounded-full text-sm font-medium
                                            transform transition-all duration-300 hover:scale-105 hover:shadow-lg
                                            hover:from-blue-600 hover:to-purple-700"
                                        aria-label="Back to top"
                                    >
                                        <span>Back to Top</span>
                                        <svg 
                                            className="w-4 h-4 transform transition-transform duration-300 group-hover:-translate-y-1" 
                                            fill="none" 
                                            stroke="currentColor" 
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <style jsx>{`
                    @keyframes fadeInUp {
                        from {
                            opacity: 0;
                            transform: translateY(30px);
                        }
                        to {
                            opacity: 1;
                            transform: translateY(0);
                        }
                    }
                    
                    .animate-fadeInUp {
                        animation: fadeInUp 0.8s ease-out forwards;
                        opacity: 0;
                    }
                `}</style>
            </footer>
        </>
    );
}

export default Footer;