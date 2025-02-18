import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { SiReact, SiNodedotjs, SiTypescript, SiAwslambda, SiDocker, SiPostgresql } from "react-icons/si";

const skills = [
  { name: "React", icon: SiReact, level: 95 },
  { name: "Node.js", icon: SiNodedotjs, level: 90 },
  { name: "TypeScript", icon: SiTypescript, level: 85 },
  { name: "PostgreSQL", icon: SiPostgresql, level: 80 },
  { name: "AWS", icon: SiAwslambda, level: 75 },
  { name: "Docker", icon: SiDocker, level: 85 }
];

export function Skills() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="w-full max-w-2xl"
      >
        <Card className="p-6 bg-background/80 backdrop-blur">
          <h2 className="text-2xl font-bold mb-6">Skills & Expertise</h2>

          <div className="grid gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-4 mb-2">
                  <skill.icon className="w-6 h-6" />
                  <span className="font-medium">{skill.name}</span>
                </div>
                <Progress value={skill.level} className="h-2" />
              </motion.div>
            ))}
          </div>
        </Card>
      </motion.div>
    </div>
  );
}