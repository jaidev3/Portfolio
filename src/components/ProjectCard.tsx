import React, { useState } from 'react';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

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
    <motion.div
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
    >
      <Card className={cn(
        "group relative overflow-hidden",
        "bg-white/80 backdrop-blur-xl",
        "border border-white/20",
        "rounded-3xl shadow-2xl",
        "transition-all duration-500",
        "hover:shadow-3xl hover:border-white/40"
      )}>
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
              <div className="w-full h-full bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center">
                <i className="fas fa-image text-4xl text-slate-400" />
              </div>
            )}
            
            {/* Loading skeleton */}
            {!imageLoaded && (
              <div className="absolute inset-0 bg-gradient-to-r from-slate-200 via-slate-300 to-slate-200 animate-pulse" />
            )}
            
            {/* Overlay with buttons */}
            <motion.div
              className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover/image:opacity-100 transition-opacity duration-300"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
            >
              <div className="flex space-x-4">
                <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    asChild
                    className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-xl font-medium shadow-lg"
                  >
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} demo`}
                    >
                      <i className="fas fa-external-link-alt" />
                      <span>Live Demo</span>
                    </a>
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    asChild
                    variant="secondary"
                    className="bg-slate-700 hover:bg-slate-800 text-white px-6 py-3 rounded-xl font-medium shadow-lg"
                  >
                    <a
                      href={project.sourceCode}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} source code`}
                    >
                      <i className="fab fa-github" />
                      <span>Source Code</span>
                    </a>
                  </Button>
                </motion.div>
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
              <Badge 
                variant="secondary"
                className="bg-gradient-to-r from-emerald-100 to-blue-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium border border-emerald-200/50"
              >
                {project.category}
              </Badge>
            </motion.div>

            {/* Title */}
            <motion.h3
              className="text-2xl lg:text-3xl font-bold text-slate-800 mb-4 transition-colors duration-300"
              whileHover={{ scale: 1.02 }}
            >
              {project.title}
            </motion.h3>

            {/* Description */}
            <motion.p
              className="text-slate-600 text-lg leading-relaxed mb-6 transition-colors duration-300"
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
                <motion.div
                  key={techIndex}
                  whileHover={{
                    scale: 1.05,
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
                  <Badge
                    variant="outline"
                    className="bg-slate-100/80 backdrop-blur-sm text-slate-700 px-4 py-2 rounded-xl text-sm font-medium flex items-center space-x-2 transition-all duration-300 border border-slate-200/50 hover:bg-blue-50 hover:border-blue-300"
                  >
                    <i className={tech.icon} />
                    <span>{tech.name}</span>
                  </Badge>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;