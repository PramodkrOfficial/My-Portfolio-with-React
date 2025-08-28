// import React from 'react';
// import bspic from '../image/bspic.png';
// import cnvpic from '../image/cnvpic.png';
// import anmpic from '../image/anmpic.png';
// import awdpic from '../image/awdpic.png';
// // import twovid from '../video/Two.mp4';
// // import bookstorevid from "../video/BookStore.mp4";

// import bookstorevid from "/video/BookStore.mp4";
// import twovid from '/video/Two.mp4';

// function Projects() {

//     // alert ("Welcome to the my website");
//     const cardItem = [

//         {
//             id: 1,
//             img: bspic,
//             name: "BookStore Wapp",
//             vurl: bookstorevid,
//             surl: "https://github.com/PramodkrOfficial/UpSkillCampus"
//         },
//         {
//             id: 2,
//             img: anmpic,
//             name: "Animated Wapp",
//             vurl: twovid,
//             surl: "https://github.com/PramodkrOfficial/Animated-Web-App-with-HTML-CSS-JAVASCRIPT"
//         },
//         {
//             id: 3,
//             img: cnvpic,
//             name: "Convt Wapp",
//             vurl: twovid
//         },
//         {
//             id: 4,
//             img: awdpic,
//             name: "Awarded Wapp",
//             vurl: twovid

//         },
//     ]
//     return (
//         <>
//             <div name='Projects' className='max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10'>
//                 <div>
//                     <h1 className='text-3xl font-bold mb-5'>Projects</h1>
//                     <span className='underline font-semibold'>Featured Projects</span>
//                     <div className='grid grid-cols-1 md:grid-cols-4 my-5'>
//                         {
//                             cardItem.map(({ id, img, vurl, name, surl }) => (
//                                 <div className='md:w-[300px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300' key={id}>
//                                     <img src={img} className='w-[120px] h-[120px] p-1 rounded-full border-[2px]' alt="reload" />
//                                     <div>
//                                         <div className='px-2 font-bold text-xl mb-2'>{name}</div>
//                                         <p className='px-2 text-gray-700'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis, earum!</p>
//                                         <div className='px-6 py-4 space-x-3 justify-around'>
//                                             < button
//                                                 className='bg-blue-700 hover:bg-pink-700 text-white font-bold px-4 py-2 rounded-xl'
//                                             ><a href={vurl}>Video</a>
//                                             </button>
//                                             <button className='bg-green-600 hover:bg-pink-800 text-white font-bold px-4 py-2 rounded-xl'>
//                                                 <a href={surl}>Source Code</a>
//                                             </button>
//                                         </div>
//                                     </div>
//                                 </div>
//                             ))
//                         }
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default Projects

// Projects Component with Card Flip Animations

import React, { useState } from "react";
import AnimationWrapper from "./AnimationWrapper";
import { FaGithub, FaExternalLinkAlt, FaCode, FaEye } from "react-icons/fa";
// import bookstorevid from "/video/BookStore.mp4";

function Projects() {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "E-BookStore Platform",
      description: "Full-stack MERN application with free Book",
      longDescription:
        "A complete e-bookstore solution built with MongoDB, Express.js, React, and Node.js. Features include user authentication, book catalog, purchase book, and admin dashboard.",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      github: "https://github.com/PramodkrOfficial/UpSkillCampus",
      live: "#",
      image: "/api/placeholder/400/250",
      color: "from-blue-500 to-purple-600",
    },
    {
      id: 2,
      title: "Animated Web App",
      description: "Html, Css, JavaScript with animation integration",
      longDescription:
        "A complete animated web application built with Html, Css, JavaScript, Gsap and Scroll trigger. Features include user design, user exprience, responsiveness animation with scrollTrigger.",
      technologies: ["Html", "Css", "JavaScript"],
      github:
        "https://github.com/PramodkrOfficial/Animated-Web-App-with-HTML-CSS-JAVASCRIPT",
      live: "https://pramodkrofficial.github.io/Animated-Web-App-with-HTML-CSS-JAVASCRIPT/",
      image: "/api/placeholder/400/250",
      color: "from-green-500 to-teal-600",
    },
    {
      id: 3,
      title: "Convt Docs App",
      description: "Converting project management tool",
      longDescription:
        "A collaborative Convt Docs App simplifies document conversion, supporting multiple formats with fast, secure, and user-friendly easy coverting features for seamless file management. Built with modern React and Node.js backend.",
      technologies: ["React", "Node.js", "Express", "Multer", "Tailwind CSS"],
      github: "https://github.com/PramodkrOfficial/Convt-App",
      live: "#",
      image: "/api/placeholder/400/250",
      color: "from-orange-500 to-red-600",
    },
    {
      id: 4,
      title: "Awarded Web App",
      description: "Award winning application",
      longDescription:
        "A comprehensive Award-winning web application delivering seamless user experience, robust performance, and modern design with secure, scalable, and innovative features.",
      technologies: ["Html", "Css", "JavaScript", "locomotive-scroll"],
      github:
        "https://github.com/PramodkrOfficial/Awarded-winning-web-app-with-responsive-animation",
      live: "https://github.com/PramodkrOfficial/Awarded-winning-web-app-with-responsive-animation",
      image: "/api/placeholder/400/250",
      color: "from-green-500 to-teal-600",
    },
    {
      id: 5,
      title: "Pics Drive App",
      description: "Real-time pics uploading application tool",
      longDescription:
        "A comprehensive Pics Drive App is a cloud-storage based photo storage solution that lets you easily upload, organize, and share images.",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      github:
        "https://github.com/PramodkrOfficial/Awarded-winning-web-app-with-responsive-animation",
      live: "#",
      image: "/api/placeholder/400/250",
      color: "from-orange-500 to-red-600",
    },
    {
      id: 6,
      title: "Email Writer Assistant",
      description: "Real-time email reply generator tool",
      longDescription:
        "A Email Writer Assistant is an AI-powered tool that helps you create professional, effective emails for a variety of purposes, including business, job applications, and personal greetings.",
      technologies: [
        "React",
        "Gemini API",
        "Spring Boot",
        "Webflux",
        "MutationObserver",
      ],
      github:
        "https://github.com/PramodkrOfficial/Email-Writer-Assistant-Frontend",
      live: "https://email-reply-assistant.netlify.app/",
      image: "/api/placeholder/400/250",
      color: "from-blue-500 to-purple-600",
    },
  ];

  return (
    <div
      name="Projects"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16 overflow-hidden"
    >
      <AnimationWrapper animation="fadeInUp" delay={200}>
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            My Projects
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and
            experience
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mt-4"></div>
        </div>
      </AnimationWrapper>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <AnimationWrapper
            key={project.id}
            animation="scaleIn"
            delay={400 + index * 200}
          >
            <div
              className="group relative h-96 perspective-1000"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div
                className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
                  hoveredProject === project.id ? "rotate-y-180" : ""
                }`}
              >
                {/* Front Face */}
                <div className="absolute inset-0 w-full h-full backface-hidden">
                  <div
                    className={`h-full bg-gradient-to-br ${project.color} rounded-2xl shadow-2xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-3xl`}
                  >
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="relative z-10 p-8 h-full flex flex-col justify-between text-white">
                      <div>
                        <h3 className="text-2xl font-bold mb-4">
                          {project.title}
                        </h3>
                        <p className="text-white/90 mb-6">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <FaEye className="text-2xl opacity-60" />
                        <span className="text-sm opacity-75">
                          Hover to view details
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Back Face */}
                <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180">
                  <div className="h-full bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 p-8 flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                        {project.longDescription}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <a
                        href={project.github}
                        className="flex-1 flex items-center justify-center gap-2 py-3 bg-gray-900 dark:bg-gray-700 text-white rounded-xl hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors duration-300"
                      >
                        <FaGithub />
                        <span>Code</span>
                      </a>
                      <a
                        href={project.live}
                        className={`flex-1 flex items-center justify-center gap-2 py-3 bg-gradient-to-r ${project.color} text-white rounded-xl hover:opacity-90 transition-opacity duration-300`}
                      >
                        <FaExternalLinkAlt />
                        <span>Demo</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimationWrapper>
        ))}
      </div>
    </div>
  );
}

export default Projects;
