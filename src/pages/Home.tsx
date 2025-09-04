import React from 'react';
import { motion } from 'motion/react';
import Sparkles from "../components/Sparkles";
import FloatingCard from "../components/FloatingCard";
import AnimatedText from "../components/AnimatedText";
import FloatingElements from "../components/FloatingElements";

const Home: React.FC = () => {

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-slate-200 to-slate-300 transition-colors duration-300 relative overflow-hidden">
      <Sparkles
        className="absolute inset-0"
        particleColor="#0ea5e9"
        particleDensity={1.5}
        minSize={8}
        maxSize={16}
        background="transparent"
      >
        <FloatingElements />
        <div className="flex items-center justify-center min-h-screen">
          <FloatingCard className="text-center z-10 p-12 max-w-4xl mx-4" delay={0.2}>
            {/* Profile Photo */}
            <div className="mb-8">
              <motion.div 
                whileHover={{ scale: 1.05 }} 
                className="relative inline-block mb-8"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-sky-400/20 to-blue-400/20 rounded-full blur-xl" />
                <picture>
                  <source
                    type="image/webp"
                    srcSet="/assets/img/webp/jaidevimg.jpg"
                  />
                  <img
                    src="/assets/img/jpg/jaidevimg.jpg"
                    alt="Jaidev Yadav - Professional Photo"
                    className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto object-cover shadow-2xl ring-4 ring-sky-400/50 relative z-10"
                  />
                </picture>
              </motion.div>
              <AnimatedText
                text="Jaidev Yadav"
                className="text-6xl md:text-8xl font-bold text-slate-800 mb-4 transition-colors duration-300"
                variant="fade"
                delay={0.5}
              />
              <AnimatedText
                text="AI Enthusiast • Web Developer • Creator"
                className="text-xl md:text-2xl text-slate-600 font-light transition-colors duration-300"
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
                className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-slate-800 text-slate-800 hover:bg-sky-500 hover:border-sky-500 hover:text-white transition-all duration-300"
              >
                <i className="fab fa-linkedin text-xl" aria-hidden="true"></i>
              </a>
              <a
                aria-label="My Github Profile"
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/jaidev3"
                className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-slate-800 text-slate-800 hover:bg-sky-500 hover:border-sky-500 hover:text-white transition-all duration-300"
              >
                <i className="fab fa-github-alt text-xl" aria-hidden="true"></i>
              </a>
              <a
                aria-label="My Résumé"
                target="_blank"
                rel="noopener noreferrer"
                href="https://drive.google.com/file/d/1i-VRb5582T4xBwUuKWSilo5OlcUFIBwe/view?usp=sharing"
                className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-slate-800 text-slate-800 hover:bg-sky-500 hover:border-sky-500 hover:text-white transition-all duration-300"
              >
                <i className="fas fa-file-pdf text-xl" aria-hidden="true"></i>
              </a>
              <a
                aria-label="Send Email"
                href="mailto:jaidevyadav720@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-slate-800 text-slate-800 hover:bg-sky-500 hover:border-sky-500 hover:text-white transition-all duration-300"
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
    particlesJS: (id: string, config: object) => void;
  }
}

export default Home;
