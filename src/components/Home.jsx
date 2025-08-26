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

import React, { useState } from "react";
import pic from "../image/myimg.png";

import { FaGithub } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaDownload } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa6";

import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa6";
import { IoLogoNodejs } from "react-icons/io5";
import { ReactTyped } from "react-typed";

function Home() {
  const [showMessage, setShowMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  // Function to handle CV download
  const handleDownloadCV = () => {
    // Create a link element
    const link = document.createElement("a");

    link.href = "/cv/PramodKr_JVResume3.1.1.pdf"; // Update this path

    link.download = "/PramodKr_JVResume3.1.1.pdf"; // Name for the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Show success message
    setShowMessage("Your CV downloaded successfully!");
    setMessageType("success");

    // Hide message after 3 seconds
    setTimeout(() => {
      setShowMessage("");
      setMessageType("");
    }, 3000);
  };

  // Function to handle LinkedIn redirect
  const handleLinkedInVisit = () => {
    // Show welcome message
    setShowMessage("Welcome to my LinkedIn profile!");
    setMessageType("info");

    // Redirect to LinkedIn after showing message
    setTimeout(() => {
      window.open("https://www.linkedin.com/in/pramodkrdev/", "_blank");
      setShowMessage("");
      setMessageType("");
    }, 1500);
  };

  // Success/Info Message Component
  const Message = ({ message, type }) => {
    if (!message) return null;

    const bgColor = type === "success" ? "bg-green-500" : "bg-blue-500";
    const icon = type === "success" ? <FaCheck /> : <FaLinkedin />;

    return (
      <div
        className={`fixed top-4 right-4 ${bgColor} text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-2 z-50 animate-bounce`}
      >
        {icon}
        <span className="font-medium">{message}</span>
      </div>
    );
  };

  return (
    <>
      {/* Success/Info Message */}
      <Message message={showMessage} type={messageType} />

      <div
        name="Home"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
      >
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
            <span className="text-xl"> Welcome In My Feed</span>
            <div className="flex space-x-1 text-2xl md:text-4xl">
              <h1>Hello, I'm a</h1>
              <span className="text-cyan-800">
                <ReactTyped
                  strings={["Developer", "Programmer", "Coder"]}
                  typeSpeed={40}
                  backSpeed={50}
                  loop={true}
                />
              </span>
            </div>
            <br />
            <p className="text-md md:text-md text-justify">
              My name is <b>Pramod Kumar</b>, and I'm a dedicated developer
              looking to advance in the development and innovation industries. I
              am a quick learner who is passionate about{" "}
              <b>technology and creativity</b>. I am eager to utilize my
              academic knowledge in the real world and contribute to innovative
              initiatives while honing my <b>programming</b>,{" "}
              <b>problem-solving</b>, and cooperation skills. I have six weeks
              of cloud computing experience with{" "}
              <b>UniConverge Technologies Pvt. Ltd</b>.
            </p>
            <br />

            {/* Job Action Buttons */}
            <div className="flex flex-col items-center md:flex-row space-y-6 md:space-y-0">
              <div className="flex flex-col sm:flex-row items-center gap-10 space-y-2 mt-10">
                <button
                  onClick={handleDownloadCV}
                  className="group bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-full font-semibold text-lg shadow-lg transform transition-all duration-300 hover:scale-110 hover:shadow-xl hover:from-cyan-600 hover:to-blue-700 active:scale-95 flex items-center justify-center gap-3"
                >
                  <FaDownload className="text-xl group-hover:animate-bounce" />
                  Download CV
                </button>

                <button
                  onClick={handleLinkedInVisit}
                  className="group bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-8 py-3 rounded-full font-semibold text-lg shadow-lg transform transition-all duration-300 hover:scale-110 hover:shadow-xl hover:from-emerald-600 hover:to-teal-700 active:scale-95 flex items-center justify-center gap-3"
                >
                  <FaLinkedin className="text-xl group-hover:rotate-12 transition-transform duration-300" />
                  Visit LinkedIn
                </button>
              </div>
            </div>

            {/* social media icons */}
            <div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0">
              <div className="space-y-2 mt-10">
                <h1 className="text-xl font-bold">Available on</h1>
                <ul className="flex space-x-5">
                  <li className="rounded-full border-[2px] p-2">
                    <a
                      href="https://github.com/PramodkrOfficial"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:scale-125 transition-transform duration-200"
                    >
                      <FaGithub className="text-2xl" />
                    </a>
                  </li>
                  <li className="rounded-full border-[2px] p-2">
                    <a
                      href="https://www.linkedin.com/in/pramodkrdev/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:scale-125 transition-transform duration-200"
                    >
                      <FaLinkedin className="text-2xl" />
                    </a>
                  </li>
                  <li className="rounded-full border-[2px] p-2">
                    <a
                      href="https://www.facebook.com/pramodkumar.kushwaha.581525/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:scale-125 transition-transform duration-200"
                    >
                      <FaSquareFacebook className="text-2xl" />
                    </a>
                  </li>
                  <li className="rounded-full border-[2px] p-2">
                    <a
                      href="https://www.instagram.com/pramodkr_dev/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:scale-125 transition-transform duration-200"
                    >
                      <FaSquareInstagram className="text-2xl" />
                    </a>
                  </li>
                </ul>
              </div>
              {/*   Skills icons  */}
              <div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0">
                <div className="space-y-2 mt-10">
                  <h1 className="text-xl font-bold">Currently working on</h1>
                  <ul className="flex space-x-5">
                    <li className="text-2xl md:text-3xl hover:scale-125 duration-200 rounded-full border-[2px] p-1">
                      <SiMongodb />
                    </li>
                    <li className="text-2xl md:text-3xl hover:scale-125 duration-200 rounded-full border-[2px] p-1">
                      <SiExpress />
                    </li>
                    <li className="text-2xl md:text-3xl hover:scale-125 duration-200 rounded-full border-[2px] p-1">
                      <FaReact />
                    </li>
                    <li className="text-2xl md:text-3xl hover:scale-125 duration-200 rounded-full border-[2px] p-1">
                      <IoLogoNodejs />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 md:ml-48 md:mt-20 mt-5 order-1">
            <img
              src={pic}
              className="rounded-full md:h-[450px] md:w-[450px] hover:scale-105 transition-transform duration-300 shadow-lg"
              alt="Pramod Developer"
            />
          </div>
        </div>
      </div>
      <hr />
    </>
  );
}

export default Home;
