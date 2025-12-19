import { motion } from "motion/react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "./scroll-animations";

export function Experience() {
  const experiences = [
    {
      title: "Senior Software Engineer",
      company: "Kfin Technologies",
      location: "Hyderabad, India",
      period: "2024 - 2025",
      description: "Lead full-stack development projects using React, Node.js, and TypeScript. Implemented CI/CD pipelines with Jenkins and managed containerized applications with Docker and Kubernetes.",
      technologies: ["React", "React Native", "Node.js", "TypeScript", "Docker", "Kubernetes"]
    },
    {
      title: "Full Stack Engineer",
      company: "Tunel Ground",
      location: "Remote",
      period: "2024 - 2024",
      description: "Developed and maintained web applications using modern JavaScript frameworks. Collaborated with DevOps team to implement automated deployment processes and infrastructure as code with Terraform.",
      technologies: ["React Native", "Express.js", "PostgreSQL", "Git"]
    },
    {
      title: "Software Developer",
      company: "Elucidata",
      location: "Remote",
      period: "2022 - 2024",
      description: "Built responsive web applications and RESTful APIs. Worked with cross-functional teams using Agile methodologies to deliver high-quality software solutions.",
      technologies: ["JavaScript", "React", "Angular", "Python", "AWS", "Jest", "Agile"]
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-gradient">Professional Experience</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Over 3 years of experience building scalable web applications and
              leading development teams in fast-paced environments.
            </p>
          </div>
        </ScrollReveal>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent hidden md:block" />

          <StaggerContainer className="space-y-8">
            {experiences.map((exp, index) => (
              <StaggerItem key={index}>
                <motion.div
                  className={`relative ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:ml-1/2'}`}
                  whileHover={{ scale: 1.01 }}
                  transition={{ duration: 0.2 }}
                >
                  {/* Timeline Dot */}
                  <motion.div
                    className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg hidden md:block"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                  />

                  <Card className="hover:shadow-xl hover:border-primary/30 transition-all duration-300 group">
                    <CardHeader>
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div className={`${index % 2 === 0 ? 'md:text-left' : ''}`}>
                          <CardTitle className="flex items-center gap-2">
                            <motion.div
                              whileHover={{ rotate: 12 }}
                              transition={{ duration: 0.2 }}
                            >
                              <Briefcase className="h-5 w-5 text-primary" />
                            </motion.div>
                            {exp.title}
                          </CardTitle>
                          <p className="text-primary font-semibold mt-1">{exp.company}</p>
                        </div>
                        <div className={`flex flex-col gap-1 ${index % 2 === 0 ? 'md:items-start' : 'md:items-end'}`}>
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Calendar className="h-4 w-4" />
                            <span className="text-sm">{exp.period}</span>
                          </div>
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <MapPin className="h-4 w-4" />
                            <span className="text-sm">{exp.location}</span>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className={`${index % 2 === 0 ? 'md:text-left' : ''}`}>
                      <p className="text-muted-foreground mb-4">{exp.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <motion.div
                            key={techIndex}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: techIndex * 0.05 }}
                            viewport={{ once: true }}
                          >
                            <Badge
                              variant="outline"
                              className="hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
                            >
                              {tech}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}