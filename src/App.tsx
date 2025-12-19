import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Button } from "./components/ui/button";
import { Menu, X } from "lucide-react";
import { Hero } from "./components/Hero";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { ThemeProvider } from "./components/theme-provider";
import { ThemeToggle } from "./components/theme-toggle";

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" }
  ];

  // Scroll spy effect
  useEffect(() => {
    const handleScroll = () => {
      // Update scrolled state for navbar styling
      setScrolled(window.scrollY > 50);

      // Determine active section
      const sections = navItems.map(item => item.href.slice(1));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <ThemeProvider defaultTheme="system" storageKey="portfolio-theme">
      <div className="min-h-screen bg-background transition-colors duration-300">
        {/* Navigation */}
        <motion.nav
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
              ? "bg-background/95 backdrop-blur-xl border-b shadow-sm"
              : "bg-transparent"
            }`}
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <motion.div
                className="shrink-0"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="tracking-tight text-gradient font-bold">Jaidev Yadav</h3>
              </motion.div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-2">
                <div className="flex items-center bg-muted/50 backdrop-blur-sm rounded-full p-1">
                  {navItems.map((item, index) => (
                    <motion.button
                      key={item.label}
                      onClick={() => handleNavClick(item.href)}
                      className={`relative px-4 py-2 text-sm font-medium transition-colors rounded-full ${activeSection === item.href.slice(1)
                          ? "text-primary-foreground"
                          : "text-muted-foreground hover:text-foreground"
                        }`}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * index }}
                    >
                      {activeSection === item.href.slice(1) && (
                        <motion.div
                          className="absolute inset-0 bg-primary rounded-full"
                          layoutId="activeSection"
                          transition={{ type: "spring", duration: 0.5 }}
                        />
                      )}
                      <span className="relative z-10">{item.label}</span>
                    </motion.button>
                  ))}
                </div>
                <div className="ml-4">
                  <ThemeToggle />
                </div>
              </div>

              {/* Mobile menu section */}
              <div className="md:hidden flex items-center space-x-2">
                <ThemeToggle />
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="relative"
                >
                  <motion.div
                    initial={false}
                    animate={{ rotate: mobileMenuOpen ? 90 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {mobileMenuOpen ? (
                      <X className="h-6 w-6" />
                    ) : (
                      <Menu className="h-6 w-6" />
                    )}
                  </motion.div>
                </Button>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          <motion.div
            className="md:hidden overflow-hidden"
            initial={false}
            animate={{ height: mobileMenuOpen ? "auto" : 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-4 pt-2 pb-4 space-y-1 bg-background/95 backdrop-blur-xl border-t">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.label}
                  onClick={() => handleNavClick(item.href)}
                  className={`w-full text-left px-4 py-3 rounded-lg text-base transition-all ${activeSection === item.href.slice(1)
                      ? "bg-primary text-primary-foreground font-medium"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                    }`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * index }}
                >
                  {item.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </motion.nav>

        {/* Scroll Progress Indicator */}
        <ScrollProgress />

        {/* Main Content */}
        <main>
          <div id="home">
            <Hero />
          </div>
          <div id="skills">
            <Skills />
          </div>
          <div id="experience">
            <Experience />
          </div>
          <div id="projects">
            <Projects />
          </div>
          <div id="contact">
            <Contact />
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-secondary/10 py-12 px-4 border-t">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="mb-4 text-gradient">Jaidev Yadav</h3>
            <p className="text-muted-foreground mb-6">
              Senior Software Engineer | Full-Stack Developer | DevOps Enthusiast
            </p>
            <p className="text-sm text-muted-foreground">
              © 2025 Jaidev Yadav. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
}

// Scroll Progress Component
function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = (window.scrollY / totalHeight) * 100;
      setProgress(scrollProgress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-primary z-[60] origin-left"
      style={{ scaleX: progress / 100 }}
      initial={{ scaleX: 0 }}
    />
  );
}