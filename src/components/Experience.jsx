// import React from 'react';
// import html2 from '../image/html2.png';
// import css1 from '../image/css1.png';
// import javascript from '../image/javascript.png';

// import java from '../image/java.png';
// import python from '../image/python.png';
// import spring from '../image/spring.png';
// import springboot from '../image/springboot.jpg';

// import docker from '../image/dockerr.png';
// import github from '../image/github2.png';
// import mysql from '../image/mysqlpic.png'

// import mongodb from '../image/mongodbpic.jpeg'
// import react from '../image/reactjs.png';
// import express from '../image/exp.png';
// import nodejs from '../image/node.png'


// function Experience() {
//     const cardItem = [
//         {
//             id: 1,
//             img: html2,
//             name: "HTML"
//         },
//         {
//             id: 2,
//             img: css1,
//             name: "CSS"
//         },
//         {
//             id: 3,
//             img: javascript,
//             name: "JAVASCRIPT"
//         },
//         {
//             id: 4,
//             img: java,
//             name: "JAVA"

//         },
//         {
//             id: 5,
//             img: python,
//             name: "PYTHON"

//         },
//         {
//             id: 6,
//             img: spring,
//             name: "SPRING"

//         },
//         {
//             id: 7,
//             img: springboot,
//             name: "SPRINGBOOT"

//         },
//         {
//             id: 8,
//             img: docker,
//             name: "DOCKER"

//         },
//         {
//             id: 9,
//             img: github,
//             name: "GITHUB"
            
//         },
//         {
//             id: 10,
//             img: mongodb,
//             name: "MONGODB"

//         },
//         {
//             id: 11,
//             img: express,
//             name: "EXPRESS"
            
//         },
//         {
//             id: 12,
//             img: react,
//             name: "REACT"

//         },
//         {
//             id: 13,
//             img: nodejs,
//             name: "NODE JS"

//         },
//         {
//             id: 14,
//             img: mysql,
//             name: "MYSQL"
//         }
        
//     ]
//     return (
//         <>
//             <div name='Experience' className='max-w-screen-2xl container mx-auto px-4 md:px-20 mt-16'>
//                 <div>
//                     <h1 className='text-3xl font-bold mb-5'>Experience</h1>
//                     <span className='underline font-semibold'>Featured Tools</span>
//                     <p className='text-cyan-800 font-bold'>I've more than 1 year of Experience in below technologies with good knowledge.</p>
//                     <div className='grid grid-cols-2 md:grid-cols-5 gap-7 my-3'>
//                         {
//                             cardItem.map(({ id, img, name }) => (
//                                 <div className='flex flex-col items-center justify-center border-[2px] rounded-full shadow-md md:w-[200px] md:h-[200px] p-1 cursor-pointer hover:scale-110 duration-300' key={id}>
//                                     <img src={img} className='w-[150px] rounded-full' alt="reload" />
//                                     <div>
//                                         <div className=''>{name}</div>
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

// export default Experience;



// Updated Experience.jsx with Professional Animations:


import React, { useState, useEffect } from "react";
import AnimationWrapper from "./AnimationWrapper";

// Import your images
import html2 from "../image/html2.png";
import css1 from "../image/css1.png";
import javascript from "../image/javascript.png";
import java from "../image/java.png";
import python from "../image/python.png";
import spring from "../image/spring.png";
import springboot from "../image/springboot.jpg";
import docker from "../image/dockerr.png";
import github from "../image/github2.png";
import mysql from "../image/mysqlpic.png";
import mongodb from "../image/mongodbpic.jpeg";
import react from "../image/reactjs.png";
import express from "../image/exp.png";
import nodejs from "../image/node.png";

function Experience() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [skillStats, setSkillStats] = useState({});

  // Categorized skills with proficiency levels and colors
  const skillCategories = {
    frontend: {
      title: "Frontend",
      icon: "🎨",
      color: "from-blue-500 to-cyan-500",
      skills: [
        {
          id: 1,
          img: html2,
          name: "HTML",
          proficiency: 95,
          category: "frontend",
          experience: "2+ years",
        },
        {
          id: 2,
          img: css1,
          name: "CSS",
          proficiency: 90,
          category: "frontend",
          experience: "2+ years",
        },
        {
          id: 3,
          img: javascript,
          name: "JAVASCRIPT",
          proficiency: 85,
          category: "frontend",
          experience: "1.5+ years",
        },
        {
          id: 12,
          img: react,
          name: "REACT",
          proficiency: 88,
          category: "frontend",
          experience: "1+ years",
        },
      ],
    },
    backend: {
      title: "Backend",
      icon: "⚙️",
      color: "from-green-500 to-emerald-500",
      skills: [
        {
          id: 4,
          img: java,
          name: "JAVA",
          proficiency: 80,
          category: "backend",
          experience: "1.5+ years",
        },
        {
          id: 5,
          img: python,
          name: "PYTHON",
          proficiency: 75,
          category: "backend",
          experience: "1+ years",
        },
        {
          id: 6,
          img: spring,
          name: "SPRING",
          proficiency: 70,
          category: "backend",
          experience: "8 months",
        },
        {
          id: 7,
          img: springboot,
          name: "SPRINGBOOT",
          proficiency: 75,
          category: "backend",
          experience: "8 months",
        },
        {
          id: 11,
          img: express,
          name: "EXPRESS",
          proficiency: 80,
          category: "backend",
          experience: "1+ years",
        },
        {
          id: 13,
          img: nodejs,
          name: "NODE JS",
          proficiency: 82,
          category: "backend",
          experience: "1+ years",
        },
      ],
    },
    database: {
      title: "Database",
      icon: "🗄️",
      color: "from-purple-500 to-pink-500",
      skills: [
        {
          id: 10,
          img: mongodb,
          name: "MONGODB",
          proficiency: 85,
          category: "database",
          experience: "1+ years",
        },
        {
          id: 14,
          img: mysql,
          name: "MYSQL",
          proficiency: 78,
          category: "database",
          experience: "1.5+ years",
        },
      ],
    },
    tools: {
      title: "Tools & DevOps",
      icon: "🛠️",
      color: "from-orange-500 to-red-500",
      skills: [
        {
          id: 8,
          img: docker,
          name: "DOCKER",
          proficiency: 65,
          category: "tools",
          experience: "6 months",
        },
        {
          id: 9,
          img: github,
          name: "GITHUB",
          proficiency: 90,
          category: "tools",
          experience: "2+ years",
        },
      ],
    },
  };

  // Get all skills in a flat array
  const allSkills = Object.values(skillCategories).flatMap((cat) => cat.skills);

  // Filter skills based on selected category
  const filteredSkills =
    selectedCategory === "all"
      ? allSkills
      : skillCategories[selectedCategory]?.skills || [];

  // Animate proficiency bars
  useEffect(() => {
    const timer = setTimeout(() => {
      const newStats = {};
      filteredSkills.forEach((skill) => {
        newStats[skill.id] = skill.proficiency;
      });
      setSkillStats(newStats);
    }, 500);

    return () => clearTimeout(timer);
  }, [selectedCategory, filteredSkills]);

  return (
    <div
      name="Experience"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16 overflow-hidden"
    >
      {/* Header Section */}
      <AnimationWrapper animation="fadeInUp" delay={200}>
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
            My Experience
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            I've gained valuable experience across various technologies,
            building robust and scalable applications. Here's my technical
            expertise with over{" "}
            <span className="font-bold text-cyan-600 dark:text-cyan-400">
              1+ year of hands-on experience
            </span>
            .
          </p>
        </div>
      </AnimationWrapper>

      {/* Category Filter Tabs */}
      <AnimationWrapper animation="fadeInUp" delay={400}>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setSelectedCategory("all")}
            className={`group relative px-8 py-3 rounded-full font-semibold transition-all duration-500 transform hover:scale-105 ${
              selectedCategory === "all"
                ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-2xl"
                : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-2 border-gray-300 dark:border-gray-600 hover:border-indigo-500"
            }`}
          >
            <span className="relative z-10">🌟 All Skills</span>
            {selectedCategory === "all" && (
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-700 to-purple-700 transform scale-110 opacity-30 group-hover:scale-125 transition-all duration-300"></div>
            )}
          </button>

          {Object.entries(skillCategories).map(([key, category]) => (
            <button
              key={key}
              onClick={() => setSelectedCategory(key)}
              className={`group relative px-6 py-3 rounded-full font-semibold transition-all duration-500 transform hover:scale-105 ${
                selectedCategory === key
                  ? `bg-gradient-to-r ${category.color} text-white shadow-2xl`
                  : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-2 border-gray-300 dark:border-gray-600 hover:border-indigo-500"
              }`}
            >
              <span className="relative z-10">
                {category.icon} {category.title}
              </span>
              {selectedCategory === key && (
                <div
                  className={`absolute inset-0 rounded-full bg-gradient-to-r ${category.color.replace(
                    "500",
                    "700"
                  )} transform scale-110 opacity-30 group-hover:scale-125 transition-all duration-300`}
                ></div>
              )}
            </button>
          ))}
        </div>
      </AnimationWrapper>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
        {filteredSkills.map((skill, index) => (
          <AnimationWrapper
            key={skill.id}
            animation="scaleIn"
            delay={600 + index * 100}
          >
            <div
              className="group relative"
              onMouseEnter={() => setHoveredSkill(skill.id)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              {/* Main Skill Card */}
              <div
                className={`relative p-6 bg-white dark:bg-gray-800 rounded-3xl shadow-xl border border-gray-200 dark:border-gray-700 transform transition-all duration-500 hover:scale-110 hover:-translate-y-4 hover:rotate-2 ${
                  hoveredSkill === skill.id ? "shadow-2xl" : ""
                }`}
              >
                {/* Floating Animation Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-105"></div>

                {/* Skill Image */}
                <div className="relative z-10 flex justify-center mb-4">
                  <div className="relative">
                    <img
                      src={skill.img}
                      className={`w-20 h-20 object-cover rounded-2xl shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 ${
                        hoveredSkill === skill.id ? "animate-pulse" : ""
                      }`}
                      alt={skill.name}
                    />

                    {/* Floating Elements */}
                    <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-100 animate-bounce transition-all duration-500"></div>
                    <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-all duration-500"></div>
                  </div>
                </div>

                {/* Skill Name */}
                <div className="relative z-10 text-center">
                  <h3 className="text-sm font-bold text-gray-800 dark:text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:to-purple-600 transition-all duration-300">
                    {skill.name}
                  </h3>

                  {/* Experience Badge */}
                  <span className="inline-block px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-full group-hover:bg-gradient-to-r group-hover:from-indigo-500 group-hover:to-purple-500 group-hover:text-white transition-all duration-500">
                    {skill.experience}
                  </span>
                </div>

                {/* Proficiency Bar */}
                <div className="relative z-10 mt-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs text-gray-600 dark:text-gray-400">
                      Proficiency
                    </span>
                    <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400">
                      {skillStats[skill.id] || 0}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-all duration-1000 ease-out transform origin-left"
                      style={{
                        width: `${skillStats[skill.id] || 0}%`,
                        transform:
                          hoveredSkill === skill.id
                            ? "scaleY(1.5)"
                            : "scaleY(1)",
                      }}
                    ></div>
                  </div>
                </div>

                {/* Hover Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br from-indigo-600/10 to-purple-600/10 rounded-3xl opacity-0 transition-all duration-500 ${
                    hoveredSkill === skill.id ? "opacity-100" : ""
                  }`}
                ></div>
              </div>

              {/* Tooltip */}
              <div
                className={`absolute -top-16 left-1/2 transform -translate-x-1/2 px-3 py-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-sm rounded-lg shadow-xl transition-all duration-300 whitespace-nowrap z-20 ${
                  hoveredSkill === skill.id
                    ? "opacity-100 -translate-y-2"
                    : "opacity-0 translate-y-0 pointer-events-none"
                }`}
              >
                <span className="font-semibold">
                  {skill.proficiency}% Proficiency
                </span>
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900 dark:border-t-white"></div>
              </div>
            </div>
          </AnimationWrapper>
        ))}
      </div>

      {/* Stats Section */}
      <AnimationWrapper animation="fadeInUp" delay={1000}>
        <div className="mt-20 p-8 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-3xl">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
            Experience Highlights
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-3">📅</div>
              <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">
                1+
              </div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">
                Years Experience
              </div>
            </div>

            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-3">🚀</div>
              <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
                {allSkills.length}
              </div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">
                Technologies
              </div>
            </div>

            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-3">💼</div>
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                10+
              </div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">
                Projects Completed
              </div>
            </div>

            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-3">🏆</div>
              <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">
                12
              </div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">
                Weeks Internship
              </div>
            </div>
          </div>
        </div>
      </AnimationWrapper>

      {/* Learning Journey Timeline */}
      <AnimationWrapper animation="fadeInUp" delay={1200}>
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            My Learning Journey
          </h2>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-indigo-500 to-purple-500 rounded-full"></div>

            <div className="space-y-16">
              {[
                {
                  year: "2023",
                  title: "Started Full Stack Development",
                  desc: "Begin learning MERN stack and modern web technologies",
                  icon: "🎯",
                },
                {
                  year: "2024",
                  title: "Cloud Computing Internship",
                  desc: "6 weeks internship at UniConverge Technologies",
                  icon: "☁️",
                },
                {
                  year: "2024",
                  title: "Advanced React & Node.js",
                  desc: "Built multiple projects with React and Node.js",
                  icon: "⚛️",
                },
                {
                  year: "2025",
                  title: "React.Js Developer Internship",
                  desc: "Real world projects using React and Node.js during a 4-months internship at The Entrepreneurship Network.",
                  icon: "⚛️",
                },
                {
                  year: "2025",
                  title: "Full Stack Mastery",
                  desc: "Continuing to expand skills and build amazing projects",
                  icon: "🚀",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center ${
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  }`}
                >
                  <div
                    className={`w-1/2 ${
                      index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"
                    }`}
                  >
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl transform hover:scale-105 transition-all duration-300">
                      <div className="text-2xl mb-3">{item.icon}</div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  <div className="relative z-10 flex items-center justify-center w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-bold text-lg rounded-full shadow-xl">
                    {item.year}
                  </div>

                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </AnimationWrapper>
    </div>
  );
}

export default Experience;