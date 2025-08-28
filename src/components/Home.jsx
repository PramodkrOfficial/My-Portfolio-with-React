// import React from "react";
// import pic from "../image/myimg.png";

// import { FaGithub } from "react-icons/fa6";
// import { FaSquareFacebook } from "react-icons/fa6";
// import { FaLinkedin } from "react-icons/fa";
// import { FaSquareInstagram } from "react-icons/fa6";
// import { FaDownload } from "react-icons/fa6";
// import { FaEnvelope } from "react-icons/fa6";

// import { SiMongodb } from "react-icons/si";
// import { SiExpress } from "react-icons/si";
// import { FaReact } from "react-icons/fa6";
// import { IoLogoNodejs } from "react-icons/io5";
// import { ReactTyped } from "react-typed";

// function Home() {
//   return (
//     <>
//       <div
//         name="Home"
//         className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
//       >
//         <div className="flex flex-col md:flex-row">
//           <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
//             <span className="text-xl"> Welcome In My Feed</span>
//             <div className="flex space-x-1 text-2xl md:text-4xl">
//               <h1>Hello, I'm a</h1>
//               <span className="text-cyan-800">
//                 <ReactTyped
//                   strings={["Developer", "Programmer", "Coder"]}
//                   typeSpeed={40}
//                   backSpeed={50}
//                   loop={true}
//                 />
//               </span>
//             </div>
//             <br />
//             <p className="text-md md:text-md text-justify">
//               My name is <b>Pramod Kumar</b>, and I'm a dedicated developer
//               looking to advance in the development and innovation industries. I
//               am a quick learner who is passionate about{" "}
//               <b>technology and creativity</b>. I am eager to utilize my
//               academic knowledge in the real world and contribute to innovative
//               initiatives while honing my <b>programming</b>,{" "}
//               <b>problem-solving</b>, and cooperation skills. I have six weeks
//               of cloud computing experience with{" "}
//               <b>UniConverge Technologies Pvt. Ltd</b>.
//             </p>
//             <br />

//             {/* Job Action Buttons */}
//             <div className="flex flex-col items-center md:flex-row space-y-6 md:space-y-0">
//               <div className="flex flex-row items-center gap-20 space-y-2 mt-10">
//                 <button className="group bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-full font-semibold text-lg shadow-lg transform transition-all duration-300 hover:scale-110 hover:shadow-xl hover:from-cyan-600 hover:to-blue-700 active:scale-95 flex items-center justify-center gap-3">
//                   <FaDownload className="text-xl group-hover:animate-bounce" />
//                   Download CV
//                 </button>

//                 {/* <button className="group bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-8 py-3 rounded-full font-semibold text-lg shadow-lg transform transition-all duration-300 hover:scale-110 hover:shadow-xl hover:from-emerald-600 hover:to-teal-700 active:scale-95 flex items-center justify-center gap-3">
//                 <FaEnvelope className="text-xl group-hover:rotate-12 transition-transform duration-300" />
//                 Hire Me
//               </button> */}

//                 <button className="group bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-8 py-3 rounded-full font-semibold text-lg shadow-lg transform transition-all duration-300 hover:scale-110 hover:shadow-xl hover:from-emerald-600 hover:to-teal-700 active:scale-95 flex items-center justify-center gap-3">
//                   <FaEnvelope className="text-xl group-hover:rotate-12 transition-transform duration-300" />
//                   Visit LinkedIn
//                 </button>
//               </div>
//             </div>

//             {/* social media icons */}
//             <div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0">
//               <div className="space-y-2 mt-10">
//                 <h1 className="text-xl font-bold">Available on</h1>
//                 <ul className="flex space-x-5">
//                   <li>
//                     <a
//                       href="https://github.com/PramodkrOfficial"
//                       target="blank"
//                     >
//                       <FaGithub className="text-2xl" />
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="https://www.linkedin.com/in/pramodkrdev/"
//                       target="blank"
//                     >
//                       <FaLinkedin className="text-2xl" />
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="https://www.facebook.com/pramodkumar.kushwaha.581525/"
//                       target="blank"
//                     >
//                       <FaSquareFacebook className="text-2xl" />
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="https://www.instagram.com/pramodkr_dev/"
//                       target="blank"
//                     >
//                       <FaSquareInstagram className="text-2xl" />
//                     </a>
//                   </li>
//                 </ul>
//               </div>
//               {/*   Skills icons  */}
//               <div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0">
//                 <div className="space-y-2 mt-10">
//                   <h1 className="text-xl font-bold">Currently working on</h1>
//                   <ul className="flex space-x-5">
//                     <li className="text-2xl md:text-3xl hover:scale-125 duration-200 rounded-full border-[2px]">
//                       <SiMongodb />
//                     </li>
//                     <li className="text-2xl md:text-3xl hover:scale-125 duration-200 rounded-full border-[2px]">
//                       <SiExpress />
//                     </li>
//                     <li className="text-2xl md:text-3xl hover:scale-125 duration-200 rounded-full border-[2px]">
//                       <FaReact />
//                     </li>
//                     <li className="text-2xl md:text-3xl hover:scale-125 duration-200 rounded-full border-[2px] ">
//                       <IoLogoNodejs />
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="md:w-1/2 md:ml-48 md:mt-20 mt-5 order-1">
//             <img
//               src={pic}
//               className="rounded-full md:h-[450px] md:w-[450px]"
//               alt="reload"
//             />
//           </div>
//         </div>
//       </div>
//       <hr />
//     </>
//   );
// }

// export default Home;

// import React, { useState } from "react";
// import pic from "../image/myimg.png";

// import { FaGithub } from "react-icons/fa6";
// import { FaSquareFacebook } from "react-icons/fa6";
// import { FaLinkedin } from "react-icons/fa";
// import { FaSquareInstagram } from "react-icons/fa6";
// import { FaDownload } from "react-icons/fa6";
// import { FaCheck } from "react-icons/fa6";

// import { SiMongodb } from "react-icons/si";
// import { SiExpress } from "react-icons/si";
// import { FaReact } from "react-icons/fa6";
// import { IoLogoNodejs } from "react-icons/io5";
// import { ReactTyped } from "react-typed";
// import { motion } from "framer-motion";


// function Home() {
//     const [showMessage, setShowMessage] = useState("");
//     const [messageType, setMessageType] = useState("");

//     // Function to handle CV download
//     const handleDownloadCV = () => {
//         // Create a link element
//         const link = document.createElement("a");

//         link.href = "/cv/PramodKr_JVResume3.1.1.pdf"; // Update this path
//         link.download = "/PramodKr_JVResume3.1.1.pdf"; // Name for the downloaded file
//         document.body.appendChild(link);
//         link.click();
//         document.body.removeChild(link);

//         // Show success message
//         setShowMessage("Your CV downloaded successfully!");
//         setMessageType("success");

//         // Hide message after 3 seconds
//         setTimeout(() => {
//             setShowMessage("");
//             setMessageType("");
//         }, 3000);
//     };

//     // Function to handle LinkedIn redirect
//     const handleLinkedInVisit = () => {
//         // Show welcome message
//         setShowMessage("Welcome to my LinkedIn profile!");
//         setMessageType("info");

//         // Redirect to LinkedIn after showing message
//         setTimeout(() => {
//             window.open("https://www.linkedin.com/in/pramodkrdev/", "_blank");
//             setShowMessage("");
//             setMessageType("");
//         }, 1500);
//     };

//     // Success/Info Message Component
//     const Message = ({ message, type }) => {
//         if (!message) return null;

//         const bgColor = type === "success" ? "bg-green-500" : "bg-blue-500";
//         const icon = type === "success" ? <FaCheck /> : <FaLinkedin />;

//         return (
//           <div
//             className={`fixed top-4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${bgColor} text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-2 z-50 animate-bounce`}
//           >
//             {icon}
//             <span className="font-medium">{message}</span>
//           </div>
//         );
//     };

//     return (
//       <>
//         {/* Success/Info Message */}
//         <Message message={showMessage} type={messageType} />

//         <div
//           name="Home"
//           className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
//         >
//           <div className="flex flex-col md:flex-row">
//             <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
//               <span className="text-xl"> Welcome In My Feed</span>
//               <div className="flex space-x-1 text-2xl md:text-4xl">
//                 <h1>Hello, I'm a</h1>
//                 <span className="text-cyan-800">
//                   <ReactTyped
//                     strings={["Developer", "Programmer", "Coder"]}
//                     typeSpeed={40}
//                     backSpeed={50}
//                     loop={true}
//                   />
//                 </span>
//               </div>
//               <br />
//               <p className="text-md md:text-md text-justify">
//                 <span className="block">
//                   <motion.div
//                     initial={{ opacity: 0, y: 50 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 1, ease: "easeOut" }}
//                     className="inline-block bg-gradient-to-r from-pink-500 via-purple-500 via-indigo-500 to-cyan-500 text-transparent bg-clip-text text-xl md:text-xl lg:text-2xl tracking-wide"
//                   >
//                     <ReactTyped
//                       strings={[
//                         `My name is <b>Pramod Kumar</b>, and I'm a dedicated developer looking to advance in the development and innovation industries.
//                             I am a quick learner who is passionate about <b>technology and creativity</b>. 
//                             I am eager to utilize my academic knowledge in the real world and contribute to
//                             innovative initiatives while honing my <b>programming</b>, <b>problem-solving</b>, and cooperation skills. 
//                             I have six weeks of cloud computing experience with <b>UniConverge Technologies Pvt. Ltd</b>.`,
//                         `My name is <b>Pramod Kumar</b>, and I'm a dedicated developer looking to advance in the development and innovation industries.
//                             I am a quick learner who is passionate about <b>technology and creativity</b>.`,
//                       ]}
//                       typeSpeed={10}
//                       backSpeed={10}
//                       loop={true}
//                     />
//                   </motion.div>
//                 </span>
//                 {/* // My name is <b>Pramod Kumar</b>, and I'm a dedicated developer
//                             // looking to advance in the development and innovation
//                             industries. // I am a quick learner who is passionate about //{" "}
//                             <b>technology and creativity</b>. I am eager to utilize my //
//                             academic knowledge in the real world and contribute to //
//                             innovative initiatives while honing my <b>programming</b>, //{" "}
//                             <b>problem-solving</b>, and cooperation skills. I have six weeks
//                             // of cloud computing experience with //{" "}
//                             <b>UniConverge Technologies Pvt. Ltd</b>. */}
//               </p>
//               <br />

//               {/* Job Action Buttons */}
//               <div className="flex flex-col items-center md:flex-row space-y-6 md:space-y-0">
//                 <div className="flex flex-col sm:flex-row items-center gap-10 space-y-2 mt-10">
//                   <button
//                     onClick={handleDownloadCV}
//                     className="group bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-full font-semibold text-lg shadow-lg transform transition-all duration-300 hover:scale-110 hover:shadow-xl hover:from-cyan-600 hover:to-blue-700 active:scale-95 flex items-center justify-center gap-3"
//                   >
//                     <FaDownload className="text-xl group-hover:animate-bounce" />
//                     Download CV
//                   </button>

//                   <button
//                     onClick={handleLinkedInVisit}
//                     className="group bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-8 py-3 rounded-full font-semibold text-lg shadow-lg transform transition-all duration-300 hover:scale-110 hover:shadow-xl hover:from-emerald-600 hover:to-teal-700 active:scale-95 flex items-center justify-center gap-3"
//                   >
//                     <FaLinkedin className="text-xl group-hover:rotate-12 transition-transform duration-300" />
//                     Visit LinkedIn
//                   </button>
//                 </div>
//               </div>

//               {/* social media icons */}
//               <div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0">
//                 <div className="space-y-2 mt-10">
//                   <h1 className="text-xl font-bold">Available on</h1>
//                   <ul className="flex space-x-5">
//                     <li className="rounded-full border-[2px] p-2">
//                       <a
//                         href="https://github.com/PramodkrOfficial"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="hover:scale-125 transition-transform duration-200"
//                       >
//                         <FaGithub className="text-2xl" />
//                       </a>
//                     </li>
//                     <li className="rounded-full border-[2px] p-2">
//                       <a
//                         href="https://www.linkedin.com/in/pramodkrdev/"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="hover:scale-125 transition-transform duration-200"
//                       >
//                         <FaLinkedin className="text-2xl" />
//                       </a>
//                     </li>
//                     <li className="rounded-full border-[2px] p-2">
//                       <a
//                         href="https://www.facebook.com/pramodkumar.kushwaha.581525/"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="hover:scale-125 transition-transform duration-200"
//                       >
//                         <FaSquareFacebook className="text-2xl" />
//                       </a>
//                     </li>
//                     <li className="rounded-full border-[2px] p-2">
//                       <a
//                         href="https://www.instagram.com/pramodkr_dev/"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="hover:scale-125 transition-transform duration-200"
//                       >
//                         <FaSquareInstagram className="text-2xl" />
//                       </a>
//                     </li>
//                   </ul>
//                 </div>
//                 {/*   Skills icons  */}
//                 <div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0">
//                   <div className="space-y-2 mt-10">
//                     <h1 className="text-xl font-bold">Currently working on</h1>
//                     <ul className="flex space-x-5">
//                       <li className="text-2xl md:text-3xl hover:scale-125 duration-200 rounded-full border-[2px] p-1">
//                         <SiMongodb />
//                       </li>
//                       <li className="text-2xl md:text-3xl hover:scale-125 duration-200 rounded-full border-[2px] p-1">
//                         <SiExpress />
//                       </li>
//                       <li className="text-2xl md:text-3xl hover:scale-125 duration-200 rounded-full border-[2px] p-1">
//                         <FaReact />
//                       </li>
//                       <li className="text-2xl md:text-3xl hover:scale-125 duration-200 rounded-full border-[2px] p-1">
//                         <IoLogoNodejs />
//                       </li>
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="md:w-1/2 md:ml-48 md:mt-20 mt-5 order-1">
//               <img
//                 src={pic}
//                 className="rounded-full md:h-[450px] md:w-[450px] hover:scale-105 transition-transform duration-300 shadow-lg"
//                 alt="Pramod Developer"
//               />
//             </div>
//           </div>
//         </div>
//         {/* <hr /> */}
//       </>
//     );
// }

// export default Home;



// components/Home.jsx
// import React, { useState } from "react";
// import { motion, AnimatePresence } from 'framer-motion';
// import pic from "../image/myimg.png";
// import { FaGithub, FaSquareFacebook, FaLinkedin, FaSquareInstagram, FaDownload, FaCheck } from "react-icons/fa6";
// import { SiMongodb, SiExpress } from "react-icons/si";
// import { FaReact } from "react-icons/fa6";
// import { IoLogoNodejs } from "react-icons/io5";
// import { ReactTyped } from "react-typed";
// import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, staggerItem, scaleIn, bounceIn } from '../utils/animations';

// function Home() {
//   const [showMessage, setShowMessage] = useState("");
//   const [messageType, setMessageType] = useState("");

//   const handleDownloadCV = () => {
//     const link = document.createElement("a");
//     link.href = "/assets/cv/Pramod_Kr_JVResume3.1.1.pdf";
//     link.download = "Pramod_Kumar_CV.pdf";
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);

//     setShowMessage("Your CV downloaded successfully!");
//     setMessageType("success");
//     setTimeout(() => {
//       setShowMessage("");
//       setMessageType("");
//     }, 3000);
//   };

//   const handleLinkedInVisit = () => {
//     setShowMessage("Welcome to my LinkedIn profile!");
//     setMessageType("info");
//     setTimeout(() => {
//       window.open("https://www.linkedin.com/in/pramodkrdev/", "_blank");
//       setShowMessage("");
//       setMessageType("");
//     }, 1500);
//   };

//   const Message = ({ message, type }) => {
//     if (!message) return null;
//     const bgColor = type === "success" ? "bg-green-500" : "bg-blue-500";
//     const icon = type === "success" ? <FaCheck /> : <FaLinkedin />;

//     return (
//       <AnimatePresence>
//         <motion.div
//           className={`fixed top-4 right-4 ${bgColor} text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-2 z-50`}
//           initial={{ opacity: 0, x: 100, scale: 0.8 }}
//           animate={{ 
//             opacity: 1, 
//             x: 0, 
//             scale: 1,
//             transition: { type: "spring", stiffness: 300, damping: 20 }
//           }}
//           exit={{ 
//             opacity: 0, 
//             x: 100, 
//             scale: 0.8,
//             transition: { duration: 0.3 }
//           }}
//         >
//           <motion.div
//             animate={{ 
//               rotate: [0, 10, -10, 0],
//               scale: [1, 1.2, 1]
//             }}
//             transition={{ 
//               duration: 0.6,
//               repeat: 2
//             }}
//           >
//             {icon}
//           </motion.div>
//           <span className="font-medium">{message}</span>
//         </motion.div>
//       </AnimatePresence>
//     );
//   };

//   // Animation variants for social icons
//   const socialIconVariants = {
//     hidden: { opacity: 0, scale: 0 },
//     visible: { 
//       opacity: 1, 
//       scale: 1,
//       transition: { 
//         type: "spring",
//         stiffness: 300,
//         damping: 20
//       }
//     },
//     hover: { 
//       scale: 1.2, 
//       rotate: 5,
//       transition: { duration: 0.2 }
//     }
//   };

//   const techStackVariants = {
//     hidden: { opacity: 0, rotateY: -90 },
//     visible: { 
//       opacity: 1, 
//       rotateY: 0,
//       transition: { 
//         duration: 0.6,
//         ease: "easeOut"
//       }
//     },
//     hover: { 
//       scale: 1.3, 
//       rotateY: 360,
//       transition: { duration: 0.8 }
//     }
//   };

//   return (
//     <>
//       <Message message={showMessage} type={messageType} />

//       <motion.div
//         name="Home"
//         className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20 overflow-hidden"
//         initial="hidden"
//         animate="visible"
//         variants={staggerContainer}
//       >
//         <div className="flex flex-col md:flex-row">
//           {/* Left Content */}
//           <motion.div 
//             className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1"
//             variants={fadeInLeft}
//           >
//             <motion.span 
//               className="text-xl text-gray-800 dark:text-gray-200"
//               variants={fadeInUp}
//             >
//               Welcome In My Feed
//             </motion.span>
            
//             <motion.div 
//               className="flex space-x-1 text-2xl md:text-4xl"
//               variants={fadeInUp}
//             >
//               <motion.h1 
//                 className="text-gray-900 dark:text-white"
//                 initial={{ opacity: 0, x: -50 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.8, delay: 0.2 }}
//               >
//                 Hello, I'm a
//               </motion.h1>
//               <motion.span 
//                 className="text-cyan-600 dark:text-cyan-400"
//                 initial={{ opacity: 0, scale: 0.5 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ 
//                   duration: 0.8, 
//                   delay: 0.5,
//                   type: "spring",
//                   stiffness: 200
//                 }}
//               >
//                 <ReactTyped
//                   strings={["Developer", "Programmer", "Coder"]}
//                   typeSpeed={40}
//                   backSpeed={50}
//                   loop={true}
//                 />
//               </motion.span>
//             </motion.div>

//             <motion.p 
//               className="text-md md:text-md text-justify text-gray-700 dark:text-gray-300 leading-relaxed"
//               variants={fadeInUp}
//               transition={{ delay: 0.3 }}
//             >
//               My name is <b className="text-pink-600 dark:text-pink-400">Pramod Kumar</b>, and I'm a dedicated developer
//               looking to advance in the development and innovation industries. I am a quick learner who is passionate about{" "}
//               <b>technology and creativity</b>. I am eager to utilize my academic knowledge in the real world and contribute to innovative
//               initiatives while honing my <b>programming</b>, <b>problem-solving</b>, and cooperation skills. I have six weeks
//               of cloud computing experience with <b>UniConverge Technologies Pvt. Ltd</b>.
//             </motion.p>

//             {/* Action Buttons */}
//             <motion.div 
//               className="flex flex-col sm:flex-row items-center gap-6 mt-8"
//               variants={staggerContainer}
//             >
//               <motion.button
//                 onClick={handleDownloadCV}
//                 className="group bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-full font-semibold text-lg shadow-lg flex items-center justify-center gap-3"
//                 variants={bounceIn}
//                 whileHover={{ 
//                   scale: 1.05, 
//                   boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)",
//                   transition: { duration: 0.3 }
//                 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 <motion.div
//                   animate={{ 
//                     y: [0, -3, 0],
//                     transition: { 
//                       duration: 1.5, 
//                       repeat: Infinity,
//                       ease: "easeInOut"
//                     }
//                   }}
//                 >
//                   <FaDownload />
//                 </motion.div>
//                 Download CV
//               </motion.button>

//               <motion.button
//                 onClick={handleLinkedInVisit}
//                 className="group bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-8 py-3 rounded-full font-semibold text-lg shadow-lg flex items-center justify-center gap-3"
//                 variants={bounceIn}
//                 whileHover={{ 
//                   scale: 1.05, 
//                   boxShadow: "0 20px 40px rgba(16, 185, 129, 0.4)",
//                   transition: { duration: 0.3 }
//                 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 <motion.div
//                   whileHover={{ 
//                     rotate: 360,
//                     transition: { duration: 0.6 }
//                   }}
//                 >
//                   <FaLinkedin />
//                 </motion.div>
//                 Visit LinkedIn
//               </motion.button>
//             </motion.div>

//             {/* Social Media Section */}
//             <motion.div 
//               className="mt-12"
//               variants={staggerContainer}
//             >
//               <motion.h1 
//                 className="text-xl font-bold text-gray-900 dark:text-white mb-4"
//                 variants={fadeInUp}
//               >
//                 Available on
//               </motion.h1>
//               <motion.ul 
//                 className="flex space-x-4"
//                 variants={staggerContainer}
//               >
//                 {[
//                   { icon: FaGithub, href: "https://github.com/PramodkrOfficial", color: "hover:text-gray-800" },
//                   { icon: FaLinkedin, href: "https://www.linkedin.com/in/pramodkrdev/", color: "hover:text-blue-600" },
//                   { icon: FaSquareFacebook, href: "https://www.facebook.com/pramodkumar.kushwaha.581525/", color: "hover:text-blue-500" },
//                   { icon: FaSquareInstagram, href: "https://www.instagram.com/pramodkr_dev/", color: "hover:text-pink-500" }
//                 ].map(({ icon: Icon, href, color }, index) => (
//                   <motion.li
//                     key={index}
//                     className="rounded-full border-2 border-gray-300 dark:border-gray-600 p-3"
//                     variants={socialIconVariants}
//                     whileHover="hover"
//                   >
//                     <motion.a
//                       href={href}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className={`text-2xl text-gray-700 dark:text-gray-300 transition-colors duration-300 ${color}`}
//                     >
//                       <Icon />
//                     </motion.a>
//                   </motion.li>
//                 ))}
//               </motion.ul>
//             </motion.div>

//             {/* Tech Stack */}
//             <motion.div 
//               className="mt-8"
//               variants={staggerContainer}
//             >
//               <motion.h1 
//                 className="text-xl font-bold text-gray-900 dark:text-white mb-4"
//                 variants={fadeInUp}
//               >
//                 Currently working on
//               </motion.h1>
//               <motion.ul 
//                 className="flex space-x-4"
//                 variants={staggerContainer}
//               >
//                 {[
//                   { icon: SiMongodb, color: "text-green-500" },
//                   { icon: SiExpress, color: "text-gray-600" },
//                   { icon: FaReact, color: "text-blue-500" },
//                   { icon: IoLogoNodejs, color: "text-green-600" }
//                 ].map(({ icon: Icon, color }, index) => (
//                   <motion.li
//                     key={index}
//                     className="rounded-full border-2 border-gray-300 dark:border-gray-600 p-3"
//                     variants={techStackVariants}
//                     whileHover="hover"
//                   >
//                     <Icon className={`text-3xl ${color} transition-colors duration-300`} />
//                   </motion.li>
//                 ))}
//               </motion.ul>
//             </motion.div>
//           </motion.div>

//           {/* Right Image */}
//           <motion.div 
//             className="md:w-1/2 md:ml-48 md:mt-20 mt-5 order-1 flex justify-center"
//             variants={fadeInRight}
//           >
//             <motion.div
//               className="relative"
//               initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
//               animate={{ opacity: 1, scale: 1, rotate: 0 }}
//               transition={{ 
//                 duration: 1, 
//                 delay: 0.2,
//                 type: "spring",
//                 stiffness: 100
//               }}
//               whileHover={{ 
//                 scale: 1.05,
//                 rotate: 2,
//                 transition: { duration: 0.3 }
//               }}
//             >
//               <motion.img
//                 src={pic}
//                 className="rounded-full md:h-[450px] md:w-[450px] shadow-2xl"
//                 alt="Pramod Developer"
//                 animate={{
//                   boxShadow: [
//                     "0 0 20px rgba(59, 130, 246, 0.3)",
//                     "0 0 60px rgba(236, 72, 153, 0.3)",
//                     "0 0 20px rgba(59, 130, 246, 0.3)"
//                   ]
//                 }}
//                 transition={{
//                   duration: 3,
//                   repeat: Infinity,
//                   ease: "easeInOut"
//                 }}
//               />
              
//               {/* Floating elements around image */}
//               <motion.div
//                 className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full"
//                 animate={{
//                   y: [0, -10, 0],
//                   rotate: [0, 180, 360]
//                 }}
//                 transition={{
//                   duration: 4,
//                   repeat: Infinity,
//                   ease: "easeInOut"
//                 }}
//               />
              
//               <motion.div
//                 className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"
//                 animate={{
//                   x: [0, 10, 0],
//                   scale: [1, 1.2, 1]
//                 }}
//                 transition={{
//                   duration: 3,
//                   repeat: Infinity,
//                   ease: "easeInOut",
//                   delay: 1
//                 }}
//               />
//             </motion.div>
//           </motion.div>
//         </div>
//       </motion.div>
      
//       <motion.hr 
//         className="border-gray-300 dark:border-gray-600"
//         initial={{ width: 0, opacity: 0 }}
//         animate={{ width: "100%", opacity: 1 }}
//         transition={{ duration: 1, delay: 1 }}
//       />
//     </>
//   );
// }

// export default Home;


// Enhanced Home Component with Multiple Animations

import React, { useState } from "react";
// import pic from "../image/git img.png";
import pic from "../image/my imgbg.png";
import { FaGithub, FaSquareFacebook, FaLinkedin, FaSquareInstagram, FaDownload, FaCheck } from "react-icons/fa6";
import { SiMongodb, SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa6";
import { IoLogoNodejs } from "react-icons/io5";
import { ReactTyped } from "react-typed";
import AnimationWrapper from './AnimationWrapper';

function Home() {
  const [showMessage, setShowMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/assets/cv/Pramod_Kr_JVResume3.1.1.pdf";
    link.download = "Pramod_Kumar_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setShowMessage("Your CV downloaded successfully!");
    setMessageType("success");
    setTimeout(() => {
      setShowMessage("");
      setMessageType("");
    }, 3000);
  };

  const handleLinkedInVisit = () => {
    setShowMessage("Welcome to my LinkedIn profile!");
    setMessageType("info");
    setTimeout(() => {
      window.open("https://www.linkedin.com/in/pramodkrdev/", "_blank");
      setShowMessage("");
      setMessageType("");
    }, 1500);
  };

  const Message = ({ message, type }) => {
    if (!message) return null;
    const bgColor = type === "success" ? "bg-green-500" : "bg-blue-500";
    const icon = type === "success" ? <FaCheck /> : <FaLinkedin />;

    return (
      <div
        className={`fixed top-4 left-1/2 ${bgColor} text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-2 z-50 animate-bounce`}
      >
        {icon}
        <span className="font-medium">{message}</span>
      </div>
    );
  };

  const socialLinks = [
    { href: "https://github.com/PramodkrOfficial", icon: FaGithub, color: "hover:text-gray-800 dark:hover:text-gray-200" },
    { href: "https://www.linkedin.com/in/pramodkrdev/", icon: FaLinkedin, color: "hover:text-blue-600" },
    { href: "https://www.facebook.com/pramodkumar.kushwaha.581525/", icon: FaSquareFacebook, color: "hover:text-blue-500" },
    { href: "https://www.instagram.com/pramodkr_dev/", icon: FaSquareInstagram, color: "hover:text-pink-500" }
  ];

  const techStack = [
    { icon: SiMongodb, color: "hover:text-green-500", name: "MongoDB" },
    { icon: SiExpress, color: "hover:text-gray-600", name: "Express" },
    { icon: FaReact, color: "hover:text-blue-500", name: "React" },
    { icon: IoLogoNodejs, color: "hover:text-green-600", name: "Node.js" }
  ];

  return (
    <>
      <Message message={showMessage} type={messageType} />
      
      <div name="Home" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20 overflow-hidden">
        <div className="flex flex-col md:flex-row items-center">
          
          {/* Text Content */}
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-6 order-2 md:order-1">
            <AnimationWrapper animation="fadeInUp" delay={300}>
              <span className="text-xl text-gray-600 dark:text-gray-400 block transform transition-all duration-500 hover:text-pink-600">
                ✨ Welcome In My Feed
              </span>
            </AnimationWrapper>
            
            <AnimationWrapper animation="fadeInUp" delay={600}>
              <div className="flex flex-wrap items-center space-x-2 text-2xl md:text-4xl">
                <h1 className="text-gray-900 dark:text-white font-bold">Hello, I'm a</h1>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600 font-extrabold">
                  <ReactTyped
                    strings={["Developer", "Programmer", "Coder"]}
                    typeSpeed={40}
                    backSpeed={50}
                    loop={true}
                  />
                </span>
              </div>
            </AnimationWrapper>

            <AnimationWrapper animation="fadeInUp" delay={700}>
              <div className="relative">
                <p className="text-md md:text-lg text-justify leading-relaxed text-gray-700 dark:text-gray-300">
                  My name is <span className="font-semibold text-pink-600 dark:text-pink-400">Pramod Kumar</span>, and I'm a dedicated developer looking to advance in the development and innovation industries. I am a quick learner who is passionate about{" "}
                  <span className="font-semibold text-cyan-600 dark:text-cyan-400">technology and creativity</span>. 
                  I am eager to utilize my academic knowledge in the real world and contribute to innovative initiatives while honing my{" "}
                  <span className="font-semibold text-purple-600 dark:text-purple-400">programming</span>,{" "}
                  <span className="font-semibold text-green-600 dark:text-green-400">problem-solving</span>, and cooperation skills.
                </p>
                <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-pink-500 to-purple-500 rounded-full opacity-30"></div>
              </div>
            </AnimationWrapper>

            {/* Action Buttons */}
            <AnimationWrapper animation="scaleIn" delay={900}>
              <div className="flex flex-col sm:flex-row items-center gap-4 pt-6">
                <button
                  onClick={handleDownloadCV}
                  className="group relative overflow-hidden bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-2xl transform transition-all duration-500 hover:scale-110 hover:shadow-cyan-500/25 active:scale-95"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                  <div className="relative flex items-center gap-3">
                    <FaDownload className="text-xl group-hover:animate-bounce transition-all duration-300" />
                    <span>Download CV</span>
                  </div>
                </button>

                <button
                  onClick={handleLinkedInVisit}
                  className="group relative overflow-hidden bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-2xl transform transition-all duration-500 hover:scale-110 hover:shadow-emerald-500/25 active:scale-95"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                  <div className="relative flex items-center gap-3">
                    <FaLinkedin className="text-xl group-hover:rotate-12 transition-transform duration-300" />
                    <span>Visit LinkedIn</span>
                  </div>
                </button>
              </div>
            </AnimationWrapper>

            {/* Social Media Links */}
            <AnimationWrapper animation="fadeInLeft" delay={1100}>
              <div className="space-y-4 pt-8">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                  🌐 Available on
                </h2>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <div
                        key={index}
                        className={`transform transition-all duration-300 hover:scale-125 hover:-translate-y-2 delay-${index * 100}`}
                      >
                        <a
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`group relative flex items-center justify-center w-14 h-14 rounded-full border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 transition-all duration-500 hover:border-transparent hover:shadow-2xl ${social.color}`}
                        >
                          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          <IconComponent className="text-2xl relative z-10 group-hover:scale-110 transition-transform duration-300" />
                        </a>
                      </div>
                    );
                  })}
                </div>
              </div>
            </AnimationWrapper>

            {/* Tech Stack */}
            <AnimationWrapper animation="fadeInLeft" delay={1300}>
              <div className="space-y-4 pt-6">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                  🚀 Currently working on
                </h2>
                <div className="flex space-x-4">
                  {techStack.map((tech, index) => {
                    const IconComponent = tech.icon;
                    return (
                      <div
                        key={index}
                        className={`group relative transform transition-all duration-500 hover:scale-125 hover:-translate-y-3 delay-${index * 100}`}
                      >
                        <div className={`flex items-center justify-center w-16 h-16 rounded-2xl border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 transition-all duration-500 hover:border-transparent hover:shadow-2xl hover:shadow-current/20 ${tech.color}`}>
                          <IconComponent className="text-3xl group-hover:rotate-12 transition-all duration-500" />
                        </div>
                        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-xs rounded opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap">
                          {tech.name}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </AnimationWrapper>
          </div>

          {/* Profile Image */}
          <AnimationWrapper animation="fadeInRight" delay={400}>
            <div className="md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1 md:order-2">
              <div className="relative group">
                {/* Animated Background Rings */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 animate-spin opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                <div className="absolute inset-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 animate-ping opacity-10"></div>
                
                {/* Main Image */}
                <img
                  src={pic}
                  className="relative z-10 rounded-full md:h-[450px] md:w-[450px] h-80 w-80 mx-auto object-cover shadow-2xl transform transition-all duration-700 group-hover:scale-105 group-hover:rotate-3 group-hover:shadow-pink-500/25"
                  alt="Pramod Kumar - Developer"
                />
                
                {/* Floating Elements */}
                <div className="absolute top-10 -right-4 w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-80 animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-green-400 to-cyan-500 rounded-full opacity-60 animate-bounce"></div>
                <div className="absolute top-1/2 -left-8 w-4 h-4 bg-purple-500 rounded-full animate-ping"></div>
                <div className="absolute top-20 -left-2 w-2 h-2 bg-pink-400 rounded-full animate-pulse"></div>
              </div>
            </div>
          </AnimationWrapper>
        </div>
      </div>
      
      <AnimationWrapper animation="fadeInUp" delay={1500}></AnimationWrapper>
    </>
  );
}

export default Home;
