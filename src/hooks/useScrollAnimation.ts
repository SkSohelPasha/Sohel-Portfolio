import { useEffect, useRef } from 'react';

export const useScrollAnimation = (
  setActiveSection: (section: string) => void,
  setShowScrollTop: (show: boolean) => void
) => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Create intersection observer for scroll animations
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            
            // Update active section for navigation
            const sectionId = entry.target.id;
            if (sectionId) {
              setActiveSection(sectionId);
            }
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    // Observe all elements with scroll-animate class
    const animatedElements = document.querySelectorAll('.scroll-animate');
    animatedElements.forEach((el) => {
      observerRef.current?.observe(el);
    });

    // Observe sections for navigation
    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => {
      observerRef.current?.observe(section);
    });

    // Handle scroll for show/hide scroll-to-top button
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      observerRef.current?.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, [setActiveSection, setShowScrollTop]);

  return observerRef;
};