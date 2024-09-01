import React from 'react';

function About() {
    return (
        <>
            <div name='About' className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-16'>
                <h1 className='text-3xl font-bold mb-5'>About</h1>
                <p>
                    Hello, I'm Pramod, a passionate web developer with a deep interest in MERN Stack. I aspire to design software solutions that are both effective and visually attractive, leaving a lasting impression.
                    I am a determined individual with outstanding programming skills in React Js, Java, and JavaScript, with experience in web development.
                </p>
                <br />
                <h1 className='text-green-600 font-semibold text-xl'>Education & Training</h1>
                <span>
                    B.tech, Mangalmay Institute of Engineering & Technology, Expected in 2025,<br/> Diploma, JKP Polytechnic Collage, 2019,<br/> FullStack Developer, IIT Kanpur, 2023,<br/> Software Development, Linkedin & Microsoft, 2023
                </span>
                <br />
                <br />
                <h1 className='text-green-600 font-semibold text-xl'>Skills & Expertise</h1>
                <span>
                    {/* Proficient in [Programming Languages,] experienced with [Software Tools/Technologies,] strong gsap of [Design Principles/Concepts] excellent problem-solving skills effective communicator and collaborator. */}
                    Proficient in Java, Python, JavaScript experienced with VS Code, PyCharm, InteliJ IDEA,Node Js, Git,Docker, Aws, MySql, JDBC,GitHub. <br/> Strong gsap & scrollTrigger of UX & UI Design excellent problem-solving skills effective communicator and collaborator.
                </span>
                <br />
                <br />
                <h1 className='text-green-600 font-semibold text-xl'>Professional Experieance</h1>
                <span>
                    {/* [Job Title],[Company/Organization],[Dates],[Brief description of responsibilities and achievements],[Job Title],[Company/Organization],[Dates],[Brief description of responsibilities and achievements],[Freelance/Contract Work],[Client/Organization],[Dates],[Brief description of projects and contributions] */}
                    Cloud Computing Intern,UniConverge Technologies Pvt. Ltd. from 04/2024 to 07/2024. I learned about cloud computing throughout my internship and developed my abilities in platform usage, infrastructure
                    management, application deployment, automation, scripting, and problem-solving.
                </span>
                <br />
                <br />
                <h1 className='text-green-600 font-semibold text-xl'>Achievements & Awards</h1>
                <span>
                    {/* [AwardJ/Recognition],[Organization/Institution],[Year],[Achievement],[Organization/Platform],[Year] */}
                    31st rank in "Java Quiz", Datapro computers Pvt. Ltd. - 2024.<br/>
                    Excellent performance in the "Robotic Coding competition", Robotic IO Pvt.Ltd. - 2024.<br/>
                    Enthusiastically participated in "NSPC", National Students Paryavaran Competition  - 2024.<br/>
                    Good performance in "Spring Into Action - A College Quiz Series", GoSpring.ai - 2024.
                </span>
                <br />
                <br />
                <h1 className='text-green-600 font-semibold text-xl'>Mission Statement</h1>
                <span>
                    {/* My mission is to leverage my skills and creativity to deliver innovative [Your Field] solutions that exceed client expectations and contribute positively to the digital landscape. I'm committed to continuous learning and growth, always seeking new challenges and opportunities to expand my horizons. */}
                    My goal is to produce cutting-edge Web development and fullstack development solutions that surpass client expectations and improve the digital landscape by utilizing my abilities and creativity. My commitment to lifelong learning and development stems from my constant search for fresh challenges and chances to broaden my perspectives.
                </span>
            </div>
        </>
    )
}

export default About;