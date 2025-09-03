import React from 'react';

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



  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-slate-200 to-slate-300 dark:from-slate-800 dark:via-slate-900 dark:to-slate-950 pt-20 transition-colors duration-300">
      <main className="max-w-7xl mx-auto px-4 py-16">
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-slate-100 mb-4 transition-colors duration-300">Featured Projects</h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 transition-colors duration-300">Explore my latest work and creative solutions</p>
        </header>

        <div className="grid gap-12 lg:gap-16">
          {projects.map((project, index) => (
            <article
              key={index}
              className="project-card bg-white dark:bg-slate-800 rounded-2xl shadow-xl overflow-hidden transition-all duration-1000 opacity-100 transform translate-y-0"
              data-project={index}
            >
              <div className="lg:flex">
                <div className="lg:w-1/2 relative group">
                  <img
                    src={project.image}
                    alt={`${project.title} Screenshot`}
                    className="w-full h-64 lg:h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = '/assets/img/favicon.png';
                    }}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex space-x-4">
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-sky-500 hover:bg-sky-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300 flex items-center space-x-2"
                        aria-label={`View ${project.title} demo`}
                      >
                        <i className="fas fa-external-link-alt"></i>
                        <span>Live Demo</span>
                      </a>
                      <a
                        href={project.sourceCode}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-slate-700 hover:bg-slate-800 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300 flex items-center space-x-2"
                        aria-label={`View ${project.title} source code`}
                      >
                        <i className="fab fa-github"></i>
                        <span>Source Code</span>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="lg:w-1/2 p-8 lg:p-12">
                  <div className="mb-4">
                    <h3 className="text-2xl lg:text-3xl font-bold text-slate-800 dark:text-slate-100 mb-2 transition-colors duration-300">{project.title}</h3>
                    <div className="inline-block bg-sky-100 dark:bg-sky-900/30 text-sky-700 dark:text-sky-300 px-3 py-1 rounded-full text-sm font-medium transition-colors duration-300">
                      {project.category}
                    </div>
                  </div>

                  <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-6 transition-colors duration-300">{project.description}</p>

                  <div className="flex flex-wrap gap-3">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 px-4 py-2 rounded-lg text-sm font-medium flex items-center space-x-2 transition-colors duration-300"
                      >
                        <i className={tech.icon}></i>
                        <span>{tech.name}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Projects;