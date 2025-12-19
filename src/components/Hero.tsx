import { motion } from "motion/react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import {
  Github,
  Linkedin,
  Mail,
  Download,
  ArrowDown,
  Sparkles,
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.4, 0.25, 1] as const,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.4, 0.25, 1] as const,
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5">
        {/* Floating geometric shapes */}
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-40 right-20 w-48 h-48 bg-accent/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <motion.div
          className="absolute bottom-40 left-20 w-40 h-40 bg-primary/15 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.35, 0.2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
        <motion.div
          className="absolute bottom-20 right-40 w-56 h-56 bg-accent/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />

        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="grid grid-cols-12 gap-4 h-full">
            {Array.from({ length: 12 }, (_, i) => (
              <div key={i} className="border-r border-foreground h-full"></div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Side - Content */}
          <motion.div
            className="space-y-8 text-center lg:text-left order-2 lg:order-1"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Status Badge */}
            <motion.div
              className="flex justify-center lg:justify-start"
              variants={itemVariants}
            >
              <Badge
                variant="secondary"
                className="px-6 py-3 bg-primary/10 text-primary border border-primary/20 backdrop-blur-sm"
              >
                <Sparkles className="h-4 w-4 mr-2" />
                Available for Work
              </Badge>
            </motion.div>

            {/* Main Heading */}
            <motion.div className="space-y-6" variants={itemVariants}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl tracking-tight">
                <span className="block text-foreground">Hello, I'm</span>
                <span className="block text-gradient font-bold">
                  Jaidev Yadav
                </span>
              </h1>

              <div className="space-y-4">
                <p className="text-xl sm:text-2xl text-muted-foreground max-w-lg mx-auto lg:mx-0">
                  Senior Software Engineer crafting digital experiences with
                  <span className="text-primary font-semibold">
                    {" "}
                    3+ years
                  </span>{" "}
                  of expertise
                </p>

                <p className="text-lg text-muted-foreground/80 max-w-md mx-auto lg:mx-0">
                  Specializing in full-stack development, AI/ML, and scalable
                  solutions that drive business growth.
                </p>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              variants={itemVariants}
            >
              <Button
                size="lg"
                onClick={() =>
                  window.open(
                    "https://drive.google.com/drive/folders/1kKOmT7iEdP0pZEVDjEVTLK_nvwOs0oW6"
                  )
                }
                className="group relative overflow-hidden px-8 py-6 bg-gradient-primary hover:opacity-90 transition-all duration-300 glow-sm"
              >
                <span className="relative z-10 flex items-center gap-2 font-semibold">
                  <Download className="h-5 w-5 group-hover:animate-bounce" />
                  Download Resume
                </span>
              </Button>

              <Button
                variant="outline"
                size="lg"
                onClick={() =>
                  document
                    .querySelector("#projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="px-8 py-6 bg-background/50 backdrop-blur-sm border-primary/30 hover:bg-primary/10 hover:border-primary/50 transition-all duration-300"
              >
                View My Work
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex gap-4 justify-center lg:justify-start"
              variants={itemVariants}
            >
              {[
                {
                  icon: Github,
                  href: "https://github.com/jaidev3",
                  label: "GitHub",
                },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/jaidev-y-558691183/",
                  label: "LinkedIn",
                },
                {
                  icon: Mail,
                  href: "mailto:jaidevyadav720@gmail.com",
                  label: "Email",
                },
              ].map((social) => (
                <motion.div
                  key={social.label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() =>
                      social.href.startsWith("mailto")
                        ? (window.location.href = social.href)
                        : window.open(social.href)
                    }
                    className="h-12 w-12 rounded-full bg-background/50 backdrop-blur-sm border border-primary/20 hover:bg-primary/10 hover:border-primary/40 transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </Button>
                </motion.div>
              ))}
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              className="grid grid-cols-3 gap-8 pt-8"
              variants={itemVariants}
            >
              {[
                { value: "10+", label: "Projects" },
                { value: "3+", label: "Years Exp" },
                { value: "100%", label: "Client Satisfaction" },
              ].map((stat) => (
                <motion.div
                  key={stat.label}
                  className="text-center lg:text-left"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-2xl md:text-3xl font-bold text-gradient mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Side - Image */}
          <motion.div
            className="flex justify-center order-1 lg:order-2"
            variants={imageVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="relative">
              {/* Decorative Elements */}
              <motion.div
                className="absolute -top-4 -left-4 w-72 h-72 bg-gradient-to-br from-primary/30 to-accent/20 rounded-full blur-3xl opacity-60"
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              <motion.div
                className="absolute -bottom-4 -right-4 w-64 h-64 bg-gradient-to-tl from-accent/40 to-primary/20 rounded-full blur-3xl opacity-40"
                animate={{
                  rotate: [360, 0],
                }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              {/* Main Image Container */}
              <motion.div
                className="relative z-10 group"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20 backdrop-blur-sm border-4 border-primary/20 shadow-2xl glow">
                  <ImageWithFallback
                    src="https://avatars.githubusercontent.com/u/91534937?v=4"
                    alt="Jaidev Yadav - Senior Software Engineer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent"></div>
                </div>

                {/* Floating Badge */}
                <motion.div
                  className="absolute -bottom-6 -right-6 bg-background/90 backdrop-blur-sm border border-primary/30 rounded-2xl px-6 py-4 shadow-xl"
                  animate={{
                    y: [0, -5, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium">
                      Available for hire
                    </span>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          <motion.div
            className="flex flex-col items-center gap-2 cursor-pointer"
            onClick={() =>
              document
                .querySelector("#skills")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <span className="text-sm text-muted-foreground">
              Scroll to explore
            </span>
            <ArrowDown className="h-5 w-5 text-primary" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
