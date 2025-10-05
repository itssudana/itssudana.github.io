import { Card, CardHeader, CardTitle, CardContent } from "../lightswind/card";
import ProfessionalProfile from "./SkillCategory";
import { motion } from "framer-motion";

export const EducationSection = () => {
  return (
    <motion.section
      id="education"
      className="space-y-10 py-10 px-6"
      initial={{ opacity: 0, y: 50, filter: "blur(5px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Education */}
      <div>
        <motion.h3
          className="text-3xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Education
        </motion.h3>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-1 gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Card>
            <CardHeader>
              <CardTitle>B.Sc. in Computer Engineering</CardTitle>
              <p className="text-sm text-muted-foreground">
                Institut Bisnis Dan Teknologi Indonesia – 2020 to 2025
              </p>
            </CardHeader>
            <CardContent className="text-xs text-muted-foreground space-y-2">
              <p>
                Specialized in <strong>Programming</strong>,
                <strong> Networking</strong> and
                <strong> Database Management</strong>.
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>Thesis on IoT-Enabled Clove Dryer with PID Control System</li>
                <li>Led a research project on designing an IoT-based clove drying system using PID control</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Vocational High School – Multimedia</CardTitle>
              <p className="text-sm text-muted-foreground">
                SMK PGRI 1 Denpasar – 2017 to 2020
              </p>
            </CardHeader>
            <CardContent className="text-xs text-muted-foreground space-y-2">
              <p>
                Gained hands-on experience in <strong>Video Editing</strong>,
                <strong> Graphic Design</strong> and
                <strong> Digital Printing</strong>.
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>Produced multimedia content as an editor at a professional studio</li>
                <li>Executed high quality printing projects for commercial clients</li>
                <li>Created promotional materials and visual content for events</li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <ProfessionalProfile />
    </motion.section>
  );
};
