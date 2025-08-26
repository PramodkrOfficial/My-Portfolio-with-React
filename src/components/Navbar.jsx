
import React, { useState } from "react";
import pic from "../image/myimg.png";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-scroll";
import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "./ThemeContext";

function Navbar() {
  const [menu, setMenu] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

  const navItems = [
    { id: 1, text: "Home" },
    { id: 2, text: "About" },
    { id: 3, text: "Projects" },
    { id: 4, text: "Experience" },
    { id: 5, text: "Contact" },
  ];

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 shadow-md fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-800 transition-colors duration-300">
        <div className="flex justify-between items-center h-16">
          <div className="flex space-x-2">
            <img
              src={pic}
              className="h-12 w-12 rounded-full"
              alt="Pramod Kumar"
            />
            <h1 className="font-semibold text-xl cursor-pointer text-gray-900 dark:text-white">
              Pram<span className="text-pink-600 text-2xl">od</span>
              <p className="text-sm">
                web<span className="text-pink-600">developer</span>
              </p>
            </h1>
          </div>

          {/* Desktop navbar */}
          <div className="flex items-center space-x-4">
            <ul className="hidden md:flex space-x-8">
              {navItems.map(({ id, text }) => (
                <li
                  className="hover:scale-125 duration-200 cursor-pointer"
                  key={id}
                >
                  <Link
                    activeClass="active"
                    to={text}
                    spy={true}
                    smooth={true}
                    hashSpy={true}
                    offset={-70}
                    duration={500}
                    delay={100}
                    isDynamic={true}
                    ignoreCancelEvents={false}
                    spyThrottle={500}
                    className="text-gray-900 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 transition-colors duration-300"
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-yellow-400 hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-300"
              aria-label="Toggle theme"
            >
              {isDarkMode ? <FaSun size={18} /> : <FaMoon size={18} />}
            </button>

            {/* Mobile menu toggle */}
            <div
              onClick={() => setMenu(!menu)}
              className="md:hidden cursor-pointer text-gray-900 dark:text-white"
            >
              {menu ? <IoCloseSharp size={24} /> : <AiOutlineMenu size={24} />}
            </div>
          </div>
        </div>

        {/* Mobile navbar */}
        {menu && (
          <div className="bg-white dark:bg-gray-800 transition-colors duration-300">
            <ul className="md:hidden flex flex-col h-screen items-center justify-center space-y-4 text-2xl">
              {navItems.map(({ id, text }) => (
                <li
                  className="hover:scale-125 duration-200 font-semibold cursor-pointer"
                  key={id}
                >
                  <Link
                    onClick={() => setMenu(!menu)}
                    activeClass="active"
                    to={text}
                    spy={true}
                    smooth={true}
                    hashSpy={true}
                    offset={-70}
                    duration={500}
                    delay={100}
                    isDynamic={true}
                    ignoreCancelEvents={false}
                    spyThrottle={500}
                    className="text-gray-900 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 transition-colors duration-300"
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;
