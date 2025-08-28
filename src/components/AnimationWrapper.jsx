import React, { useEffect, useState } from "react";

const AnimationWrapper = ({
  children,
  animation = "fadeInUp",
  delay = 0,
  duration = 600,
  className = "",
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [elementRef, setElementRef] = useState(null);

  useEffect(() => {
    if (!elementRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
          observer.unobserve(elementRef);
        }
      },
      { threshold: 0.1, rootMargin: "50px" }
    );

    observer.observe(elementRef);
    return () => observer.disconnect();
  }, [elementRef, delay]);

  const getAnimationClass = () => {
    if (!isVisible) {
      switch (animation) {
        case "fadeInUp":
          return "opacity-0 translate-y-16";
        case "fadeInDown":
          return "opacity-0 -translate-y-16";
        case "fadeInLeft":
          return "opacity-0 -translate-x-16";
        case "fadeInRight":
          return "opacity-0 translate-x-16";
        case "scaleIn":
          return "opacity-0 scale-75";
        case "rotateIn":
          return "opacity-0 rotate-12";
        default:
          return "opacity-0";
      }
    }
    return "opacity-100 translate-x-0 translate-y-0 scale-100 rotate-0";
  };

  return (
    <div
      ref={setElementRef}
      className={`transition-all ease-out ${className} ${getAnimationClass()}`}
      style={{ transitionDuration: `${duration}ms` }}
    >
      {children}
    </div>
  );
};

export default AnimationWrapper;
