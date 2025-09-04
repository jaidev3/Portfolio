import React from 'react';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';
import { Card, CardContent, CardHeader } from './ui/card';
import { Progress } from './ui/progress';

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
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? {
        opacity: 1,
        y: 0
      } : {
        opacity: 0,
        y: 30
      }}
      transition={{
        duration: 0.5,
        delay,
        ease: "easeOut"
      }}
    >
      <Card className={cn(
        "h-full flex flex-col",
        "bg-white",
        "border border-slate-200",
        "rounded-xl shadow-sm",
        "transition-all duration-200",
        "hover:shadow-md hover:border-slate-300"
      )}>
        <CardHeader className="text-center pb-4">
          <div className="w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center mx-auto mb-3">
            <i className={`${icon} text-white text-xl`}></i>
          </div>
          
          <h3 className="text-xl font-semibold text-slate-800">
            {title}
          </h3>
        </CardHeader>

        <CardContent className="flex-1 space-y-4">
          {skills.map((skill, index) => (
            <div key={skill.name} className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-slate-700">
                  {skill.name}
                </span>
                <span className="text-sm font-semibold text-slate-600">
                  {skill.percentage}%
                </span>
              </div>
              
              <Progress 
                value={isVisible ? skill.percentage : 0}
                className="h-2 bg-slate-100"
              />
            </div>
          ))}
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default SkillCard;