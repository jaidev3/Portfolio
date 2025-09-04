import React from 'react';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';
import Sparkles from './Sparkles';
import { Card, CardContent, CardHeader } from './ui/card';
import { Progress } from './ui/progress';
import { Badge } from './ui/badge';

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
      whileHover={{ scale: 1.02, y: -8 }}
    >
      <Card className={cn(
        "group relative h-full flex flex-col",
        "bg-white/90 backdrop-blur-2xl",
        "border border-white/30",
        "rounded-3xl shadow-2xl",
        "transition-all duration-700 ease-out",
        "hover:shadow-3xl",
        "hover:border-white/50",
        "before:absolute before:inset-0 before:rounded-3xl",
        "before:bg-gradient-to-br before:from-white/20 before:via-transparent before:to-transparent",
        "before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500"
      )}>
      {/* Enhanced Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-500/5 to-gray-600/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
      
      {/* Animated border glow */}
      <div className="absolute -inset-0.5 rounded-3xl bg-gray-400/20 opacity-0 group-hover:opacity-100 transition-all duration-700 blur-sm" />
      
      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden rounded-3xl">
        <div className="absolute top-4 right-4 w-2 h-2 bg-gray-400/40 rounded-full animate-bounce" style={{animationDelay: '0s'}} />
        <div className="absolute top-8 left-6 w-1.5 h-1.5 bg-gray-500/40 rounded-full animate-bounce" style={{animationDelay: '0.5s'}} />
        <div className="absolute bottom-6 right-8 w-1 h-1 bg-gray-600/40 rounded-full animate-bounce" style={{animationDelay: '1s'}} />
      </div>
      
      {/* Content */}
      <div className="relative z-10 p-8">
        <CardHeader className="flex flex-col items-center justify-center mb-10 p-0">
          <Sparkles 
            className="relative mb-6"
            particleColor="#6b7280"
            particleDensity={2}
            minSize={2}
            maxSize={6}
          >
            <motion.div 
              className="w-20 h-20 bg-gradient-to-br from-gray-600 to-gray-700 rounded-2xl flex items-center justify-center shadow-2xl ring-4 ring-gray-400/40 relative overflow-hidden"
              whileHover={{ scale: 1.15, rotate: 10 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              {/* Icon glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl" />
              <i className={`${icon} text-white text-3xl relative z-10 drop-shadow-lg`}></i>
              
              {/* Rotating border */}
              <motion.div 
                className="absolute inset-0 rounded-2xl border-2 border-white/30"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />
            </motion.div>
          </Sparkles>
          
          <motion.h3 
            className="text-2xl md:text-3xl font-bold text-slate-800 transition-colors duration-300 text-center leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: delay + 0.2 }}
          >
            {title}
          </motion.h3>
          
          {/* Decorative line */}
          <motion.div 
            className="w-16 h-0.5 bg-gradient-to-r from-transparent via-sky-500 to-transparent mt-4"
            initial={{ scaleX: 0 }}
            animate={isVisible ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.8, delay: delay + 0.4 }}
          />
        </CardHeader>

        <CardContent className="flex-1 space-y-5 p-0">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="group/skill relative"
              initial={{ opacity: 0, x: -30 }}
              animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6, delay: delay + 0.4 + (index * 0.1) }}
            >
              {/* Skill item background */}
              <div className="absolute inset-0 bg-gradient-to-r from-sky-50/50 to-purple-50/50 rounded-xl opacity-0 group-hover/skill:opacity-100 transition-all duration-300 -m-2" />
              
              <div className="relative z-10 p-2">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-lg font-semibold text-slate-700 group-hover/skill:text-sky-600 transition-colors duration-300">
                    {skill.name}
                  </span>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Badge 
                      className="text-sm font-bold text-white bg-gradient-to-r from-sky-500 to-purple-600 px-4 py-2 rounded-full shadow-lg ring-2 ring-sky-400/30"
                    >
                      {skill.percentage}%
                    </Badge>
                  </motion.div>
                </div>
                
                {/* Enhanced Progress bar */}
                <div className="relative">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 1.5, delay: delay + 0.6 + (index * 0.1) }}
                  >
                    <Progress 
                      value={isVisible ? skill.percentage : 0}
                      className="h-4 bg-gradient-to-r from-slate-200 to-slate-300 rounded-full overflow-hidden shadow-inner"
                    />
                  </motion.div>
                  
                  {/* Background shimmer */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover/skill:translate-x-full transition-transform duration-1500 rounded-full" />
                  
                  {/* Progress indicator dot */}
                  <motion.div
                    className="absolute top-1/2 transform -translate-y-1/2 w-2 h-2 bg-white rounded-full shadow-lg"
                    initial={{ left: '0%' }}
                    animate={isVisible ? { left: `${skill.percentage}%` } : { left: '0%' }}
                    transition={{ duration: 1.5, delay: delay + 0.6 + (index * 0.1), ease: "easeOut" }}
                    style={{ marginLeft: '-4px' }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </CardContent>
      </div>
      </Card>
    </motion.div>
  );
};

export default SkillCard;