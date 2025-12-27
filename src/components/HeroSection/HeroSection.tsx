import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import RotatingText  from "../lightswind/RotatingText";
import ProfileCard from "../lightswind/ProfileCard";
import DecryptedText from "../lightswind/DecryptedText";

const aboutText = `I am an IT Specialist passionate about Networking and IoT Development, dedicated to designing robust network solutions. I explore innovative technologies to enable seamless connectivity, optimize performance while developing smart IoT systems that enhance efficiency and functionality.`;

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

        <motion.p
          className="text-sm text-muted-foreground flex items-center gap-2 leading-snug"
          initial={{ opacity: 0, y: 15, filter: "blur(3px)" }}
          animate={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: { duration: 0.8, ease: "easeOut" },
          }}
        >
          Focused on
          <RotatingText
            texts={["networking", "active directory", "troubleshooting"]}
            mainClassName="inline-flex px-1.5 py-0.5 bg-blue-500 text-white dark:bg-blue-500 dark:text-black rounded-md overflow-hidden align-middle font-normal leading-snug"
            staggerFrom="last"
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            staggerDuration={0.02}
            splitLevelClassName="overflow-hidden"
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            rotationInterval={4500} 
          />
        </motion.p>

        <motion.div
          className="mt-1 text-sm text-muted-foreground"
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          whileInView={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: { duration: 0.8, ease: "easeOut" },
          }}
        >
          <DecryptedText
            text={aboutText}
            speed={80}
            maxIterations={30}
            useOriginalCharsOnly
            animateOn="view"
            revealDirection="start"
            className="text-muted-foreground"
          />
        </motion.div>

        {/* Download Resume Button */}
        <motion.div
          className="mt-4"
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          animate={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: { duration: 0.8, ease: "easeOut" },
          }}
        >
          <motion.button
            onClick={() =>
              window.open(
                "https://acrobat.adobe.com/id/urn:aaid:sc:AP:383880f3-e8bd-4af2-9d2c-7023b3241a5e",
                "_blank"
              )
            }
            className="group relative text-2sm font-medium text-muted-foreground flex items-center gap-2 px-2 py-1"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />

            {/* Text container with underline animation */}
            <span className="relative inline-block">
              resume
              <span className="absolute left-0 -bottom-0.5 h-[1.5px] w-0 bg-primary transition-all duration-300 group-hover:w-full" />
            </span>
          </motion.button>
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
