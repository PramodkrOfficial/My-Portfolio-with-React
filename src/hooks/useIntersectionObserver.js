import { useEffect, useState, useRef } from 'react';

export const useIntersectionObserver = (options = {}) => {
    const [isVisible, setIsVisible] = useState(false);
    const [hasBeenVisible, setHasBeenVisible] = useState(false);
    const elementRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting && !hasBeenVisible) {
                setIsVisible(true);
                setHasBeenVisible(true);
            }
        }, {
            threshold: 0.1,
            rootMargin: '50px',
            ...options
        });

        const element = elementRef.current;
        if (element) {
            observer.observe(element);
        }

        return () => {
            if (element) {
                observer.unobserve(element);
            }
        };
    }, [hasBeenVisible, options]);

    return [elementRef, isVisible];
};