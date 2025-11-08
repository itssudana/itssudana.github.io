"use client";

import { useEffect, useState, useRef } from "react";

export default function CustomCursor() {
  const [isTouch, setIsTouch] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const ringPos = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });

  // deteksi touch device
  useEffect(() => {
    const checkTouch = () => {
      const touch =
        "ontouchstart" in window ||
        navigator.maxTouchPoints > 0 ||
        // @ts-ignore: untuk browser lama
        navigator.msMaxTouchPoints > 0 ||
        (window.matchMedia && window.matchMedia("(pointer: coarse)").matches);
      setIsTouch(touch);
    };

    checkTouch();
    window.addEventListener("resize", checkTouch);
    return () => window.removeEventListener("resize", checkTouch);
  }, []);

  // pantau perubahan theme
  useEffect(() => {
    const updateTheme = () => {
      const isDark = document.documentElement.classList.contains("dark");
      setTheme(isDark ? "dark" : "light");
    };
    updateTheme();
    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  // animasi cursor
  useEffect(() => {
    if (isTouch) return;

    const handleMove = (e: MouseEvent) => {
      mousePos.current.x = e.clientX;
      mousePos.current.y = e.clientY;
    };

    const handleHoverStart = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive =
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.tagName === "IMG" ||
        target.tagName === "SVG" ||
        target.closest("button") ||
        target.closest("a") ||
        target.closest("svg") ||
        target.closest("[role='button']") ||
        target.closest("[data-hover='true']") ||
        typeof (target as any).onclick === "function";
      setIsHovering(!!isInteractive);
    };

    const handleMouseDown = () => setIsDragging(true);
    const handleMouseUp = () => setIsDragging(false);

    document.addEventListener("mousemove", handleMove);
    document.addEventListener("mouseover", handleHoverStart);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);

    let animationFrame: number;
    const follow = () => {
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * 0.15;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * 0.15;

      if (dotRef.current) {
        dotRef.current.style.left = `${mousePos.current.x}px`;
        dotRef.current.style.top = `${mousePos.current.y}px`;
      }

      if (ringRef.current) {
        ringRef.current.style.left = `${ringPos.current.x}px`;
        ringRef.current.style.top = `${ringPos.current.y}px`;
      }

      animationFrame = requestAnimationFrame(follow);
    };

    follow();

    return () => {
      cancelAnimationFrame(animationFrame);
      document.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseover", handleHoverStart);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isTouch]);

  if (isTouch) return null;

  const dotColor = theme === "dark" ? "#fff" : "#0f0f0f";
  const ringBorder = theme === "dark" ? "#fff" : "#292929";
  const ringSize = isDragging ? 69 : isHovering ? 69 : 25;

  return (
    <>
      <style>
        {`
        html, body {
          cursor: none !important;
        }

        ::selection {
          background: #39FF14;
          color: #000;
        }

        @media (pointer: coarse) {
          html, body {
            cursor: auto !important;
          }
        }

        .cursor-dot {
          position: fixed;
          left: 50%;
          top: 50%;
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background-color: ${dotColor};
          transform: translate(-50%, -50%);
          pointer-events: none;
          transition: opacity 0.25s ease, background-color 0.25s ease;
          z-index: 9999;
        }

        .cursor-ring {
          position: fixed;
          left: 50%;
          top: 50%;
          width: ${ringSize}px;
          height: ${ringSize}px;
          border-radius: 50%;
          border: 2px solid ${ringBorder};
          transform: translate(-50%, -50%);
          pointer-events: none;
          z-index: 9998;
          transition: width 0.25s ease, height 0.25s ease, border-color 0.25s ease, backdrop-filter 0.3s ease;
          ${
            theme === "dark" && isHovering
              ? `
              backdrop-filter: invert(1) grayscale(1);
              background-color: rgba(255,255,255,0.1);
            `
              : ""
          }
        }
      `}
      </style>

      <div ref={dotRef} className="cursor-dot" style={{ opacity: isHovering ? 0 : 1 }} />
      <div ref={ringRef} className="cursor-ring" />
    </>
  );
}
