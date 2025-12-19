import { motion } from "motion/react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Code, Settings, Globe, Database, TestTube, Cloud, Brain } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "./scroll-animations";

export function Skills() {
  const skillCategories = [
    {
      icon: Code,
      title: "Overview",
      skills: ["Full-Stack Development", "API Design", "Database Design", "System Architecture"],
      color: "from-blue-500/20 to-blue-600/10"
    },
    {
      icon: Brain,
      title: "AI/ML",
      skills: ["Langchain", "LlamaIndex", "LangGraph", "Deep Learning", "Transformers", "Machine Learning", "Neural Networks", "AI Agents", "RAG", "Computer Vision", "NLP"],
      color: "from-purple-500/20 to-purple-600/10"
    },
    {
      icon: Code,
      title: "Programming Languages",
      skills: ["Python", "JavaScript", "TypeScript", "SQL"],
      color: "from-green-500/20 to-green-600/10"
    },
    {
      icon: Settings,
      title: "DevOps & Tools",
      skills: ["Docker", "Git", "VIM", "NeoVim", "Kubernetes", "Agile", "CI/CD", "Terraform"],
      color: "from-orange-500/20 to-orange-600/10"
    },
    {
      icon: Globe,
      title: "JavaScript Libraries & Frameworks",
      skills: ["Node.js", "React.js", "Bun.js", "Deno", "Vanilla JS", "Next.js", "Angular"],
      color: "from-cyan-500/20 to-cyan-600/10"
    },
    {
      icon: Database,
      title: "Web Frameworks",
      skills: ["FastAPI", "Express.js"],
      color: "from-pink-500/20 to-pink-600/10"
    },
    {
      icon: Cloud,
      title: "Backend as a Service",
      skills: ["Firebase", "Appwrite", "Supabase"],
      color: "from-indigo-500/20 to-indigo-600/10"
    },
    {
      icon: TestTube,
      title: "Testing",
      skills: ["Jest", "Cypress", "Jasmine", "Playwright"],
      color: "from-red-500/20 to-red-600/10"
    }
  ];

  return (
    <section className="py-20 px-4 bg-secondary/5">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-gradient">Technical Skills</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive expertise across modern development stack with focus on
              scalable web applications and DevOps practices.
            </p>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <StaggerItem key={index}>
                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <Card className={`h-full overflow-hidden group hover:shadow-lg hover:border-primary/30 transition-all duration-300`}>
                    <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                    <CardHeader className="relative">
                      <CardTitle className="flex items-center gap-3">
                        <motion.div
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.5 }}
                        >
                          <IconComponent className="h-5 w-5 text-primary" />
                        </motion.div>
                        {category.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="relative">
                      <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill, skillIndex) => (
                          <motion.div
                            key={skillIndex}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: skillIndex * 0.05 }}
                            viewport={{ once: true }}
                          >
                            <Badge
                              variant="secondary"
                              className="hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                            >
                              {skill}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}