import React, { useState, useEffect } from "react";

const SkillProficiency = ({ skill, isVisible, delay = 0 }) => {
  const [animatedProficiency, setAnimatedProficiency] = useState(0);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        const duration = 1500; // Animation duration
        const steps = 60; // Number of animation steps
        const increment = skill.proficiency / steps;
        let current = 0;

        const interval = setInterval(() => {
          current += increment;
          if (current >= skill.proficiency) {
            setAnimatedProficiency(skill.proficiency);
            clearInterval(interval);
          } else {
            setAnimatedProficiency(Math.floor(current));
          }
        }, duration / steps);

        return () => clearInterval(interval);
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [isVisible, skill.proficiency, delay]);

  return (
    <div className="relative">
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
          {skill.name}
        </span>
        <span className="text-sm font-bold text-indigo-600 dark:text-indigo-400">
          {animatedProficiency}%
        </span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full transition-all duration-1000 ease-out relative"
          style={{ width: `${animatedProficiency}%` }}
        >
          <div className="absolute inset-0 bg-white opacity-30 animate-pulse rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default SkillProficiency;
