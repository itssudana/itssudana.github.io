"use client";

import { motion, type Variants } from "framer-motion";
import React, { type ElementType, type ReactNode, useEffect, useState } from "react";
import { cn } from "../lib/utils";

export interface TypingTextProps {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  delay?: number;
  duration?: number;
  fontSize?: string;
  fontWeight?: string;
  color?: string;
  letterSpacing?: string;
  align?: "left" | "center" | "right";
  loop?: boolean;
  pause?: number; // waktu pause antar loop
}

export const TypingText = ({
  children,
  as: Component = "div",
  className = "",
  delay = 0,
  duration = 2,
  fontSize = "text-4xl",
  fontWeight = "font-bold",
  color = "text-white",
  letterSpacing = "tracking-wide",
  align = "left",
  loop = false,
  pause = 1, // default 1 detik pause
}: TypingTextProps) => {
  const [textContent, setTextContent] = useState<string>("");
  const [replayKey, setReplayKey] = useState<number>(0); // untuk trigger ulang animasi

  useEffect(() => {
    const extractText = (node: ReactNode): string => {
      if (typeof node === "string" || typeof node === "number") return node.toString();
      if (Array.isArray(node)) return node.map(extractText).join("");
      if (React.isValidElement(node)) {
        const child = node.props as { children?: ReactNode };
        if (child.children) return extractText(child.children);
      }
      return "";
    };
    setTextContent(extractText(children));
  }, [children]);

  const characters = textContent.split("").map((char) => (char === " " ? "\u00A0" : char));

  const characterVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: delay + i * (duration / characters.length),
        duration: 0.3,
        ease: "easeInOut",
      },
    }),
  };

  // loop effect: trigger ulang animasi setelah durasi + pause
  useEffect(() => {
    if (!loop) return;

    const totalDuration = delay + duration + pause;
    const timer = setTimeout(() => setReplayKey((k) => k + 1), totalDuration * 1000);
    return () => clearTimeout(timer);
  }, [loop, delay, duration, pause, replayKey]);

  return (
    <Component
      className={cn(
        "inline-flex",
        className,
        fontSize,
        fontWeight,
        color,
        letterSpacing,
        align === "center"
          ? "justify-center text-center"
          : align === "right"
          ? "justify-end text-right"
          : "justify-start text-left"
      )}
      key={replayKey} // kunci ulang untuk trigger animate ulang
    >
      <motion.span
        className="inline-block"
        initial="hidden"
        animate="visible"
        aria-label={textContent}
        role="text"
      >
        {characters.map((char, index) =>
  char === "\n" ? (
    <br key={index} />
  ) : (
    <motion.span
      key={`${char}-${index}`}
      className="inline-block"
      variants={characterVariants}
      custom={index}
      initial="hidden"
      animate="visible"
    >
      {char}
    </motion.span>
  )
)}
      </motion.span>
    </Component>
  );
};
