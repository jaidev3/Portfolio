import React from 'react';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';
import Sparkles from './Sparkles';

interface Skill {
  name: string;
  percentage: number;
}

interface SkillCardProps {
  icon: string;
  title: string;
  skills: Skill[];
  delay?: number;
  isVisible?: boolean;
}

const SkillCard: React.FC<SkillCardProps> = ({
  icon,
  title,
  skills,
  delay = 0,
  isVisible = false
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={isVisible ? {
        opacity: 1,
        y: 0,
        scale: 1
      } : {
        opacity: 0,
        y: 50,
        scale: 0.9
      }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      className={cn(
        "group relative",
        "bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl",
        "border border-white/20 dark:border-slate-700/50",
        "rounded-3xl shadow-xl p-8",
        "transition-all duration-500",
        "hover:shadow-2xl hover:scale-105",
        "hover:border-white/40 dark:hover:border-slate-600/70"
      )}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Animated border */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
      
      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-center justify-center mb-8">
          <Sparkles 
            className="relative mr-4"
            particleColor="#0ea5e9"
            particleDensity={3}
            minSize={4}
            maxSize={8}
          >
            <motion.div 
              className="w-16 h-16 bg-gradient-to-br from-sky-400 to-sky-600 rounded-full flex items-center justify-center shadow-lg ring-4 ring-sky-400/30"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.3 }}
            >
              <i className={`${icon} text-white text-2xl`}></i>
            </motion.div>
          </Sparkles>
          <motion.h3 
            className="text-2xl md:text-3xl font-semibold text-slate-800 dark:text-slate-200 transition-colors duration-300"
            initial={{ opacity: 0, x: -20 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6, delay: delay + 0.2 }}
          >
            {title}
          </motion.h3>
        </div>

        {/* Skills */}
        <div className="space-y-6">
          {skills.map((skill, skillIndex) => (
            <motion.div
              key={skillIndex}
              initial={{ opacity: 0, x: 30 }}
              animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{
                duration: 0.6,
                delay: delay + 0.4 + (skillIndex * 0.1)
              }}
              className="group/skill"
            >
              <div className="flex justify-between items-center mb-3">
                <span className="text-lg font-medium text-slate-700 dark:text-slate-300 transition-colors duration-300 group-hover/skill:text-slate-900 dark:group-hover/skill:text-slate-100">
                  {skill.name}
                </span>
                <motion.span 
                  className="text-lg font-semibold text-sky-500 group-hover/skill:text-sky-400"
                  initial={{ scale: 0 }}
                  animate={isVisible ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.4, delay: delay + 0.6 + (skillIndex * 0.1) }}
                >
                  {skill.percentage}%
                </motion.span>
              </div>
              
              {/* Progress bar container */}
              <div className="relative w-full bg-slate-300 dark:bg-slate-600 rounded-full h-3 overflow-hidden transition-colors duration-300">
                {/* Background glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-sky-400/20 to-sky-600/20 rounded-full opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300" />
                
                {/* Progress bar */}
                <motion.div
                  className="h-full bg-gradient-to-r from-sky-400 to-sky-600 rounded-full relative overflow-hidden"
                  initial={{ width: 0 }}
                  animate={isVisible ? { width: `${skill.percentage}%` } : { width: 0 }}
                  transition={{
                    duration: 1.2,
                    delay: delay + 0.8 + (skillIndex * 0.1),
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                >
                  {/* Shimmer effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    initial={{ x: '-100%' }}
                    animate={isVisible ? { x: '100%' } : { x: '-100%' }}
                    transition={{
                      duration: 1.5,
                      delay: delay + 1.5 + (skillIndex * 0.1),
                      ease: "easeInOut"
                    }}
                  />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default SkillCard;