import React from 'react';
import pic from '../image/myimg.png';

import { FaGithub } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa6";
import { IoLogoNodejs } from "react-icons/io5";
import { ReactTyped } from "react-typed";


function Home() {
    return (
        <>
            <div name='Home' className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20'>
                <div className='flex flex-col md:flex-row'>
                    <div className='md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1'>
                        <span className='text-xl'> Welcome In My Feed</span>
                        <div className='flex space-x-1 text-2xl md:text-4xl'>
                            <h1>Hello, I'm a</h1>
                            {/* <span className='text-red-700 font-bold'>Developer</span> */}
                            <ReactTyped
                                strings={["Developer", "Programmer", "Coder"]}
                                typeSpeed={40}
                                backSpeed={50}
                                loop={true}
                            />
                        </div>
                        <br />
                        <p className='text-md md:text-md text-justify'>My name is Pramod Kumar, and I'm a dedicated developer looking to advance in the development and innovation industries. I am a quick learner who is passionate about technology and creativity.
                            I am eager to utilize my academic knowledge in the real world and contribute to innovative initiatives while honing my programming, problem-solving, and cooperation skills.
                            I have six weeks of cloud computing experience with UniConverge Technologies Pvt. Ltd.
                        </p>
                        <br />
                        {/* social media icons */}
                        <div className='flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0'>
                            <div className='space-y-2'>
                                <h1 className='text-xl font-bold'>Available on</h1>
                                <ul className='flex space-x-5'>
                                    <li><a href="https://github.com/PramodkrOfficial" target='blank'><FaGithub className='text-2xl' /></a></li>
                                    <li><a href="https://www.linkedin.com/in/pramodkrdev/" target='blank'><FaLinkedin className='text-2xl' /></a></li>
                                    <li><a href="https://www.facebook.com/pramodkumar.kushwaha.581525/" target='blank'><FaSquareFacebook className='text-2xl' /></a></li>
                                    <li><a href="https://www.instagram.com/pramodkr_dev/" target='blank'><FaSquareInstagram className='text-2xl' /></a></li>
                                </ul>
                            </div>
                            {/*   Skills icons  */}
                            <div className='space-y-2'>
                                <h1 className='text-xl font-bold'>Currently working on</h1>
                                <ul className='flex space-x-5'>
                                    <li className='text-2xl md:text-3xl hover:scale-125 duration-200 rounded-full border-[2px]'><SiMongodb /></li>
                                    <li className='text-2xl md:text-3xl hover:scale-125 duration-200 rounded-full border-[2px]'><SiExpress /></li>
                                    <li className='text-2xl md:text-3xl hover:scale-125 duration-200 rounded-full border-[2px]'><FaReact /></li>
                                    <li className='text-2xl md:text-3xl hover:scale-125 duration-200 rounded-full border-[2px] '><IoLogoNodejs /></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='md:w-1/2 md:ml-48 md:mt-20 mt-5 order-1'>

                        <img src={pic} className='rounded-full md:h-[450px] md:w-[450px]' alt="reload" />
                    </div>
                </div>
            </div>
            <hr />
        </>
    )
}

export default Home;