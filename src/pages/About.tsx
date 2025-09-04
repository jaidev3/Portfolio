import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import Sparkles from "../components/Sparkles";
import FloatingCard from "../components/FloatingCard";
import FloatingElements from "../components/FloatingElements";
import { cn } from "../lib/utils";

interface TimelineItem {
  year: string;
  title: string;
  description: string;
  icon: string;
  color: string;
}

interface PersonalInfo {
  label: string;
  value: string;
  icon: string;
}

const About = () => {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const observerRef = useRef<IntersectionObserver | null>(null);

  const timelineData: TimelineItem[] = [
    {
      year: "2018",
      title: "Engineering Journey Begins",
      description:
        "Started my engineering degree, where I was first exposed to programming and technology. The vast resources and knowledge available fascinated me.",
      icon: "fas fa-graduation-cap",
      color: "from-black to-gray-800",
    },
    {
      year: "2020",
      title: "Lockdown Learning",
      description:
        "During the pandemic, I dove deep into learning about new technologies. This period gave me a massive boost to explore the coding industry.",
      icon: "fas fa-book-open",
      color: "from-black to-gray-800",
    },
    {
      year: "2021",
      title: "MERN Stack Mastery",
      description:
        "Joined Masai School to learn the MERN stack. Discovered that coding is an ever-growing field with endless possibilities for innovation.",
      icon: "fas fa-code",
      color: "from-black to-gray-800",
    },
    {
      year: "2022",
      title: "Full Stack Developer",
      description:
        "Became proficient in HTML, CSS, JavaScript, MongoDB, React, and Node.js. Started building real-world applications and projects.",
      icon: "fas fa-laptop-code",
      color: "from-black to-gray-800",
    },
    {
      year: "2023",
      title: "Professional Growth",
      description:
        "Continuing to grow as a developer, exploring new technologies, and building innovative solutions. Always learning, always creating.",
      icon: "fas fa-rocket",
      color: "from-black to-gray-800",
    },
    {
      year: "2024",
      title: "AI & Machine Learning",
      description:
        "Expanded into AI and Machine Learning, mastering Python, TensorFlow, and various AI frameworks. Building intelligent applications that bridge the gap between traditional web development and artificial intelligence.",
      icon: "fas fa-brain",
      color: "from-black to-gray-800",
    },
  ];

  const personalInfo: PersonalInfo[] = [
    { label: "Location", value: "India", icon: "fas fa-map-marker-alt" },
    { label: "Experience", value: "3+ Years", icon: "fas fa-briefcase" },
    {
      label: "Projects",
      value: "15+ Completed",
      icon: "fas fa-project-diagram",
    },
    { label: "Passion", value: "Creating & Learning", icon: "fas fa-heart" },
  ];

  const hobbies = [
    { name: "Traveling", icon: "fas fa-plane", color: "text-gray-600" },
    {
      name: "Table Tennis",
      icon: "fas fa-table-tennis",
      color: "text-gray-600",
    },
    { name: "Badminton", icon: "fas fa-shuttlecock", color: "text-gray-600" },
    {
      name: "Reading Tech Blogs",
      icon: "fas fa-blog",
      color: "text-gray-600",
    },
  ];

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const itemIndex = parseInt(
              entry.target.getAttribute("data-item") || "0"
            );
            setVisibleItems((prev) => new Set([...prev, itemIndex]));
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    const itemElements = document.querySelectorAll(
      ".timeline-item, .info-card"
    );
    itemElements.forEach((el) => {
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
    <div className="min-h-screen bg-white transition-colors duration-300 relative overflow-hidden pt-20">
      <Sparkles
        className="absolute inset-0"
        particleColor="#000000"
        particleDensity={1}
        minSize={4}
        maxSize={8}
        background="transparent"
      >
        <FloatingElements />

        {/* Hero Section */}
        <section className="max-w-6xl mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <FloatingCard className="inline-block p-8 mb-8" delay={0.3}>
              <motion.div whileHover={{ scale: 1.05 }} className="relative">
                <div className="absolute inset-0 bg-black/10 rounded-full blur-xl" />
                <picture>
                  <source
                    type="image/webp"
                    srcSet="/assets/img/webp/jaidevimg.jpg"
                  />
                  <img
                    src="/assets/img/jpg/jaidevimg.jpg"
                    alt="Professional Me"
                    className="w-48 h-48 md:w-64 md:h-64 rounded-full mx-auto object-cover shadow-2xl ring-4 ring-black/20 relative z-10"
                  />
                </picture>
              </motion.div>
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-3xl md:text-4xl font-semibold text-slate-700 mt-6 transition-colors duration-300"
              >
                Jaidev Yadav
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="text-lg text-slate-600 mt-2"
              >
                Full Stack Developer & AI Enthusiast
              </motion.p>
            </FloatingCard>
          </div>

          {/* Personal Info Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {personalInfo.map((info, index) => (
              <motion.div
                key={info.label}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.4 }}
                className="info-card"
                data-item={index}
              >
                <FloatingCard className="text-center p-6 h-full" hover={true}>
                  <div
                    className={cn(
                      "w-12 h-12 mx-auto mb-4 rounded-xl flex items-center justify-center",
                      "bg-gradient-to-br from-blue-500/20 to-purple-500/20 text-blue-600"
                    )}
                  >
                    <i className={cn(info.icon, "text-xl")} />
                  </div>
                  <h3 className="font-semibold text-slate-800 mb-2">
                    {info.label}
                  </h3>
                  <p className="text-slate-600 text-sm">
                    {info.value}
                  </p>
                </FloatingCard>
              </motion.div>
            ))}
          </div>

          {/* Journey Timeline */}
          <div className="mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold text-center text-slate-800 mb-12"
            >
              My Journey
            </motion.h2>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 rounded-full opacity-30" />

              {timelineData.map((item, index) => {
                const isVisible = visibleItems.has(index);
                const isEven = index % 2 === 0;

                return (
                  <motion.div
                    key={item.year}
                    className="timeline-item relative mb-16 last:mb-0"
                    data-item={index}
                    initial={{ opacity: 0, x: isEven ? -100 : 100 }}
                    animate={
                      isVisible
                        ? {
                            opacity: 1,
                            x: 0,
                          }
                        : {
                            opacity: 0,
                            x: isEven ? -100 : 100,
                          }
                    }
                    transition={{
                      duration: 0.8,
                      delay: index * 0.2,
                    }}
                  >
                    <div
                      className={cn(
                        "flex items-center",
                        isEven ? "flex-row" : "flex-row-reverse"
                      )}
                    >
                      {/* Content */}
                      <div
                        className={cn(
                          "w-5/12",
                          isEven ? "pr-8 text-right" : "pl-8 text-left"
                        )}
                      >
                        <FloatingCard className="p-6" hover={true}>
                          <div
                            className={cn(
                              "inline-flex items-center px-3 py-1 rounded-full text-sm font-medium mb-4",
                              `bg-gradient-to-r ${item.color} text-white`
                            )}
                          >
                            <i className={cn(item.icon, "mr-2")} />
                            {item.year}
                          </div>
                          <h3 className="text-xl font-bold text-slate-800 mb-3">
                            {item.title}
                          </h3>
                          <p className="text-slate-600 leading-relaxed">
                            {item.description}
                          </p>
                        </FloatingCard>
                      </div>

                      {/* Timeline dot */}
                      <div className="w-2/12 flex justify-center">
                        <motion.div
                          className={cn(
                            "w-6 h-6 rounded-full border-4 border-white shadow-lg z-10",
                            `bg-gradient-to-r ${item.color}`
                          )}
                          whileHover={{ scale: 1.5 }}
                          animate={
                            isVisible
                              ? {
                                  scale: [0, 1.2, 1],
                                  rotate: [0, 180, 360],
                                }
                              : { scale: 0 }
                          }
                          transition={{
                            duration: 0.6,
                            delay: index * 0.2 + 0.3,
                          }}
                        />
                      </div>

                      {/* Spacer */}
                      <div className="w-5/12" />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* About Me Text */}
          <FloatingCard className="p-8 md:p-12 mb-16" delay={0.6}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-6">
                About Me
              </h3>
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
                Ever since I was a kid, creating new things always got me
                excited. However, at that time I didn't have enough resources to
                pursue the same. That passion drove me to pursue engineering,
                where I was exposed to a plethora of resources and knowledge. I
                was fascinated by the evolving technology, which was developing
                new and innovative ideas every now and then. In the beginning,
                it was difficult to get used to coding, however, during the lock
                down I started reading about new technology, which gave me a
                massive boost to learn more about the industry and pursue a
                career. With the same fascination that drove me as kid, I am
                learning and growing in the MERN stack development. Recently, I've
                expanded my expertise into AI and Machine Learning, exploring
                technologies like Python, TensorFlow, and various AI frameworks
                to build intelligent applications that solve real-world problems.
              </p>
            </motion.div>
          </FloatingCard>

          {/* Hobbies & Interests */}
          <div className="text-center">
            <motion.h3
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-3xl md:text-4xl font-bold text-slate-800 mb-8"
            >
              Beyond Coding
            </motion.h3>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {hobbies.map((hobby, index) => (
                <motion.div
                  key={hobby.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.6 }}
                >
                  <FloatingCard className="p-6 text-center" hover={true}>
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.6 }}
                      className={cn(
                        "w-12 h-12 mx-auto mb-4 rounded-xl flex items-center justify-center",
                        "bg-gradient-to-br from-slate-100 to-slate-200"
                      )}
                    >
                      <i className={cn(hobby.icon, "text-2xl", hobby.color)} />
                    </motion.div>
                    <h4 className="font-semibold text-slate-800">
                      {hobby.name}
                    </h4>
                  </FloatingCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </Sparkles>
    </div>
  );
};

export default About;
