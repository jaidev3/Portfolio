import { useEffect, useRef, useState } from 'react';
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
        { name: 'Java', percentage: 75 },
        { name: 'C++', percentage: 70 },
      ],
    },
    {
      icon: 'fas fa-palette',
      title: 'Frontend Development',
      skills: [
        { name: 'React', percentage: 88 },
        { name: 'HTML5/CSS3', percentage: 92 },
        { name: 'Bootstrap', percentage: 80 },
      ],
    },
    {
      icon: 'fas fa-server',
      title: 'Backend Development',
      skills: [
        { name: 'Node.js', percentage: 85 },
        { name: 'Express.js', percentage: 82 },
        { name: 'MongoDB', percentage: 78 },
        { name: 'MySQL', percentage: 75 },
      ],
    },
    {
      icon: 'fas fa-brain',
      title: 'AI/ML & Data Science',
      skills: [
        { name: 'TensorFlow', percentage: 80 },
        { name: 'PyTorch', percentage: 75 },
        { name: 'Pandas/NumPy', percentage: 85 },
        { name: 'Scikit-learn', percentage: 78 },
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
        <section className="max-w-6xl mx-auto px-4 py-16 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-slate-100 mb-4 transition-colors duration-300">
              Skills & Expertise
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 transition-colors duration-300">
              Proficiency levels across different technologies
            </p>
          </div>

          <div className="grid gap-12 md:gap-16 lg:grid-cols-2">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                className="skill-category"
                data-category={categoryIndex}
              >
                <SkillCard
                  icon={category.icon}
                  title={category.title}
                  skills={category.skills}
                  delay={categoryIndex * 0.2}
                  isVisible={visibleCategories.has(categoryIndex)}
                />
              </div>
            ))}
          </div>
        </section>
      </Sparkles>
    </div>
  );
};

export default Skills;