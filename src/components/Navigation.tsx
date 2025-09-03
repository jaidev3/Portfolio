import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import ThemeToggle from './ThemeToggle';
import Sparkles from './Sparkles';
import { cn } from '../lib/utils';

const Navigation = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { path: '/', label: 'Home', icon: 'fas fa-home' },
    { path: '/skills', label: 'Skills', icon: 'fas fa-code' },
    { path: '/projects', label: 'Projects', icon: 'fas fa-folder-open' },
    { path: '/about', label: 'About Me', icon: 'fas fa-user' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled
            ? "bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-lg border-b border-slate-200/50 dark:border-slate-700/50"
            : "bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm border-b border-slate-200/30 dark:border-slate-700/30"
        )}
      >
        <Sparkles
          className="w-full"
          particleColor="#8b5cf6"
          particleDensity={0.3}
          minSize={2}
          maxSize={4}
        >
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex justify-between items-center py-4">
              {/* Logo/Brand */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2"
              >
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">JY</span>
                </div>
                <span className="font-bold text-lg text-slate-800 dark:text-slate-100 hidden sm:block">
                  Jaidev Yadav
                </span>
              </motion.div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex justify-center space-x-2 flex-1">
                {navItems.map((item, index) => {
                  const isActive = location.pathname === item.path;
                  return (
                    <motion.div
                      key={item.path}
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 + 0.3 }}
                    >
                      <Link
                        to={item.path}
                        className={cn(
                          "relative px-6 py-3 rounded-xl transition-all duration-300 font-medium flex items-center space-x-2 group",
                          isActive
                            ? "text-white bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg"
                            : "text-slate-700 dark:text-slate-300 hover:text-blue-500 hover:bg-slate-50 dark:hover:bg-slate-800/50"
                        )}
                      >
                        <i className={cn(item.icon, "text-sm")} />
                        <span>{item.label}</span>
                        
                        {/* Active indicator */}
                        {isActive && (
                          <motion.div
                            layoutId="activeTab"
                            className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl -z-10"
                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                          />
                        )}
                        
                        {/* Hover effect */}
                        {!isActive && (
                          <motion.div
                            className="absolute inset-0 bg-slate-100 dark:bg-slate-800/50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
                          />
                        )}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              {/* Right side controls */}
              <div className="flex items-center space-x-4">
                <ThemeToggle />
                
                {/* Mobile menu button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={toggleMobileMenu}
                  className="md:hidden p-2 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-200"
                  aria-label="Toggle mobile menu"
                >
                  <motion.div
                    animate={isMobileMenuOpen ? "open" : "closed"}
                    className="w-6 h-6 flex flex-col justify-center items-center"
                  >
                    <motion.span
                      variants={{
                        closed: { rotate: 0, y: 0 },
                        open: { rotate: 45, y: 6 }
                      }}
                      className="w-5 h-0.5 bg-current block transition-all duration-300 origin-center"
                    />
                    <motion.span
                      variants={{
                        closed: { opacity: 1 },
                        open: { opacity: 0 }
                      }}
                      className="w-5 h-0.5 bg-current block mt-1.5 transition-all duration-300"
                    />
                    <motion.span
                      variants={{
                        closed: { rotate: 0, y: 0 },
                        open: { rotate: -45, y: -6 }
                      }}
                      className="w-5 h-0.5 bg-current block mt-1.5 transition-all duration-300 origin-center"
                    />
                  </motion.div>
                </motion.button>
              </div>
            </div>
          </div>
        </Sparkles>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Mobile menu panel */}
            <motion.div
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              className="fixed top-0 right-0 h-full w-80 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-l border-slate-200/50 dark:border-slate-700/50 z-50 md:hidden"
            >
              <div className="p-6 pt-20">
                <nav className="space-y-4">
                  {navItems.map((item, index) => {
                    const isActive = location.pathname === item.path;
                    return (
                      <motion.div
                        key={item.path}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 + 0.2 }}
                      >
                        <Link
                          to={item.path}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={cn(
                            "flex items-center space-x-4 px-6 py-4 rounded-xl transition-all duration-300 font-medium",
                            isActive
                              ? "text-white bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg"
                              : "text-slate-700 dark:text-slate-300 hover:text-blue-500 hover:bg-slate-50 dark:hover:bg-slate-800/50"
                          )}
                        >
                          <i className={cn(item.icon, "text-lg")} />
                          <span className="text-lg">{item.label}</span>
                        </Link>
                      </motion.div>
                    );
                  })}
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;