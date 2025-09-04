import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Sparkles from '../components/Sparkles';
import SkillCard from '../components/SkillCard';
import FloatingElements from '../components/FloatingElements';

interface Skill {
  name: string;
  percentage: number;
}

interface SkillCategory {
  icon: string;
  title: string;
  skills: Skill[];
}

const Skills = () => {
  const [visibleCategories, setVisibleCategories] = useState<Set<number>>(new Set());
  const observerRef = useRef<IntersectionObserver | null>(null);

  const skillCategories: SkillCategory[] = [
    {
      icon: 'fas fa-code',
      title: 'Programming Languages',
      skills: [
        { name: 'JavaScript', percentage: 90 },
        { name: 'Python', percentage: 85 },
      ],
    },
    {
      icon: 'fas fa-palette',
      title: 'Frontend Development',
      skills: [
        { name: 'React', percentage: 88 },
        { name: 'Angular', percentage: 82 },
        { name: 'HTML5/CSS3', percentage: 92 },
        { name: 'Tailwindcss', percentage: 80 },
      ],
    },
    {
      icon: 'fas fa-server',
      title: 'Backend Development',
      skills: [
        { name: 'Node.js', percentage: 85 },
        { name: 'Express.js', percentage: 82 },
        { name: 'FastAPI', percentage: 80 },
        { name: 'MongoDB', percentage: 78 },
        { name: 'PostgreSQL', percentage: 75 },
      ],
    },
    {
      icon: 'fas fa-robot',
      title: 'Artificial Intelligence',
      skills: [
        { name: 'TensorFlow', percentage: 80 },
        { name: 'PyTorch', percentage: 75 },
        { name: 'OpenAI API', percentage: 85 },
        { name: 'Natural Language Processing', percentage: 78 },
      ],
    },
    {
      icon: 'fas fa-chart-line',
      title: 'Machine Learning & Data Science',
      skills: [
        { name: 'Pandas/NumPy', percentage: 85 },
        { name: 'Scikit-learn', percentage: 78 },
        { name: 'Data Visualization', percentage: 80 },
        { name: 'Statistical Analysis', percentage: 75 },
      ],
    },
  ];

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const categoryIndex = parseInt(entry.target.getAttribute('data-category') || '0');
            setVisibleCategories((prev) => new Set([...prev, categoryIndex]));
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    const categoryElements = document.querySelectorAll('.skill-category');
    categoryElements.forEach((el) => {
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-slate-200 to-slate-300 dark:from-slate-800 dark:via-slate-900 dark:to-slate-950 pt-20 transition-colors duration-300 relative overflow-hidden">
      {/* Floating background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Large background blurs - reduced on mobile */}
          <div className="absolute top-20 left-5 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-blue-400/8 sm:bg-blue-400/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-40 right-5 sm:right-20 w-64 sm:w-96 h-64 sm:h-96 bg-purple-400/8 sm:bg-purple-400/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}} />
          <div className="absolute bottom-20 left-1/4 w-56 sm:w-80 h-56 sm:h-80 bg-pink-400/8 sm:bg-pink-400/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}} />
          <div className="absolute bottom-40 right-1/3 w-48 sm:w-64 h-48 sm:h-64 bg-indigo-400/8 sm:bg-indigo-400/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '6s'}} />
          
          {/* Animated geometric shapes - hidden on small screens for cleaner mobile experience */}
          <motion.div 
            className="hidden sm:block absolute top-32 right-1/4 w-4 h-4 bg-blue-400/30 rotate-45"
            animate={{ 
              y: [0, -20, 0],
              rotate: [45, 135, 45]
            }}
            transition={{ 
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="hidden md:block absolute bottom-1/3 left-1/3 w-6 h-6 bg-purple-400/30 rounded-full"
            animate={{ 
              x: [0, 30, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="hidden lg:block absolute top-1/2 left-20 w-3 h-12 bg-pink-400/30 rounded-full"
            animate={{ 
              rotate: [0, 180, 360]
            }}
            transition={{ 
              duration: 10,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </div>
      
      <FloatingElements />
      
      <Sparkles
        id="skills-particles"
        className="absolute inset-0"
        particleColor="#0ea5e9"
        particleDensity={2}
        minSize={2}
        maxSize={6}
        background="transparent"
      >
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 relative z-10">
          {/* Enhanced Header Section */}
          <div className="text-center mb-16 sm:mb-20">
            <div className="relative inline-block mb-6 sm:mb-8">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 blur-3xl rounded-full" />
              <h2 className="relative text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4 sm:mb-6 px-4">
                Skills & Expertise
              </h2>
            </div>
            <p className="text-lg sm:text-xl md:text-2xl text-slate-600 dark:text-slate-300 transition-colors duration-300 max-w-3xl mx-auto leading-relaxed px-4">
              Mastering technologies that drive innovation and create exceptional digital experiences
            </p>
            
            {/* Decorative Elements */}
            <div className="flex justify-center items-center mt-8 sm:mt-12 space-x-4 sm:space-x-8">
              <div className="w-12 sm:w-16 h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
              <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 animate-pulse" />
              <div className="w-12 sm:w-16 h-0.5 bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
            </div>
          </div>

          {/* Modern Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 auto-rows-fr">
            {skillCategories.map((category, categoryIndex) => {
              const gradientColors = [
                'from-blue-500/10 via-blue-600/5 to-cyan-500/10',
                'from-purple-500/10 via-purple-600/5 to-pink-500/10',
                'from-green-500/10 via-emerald-600/5 to-teal-500/10',
                'from-orange-500/10 via-red-600/5 to-pink-500/10',
                'from-indigo-500/10 via-purple-600/5 to-blue-500/10'
              ];
              
              return (
                <div
                  key={categoryIndex}
                  className={`skill-category group relative h-full`}
                  data-category={categoryIndex}
                >
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${gradientColors[categoryIndex % gradientColors.length]} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl`} />
                  
                  <SkillCard
                    icon={category.icon}
                    title={category.title}
                    skills={category.skills}
                    delay={categoryIndex * 0.15}
                    isVisible={visibleCategories.has(categoryIndex)}
                  />
                </div>
              );
            })}
          </div>
        </section>
      </Sparkles>
    </div>
  );
};

export default Skills;