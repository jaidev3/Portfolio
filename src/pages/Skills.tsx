import { useEffect, useRef, useState } from 'react';

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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-slate-200 to-slate-300 dark:from-slate-800 dark:via-slate-900 dark:to-slate-950 pt-20 transition-colors duration-300">
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-slate-100 mb-4 transition-colors duration-300">Skills & Expertise</h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 transition-colors duration-300">Proficiency levels across different technologies</p>
        </div>

        <div className="grid gap-12 md:gap-16">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className={`skill-category transition-all duration-1000 ${
                visibleCategories.has(categoryIndex)
                  ? 'opacity-100 transform translate-y-0'
                  : 'opacity-0 transform translate-y-8'
              }`}
              data-category={categoryIndex}
            >
              <div className="flex items-center justify-center mb-8">
                <div className="w-16 h-16 bg-sky-500 rounded-full flex items-center justify-center mr-4">
                  <i className={`${category.icon} text-white text-2xl`}></i>
                </div>
                <h3 className="text-2xl md:text-3xl font-semibold text-slate-800 dark:text-slate-200 transition-colors duration-300">{category.title}</h3>
              </div>

              <div className="grid gap-6 md:gap-8">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className={`transition-all duration-500 delay-${skillIndex * 100} ${
                      visibleCategories.has(categoryIndex)
                        ? 'opacity-100 transform translate-x-0'
                        : 'opacity-0 transform translate-x-8'
                    }`}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-lg font-medium text-slate-700 dark:text-slate-300 transition-colors duration-300">{skill.name}</span>
                      <span className="text-lg font-semibold text-sky-500">{skill.percentage}%</span>
                    </div>
                    <div className="w-full bg-slate-300 dark:bg-slate-600 rounded-full h-3 overflow-hidden transition-colors duration-300">
                      <div
                        className={`h-full bg-gradient-to-r from-sky-400 to-sky-600 rounded-full transition-all duration-1000 ease-out ${
                          visibleCategories.has(categoryIndex) ? '' : 'w-0'
                        }`}
                        style={{
                          width: visibleCategories.has(categoryIndex) ? `${skill.percentage}%` : '0%',
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Skills;