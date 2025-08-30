// import React from 'react';

// function About() {
//     return (
//         <>
//             <div name='About' className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-16'>
//                 <h1 className='text-3xl font-bold mb-5'>About</h1>
//                 <p>
//                     Hello, I'm <b>Pramod</b>, a passionate <b>web developer</b> with a deep interest in <b>Full Stack</b> and <b>MERN Stack</b>. I aspire to design software solutions that are both effective and visually attractive, leaving a lasting impression.
//                     I am a determined individual with outstanding programming skills in <b>Java</b>, <b>Python</b>,<b> Docker</b>, <b>Git</b>, <b>GitHub</b> and <b>React Js</b>,<b> Tailwind CSS</b>, <b>JavaScript</b> and <b>MERN</b> with experience in web development.
//                 </p>
//                 <br />
//                 <h1 className='text-slate-900 font-semibold text-xl'>Education & Training</h1>
//                 <span>
//                     B.tech, <b>Mangalmay Institute of Engineering & Technology</b>, Expected in 2025,<br/> Diploma, <b>JKP Polytechnic College</b>, 2019,<br/> FullStack Developer, <b>IIT Kanpur</b>, 2023,<br/> Software Development, <b>Linkedin & Microsoft</b>, 2023
//                 </span>
//                 <br />
//                 <br />
//                 <h1 className='text-slate-900 font-semibold text-xl'>Skills & Expertise</h1>
//                 <span>
//                     {/* Proficient in [Programming Languages,] experienced with [Software Tools/Technologies,] strong gsap of [Design Principles/Concepts] excellent problem-solving skills effective communicator and collaborator. */}
//                     Proficient in <b>Java</b>, <b>Python</b>, <b>JavaScript</b>, <b>MongoDB</b>, <b>Express Js</b>, <b>React Js</b>, <b>Node Js</b> experienced with <b>VS Code</b>, <b>PyCharm</b>, <b>InteliJ IDEA</b>, <b>Node Js</b>, <b>Git</b>, <b>Docker</b>, <b>Aws</b>, <b>MySql</b>, <b>JDBC</b>, <b>GitHub</b>. <br/> Strong gsap & scrollTrigger of <b>UX & UI Design</b> excellent problem-solving skills <b>effective communicator</b> and collaborator.
//                 </span>
//                 <br />
//                 <br />
//                 <h1 className='text-slate-900 font-semibold text-xl'>Professional Experieance</h1>
//                 <span>
//                     {/* [Job Title],[Company/Organization],[Dates],[Brief description of responsibilities and achievements],[Job Title],[Company/Organization],[Dates],[Brief description of responsibilities and achievements],[Freelance/Contract Work],[Client/Organization],[Dates],[Brief description of projects and contributions] */}
//                     Cloud Computing Intern,<b>UniConverge Technologies Pvt. Ltd</b>. from 04/2024 to 07/2024. I learned about <b>cloud computing</b> throughout my internship and developed my abilities in platform usage, infrastructure
//                     management, <b>application deployment</b>, automation, scripting, and <b>problem-solving</b>.
//                 </span>
//                 <br />
//                 <br />
//                 <h1 className='text-slate-900 font-semibold text-xl'>Achievements & Awards</h1>
//                 <span>
//                     {/* [AwardJ/Recognition],[Organization/Institution],[Year],[Achievement],[Organization/Platform],[Year] */}
//                     31st rank in <b>"Java Quiz"</b>, <b>Datapro computers Pvt. Ltd</b>. - 2024.<br/>
//                     Excellent performance in the <b>"Robotic Coding competition"</b>, <b>Robotic IO Pvt.Ltd</b>. - 2024.<br/>
//                     Enthusiastically participated in <b>"NSPC"</b>, <b>National Students Paryavaran Competition</b>  - 2024.<br/>
//                     Good performance in <b>"Spring Into Action - A College Quiz Series"</b>, <b>GoSpring.ai</b> - 2024.
//                 </span>
//                 <br />
//                 <br />
//                 <h1 className='text-slate-900 font-semibold text-xl'>Mission Statement</h1>
//                 <span>
//                     {/* My mission is to leverage my skills and creativity to deliver innovative [Your Field] solutions that exceed client expectations and contribute positively to the digital landscape. I'm committed to continuous learning and growth, always seeking new challenges and opportunities to expand my horizons. */}
//                     <b>My goal</b> is to produce cutting-edge <b>Web development</b> and <b>fullstack development</b> solutions that surpass client expectations and <b>improve</b> the digital landscape by utilizing <b>my abilities</b> and <b>creativity</b>. My commitment to <b>lifelong learning</b> and development stems from my constant search for fresh <b>challenges</b> and chances to broaden my perspectives.
//                 </span>
//             </div>
//         </>
//     )
// }

// export default About;

// components/About.jsx
// About Component with Staggered Animations

import React from "react";
import AnimationWrapper from "./AnimationWrapper";

function About() {
  const sections = [
    {
      title: "Education & Training",
      icon: "🎓",
      content: `B.tech, Mangalmay Institute of Engineering & Technology, Expected in 2025, 
                     Diploma, JKP Polytechnic College, 2019, 
                     FullStack Developer, IIT Kanpur, 2023, 
                     Software Development, Linkedin & Microsoft, 2023`,
      delay: 400,
    },
    {
      title: "Skills & Expertise",
      icon: "💻",
      content: `Proficient in Java, Python, JavaScript, MongoDB, Express Js, React Js, Node Js 
                     experienced with VS Code, PyCharm, InteliJ IDEA, Node Js, Git, Docker, Aws, MySql,
                     JDBC GitHub, Strong gsap & scrollTrigger of UX & UI Design excellent problem-solving 
                     skills effective communicator and collaborator.`,
      delay: 600,
    },
    {
      title: "Professional Experience",
      icon: "🚀",
      content: `Cloud Computing Intern, UniConverge Technologies Pvt. Ltd. from 04/2024 to 07/2024. 
                     I learned about cloud computing throughout my internship and developed my abilities in 
                     platform usage, infrastructure management, application deployment, automation, scripting, 
                     and problem-solving.`,
      delay: 800,
    },
    {
      title: "Professional Experience",
      icon: "🚀",
      content: `React.Js Developer Intern, The Entrepreneurship Network Pvt. Ltd. from 12/2024 to 03/2025. 
                     I learned about JavaScript Framework with real world projects throughout my internship and developed my abilities in 
                     reuseable code, enhanced my coding style, api integration, collaborating with peers and mentors, and problem-solving.`,
      delay: 1000,
    },
    {
      title: "Achievements & Awards",
      icon: "🏆",
      content: `31st rank in "Java Quiz" Datapro computers Pvt. Ltd. - 2024,
                     I achieved basic problem in DSA certificate from Hacker Rank,
                     I earned the Java Bronze Badge from Skillyst through foundit,
                     Excellent performance in the "Robotic Coding competition" Robotic IO Pvt.Ltd. - 2024,
                     Enthusiastically participated in "NSPC" National Students Paryavaran Competition - 2024,
                     Good performance in "Spring Into Action - A College Quiz Series", GoSpring.ai - 2024.`,
      delay: 1200,
    },
    {
      title: "Mission Statement",
      icon: "🎯",
      content: `My goal is to produce cutting-edge Web development and fullstack development solutions 
                     that surpass client expectations and improve the digital landscape by utilizing my abilities 
                     and creativity. My commitment to lifelong learning and development stems from my constant 
                     search for fresh challenges and chances to broaden my perspectives.`,
      delay: 1400,
    },
  ];

  return (
    <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16 overflow-hidden"
    >
      <AnimationWrapper animation="fadeInUp" delay={200}>
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
            About Me
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full"></div>
        </div>
      </AnimationWrapper>

      <AnimationWrapper animation="fadeInUp" delay={300}>
        <div className="relative mb-12 p-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl shadow-xl">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-t-2xl"></div>
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            Hello, I'm{" "}
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600">
              Pramod
            </span>
            , a passionate{" "}
            <span className="font-semibold text-blue-600 dark:text-blue-400">
              web developer
            </span>{" "}
            with a deep interest in{" "}
            <span className="font-semibold text-green-600 dark:text-green-400">
              Full Stack
            </span>{" "}
            and{" "}
            <span className="font-semibold text-purple-600 dark:text-purple-400">
              MERN Stack
            </span>
            . I aspire to design software solutions that are both effective and
            visually attractive, leaving a lasting impression.
          </p>
        </div>
      </AnimationWrapper>

      <div className="grid gap-8 md:gap-12">
        {sections.map((section, index) => (
          <AnimationWrapper
            key={index}
            animation={index % 2 === 0 ? "fadeInLeft" : "fadeInRight"}
            delay={section.delay}
          >
            <div className="group relative">
              <div
                className={`flex flex-col md:flex-row items-start gap-6 p-8 rounded-2xl transition-all duration-500 hover:shadow-2xl ${index % 2 === 0
                    ? "bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 hover:shadow-cyan-200/50 dark:hover:shadow-cyan-500/20"
                    : "bg-gradient-to-l from-purple-50 to-pink-50 dark:from-gray-700 dark:to-gray-800 hover:shadow-purple-200/50 dark:hover:shadow-purple-500/20"
                  }`}
              >
                {/* Icon Section */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 flex items-center justify-center text-3xl bg-white dark:bg-gray-600 rounded-2xl shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                    {section.icon}
                  </div>
                </div>

                {/* Content Section */}
                <div className="flex-grow">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 transition-all duration-500">
                    {section.title}
                  </h2>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors duration-300">
                    {section.content.split(",").map((item, itemIndex) => (
                      <span
                        key={itemIndex}
                        className="inline-block mr-2 mb-2 hover:text-pink-600 dark:hover:text-pink-400 transition-colors duration-300"
                      >
                        {item.trim()}
                        {itemIndex < section.content.split(",").length - 1 &&
                          ","}
                      </span>
                    ))}
                  </p>
                </div>
              </div>

              {/* Decorative Border */}
              <div
                className={`absolute top-0 left-0 w-full h-1 rounded-t-2xl bg-gradient-to-r ${index % 2 === 0
                    ? "from-cyan-500 to-blue-500"
                    : "from-purple-500 to-pink-500"
                  } transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}
              ></div>
            </div>
          </AnimationWrapper>
        ))}
      </div>
    </div>
  );
}

export default About;
