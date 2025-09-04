import React, { useEffect, useRef, useState } from 'react';
import Sparkles from '../components/Sparkles';
import ProjectCard from '../components/ProjectCard';
import FloatingElements from '../components/FloatingElements';

interface Project {
  title: string;
  category: string;
  description: string;
  image: string;
  liveDemo: string;
  sourceCode: string;
  technologies: { name: string; icon: string }[];
}

const Projects = () => {
  const [visibleProjects, setVisibleProjects] = useState<Set<number>>(new Set());
  const observerRef = useRef<IntersectionObserver | null>(null);

  const projects: Project[] = [
    {
      title: 'Shein E-commerce',
      category: 'Frontend Development',
      description:
        'A modern e-commerce platform built with HTML, CSS, and JavaScript. Features responsive design, interactive UI components, and optimized performance for seamless shopping experience.',
      image: '/assets/img/jpg/Personal-Resume-Website.png',
      liveDemo: 'https://shein-shoping.netlify.app/',
      sourceCode: 'https://github.com/jaidev3/shein-react',
      technologies: [
        { name: 'HTML5', icon: 'fab fa-html5' },
        { name: 'JavaScript', icon: 'fab fa-js-square' },
        { name: 'CSS3', icon: 'fab fa-css3-alt' },
      ],
    },
    {
      title: 'Dunzo Food Delivery',
      category: 'Full Stack Development',
      description:
        'A comprehensive food delivery application with full-stack architecture. Built with Node.js backend, Express framework, and MongoDB database, featuring real-time order tracking and secure payment integration.',
      image: '/assets/img/jpg/Perpetual-Crusades.png',
      liveDemo: 'https://masai-dunzo.netlify.app/',
      sourceCode: 'https://github.com/jaidev3/FW12_Dunzo_Project-Back-End.git',
      technologies: [
        { name: 'HTML5', icon: 'fab fa-html5' },
        { name: 'CSS3', icon: 'fab fa-css3-alt' },
        { name: 'Node.js', icon: 'fab fa-node-js' },
        { name: 'Express', icon: 'fas fa-server' },
        { name: 'MongoDB', icon: 'fas fa-database' },
      ],
    },
    {
      title: 'Realme Brand Site',
      category: 'React Development',
      description:
        'A dynamic brand website built with ReactJS and JSON Server. Features component-based architecture, state management, and responsive design showcasing modern web development practices.',
      image: '/assets/img/jpg/realme.png',
      liveDemo: 'https://realme-masai.herokuapp.com/',
      sourceCode: 'https://github.com/jaidev3/RealmeConstructWeek',
      technologies: [
        { name: 'ReactJS', icon: 'fab fa-react' },
        { name: 'Styled Components', icon: 'fas fa-code' },
        { name: 'JSON Server', icon: 'fas fa-server' },
      ],
    },
  ];

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const projectIndex = parseInt(entry.target.getAttribute('data-project') || '0');
            setVisibleProjects((prev) => new Set([...prev, projectIndex]));
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px',
      }
    );

    const projectElements = document.querySelectorAll('.project-item');
    projectElements.forEach((el) => {
      if (observerRef.current) {
        observerRef.current.observe(el);
      }
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-slate-200 to-slate-300 pt-20 transition-colors duration-300 relative overflow-hidden">
      <FloatingElements />
      
      <Sparkles
        id="projects-particles"
        className="absolute inset-0"
        particleColor="#10b981"
        particleDensity={1}
        minSize={3}
        maxSize={8}
        background="transparent"
      >
        <main className="max-w-7xl mx-auto px-4 py-16 relative z-10">
          <header className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4 transition-colors duration-300">
              Featured Projects
            </h1>
            <p className="text-xl text-slate-600 transition-colors duration-300">
              Explore my latest work and creative solutions
            </p>
          </header>

          <div className="space-y-16 lg:space-y-24">
            {projects.map((project, index) => (
              <div
                key={index}
                className="project-item"
                data-project={index}
              >
                <ProjectCard
                  project={project}
                  index={index}
                  isVisible={visibleProjects.has(index)}
                />
              </div>
            ))}
          </div>
        </main>
      </Sparkles>
    </div>
  );
};

export default Projects;