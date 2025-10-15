"use client";

import { motion, AnimatePresence, cubicBezier } from "framer-motion";
import { useEffect, useState } from "react";
import Noise from "../lightswind/Noise";
import lightLogo from "/logo-light.svg";
import darkLogo from "/logo-dark.svg";

interface SplashScreenProps {
  ready: boolean; // dikontrol dari AppContent
  onFinish: () => void; // callback setelah animasi selesai
}

export default function SplashScreen({ ready, onFinish }: SplashScreenProps) {
  const ease = cubicBezier(0.4, 0, 0.2, 1);
  const [exit, setExit] = useState(false);

  // 🔒 Lock scroll saat splash aktif
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  // Trigger exit
  useEffect(() => {
    if (ready) setExit(true);
  }, [ready]);

  const logoVariants = {
    hidden: { y: -30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease } },
    exit: { y: -30, opacity: 0, transition: { duration: 0.6, ease, delay: 0.4 } },
  };

  const textVariants = {
    hidden: { y: -30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease, delay: 0.2 } },
    exit: { y: -30, opacity: 0, transition: { duration: 0.6, ease } },
  };

  const footerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8, ease, delay: 0.4 } },
    exit: { opacity: 0, transition: { duration: 0.6, ease } },
  };

  return (
    <AnimatePresence mode="wait" onExitComplete={onFinish}>
      {!exit && (
        <motion.div
          key="splash"
          className="fixed inset-0 z-50 flex flex-col bg-background min-h-[100dvh] relative overflow-hidden"
        >
          <div className="absolute inset-0 -z-10">
            <Noise
              patternRefreshInterval={window.innerWidth >= 768 ? 4 : 10}
              patternAlpha={window.innerWidth >= 768 ? 12 : 5}
            />
          </div>

          {/*  Konten utama */}
          <div className="flex-1 flex flex-col justify-center items-center px-4">
            <motion.div
              className="w-16 h-16 md:w-24 md:h-24 relative"
              variants={logoVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <motion.div
                className="w-full h-full"
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              >
                <img src={lightLogo} alt="Logo Light" className="block dark:hidden w-full h-full" />
                <img src={darkLogo} alt="Logo Dark" className="hidden dark:block w-full h-full" />
              </motion.div>
            </motion.div>

            <motion.h1
              className="text-base font-normal mt-3 tracking-wide text-muted-foreground text-center"
              variants={textVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              Welcome Stranger...
            </motion.h1>
          </div>

          {/*  Footer aman untuk mobile + safe area */}
          <motion.footer
            className="mt-auto text-center px-4 pb-[calc(env(safe-area-inset-bottom)+2rem)]"
            variants={footerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <motion.p
              className="text-[0.75rem] sm:text-sm text-muted-foreground"
            >
              Designed and coded by Natha © 2025
            </motion.p>
          </motion.footer>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
