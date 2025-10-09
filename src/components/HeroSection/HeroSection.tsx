import { Badge } from "../lightswind/badge";
import { motion } from "framer-motion";
import { FileDown } from "lucide-react";
import { ConfettiButton } from "../lightswind/confetti-button";
import { TypingText } from "../lightswind/Typing-Text";
import ProfileCard from "../lightswind/ProfileCard";

export const HeroSection = () => {
  return (
    <motion.div
      id="hero"
      className="text-foreground bg-transparent flex flex-col md:flex-row 
      items-center justify-center max-w-7xl mx-auto w-full"
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delayChildren: 0.3,
          staggerChildren: 0.2,
        },
      }}
    >
      {/* Left Section */}
      <motion.div className="flex-1 space-y-4 p-6 text-left md:text-left" initial={false}>
        <motion.h1
          className="text-4xl font-bold"
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: "easeOut" } }}
        >
          I Gede Rainnatha Sudana
          <motion.span
            className="text-sm text-blue-500 font-semibold block"
            initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: "easeOut" } }}
          >
            He/Him
          </motion.span>
        </motion.h1>

        <TypingText
          delay={4}
          duration={2.8}
          fontSize="text-xl"
          fontWeight="font-medium"
          letterSpacing="tracking-wider"
          align="left"
          loop={false}
          color="text-muted-foreground"
        >
          Network Administrator {"\n"}& IoT Developer
        </TypingText>

        <motion.p
          className="mt-1 text-sm text-muted-foreground"
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: "easeOut" } }}
        >
          I am an IT Specialist passionate about Networking and IoT Development,
          dedicated to designing robust network solutions. I explore innovative
          technologies to enable seamless connectivity, optimize performance
          while developing smart IoT systems that enhance efficiency and
          functionality
        </motion.p>

        {/* Badges */}
        <motion.div
          className="flex flex-wrap justify-center md:justify-start gap-2"
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: "easeOut" } }}
        >
          <Badge className="text-xs bg-blue-500">Networking</Badge>
          <Badge className="text-xs bg-blue-500">Active Directory</Badge>
          <Badge className="text-xs bg-blue-500">Troubleshooting</Badge>
        </motion.div>

        {/* Download Resume Button */}
        <motion.div
          className="mt-4"
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: "easeOut" } }}
        >
          <ConfettiButton
            variant="ghost"
            size="default"
            triggerOnHover={true}
            icon={<FileDown size={16} />}
            iconPosition="left"
            animation="glow"
            onClick={() =>
              window.open(
                "https://acrobat.adobe.com/id/urn:aaid:sc:AP:c2d53c1b-8628-4bbd-995f-cb957455bf21",
                "_blank"
              )
            }
          >
            Resume
          </ConfettiButton>
        </motion.div>
      </motion.div>

      {/* Right Section → ProfileCard */}
      <motion.div
        className="flex-1 flex justify-center p-6"
        initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        transition={{ delay: 0.5, duration: 1.2, ease: "easeOut" }}
      >
        <ProfileCard
          name="Rainnatha Sudana"
          title="Network Administrator"
          handle="everydynormalguy"
          status="Online"
          contactText="Let’s Chat"
          avatarUrl="/img/hero/avatar.png"
          miniAvatarUrl="/img/hero/profile-img1.jpg"
          iconUrl="/img/hero/bg-ikon.svg"
          enableTilt={true}
          enableMobileTilt={false}
          onContactClick={() => window.open("https://instagram.com/everydynormalguy", "_blank")}
        />
      </motion.div>
    </motion.div>
  );
};
