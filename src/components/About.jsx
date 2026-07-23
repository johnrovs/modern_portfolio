import { motion } from "framer-motion";
import { Code2, FolderGit2, Layers, Target } from "lucide-react";
import SectionTitle from "./SectionTitle";
import AnimatedCounter from "./AnimatedCounter";

const stats = [
  { icon: Code2, label: "Years Experience", value: 3, suffix: "+" },
  { icon: FolderGit2, label: "Projects Completed", value: 12, suffix: "+" },
  { icon: Layers, label: "Technologies", value: 18, suffix: "+" },
  {
    icon: Target,
    label: "Current Focus",
    value: 100,
    suffix: "%",
    label2: "Backend Architecture",
  },
];

export default function About() {
  return (
    <section id="about" className="relative section-pad">
      <div className="mx-auto max-w-7xl">
        <SectionTitle tag="01" file="about.js" title="About Me" />

        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="gradient-border glass-card overflow-hidden aspect-[4/5] max-w-md mx-auto lg:mx-0">
              <img
                src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop"
                alt="John Doe working at a desk"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-6 -left-4 sm:-left-8 glass-card px-5 py-4 hidden sm:block">
              <p className="font-mono text-xs text-textSecondary/60">
                // currently building
              </p>
              <p className="text-textPrimary font-medium">
                Spring Boot + React systems
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <p className="text-textSecondary text-base sm:text-lg leading-relaxed">
              I'm a full stack developer who enjoys turning complex problems
              into clean, reliable software. My background spans backend systems
              built with{" "}
              <span className="text-textPrimary font-medium">
                Java and Spring Boot
              </span>
              , and frontend interfaces built with{" "}
              <span className="text-textPrimary font-medium">
                React and Tailwind CSS
              </span>
              .
            </p>
            <p className="mt-4 text-textSecondary text-base sm:text-lg leading-relaxed">
              I care most about the parts of engineering that don't show up in a
              screenshot: solid data models, dependable APIs, and code that the
              next developer can actually read. I like picking things apart to
              understand how they work, and I'm always making room to learn the
              next tool or pattern that helps me build better systems.
            </p>
            <p className="mt-4 text-textSecondary text-base sm:text-lg leading-relaxed">
              Outside of shipping features, I spend time exploring new
              frameworks, contributing to personal projects, and refining the
              small details that make software feel considered rather than
              assembled.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-4">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="glass-card p-5"
                >
                  <s.icon size={22} className="text-accent mb-3" />
                  <p className="text-2xl sm:text-3xl font-heading font-bold text-textPrimary">
                    <AnimatedCounter value={s.value} suffix={s.suffix} />
                  </p>
                  <p className="text-sm text-textSecondary mt-1">
                    {s.label2 || s.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
