import { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    // Load particles.js
    const loadParticles = async () => {
      try {
        const particlesModule = await import('particles.js');
        const particlesJS = particlesModule.particlesJS || particlesModule.default;
        
        if (typeof particlesJS === 'function') {
           particlesJS('particles-js', {
             particles: {
               number: {
                 value: 80,
                 density: {
                   enable: true,
                   value_area: 800
                 }
               },
               color: {
                 value: '#ffffff'
               },
               shape: {
                 type: 'circle',
                 stroke: {
                   width: 0,
                   color: '#000000'
                 }
               },
               opacity: {
                 value: 0.5,
                 random: false,
                 anim: {
                   enable: false,
                   speed: 1,
                   opacity_min: 0.1,
                   sync: false
                 }
               },
               size: {
                 value: 3,
                 random: true,
                 anim: {
                   enable: false,
                   speed: 40,
                   size_min: 0.1,
                   sync: false
                 }
               },
               line_linked: {
                 enable: true,
                 distance: 150,
                 color: '#ffffff',
                 opacity: 0.4,
                 width: 1
               },
               move: {
                 enable: true,
                 speed: 6,
                 direction: 'none',
                 random: false,
                 straight: false,
                 out_mode: 'out',
                 bounce: false,
                 attract: {
                   enable: false,
                   rotateX: 600,
                   rotateY: 1200
                 }
               }
             },
             interactivity: {
               detect_on: 'canvas',
               events: {
                 onhover: {
                   enable: true,
                   mode: 'repulse'
                 },
                 onclick: {
                   enable: true,
                   mode: 'push'
                 },
                 resize: true
               },
               modes: {
                 grab: {
                   distance: 400,
                   line_linked: {
                     opacity: 1
                   }
                 },
                 bubble: {
                   distance: 400,
                   size: 40,
                   duration: 2,
                   opacity: 8,
                   speed: 3
                 },
                 repulse: {
                   distance: 200,
                   duration: 0.4
                 },
                 push: {
                   particles_nb: 4
                 },
                 remove: {
                   particles_nb: 2
                 }
               }
             },
             retina_detect: true
           });
         }
      } catch (error) {
        console.error('Failed to load particles.js:', error);
      }
    };

    loadParticles();
  }, []);

  return (
    <div className="min-h-screen relative">
      <div
        id="particles-js"
        className="absolute inset-0 bg-gradient-to-br from-slate-50 via-slate-200 to-slate-300"
      >
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center z-10 relative">
            <h1 className="mb-8">
              <span className="block text-6xl md:text-8xl font-bold text-slate-800 mb-4">
                Jaidev Yadav
              </span>
              <span className="block text-xl md:text-2xl text-slate-600 font-light">
                Programmer • Web Developer • Graphic Designer
              </span>
            </h1>
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
          </div>
        </div>
      </div>
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