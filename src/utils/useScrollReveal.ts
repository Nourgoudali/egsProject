import { useEffect, useRef } from 'react';

export function useScrollReveal<T extends HTMLElement>(threshold = 0.15) {
    const ref = useRef<T>(null);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            },
            { threshold, rootMargin: '0px 0px -50px 0px' }
        );

        // Observe the container and all fade-in children
        const children = element.querySelectorAll('.fade-in-up');
        children.forEach((child) => observer.observe(child));

        if (element.classList.contains('fade-in-up')) {
            observer.observe(element);
        }

        return () => observer.disconnect();
    }, [threshold]);

    return ref;
}
