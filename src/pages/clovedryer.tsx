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

export default function CloveDryer() {
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
              src="/img/portfolio/clovedryer/detail.png"
              alt="Detail Clove Dryer"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>

          {/* Deskripsi */}
          <div className="md:col-span-2 text-gray-700 dark:text-gray-300 text-base leading-relaxed">
            <p>
              This drying system is designed with the primary objective of improving the efficiency and quality of the clove drying process through precise control and automation. 
              Traditional drying methods often rely on natural sunlight, which can be inconsistent and highly dependent on weather conditions. Such methods frequently result in uneven drying, longer processing times and reduced product quality. 
              To address these limitations the proposed system integrates modern sensor technology, automated control and Internet of Things (IoT) connectivity in order to create a more reliable and optimized drying environment.
            </p>
          </div>

          {/* Lanjutan deskripsi di bawah gambar (full width) */}
          <div className="md:col-span-3 text-gray-700 dark:text-gray-300 text-base leading-relaxed mt-1">
            <p>
              At the core of the system is a Proportional-Integral-Derivative (PID) controller that regulates the heating element using input from the DHT22 sensor to maintain stable temperature and humidity, ensuring consistent drying and improved energy efficiency.
              Supporting components work together to ensure the drying process runs efficiently and evenly, from monitoring weight changes and maintaining airflow to regulating heat distribution inside the chamber. 
              All collected data is processed and transmitted for monitoring, allowing the system to be controlled and observed remotely. By combining PID temperature control, sensor feedback, automation and IoT connectivity. 
              The system offers a reliable and efficient solution that reduces drying time, improves product quality and minimizes dependence on traditional weather based methods.
            </p>
          </div>
        </CardContent>
      ),
    },
    {
      title: <span className="text-gray-700 dark:text-white">COMPONENTS USED</span>,
      content: (
        <CardContent className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Gambar-gambar */}
          <div>
            <img
              src="/img/portfolio/clovedryer/comp1.jpg"
              alt="Detail Clove Dryer 1"
              className="w-full h-auto object-cover rounded-lg shadow"
            />
          </div>
          <div>
            <img
              src="/img/portfolio/clovedryer/comp2.jpg"
              alt="Detail Clove Dryer 2"
              className="w-full h-auto object-cover rounded-lg shadow"
            />
          </div>

          {/* Deskripsi di bawah (full width) */}
          <div className="md:col-span-2 text-gray-700 dark:text-gray-300 text-base leading-relaxed mt-4 space-y-4">
            <h3 className="text-lg md:text-xl font-semibold text-gray-700 dark:text-white">
              Overview
            </h3>
            <p>
              The drying system integrates several components to support its operation. A power supply delivers DC voltage to the Arduino Uno, ESP32, sensors, and actuators. 
              The Arduino Uno acts as the main controller, processing data and managing devices such as the fan, motor and heating element, while the ESP32 enables IoT-based data transmission to the database. 
              Weight is measured with a load cell and HX711 amplifier, airflow is controlled by a two-channel relay, the stirring mechanism is driven by a wiper motor with an L298N driver and an AC dimmer regulates the heating element.
            </p>
            <p>
              User input is provided through a 4x4 keypad for setting parameters like target temperature, while system information including temperature, weight and status is displayed on an LCD with an I2C module. 
              Together, these components ensure effective control, monitoring, and optimization of the drying process.
            </p>
          </div>
        </CardContent>
      ),
    },
    {
      title: <span className="text-gray-700 dark:text-white">SENSOR/ACTUATOR</span>,
      content: (
        <CardContent className="flex flex-col">
          <div className="flex flex-col md:flex-row md:gap-2 md:h-[450px]">
            {[
              { src: "/img/portfolio/clovedryer/dht22.jpg", title: "Sensor", desc: "DHT22: used to measure temperature and humidity" },
              { src: "/img/portfolio/clovedryer/load1.jpg", title: "Sensor", desc: "LoadCell & Motor Wiper: functions to measure the mass of an object" },
              { src: "/img/portfolio/clovedryer/load2.jpg", title: "Sensor", desc: "LoadCell: functions to measure the mass of an object" },
              { src: "/img/portfolio/clovedryer/heater.jpg", title: "Actuator", desc: "Heater: functions to increase the room temperature" },
              { src: "/img/portfolio/clovedryer/fan.jpg", title: "Actuator", desc: "Fan: functions to control room temperature" },
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
            The drying system is equipped with several sensors and actuators placed strategically to optimize performance. A <strong>DHT22</strong> sensor, located inside the drying chamber above the container, measures temperature and humidity during the process. 
            Its placement ensures accurate readings, which are sent to the microcontroller to regulate conditions according to the defined setpoint. A <strong>LoadCell</strong> on the right side of the chamber measures the clove weight in real time, while another <strong>LoadCell</strong> on the left side is combined with a <strong>Wiper Motor</strong> to help level the cloves, ensuring even heat distribution and more efficient drying. 
            The <strong>Heating Element</strong> is positioned at the bottom of the chamber to generate the heat required for drying, supported by two blower fans that distribute the heat evenly and maintain stable temperature levels. 
            An additional <strong>Fan</strong> at the back of the chamber further stabilizes airflow, ensuring uniform hot air circulation throughout the system and preventing excessive heat concentration in specific areas.
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
              src="/img/portfolio/clovedryer/maindryer.jpg"
              alt="Clove Dryer App"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Header Project */}
        <header className="mb-12 text-left">
          <h1 className="text-2xl md:text-4xl font-bold mb-4 text-gray-700 dark:text-white">
            CLOVE DRYER WITH PID CONTROL
          </h1>
          <hr className="border-t-3 border-gray-300 dark:border-gray-700 my-6" />
        </header>

        {/* Info & Deskripsi */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="grid grid-cols-2 gap-x-4 text-gray-700 dark:text-gray-300">
            <span className="font-semibold">CATEGORY</span>
            <span>Things <br />
            Internet of Things</span>

            <span className="font-semibold">YEAR</span>
            <span>2024</span>

            <span className="font-semibold">CLIENT</span>
            <span>-</span>

            <span className="font-semibold">PROJECT URL</span>
            <span>
              <a href="https://www.youtube.com/watch?v=UhkhqFeBa9Y" className="text-blue-600" target="_blank">
                Clove Dryer Demo
              </a>
            </span>
          </div>

          <div>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              This drying system is designed to help farmers monitor and control the clove drying process more efficiently. By combining sensors, heating elements and weight measurement the system ensures stable temperature and humidity, accurate and even heat distribution. 
              Its main purpose is to optimize drying time, improve product quality and reduce the risk of uneven or inefficient drying.
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
      to="/web-portfolio-i"
      className="flex items-center gap-2 relative -translate-x-6"
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
    to="/web-portfolio-i"
    className="ml-4 text-gray-700 dark:text-white truncate md:truncate-none"
  >
    <div className="flex flex-col items-end text-right leading-tight">
      <span className="sm:text-xl md:text-2xl font-bold">personal portfolio I</span>
      <span className="sm:text-base md:text-xl font-normal text-muted-foreground">web</span>
    </div>
  </Link>
</div>


      </div>
    </motion.div>
  );
}
