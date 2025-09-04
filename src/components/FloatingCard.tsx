import React from 'react';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';

interface FloatingCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  hover?: boolean;
}

const FloatingCard: React.FC<FloatingCardProps> = ({
  children,
  className,
  delay = 0,
  direction = 'up',
  hover = true
}) => {
  const directionVariants = {
    up: { y: 20, opacity: 0 },
    down: { y: -20, opacity: 0 },
    left: { x: 20, opacity: 0 },
    right: { x: -20, opacity: 0 }
  };

  return (
    <motion.div
      initial={directionVariants[direction]}
      animate={{ x: 0, y: 0, opacity: 1 }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      whileHover={hover ? {
        y: -8,
        scale: 1.02,
        transition: { duration: 0.3 }
      } : {}}
      className={cn(
        "relative group",
        "bg-white/80 backdrop-blur-xl",
        "border border-white/20",
        "rounded-2xl shadow-xl",
        "transition-all duration-300",
        "hover:shadow-xl hover:border-slate-200",
        className
      )}
    >
      {/* Simple hover overlay */}
      <div className="absolute inset-0 bg-slate-50/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
};

export default FloatingCard;