import { motion, type Variants } from "motion/react";
import type { ReactNode } from "react";

interface ScrollRevealProps {
    children: ReactNode;
    className?: string;
    delay?: number;
    direction?: "up" | "down" | "left" | "right";
    duration?: number;
}

export function ScrollReveal({
    children,
    className = "",
    delay = 0,
    direction = "up",
    duration = 0.6,
}: ScrollRevealProps) {
    const getInitialPosition = () => {
        switch (direction) {
            case "up":
                return { opacity: 0, y: 40 };
            case "down":
                return { opacity: 0, y: -40 };
            case "left":
                return { opacity: 0, x: 40 };
            case "right":
                return { opacity: 0, x: -40 };
            default:
                return { opacity: 0, y: 40 };
        }
    };

    const variants: Variants = {
        hidden: getInitialPosition(),
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
                duration,
                delay,
                ease: [0.25, 0.4, 0.25, 1],
            },
        },
    };

    return (
        <motion.div
            className={className}
            variants={variants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
        >
            {children}
        </motion.div>
    );
}

interface StaggerContainerProps {
    children: ReactNode;
    className?: string;
    staggerDelay?: number;
}

export function StaggerContainer({
    children,
    className = "",
    staggerDelay = 0.1,
}: StaggerContainerProps) {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: staggerDelay,
                delayChildren: 0.1,
            },
        },
    };

    return (
        <motion.div
            className={className}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
        >
            {children}
        </motion.div>
    );
}

interface StaggerItemProps {
    children: ReactNode;
    className?: string;
}

export function StaggerItem({ children, className = "" }: StaggerItemProps) {
    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 30, scale: 0.95 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.5,
                ease: [0.25, 0.4, 0.25, 1],
            },
        },
    };

    return (
        <motion.div className={className} variants={itemVariants}>
            {children}
        </motion.div>
    );
}

interface FadeInProps {
    children: ReactNode;
    className?: string;
    delay?: number;
    duration?: number;
}

export function FadeIn({
    children,
    className = "",
    delay = 0,
    duration = 0.5,
}: FadeInProps) {
    return (
        <motion.div
            className={className}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration, delay, ease: "easeOut" }}
        >
            {children}
        </motion.div>
    );
}

interface ScaleInProps {
    children: ReactNode;
    className?: string;
    delay?: number;
}

export function ScaleIn({
    children,
    className = "",
    delay = 0,
}: ScaleInProps) {
    return (
        <motion.div
            className={className}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
                duration: 0.6,
                delay,
                ease: [0.25, 0.4, 0.25, 1],
            }}
        >
            {children}
        </motion.div>
    );
}
