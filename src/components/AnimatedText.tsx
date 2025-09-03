import React from 'react';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  variant?: 'fade' | 'slide' | 'typewriter';
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className,
  delay = 0,
  duration = 0.8,
  variant = 'fade'
}) => {
  const words = text.split(' ');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: variant === 'typewriter' ? 0.1 : 0.2,
        delayChildren: delay
      }
    }
  };

  const wordVariants = {
    fade: {
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration }
      }
    },
    slide: {
      hidden: { opacity: 0, x: -20 },
      visible: {
        opacity: 1,
        x: 0,
        transition: { duration }
      }
    },
    typewriter: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.3 }
      }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={cn("overflow-hidden", className)}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          variants={wordVariants[variant]}
          className="inline-block mr-2"
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default AnimatedText;