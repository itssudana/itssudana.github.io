import { useState, useEffect } from "react";
import "./App.css";
import SplashScreen from "./components/SplashScreen/SplashScreen";
import Header from "./components/Header/Header";
import { HeroSection } from "./components/HeroSection/HeroSection";
import Noise from "./components/lightswind/Noise";
import { AboutSection } from "./components/AboutSection/AboutSection";
import { ProjectsSection } from "./components/ProjectsSection/ProjectsSection";
import { EducationSection } from "./components/EducationSection/EducationSection";
import { CareerTimeline } from "./components/CareerSection/CareerTimeline";
import { ContactSection } from "./components/ContactSection/Contact";
import ReactLenis, { useLenis } from "lenis/react";
import Dock from "./components/lightswind/dock";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  useLocation,
} from "react-router-dom";
import CustomCursor from "./components/lightswind/CustomCursor";
import CloveApp from "./pages/cloveapp";
import CloveDryer from "./pages/clovedryer";
import WebPortfolioI from "./pages/web-portfolio-i";
import N8N from "./pages/chatbot-n8n";
import CR7 from "./pages/cr-fanspage";
import NetworkAdmin from "./pages/network-adm";
import Pawspective from "./pages/pawspective";
import { Home, User, Briefcase, FolderKanban, Contact } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function MainContent() {
  return (
    <div className="w-full max-w-5xl px-4 py-10 lg:rounded-3xl mx-auto flex flex-col gap-1">
      <div id="home" className="pt-[80px] md:pt-[55px]">
        <HeroSection />
      </div>
      <div id="about" className="md:pt-[15px]">
        <AboutSection />
      </div>
      <div id="education" className="md:pt-[20px]">
        <EducationSection />
      </div>
      <div id="career" className="pt-24 md:pt-20">
        <CareerTimeline />
      </div>
      <div id="projects" className="pt-24 md:pt-20">
        <ProjectsSection />
      </div>
      <div id="contact" className="pt-24 md:pt-20">
        <ContactSection />
      </div>
    </div>
  );
}

function AppContent() {
  const [showSplash, setShowSplash] = useState(true);
  const [appReady, setAppReady] = useState(false);
  const [showDock, setShowDock] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const navigate = useNavigate();
  const location = useLocation();
  const lenis = useLenis();

  useEffect(() => {
    let minTimePassed = false;
    let loaded = false;

    const checkReady = () => {
      if (minTimePassed && loaded) {
        setAppReady(true);
      }
    };

    const timer = setTimeout(() => {
      minTimePassed = true;
      checkReady();
    }, 2800);

    const handleLoad = () => {
      loaded = true;
      checkReady();
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => {
      clearTimeout(timer);
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  // Lock scroll selama splash aktif
  useEffect(() => {
    if (showSplash) {
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = "0";
      document.body.style.right = "0";
    } else {
      const scrollY = -parseInt(document.body.style.top || "0");
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      window.scrollTo(0, scrollY);
    }
  }, [showSplash]);

  // Dock muncul/hilang saat scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowDock(currentScrollY > lastScrollY);
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // ✅ Update scroll halus pakai Lenis dengan easing inertia
  const scrollToSection = (id: string) => {
    const scrollOptions = {
      offset: -20, // biar ga ketutupan header
      duration: 1.4,
      easing: (t: number) => 1 - Math.pow(2, -10 * t), // easeOutExpo
    };

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el && lenis) lenis.scrollTo(el, scrollOptions);
      }, 300);
    } else {
      const el = document.getElementById(id);
      if (el && lenis) lenis.scrollTo(el, scrollOptions);
    }
  };

  const dockItems = [
    { icon: <Home size={24} />, label: "Home", onClick: () => scrollToSection("home") },
    { icon: <User size={24} />, label: "About", onClick: () => scrollToSection("about") },
    { icon: <Briefcase size={24} />, label: "Career", onClick: () => scrollToSection("career") },
    { icon: <FolderKanban size={24} />, label: "Works", onClick: () => scrollToSection("projects") },
    { icon: <Contact size={24} />, label: "Contact", onClick: () => scrollToSection("contact") },
  ];

  return (
    <div className="relative min-h-screen w-screen overflow-x-hidden bg-background">
      {/*  Noise paling depan agar aktif dari awal */}
      <Noise
        patternRefreshInterval={window.innerWidth >= 768 ? 4 : 10}
        patternAlpha={window.innerWidth >= 768 ? 12 : 5}
      />

      {/* Splash overlay */}
      <AnimatePresence>
        {showSplash && (
          <SplashScreen ready={appReady} onFinish={() => setShowSplash(false)} />
        )}
      </AnimatePresence>

      {/* Cursor */}
      {!showSplash && <CustomCursor />}

      {/* Main app */}
      <ReactLenis root>
        <div
          className={`relative z-10 transition-opacity duration-700 ${
            showSplash ? "opacity-0" : "opacity-100"
          }`}
        >
          <Header />
          <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="/clove-app" element={<CloveApp />} />
            <Route path="/clove-dryer" element={<CloveDryer />} />
            <Route path="/web-portfolio-i" element={<WebPortfolioI />} />
            <Route path="/chatbot-n8n" element={<N8N />} />
            <Route path="/cr-fanspage" element={<CR7 />} />
            <Route path="/network-adm" element={<NetworkAdmin />} />
            <Route path="/pawspective" element={<Pawspective />} />
          </Routes>
        </div>

        {/* Dock */}
        <AnimatePresence>
          {showDock && (
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="fixed bottom-4 left-1/2 -translate-x-1/2 z-[999]"
            >
              <Dock
                items={dockItems}
                position="bottom"
                magnification={70}
                baseItemSize={50}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </ReactLenis>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
