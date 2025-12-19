import { motion } from "motion/react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ExternalLink, Github } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ScrollReveal, StaggerContainer, StaggerItem } from "./scroll-animations";

export function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution built with Next.js and Node.js. Features include user authentication, payment processing, and admin dashboard.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      technologies: ["Next.js", "Node.js", "TypeScript", "PostgreSQL", "Docker"],
      github: "#",
      demo: "#"
    },
    {
      title: "DevOps Automation Suite",
      description: "Comprehensive CI/CD pipeline automation using Jenkins, Docker, and Kubernetes. Reduced deployment time by 70% and improved system reliability.",
      image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=600&h=400&fit=crop",
      technologies: ["Jenkins", "Docker", "Kubernetes", "Terraform", "AWS"],
      github: "#",
      demo: "#"
    },
    {
      title: "Real-time Analytics Dashboard",
      description: "Interactive dashboard for real-time data visualization using React and Firebase. Handles thousands of concurrent users with live updates.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      technologies: ["React", "Firebase", "Chart.js", "WebSocket", "TypeScript"],
      github: "#",
      demo: "#"
    }
  ];

  return (
    <section className="py-20 px-4 bg-secondary/5">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-gradient">Featured Projects</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A selection of projects that demonstrate my expertise in full-stack
              development and modern DevOps practices.
            </p>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <StaggerItem key={index}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <Card className="overflow-hidden group h-full flex flex-col hover:shadow-2xl hover:border-primary/30 transition-all duration-300">
                  <div className="aspect-video overflow-hidden relative">
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {/* Overlay on hover */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4"
                      initial={{ opacity: 0 }}
                    >
                      <div className="flex gap-2">
                        <Button size="sm" variant="secondary" className="gap-2">
                          <Github className="h-4 w-4" />
                          Code
                        </Button>
                        <Button size="sm" className="gap-2">
                          <ExternalLink className="h-4 w-4" />
                          Demo
                        </Button>
                      </div>
                    </motion.div>
                  </div>
                  <CardHeader>
                    <CardTitle className="group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4 flex-1 flex flex-col">
                    <p className="text-muted-foreground flex-1">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <motion.div
                          key={techIndex}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: techIndex * 0.05 }}
                        >
                          <Badge
                            variant="secondary"
                            className="hover:bg-primary hover:text-primary-foreground transition-colors"
                          >
                            {tech}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                    <div className="flex gap-2 pt-2">
                      <Button variant="outline" size="sm" className="gap-2 flex-1 hover:border-primary/50">
                        <Github className="h-4 w-4" />
                        Code
                      </Button>
                      <Button size="sm" className="gap-2 flex-1">
                        <ExternalLink className="h-4 w-4" />
                        Demo
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* View More Button */}
        <ScrollReveal delay={0.3}>
          <div className="text-center mt-12">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                size="lg"
                onClick={() => window.open('https://github.com/jaidev3')}
                className="px-8 hover:border-primary/50 hover:bg-primary/5"
              >
                <Github className="h-5 w-5 mr-2" />
                View More on GitHub
              </Button>
            </motion.div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}