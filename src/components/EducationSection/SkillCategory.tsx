import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "../lightswind/card";
import { Badge } from "../lightswind/badge";
import { motion, AnimatePresence } from "framer-motion";
import { Router, Smartphone, Grid2x2 } from "lucide-react";

interface CoreSkill {
  name: string;
  description: string;
  icon?: React.ReactNode;
}

const coreSkills: CoreSkill[] = [
  {
    name: "Networking",
    description: "Designing and optimizing LAN/WAN networks for reliability and security",
    icon: <Router size={18} />,
  },
  {
    name: "IoT Development",
    description: "Building and integrating IoT devices to enhance workflows",
    icon: <Smartphone size={18} />,
  },
  {
    name: "Microsoft Office Suite",
    description: "Proficient with Microsoft 365 and Windows solutions",
    icon: <Grid2x2 size={18} />,
  },
];

const softSkills = [
  "Problem Solving",
  "Effective teamwork",
  "Adaptable learner",
  "Proficient in computer applications",
  "English"
];

export default function ProfessionalProfile() {
  return (
    <motion.section
      id="skills"
      className="space-y-12"
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
        transition: {
          staggerChildren: 0.2,
          delayChildren: 0.3,
        },
      }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Skills Section */}
      <motion.div
        initial={{ opacity: 0, y: 30, filter: "blur(4px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h3 className="text-3xl font-bold mb-6">Core Skills</h3>

        <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
          {/* Technical Skills Card */}
          <Card>
            <CardHeader>
              <CardTitle>Technical Skills</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {coreSkills.map((skill, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  viewport={{ once: true, amount: 0.8 }}
                  className="flex items-center gap-3"
                >
                  <div className="text-blue-500">{skill.icon}</div>
                  <div className="flex-1">
                    <h4 className="font-semibold">{skill.name}</h4>
                    <p className="text-xs text-muted-foreground">{skill.description}</p>
                  </div>
                </motion.div>
              ))}
            </CardContent>
          </Card>

          {/* Soft Skills Card */}
          <Card>
            <CardHeader>
              <CardTitle>Soft Skills</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              <AnimatePresence>
                {softSkills.map((skill, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 10 }}
                    viewport={{ once: true }}
                  >
                    <Badge className="bg-blue-500">{skill}</Badge>
                  </motion.div>
                ))}
              </AnimatePresence>
            </CardContent>
          </Card>
        </div>
      </motion.div>
    </motion.section>
  );
}
