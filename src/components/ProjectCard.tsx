import React, { useState } from 'react';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';

interface Project {
  title: string;
  category: string;
  description: string;
  image: string;
  liveDemo: string;
  sourceCode: string;
  technologies: { name: string; icon: string }[];
}

interface ProjectCardProps {
  project: Project;
  index: number;
  isVisible?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, isVisible = false }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const isEven = index % 2 === 0;

  return (
    <motion.article
      initial={{ opacity: 0, y: 100, scale: 0.8 }}
      animate={isVisible ? {
        opacity: 1,
        y: 0,
        scale: 1
      } : {
        opacity: 0,
        y: 100,
        scale: 0.8
      }}
      transition={{
        duration: 0.8,
        delay: index * 0.2,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.3 }
      }}
      className={cn(
        "group relative overflow-hidden",
        "bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl",
        "border border-white/20 dark:border-slate-700/50",
        "rounded-3xl shadow-2xl",
        "transition-all duration-500",
        "hover:shadow-3xl hover:border-white/40 dark:hover:border-slate-600/70"
      )}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-blue-500/5 to-purple-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Animated border */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-emerald-500/20 via-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
      
      <div className={cn(
        "lg:flex relative z-10",
        isEven ? "lg:flex-row" : "lg:flex-row-reverse"
      )}>
        {/* Image Section */}
        <div className="lg:w-1/2 relative overflow-hidden">
          <motion.div
            className="relative h-64 lg:h-full group/image"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
          >
            {!imageError ? (
              <motion.img
                src={project.image}
                alt={`${project.title} Screenshot`}
                className={cn(
                  "w-full h-full object-cover transition-all duration-500",
                  imageLoaded ? "opacity-100 scale-100" : "opacity-0 scale-110"
                )}
                onLoad={() => setImageLoaded(true)}
                onError={() => {
                  setImageError(true);
                  setImageLoaded(true);
                }}
                loading="lazy"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-800 flex items-center justify-center">
                <i className="fas fa-image text-4xl text-slate-400 dark:text-slate-500" />
              </div>
            )}
            
            {/* Loading skeleton */}
            {!imageLoaded && (
              <div className="absolute inset-0 bg-gradient-to-r from-slate-200 via-slate-300 to-slate-200 dark:from-slate-700 dark:via-slate-600 dark:to-slate-700 animate-pulse" />
            )}
            
            {/* Overlay with buttons */}
            <motion.div
              className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover/image:opacity-100 transition-opacity duration-300"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
            >
              <div className="flex space-x-4">
                <motion.a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center space-x-2 shadow-lg"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={`View ${project.title} demo`}
                >
                  <i className="fas fa-external-link-alt" />
                  <span>Live Demo</span>
                </motion.a>
                <motion.a
                  href={project.sourceCode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-700 hover:bg-slate-800 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center space-x-2 shadow-lg"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={`View ${project.title} source code`}
                >
                  <i className="fab fa-github" />
                  <span>Source Code</span>
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Content Section */}
        <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, x: isEven ? 50 : -50 }}
            animate={isVisible ? {
              opacity: 1,
              x: 0
            } : {
              opacity: 0,
              x: isEven ? 50 : -50
            }}
            transition={{
              duration: 0.6,
              delay: index * 0.2 + 0.3
            }}
          >
            {/* Category Badge */}
            <motion.div
              className="inline-block mb-4"
              whileHover={{ scale: 1.05 }}
            >
              <span className="bg-gradient-to-r from-emerald-100 to-blue-100 dark:from-emerald-900/30 dark:to-blue-900/30 text-emerald-700 dark:text-emerald-300 px-4 py-2 rounded-full text-sm font-medium border border-emerald-200/50 dark:border-emerald-700/50">
                {project.category}
              </span>
            </motion.div>

            {/* Title */}
            <motion.h3
              className="text-2xl lg:text-3xl font-bold text-slate-800 dark:text-slate-100 mb-4 transition-colors duration-300"
              whileHover={{ scale: 1.02 }}
            >
              {project.title}
            </motion.h3>

            {/* Description */}
            <motion.p
              className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-6 transition-colors duration-300"
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.2 + 0.5
              }}
            >
              {project.description}
            </motion.p>

            {/* Technologies */}
            <motion.div
              className="flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? {
                opacity: 1,
                y: 0
              } : {
                opacity: 0,
                y: 20
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.2 + 0.7
              }}
            >
              {project.technologies.map((tech, techIndex) => (
                <motion.span
                  key={techIndex}
                  className="bg-slate-100/80 dark:bg-slate-700/80 backdrop-blur-sm text-slate-700 dark:text-slate-300 px-4 py-2 rounded-xl text-sm font-medium flex items-center space-x-2 transition-all duration-300 border border-slate-200/50 dark:border-slate-600/50"
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "rgba(59, 130, 246, 0.1)",
                    borderColor: "rgba(59, 130, 246, 0.3)"
                  }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isVisible ? {
                    opacity: 1,
                    scale: 1
                  } : {
                    opacity: 0,
                    scale: 0.8
                  }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.2 + 0.8 + (techIndex * 0.1)
                  }}
                >
                  <i className={tech.icon} />
                  <span>{tech.name}</span>
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;