import { motion } from "motion/react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Mail, Phone, MapPin, Send, Calendar } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "./scroll-animations";

export function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "jaidevyadav720@gmail.com",
      href: "mailto:jaidevyadav720@gmail.com",
      color: "from-blue-500/20 to-blue-600/10"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 7206148907",
      href: "tel:+917206148907",
      color: "from-green-500/20 to-green-600/10"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Available for Remote Work",
      href: null,
      color: "from-purple-500/20 to-purple-600/10"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-gradient">Let's Work Together</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Ready to bring your next project to life? Let's discuss how my expertise
              in full-stack development and DevOps can help achieve your goals.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info Cards */}
          <StaggerContainer className="space-y-4">
            {contactInfo.map((info, index) => (
              <StaggerItem key={index}>
                <motion.div
                  whileHover={{ x: 8, scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <Card
                    className={`overflow-hidden group hover:shadow-lg hover:border-primary/30 transition-all duration-300 ${info.href ? 'cursor-pointer' : ''}`}
                    onClick={() => info.href && (window.location.href = info.href)}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${info.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                    <CardContent className="p-6 relative">
                      <div className="flex items-center gap-4">
                        <motion.div
                          className="p-3 rounded-full bg-primary/10"
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.5 }}
                        >
                          <info.icon className="h-6 w-6 text-primary" />
                        </motion.div>
                        <div>
                          <h4 className="font-semibold text-lg">{info.title}</h4>
                          <p className="text-muted-foreground group-hover:text-foreground transition-colors">
                            {info.value}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* CTA Card */}
          <ScrollReveal direction="right" delay={0.2}>
            <Card className="h-full overflow-hidden relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-50" />
              <CardContent className="p-8 relative h-full flex flex-col justify-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-center space-y-6"
                >
                  <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                    <Send className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Ready to Start?</h3>
                    <p className="text-muted-foreground">
                      Whether you have a project in mind or just want to chat about technology,
                      I'm always open to new opportunities.
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button
                        size="lg"
                        className="gap-2 w-full sm:w-auto"
                        onClick={() => window.location.href = 'mailto:jaidevyadav720@gmail.com'}
                      >
                        <Mail className="h-5 w-5" />
                        Send Email
                      </Button>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button
                        variant="outline"
                        size="lg"
                        className="gap-2 w-full sm:w-auto hover:border-primary/50"
                        onClick={() => window.open('https://www.linkedin.com/in/jaidev-y-558691183/')}
                      >
                        <Calendar className="h-5 w-5" />
                        Schedule a Call
                      </Button>
                    </motion.div>
                  </div>
                </motion.div>
              </CardContent>
            </Card>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}