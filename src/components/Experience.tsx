import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Briefcase, Calendar, MapPin } from "lucide-react";

export function Experience() {
  const experiences = [
    {
      title: "Senior Software Engineer",
      company: "Tech Solutions Inc.",
      location: "Remote",
      period: "2022 - Present",
      description: "Lead full-stack development projects using React, Node.js, and TypeScript. Implemented CI/CD pipelines with Jenkins and managed containerized applications with Docker and Kubernetes.",
      technologies: ["React", "Node.js", "TypeScript", "Docker", "Kubernetes", "Jenkins"]
    },
    {
      title: "Full Stack Developer",
      company: "Digital Innovations Ltd.",
      location: "New York, NY",
      period: "2020 - 2022",
      description: "Developed and maintained web applications using modern JavaScript frameworks. Collaborated with DevOps team to implement automated deployment processes and infrastructure as code with Terraform.",
      technologies: ["JavaScript", "Express.js", "Firebase", "Terraform", "Git"]
    },
    {
      title: "Software Developer",
      company: "StartupCorp",
      location: "San Francisco, CA",
      period: "2019 - 2020",
      description: "Built responsive web applications and RESTful APIs. Worked with cross-functional teams using Agile methodologies to deliver high-quality software solutions.",
      technologies: ["PHP", "JavaScript", "SQL", "Jest", "Agile"]
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl">Professional Experience</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Over 5 years of experience building scalable web applications and 
            leading development teams in fast-paced environments.
          </p>
        </div>
        
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <Briefcase className="h-5 w-5 text-primary" />
                      {exp.title}
                    </CardTitle>
                    <p className="text-primary mt-1">{exp.company}</p>
                  </div>
                  <div className="flex flex-col md:items-end gap-1">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      {exp.period}
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      {exp.location}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}