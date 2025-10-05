"use client";

import React, { useState, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { MoveUpRight as ArrowIcon } from "lucide-react";
import { Link } from "react-router-dom";

interface VisualItem {
  key: number;
  url: string;
  title: string;
  subtitle: string;
  date: string;
  link: string;
  category: string;
}

const projects: VisualItem[] = [
  {
    key: 1,
    url: "/img/portfolio/cloveiot/tapp1.jpg",
    title: "Clove Dryer App Monitoring",
    subtitle: "Smart IoT application for seamless clove drying monitoring",
    date: "14/06/2024",
    link: "/clove-app",
    category: "App",
  },
  {
    key: 2,
    url: "/img/portfolio/web1/mainweb.png",
    title: "Personal Portfolio Website",
    subtitle:
      "A responsive portfolio website built with Bootstrap and custom code to showcase my work with clarity and style",
    date: "18/07/2025",
    link: "/web-portfolio-i",
    category: "Web",
  },
  {
    key: 3,
    url: "/img/portfolio/clovedryer/tr1.jpg",
    title: "Clove Dryer (IoT) Machine",
    subtitle:
      "Smart clove dryer with IoT integration and PID control, designed to improve drying performance and support sustainable agriculture",
    date: "14/06/2024",
    link: "/clove-dryer",
    category: "Things",
  },
  {
    key: 4,
    url: "/img/portfolio/n8n/main-n8n.jpg",
    title: "AI Chatbot Telegram using n8n",
    subtitle:
      "An AI-powered Telegram chatbot built with n8n workflows to deliver intelligent and automated responses",
    date: "26/07/2025",
    link: "/chatbot-n8n",
    category: "Things",
  },
  {
    key: 5,
    url: "/img/portfolio/web2/maincr7.jpg",
    title: "Cristiano Ronaldo Fanspage",
    subtitle:
      "Responsive fan website highlighting Cristiano Ronaldo’s career and impact, designed for an engaging user experience",
    date: "18/08/2025",
    link: "/cr-fanspage",
    category: "Web",
  },
  {
    key: 6,
    url: "/img/portfolio/net-adm/main-net.jpg",
    title: "Network Administrator",
    subtitle:
      "Managing networks, monitoring performance and ensuring security",
    date: "04/10/2025",
    link: "/network-adm",
    category: "Things",
  },
];

const categories = ["All", "App", "Web", "Things"];

const ProjectsSection: React.FC = () => {
  const [focusedItem, setFocusedItem] = useState<VisualItem | null>(null);
  const [isLargeScreen, setIsLargeScreen] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const smoothX = useSpring(cursorX, { stiffness: 300, damping: 40 });
  const smoothY = useSpring(cursorY, { stiffness: 300, damping: 40 });

  useEffect(() => {
    const updateScreen = () => setIsLargeScreen(window.innerWidth >= 768);
    updateScreen();
    window.addEventListener("resize", updateScreen);
    return () => window.removeEventListener("resize", updateScreen);
  }, []);

  const onMouseTrack = (e: React.MouseEvent<HTMLDivElement>) => {
    cursorX.set(e.clientX);
    cursorY.set(e.clientY);
  };

  // Helper parse tanggal
  const parseDate = (dateStr: string | null | undefined): Date => {
    if (!dateStr) return new Date(0); // fallback kalau kosong

    // Format YYYY-MM-DD
    if (/^\d{4}-\d{2}-\d{2}$/.test(dateStr)) {
      return new Date(dateStr);
    }

    // Format DD/MM/YYYY
    if (/^\d{2}\/\d{2}\/\d{4}$/.test(dateStr)) {
      const [day, month, year] = dateStr.split("/").map(Number);
      return new Date(year, month - 1, day);
    }

    // Format hanya tahun
    if (/^\d{4}$/.test(dateStr)) {
      return new Date(Number(dateStr), 0, 1);
    }

    // Default coba parse
    const parsed = new Date(dateStr);
    return isNaN(parsed.getTime()) ? new Date(0) : parsed;
  };

  // Apply sorting setelah filter
  const filteredProjects =
    selectedCategory === "All"
      ? [...projects].sort(
          (a, b) => parseDate(b.date).getTime() - parseDate(a.date).getTime()
        )
      : projects
          .filter((p) => p.category === selectedCategory)
          .sort(
            (a, b) => parseDate(b.date).getTime() - parseDate(a.date).getTime()
          );


  return (
    <section
      className="relative mx-auto w-full max-w-7xl px-6 py-12 bg-background rounded-md border overflow-hidden"
      onMouseMove={onMouseTrack}
      onMouseLeave={() => setFocusedItem(null)}
    >
      {/* Heading */}
      <div className="text-center mb-8 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
          Works
        </h2>
        <p className="text-muted-foreground text-lg">
          Explore my latest initiatives in IT infrastructure, software and smart devices
        </p>
      </div>

      {/* Filter */}
      <div className="flex justify-center mb-12">
        <div className="inline-flex rounded-full bg-muted p-1">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === cat
                  ? "bg-foreground text-background shadow"
                  : "text-foreground hover:text-primary"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* List */}
      <div className="relative">
        {filteredProjects.map((item) => {
          const isExternal = item.link.startsWith("http");
          const Wrapper: React.FC<{ children: React.ReactNode }> = ({
            children,
          }) =>
            isExternal ? (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 cursor-pointer relative sm:flex items-center justify-between border-b last:border-none"
                onMouseEnter={() => setFocusedItem(item)}
                onMouseLeave={() => setFocusedItem(null)}
              >
                {children}
              </a>
            ) : (
              <Link
                to={item.link}
                className="p-6 cursor-pointer relative sm:flex items-center justify-between border-b last:border-none"
                onMouseEnter={() => setFocusedItem(item)}
                onMouseLeave={() => setFocusedItem(null)}
              >
                {children}
              </Link>
            );

          return (
            <Wrapper key={item.key}>
              {!isLargeScreen && (
                <img
                  src={item.url}
                  className="sm:w-32 sm:h-20 w-full h-52 object-cover rounded-md mb-4 sm:mb-0"
                  alt={item.title}
                />
              )}

              <div>
                <h3
                  className={`newFont uppercase md:text-3xl sm:text-2xl text-lg font-semibold leading-tight relative transition-colors duration-300 ${
                    focusedItem?.key === item.key
                      ? "mix-blend-difference z-20 text-gray-300"
                      : "text-foreground"
                  }`}
                >
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">{item.subtitle}</p>
                <span className="text-xs text-muted-foreground">
                  {item.date}
                </span>
              </div>

              {/* Desktop-only arrow */}
              {isLargeScreen && (
                <div
                  className={`sm:block hidden p-4 rounded-full transition-all duration-300 ease-out ${
                    focusedItem?.key === item.key
                      ? "mix-blend-difference z-20 bg-white text-black"
                      : ""
                  }`}
                >
                  <ArrowIcon className="w-6 h-6" />
                </div>
              )}

              {/* Animated underline */}
              <div
                className={`h-[2px] dark:bg-white bg-black absolute bottom-0 left-0 transition-all duration-300 ease-linear ${
                  focusedItem?.key === item.key ? "w-full" : "w-0"
                }`}
              />
            </Wrapper>
          );
        })}

        {/* Hover image reveal (follow cursor) */}
        {isLargeScreen && focusedItem && (
          <motion.img
            src={focusedItem.url}
            alt={focusedItem.title}
            className="fixed z-30 object-cover w-[300px] h-[400px] rounded-lg pointer-events-none shadow-2xl dark:bg-gray-950 bg-white"
            style={{
              left: smoothX,
              top: smoothY,
              x: "-50%",
              y: "-50%",
            }}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
export { ProjectsSection };
