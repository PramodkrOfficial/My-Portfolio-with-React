import React, { useEffect, useState } from "react";

const FloatingSkills = ({ skills, containerRef }) => {
  const [floatingElements, setFloatingElements] = useState([]);

  useEffect(() => {
    const elements = skills.slice(0, 6).map((skill, index) => ({
      ...skill,
      x: Math.random() * 100,
      y: Math.random() * 100,
      rotation: Math.random() * 360,
      scale: 0.8 + Math.random() * 0.4,
      animationDelay: index * 200,
    }));
    setFloatingElements(elements);
  }, [skills]);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
      {floatingElements.map((element, index) => (
        <div
          key={index}
          className="absolute animate-float"
          style={{
            left: `${element.x}%`,
            top: `${element.y}%`,
            transform: `rotate(${element.rotation}deg) scale(${element.scale})`,
            animationDelay: `${element.animationDelay}ms`,
            animationDuration: `${3 + Math.random() * 2}s`,
          }}
        >
          <img
            src={element.img}
            alt={element.name}
            className="w-12 h-12 rounded-full opacity-50 hover:opacity-80 transition-opacity duration-300"
          />
        </div>
      ))}
    </div>
  );
};

export default FloatingSkills;
