
// import React, { useState } from "react";
// import pic from "../image/myimg.png";
// import { AiOutlineMenu } from "react-icons/ai";
// import { IoCloseSharp } from "react-icons/io5";
// import { Link } from "react-scroll";
// import { FaMoon, FaSun } from "react-icons/fa";
// import { useTheme } from "./ThemeContext";

// function Navbar() {
//   const [menu, setMenu] = useState(false);
//   const { isDarkMode, toggleTheme } = useTheme();

//   const navItems = [
//     { id: 1, text: "Home" },
//     { id: 2, text: "About" },
//     { id: 3, text: "Projects" },
//     { id: 4, text: "Experience" },
//     { id: 5, text: "Contact" },
//   ];

//   return (
//     <>
//       <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 shadow-md fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-800 transition-colors duration-300">
//         <div className="flex justify-between items-center h-16">
//           <div className="flex space-x-2">
//             <img
//               src={pic}
//               className="h-12 w-12 rounded-full"
//               alt="Pramod Kumar"
//             />
//             <h1 className="font-semibold text-xl cursor-pointer text-gray-900 dark:text-white">
//               Pram<span className="text-pink-600 text-2xl">od</span>
//               <p className="text-sm">
//                 web<span className="text-pink-600">developer</span>
//               </p>
//             </h1>
//           </div>

//           {/* Desktop navbar */}
//           <div className="flex items-center space-x-4">
//             <ul className="hidden md:flex space-x-8">
//               {navItems.map(({ id, text }) => (
//                 <li
//                   className="hover:scale-125 duration-200 cursor-pointer"
//                   key={id}
//                 >
//                   <Link
//                     activeClass="active"
//                     to={text}
//                     spy={true}
//                     smooth={true}
//                     hashSpy={true}
//                     offset={-70}
//                     duration={500}
//                     delay={100}
//                     isDynamic={true}
//                     ignoreCancelEvents={false}
//                     spyThrottle={500}
//                     className="text-gray-900 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 transition-colors duration-300"
//                   >
//                     {text}
//                   </Link>
//                 </li>
//               ))}
//             </ul>

//             {/* Theme Toggle Button */}
//             <button
//               onClick={toggleTheme}
//               className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-yellow-400 hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-300"
//               aria-label="Toggle theme"
//             >
//               {isDarkMode ? <FaSun size={18} /> : <FaMoon size={18} />}
//             </button>

//             {/* Mobile menu toggle */}
//             <div
//               onClick={() => setMenu(!menu)}
//               className="md:hidden cursor-pointer text-gray-900 dark:text-white"
//             >
//               {menu ? <IoCloseSharp size={24} /> : <AiOutlineMenu size={24} />}
//             </div>
//           </div>
//         </div>

//         {/* Mobile navbar */}
//         {menu && (
//           <div className="bg-white dark:bg-gray-800 transition-colors duration-300">
//             <ul className="md:hidden flex flex-col h-screen items-center justify-center space-y-4 text-2xl">
//               {navItems.map(({ id, text }) => (
//                 <li
//                   className="hover:scale-125 duration-200 font-semibold cursor-pointer"
//                   key={id}
//                 >
//                   <Link
//                     onClick={() => setMenu(!menu)}
//                     activeClass="active"
//                     to={text}
//                     spy={true}
//                     smooth={true}
//                     hashSpy={true}
//                     offset={-70}
//                     duration={500}
//                     delay={100}
//                     isDynamic={true}
//                     ignoreCancelEvents={false}
//                     spyThrottle={500}
//                     className="text-gray-900 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 transition-colors duration-300"
//                   >
//                     {text}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         )}
//       </div>
//     </>
//   );
// }

// export default Navbar;





// components/Navbar.jsx
// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import pic from '../image/myimg.png';
// import { AiOutlineMenu } from 'react-icons/ai';
// import { IoCloseSharp } from 'react-icons/io5';
// import { Link } from 'react-scroll';
// import { FaMoon, FaSun } from 'react-icons/fa';
// import { useTheme } from './ThemeContext';

// function Navbar() {
//     const [menu, setMenu] = useState(false);
//     const [scrolled, setScrolled] = useState(false);
//     const { isDarkMode, toggleTheme } = useTheme();
    
//     const navItems = [
//         { id: 1, text: 'Home' },
//         { id: 2, text: 'About' },
//         { id: 3, text: 'Projects' },
//         { id: 4, text: 'Experience' },
//         { id: 5, text: 'Contact' },
//     ];

//     // Handle scroll effect
//     useEffect(() => {
//         const handleScroll = () => {
//             setScrolled(window.scrollY > 50);
//         };
//         window.addEventListener('scroll', handleScroll);
//         return () => window.removeEventListener('scroll', handleScroll);
//     }, []);

//     const navbarVariants = {
//         hidden: { y: -100, opacity: 0 },
//         visible: {
//             y: 0,
//             opacity: 1,
//             transition: {
//                 duration: 0.6,
//                 ease: "easeOut"
//             }
//         }
//     };

//     const logoVariants = {
//         hidden: { scale: 0, rotate: -180 },
//         visible: {
//             scale: 1,
//             rotate: 0,
//             transition: {
//                 type: "spring",
//                 stiffness: 260,
//                 damping: 20,
//                 delay: 0.2
//             }
//         }
//     };

//     const menuItemVariants = {
//         hidden: { opacity: 0, x: -20 },
//         visible: {
//             opacity: 1,
//             x: 0,
//             transition: { duration: 0.3 }
//         }
//     };

//     const mobileMenuVariants = {
//         hidden: {
//             opacity: 0,
//             height: 0,
//             transition: { duration: 0.3 }
//         },
//         visible: {
//             opacity: 1,
//             height: "auto",
//             transition: {
//                 duration: 0.4,
//                 ease: "easeOut"
//             }
//         }
//     };

//     return (
//         <motion.div
//             className={`max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//                 scrolled
//                     ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg'
//                     : 'bg-white dark:bg-gray-900'
//             }`}
//             variants={navbarVariants}
//             initial="hidden"
//             animate="visible"
//         >
//             <div className='flex justify-between items-center h-16'>
//                 <motion.div
//                     className='flex space-x-2'
//                     variants={logoVariants}
//                     initial="hidden"
//                     animate="visible"
//                 >
//                     <motion.img
//                         src={pic}
//                         className='h-12 w-12 rounded-full cursor-pointer'
//                         alt="Pramod Kumar"
//                         whileHover={{ scale: 1.1, rotate: 5 }}
//                         whileTap={{ scale: 0.9 }}
//                     />
//                     <motion.h1
//                         className='font-semibold text-xl cursor-pointer text-gray-900 dark:text-white'
//                         whileHover={{ scale: 1.05 }}
//                     >
//                         Pram<span className='text-pink-600 text-2xl'>od</span>
//                         <p className='text-sm'>
//                             web<span className='text-pink-600'>developer</span>
//                         </p>
//                     </motion.h1>
//                 </motion.div>
                
//                 {/* Desktop navbar */}
//                 <div className="flex items-center space-x-4">
//                     <motion.ul
//                         className='hidden md:flex space-x-8'
//                         variants={{
//                             visible: {
//                                 transition: {
//                                     staggerChildren: 0.1,
//                                     delayChildren: 0.4
//                                 }
//                             }
//                         }}
//                         initial="hidden"
//                         animate="visible"
//                     >
//                         {navItems.map(({ id, text }) => (
//                             <motion.li
//                                 className='cursor-pointer'
//                                 key={id}
//                                 variants={menuItemVariants}
//                                 whileHover={{
//                                     scale: 1.1,
//                                     y: -2,
//                                     transition: { duration: 0.2 }
//                                 }}
//                                 whileTap={{ scale: 0.95 }}
//                             >
//                                 <Link
//                                     activeClass="active"
//                                     to={text}
//                                     spy={true}
//                                     smooth={true}
//                                     hashSpy={true}
//                                     offset={-70}
//                                     duration={500}
//                                     className="relative text-gray-900 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 transition-colors duration-300 after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-pink-600 after:left-1/2 after:-translate-x-1/2 after:bottom-[-4px] after:transition-all after:duration-300 hover:after:w-full"
//                                 >
//                                     {text}
//                                 </Link>
//                             </motion.li>
//                         ))}
//                     </motion.ul>
                    
//                     {/* Theme Toggle Button */}
//                     <motion.button
//                         onClick={toggleTheme}
//                         className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-yellow-400"
//                         whileHover={{ scale: 1.1, rotate: 180 }}
//                         whileTap={{ scale: 0.9 }}
//                         transition={{ duration: 0.3 }}
//                     >
//                         <AnimatePresence mode="wait">
//                             <motion.div
//                                 key={isDarkMode ? 'sun' : 'moon'}
//                                 initial={{ opacity: 0, rotate: -180 }}
//                                 animate={{ opacity: 1, rotate: 0 }}
//                                 exit={{ opacity: 0, rotate: 180 }}
//                                 transition={{ duration: 0.3 }}
//                             >
//                                 {isDarkMode ? <FaSun size={18} /> : <FaMoon size={18} />}
//                             </motion.div>
//                         </AnimatePresence>
//                     </motion.button>
                    
//                     {/* Mobile menu toggle */}
//                     <motion.div
//                         onClick={() => setMenu(!menu)}
//                         className='md:hidden cursor-pointer text-gray-900 dark:text-white'
//                         whileHover={{ scale: 1.1 }}
//                         whileTap={{ scale: 0.9 }}
//                     >
//                         <AnimatePresence mode="wait">
//                             <motion.div
//                                 key={menu ? 'close' : 'menu'}
//                                 initial={{ opacity: 0, rotate: -90 }}
//                                 animate={{ opacity: 1, rotate: 0 }}
//                                 exit={{ opacity: 0, rotate: 90 }}
//                                 transition={{ duration: 0.2 }}
//                             >
//                                 {menu ? <IoCloseSharp size={24} /> : <AiOutlineMenu size={24} />}
//                             </motion.div>
//                         </AnimatePresence>
//                     </motion.div>
//                 </div>
//             </div>
            
//             {/* Mobile navbar */}
//             <AnimatePresence>
//                 {menu && (
//                     <motion.div
//                         className='md:hidden bg-white dark:bg-gray-800 absolute top-16 left-0 right-0 shadow-lg'
//                         variants={mobileMenuVariants}
//                         initial="hidden"
//                         animate="visible"
//                         exit="hidden"
//                     >
//                         <motion.ul
//                             className='flex flex-col items-center py-6 space-y-4 text-xl'
//                             variants={{
//                                 visible: {
//                                     transition: {
//                                         staggerChildren: 0.1,
//                                         delayChildren: 0.2
//                                     }
//                                 }
//                             }}
//                         >
//                             {navItems.map(({ id, text }) => (
//                                 <motion.li
//                                     key={id}
//                                     variants={{
//                                         hidden: { opacity: 0, x: -50 },
//                                         visible: { opacity: 1, x: 0 }
//                                     }}
//                                     whileHover={{ scale: 1.05 }}
//                                     whileTap={{ scale: 0.95 }}
//                                 >
//                                     <Link
//                                         onClick={() => setMenu(false)}
//                                         to={text}
//                                         spy={true}
//                                         smooth={true}
//                                         offset={-70}
//                                         duration={500}
//                                         className="text-gray-900 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 transition-colors duration-300 cursor-pointer"
//                                     >
//                                         {text}
//                                     </Link>
//                                 </motion.li>
//                             ))}
//                         </motion.ul>
//                     </motion.div>
//                 )}
//             </AnimatePresence>
//         </motion.div>
//     );
// }

// export default Navbar;


// Enhanced Navbar with Slide-Down Animation

import React, { useState, useEffect } from "react";
import pic from "../image/myimg.png";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-scroll";
import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "./ThemeContext";
import AnimationWrapper from "./AnimationWrapper";

function Navbar() {
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

  const navItems = [
    { id: 1, text: "Home" },
    { id: 2, text: "About" },
    { id: 3, text: "Projects" },
    { id: 4, text: "Experience" },
    { id: 5, text: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <AnimationWrapper animation="fadeInDown" duration={800}>
        <div
          className={`fixed max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 bottom-5 left-0 right-0 z-50 transition-all duration-500 ${
            scrolled
              ? "bg-white/95 dark:bg-gray-800/95 backdrop-blur-md shadow-lg"
              : "bg-white dark:bg-gray-800 shadow-md"
          }`}
        >
          <div className="flex justify-between items-center h-16">
            {/* Logo Section */}
            <AnimationWrapper animation="fadeInLeft" delay={300}>
              <div className="flex space-x-2 items-center">
                <img
                  src={pic}
                  className="h-12 w-12 rounded-full transform transition-transform duration-300 hover:scale-110 hover:rotate-3"
                  alt="Pramod Kumar"
                />
                <h1 className="font-semibold text-xl cursor-pointer text-gray-900 dark:text-white">
                  <span className="inline-block transform transition-transform duration-300 hover:scale-105">
                    Pram<span className="text-pink-600 text-2xl">od</span>
                  </span>
                  <p className="text-sm transform transition-all duration-300 hover:text-pink-600">
                    web<span className="text-pink-600">developer</span>
                  </p>
                </h1>
              </div>
            </AnimationWrapper>

            {/* Desktop Navigation */}
            <div className="flex items-center space-x-4">
              <ul className="hidden md:flex space-x-8">
                {navItems.map(({ id, text }, index) => (
                  <AnimationWrapper
                    key={id}
                    animation="fadeInDown"
                    delay={300 + index * 100}
                  >
                    <li className="relative group cursor-pointer">
                      <Link
                        activeClass="active"
                        to={text}
                        spy={true}
                        smooth={true}
                        hashSpy={true}
                        offset={-70}
                        duration={500}
                        className="text-gray-900 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 transition-all duration-300 text-lg font-medium relative"
                      >
                        {text}
                        <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
                      </Link>
                    </li>
                  </AnimationWrapper>
                ))}
              </ul>

              {/* Theme Toggle */}
              <AnimationWrapper animation="scaleIn" delay={800}>
                <button
                  onClick={toggleTheme}
                  className="p-3 rounded-full bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 text-gray-800 dark:text-yellow-400 hover:scale-110 transform transition-all duration-300 shadow-lg hover:shadow-xl"
                  aria-label="Toggle theme"
                >
                  <div className="transform transition-transform duration-500">
                    {isDarkMode ? (
                      <FaSun
                        size={18}
                        className="rotate-0 hover:rotate-180 transition-transform duration-500"
                      />
                    ) : (
                      <FaMoon
                        size={18}
                        className="rotate-0 hover:-rotate-12 transition-transform duration-300"
                      />
                    )}
                  </div>
                </button>
              </AnimationWrapper>

              {/* Mobile Menu Toggle */}
              <div
                onClick={() => setMenu(!menu)}
                className="md:hidden cursor-pointer text-gray-900 dark:text-white p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors duration-300"
              >
                <div className="transform transition-transform duration-300">
                  {menu ? (
                    <IoCloseSharp
                      size={24}
                      className="rotate-0 hover:rotate-90 transition-transform duration-300"
                    />
                  ) : (
                    <AiOutlineMenu
                      size={24}
                      className="hover:scale-110 transition-transform duration-300"
                    />
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div
            className={`md:hidden absolute top-16 left-0 right-0 bg-white dark:bg-gray-800 shadow-xl transition-all duration-500 overflow-hidden ${
              menu ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <ul className="flex flex-col py-4">
              {navItems.map(({ id, text }, index) => (
                <li
                  key={id}
                  className={`transform transition-all duration-500 ${
                    menu
                      ? "translate-x-0 opacity-100"
                      : "translate-x-full opacity-0"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <Link
                    onClick={() => setMenu(false)}
                    activeClass="active"
                    to={text}
                    spy={true}
                    smooth={true}
                    className="block px-6 py-3 text-lg font-medium text-gray-900 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300"
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </AnimationWrapper>
    </>
  );
}

export default Navbar;