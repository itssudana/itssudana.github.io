import { Separator } from "../lightswind/separator";
import { motion } from "framer-motion";

export const AboutSection = () => {
  return (
    <motion.div
      id="about"
      className="text-foreground max-w-5xl mx-auto w-full px-6 py-12 space-y-4"
      initial={{ opacity: 0, y: 50, filter: "blur(5px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 1.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <h2 className="text-3xl font-bold">About Me</h2>
      <p className="text-muted-foreground text-sm max-w-5xl">
        Hello, I'm Natha. I've loved computer science since elementary school and it has been a lifelong passion that continues to inspire me every day. 
        Over the years, I have explored various areas of technology from programming and networking to prototyping innovative applications. 
        I particularly enjoy prototyping, often spending over 8 hours designing, refining and experimenting with new ideas to create functional and creative solutions.
      </p>
      <p className="text-muted-foreground text-sm max-w-5xl">
        Beyond my professional interests, I have a keen curiosity for emerging technologies and enjoy staying up-to-date with the latest developments in AI, IoT and software design. 
        Outside of work, I love watching movies, listening to music and engaging in hobbies that spark creativity. I also find joy in spending downtime with pets, which helps me recharge and stay motivated. 
        This blend of technical curiosity, creative exploration and personal balance defines both my professional and personal journey.
      </p>
      <Separator />
    </motion.div>
  );
};
