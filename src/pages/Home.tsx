import { useTheme } from '../contexts/ThemeContext';

const Home = () => {
  const { theme } = useTheme();

  return (
    <div className="min-h-screen relative">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-slate-200 to-slate-300 dark:from-slate-800 dark:via-slate-900 dark:to-slate-950 transition-colors duration-300">
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center z-10 relative">
            <h1 className="mb-8">
              <span className="block text-6xl md:text-8xl font-bold text-slate-800 dark:text-slate-100 mb-4 transition-colors duration-300">
                Jaidev Yadav
              </span>
              <span className="block text-xl md:text-2xl text-slate-600 dark:text-slate-300 font-light transition-colors duration-300">
                Programmer • Web Developer • Graphic Designer
              </span>
            </h1>
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