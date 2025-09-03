import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { useTheme } from "../contexts/ThemeContext";
import Sparkles from "../components/Sparkles";
import FloatingCard from "../components/FloatingCard";
import AnimatedText from "../components/AnimatedText";
import FloatingElements from "../components/FloatingElements";

const Home: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const observerRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();


  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={observerRef} className="min-h-screen relative overflow-hidden">
      <Sparkles
        className="absolute inset-0 bg-gradient-to-br from-slate-50 via-slate-200 to-slate-300 dark:from-slate-800 dark:via-slate-900 dark:to-slate-950 transition-colors duration-300"
        particleColor="#0ea5e9"
        particleDensity={1.5}
        minSize={8}
        maxSize={16}
      >
        <FloatingElements />
        <div className="flex items-center justify-center min-h-screen">
          <FloatingCard className="text-center z-10 p-12 max-w-4xl mx-4" delay={0.2}>
            <div className="mb-8">
              <AnimatedText
                text="Jaidev Yadav"
                className="text-6xl md:text-8xl font-bold text-slate-800 dark:text-slate-100 mb-4 transition-colors duration-300"
                variant="fade"
                delay={0.5}
              />
              <AnimatedText
                text="Programmer • Web Developer • Graphic Designer"
                className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 font-light transition-colors duration-300"
                variant="slide"
                delay={1.2}
              />
            </div>
            <div className="flex justify-center space-x-6 mt-8">
              <a
                aria-label="My LinkedIn Profile"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/jaidev-y-558691183/"
                className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-slate-800 dark:border-slate-200 text-slate-800 dark:text-slate-200 hover:bg-sky-500 hover:border-sky-500 hover:text-white transition-all duration-300"
              >
                <i className="fab fa-linkedin text-xl" aria-hidden="true"></i>
              </a>
              <a
                aria-label="My Github Profile"
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/jaidev3"
                className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-slate-800 dark:border-slate-200 text-slate-800 dark:text-slate-200 hover:bg-sky-500 hover:border-sky-500 hover:text-white transition-all duration-300"
              >
                <i className="fab fa-github-alt text-xl" aria-hidden="true"></i>
              </a>
              <a
                aria-label="My Résumé"
                target="_blank"
                rel="noopener noreferrer"
                href="https://drive.google.com/file/d/1i-VRb5582T4xBwUuKWSilo5OlcUFIBwe/view?usp=sharing"
                className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-slate-800 dark:border-slate-200 text-slate-800 dark:text-slate-200 hover:bg-sky-500 hover:border-sky-500 hover:text-white transition-all duration-300"
              >
                <i className="fas fa-file-pdf text-xl" aria-hidden="true"></i>
              </a>
              <a
                aria-label="Send Email"
                href="mailto:jaidevyadav720@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-slate-800 dark:border-slate-200 text-slate-800 dark:text-slate-200 hover:bg-sky-500 hover:border-sky-500 hover:text-white transition-all duration-300"
              >
                <i className="fas fa-envelope text-xl"></i>
              </a>
            </div>
          </FloatingCard>
        </div>
      </Sparkles>
    </div>
  );
};

// Declare global particlesJS for TypeScript
declare global {
  interface Window {
    particlesJS: any;
  }
}

export default Home;
