"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Header from "../components/Header/Header";
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
} from "../components/lightswind/card";

export default function CloveApp() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  const cards = [
    {
  title: <span className="text-gray-700 dark:text-white">PROJECT OVERVIEW</span>,
  content: (
    <CardContent className="w-full grid grid-cols-1 md:grid-cols-3 gap-4">
      {/* Gambar */}
      <div className="md:col-span-1">
        <img
          src="/img/portfolio/cloveiot/tapp1.jpg"
          alt="Clove App"
          className="w-full h-auto object-cover rounded-lg"
        />
      </div>

      {/* Deskripsi */}
      <div className="md:col-span-2 text-gray-700 dark:text-gray-300 text-base leading-relaxed">
        <p>
          This mobile application was developed using Android Studio with Java/Kotlin as the programming language and adopts the MVVM (Model-View-ViewModel) architecture. It is designed to monitor and manage the drying process through Internet of Things (IoT) integration with the Retrofit API. The development process includes project structure design, user interface implementation, core feature integration, data management, and application navigation.
          This application is targeted to use an SDK version range with a minimum SDK level of Android 6.0 – 6.0.1 (API 23). This ensures compatibility and optimal performance across various Android devices, allowing users to access the application reliably and efficiently on both newer and older Android versions.
        </p>
      </div>

      {/* Lanjutan deskripsi di bawah gambar (full width) */}
      <div className="md:col-span-3 text-gray-700 dark:text-gray-300 text-base leading-relaxed mt-1">
        <p>
          The Clove Dryer IoT application is developed to help users easily monitor. Through this app, users can view real-time temperature, humidity and weight data, receive notifications about the drying chamber’s condition. The interface is designed to be simple and responsive, making it easy to access all features via smartphone. With this application, the clove drying process becomes more efficient, practical and well-managed.
        </p>
      </div>
    </CardContent>
  ),
},
    {
      title: <span className="text-gray-700 dark:text-white">UI/UX</span>,
      content: (
        <CardContent className="flex flex-col">
          <div className="flex flex-col md:flex-row md:gap-2 md:h-[450px]">
            {[
              { src: "/img/portfolio/cloveiot/a.png", title: "UI/UX", desc: "Splash Screen" },
              { src: "/img/portfolio/cloveiot/b.png", title: "UI/UX", desc: "Main Menu" },
              { src: "/img/portfolio/cloveiot/c.png", title: "UI/UX", desc: "History Menu" },
            ].map((item, idx) => (
              <div
                key={idx}
                className={`
                  relative overflow-hidden rounded-md shadow-md mb-2 md:mb-0
                  md:flex-1 md:hover:flex-[4] md:rounded-xl
                  transition-all duration-500
                  group
                `}
              >
                {/* Gambar */}
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full md:h-full md:object-cover object-contain"
                />

                {/* Overlay abu-abu sebelum hover, hilang saat hover */}
                <div className="hidden md:block absolute inset-0 bg-gray-700/60 group-hover:bg-transparent transition-colors duration-500"></div>

                {/* Teks muncul saat hover */}
                <div className="hidden md:block absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <h2 className="text-lg md:text-xl font-bold text-black">{item.title}</h2>
                  <p className="text-sm text-black">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          {/* Deskripsi di bawah gallery */}
          <div className="mt-4 text-gray-700 dark:text-gray-300 text-base px-2 md:px-0">
            The main user interface consists of several screens. The <strong>splash screen</strong> appears upon launching the application before entering the main menu. The <strong>main menu</strong> displays outputs from the DHT22 sensor, the Load Cell, and the drying duration, while the log button, represented by a clock icon, directs the user to the history view. The <strong>history menu</strong> provides information on previous drying sessions, including duration and date, and pressing the back button located at the top-left corner returns the user to the main menu.
          </div>
        </CardContent>
      )

}
  ];

  return (
    <motion.div
      className="min-h-screen bg-background"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Header */}
      <Header />

      <div className="px-6 md:px-12 lg:px-24 py-16 max-w-6xl mx-auto pb-32 md:pb-16">

        {/* Foto Utama */}
        <div className="w-full mb-8">
          <div className="aspect-[1.91/1] w-full overflow-hidden rounded-lg shadow-lg">
            <img
              src="/img/portfolio/cloveiot/mainapp.jpg"
              alt="Clove Dryer App"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Header Project */}
        <header className="mb-12 text-left">
          <h1 className="text-2xl md:text-4xl font-bold mb-4 text-gray-700 dark:text-white">
            CLOVE DRYER MONITORING APPLICATION
          </h1>
          <hr className="border-t-3 border-gray-300 dark:border-gray-700 my-6" />
        </header>

        {/* Info & Deskripsi */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="grid grid-cols-2 gap-x-4 text-gray-700 dark:text-gray-300">
            <span className="font-semibold">CATEGORY</span>
            <span>App <br />
            Internet of Things<br />
            UI/UX Design</span>

            <span className="font-semibold">YEAR</span>
            <span>2024</span>

            <span className="font-semibold">CLIENT</span>
            <span>-</span>

            <span className="font-semibold">PROJECT URL</span>
            <span>
              <a href="https://www.youtube.com/watch?v=NoWA5kn6ebg" className="text-blue-600" target="_blank">
                App Demo
              </a>
            </span>
          </div>

          <div>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              The Clove Drying Monitoring Application is an IoT-based solution designed to assist farmers and industry professionals in monitoring and optimizing the clove drying process. 
              Through real-time data visualization, temperature and weight tracking, and alert notifications, the application ensures greater efficiency and improved product quality.
            </p>
          </div>
        </div>

        {/* Render Cards dengan nomor halaman otomatis */}
        {cards.map((card, index) => (
        <Card key={index} className="mb-3 hoverable bordered relative flex flex-col">
            <CardHeader>
            <CardTitle>{card.title}</CardTitle>
            {/* Garis di bawah judul */}
            <hr className="mt-4 w-full flex justify-center border-gray-300 dark:border-gray-700 w-11/12 mx-auto" />
            </CardHeader>

            {/* Konten card */}
            <div className="flex-1">
            {card.content}
            </div>

            {/* Garis di atas nomor halaman */}
            <div className="mt-4 w-full flex justify-center">
            <hr className="border-gray-300 dark:border-gray-700 w-11/12 mx-auto pt-2" />
            </div>

            {/* Nomor halaman di pojok kanan bawah */}
            <div className="mt-1 mb-5 text-right text-gray-500 text-sm pr-10">
            {index + 1} / {cards.length}
            </div>
        </Card>
        ))}

        {/* Next Project + Judul Selanjutnya */}
        <div className="flex justify-between items-baseline mt-16 pb-16 md:pb-0">
          {/* Next Project */}
          <motion.div
            className="relative"
            initial="rest"
            whileHover="hover"
            animate="rest"
          >
            <Link
              to="/clove-dryer"
              className="flex items-center gap-2 relative"
            >
              <motion.span
                className="flex items-center gap-2 absolute left-0 opacity-0 font-bold text-gray-700 dark:text-white"
                variants={{
                  rest: { x: -12, opacity: 0 },
                  hover: { x: 0, opacity: 1 }
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 15
                }}
              >
                <ArrowRight size={24} strokeWidth={3} className="w-6 h-6" />
              </motion.span>

              <motion.span
                className="pl-6 text-gray-700 dark:text-white sm:text-xl md:text-2xl font-bold leading-tight"
                variants={{
                  rest: { x: 0 },
                  hover: { x: 12 }
                }}
                transition={{
                  type: "spring",
                  stiffness: 250,
                  damping: 12
                }}
              >
                next project
              </motion.span>
            </Link>
          </motion.div>

          {/* Judul Project Selanjutnya */}
          <Link
            to="/clove-dryer"
            className="ml-4 text-gray-700 dark:text-white truncate md:truncate-none"
          >
            <div className="flex flex-col items-end text-right leading-tight">
              <span className="sm:text-xl md:text-2xl font-bold">clove dryer machine</span>
              <span className="sm:text-base md:text-xl font-normal text-muted-foreground">things</span>
            </div>
          </Link>
        </div>

      </div>
    </motion.div>
  );
}
