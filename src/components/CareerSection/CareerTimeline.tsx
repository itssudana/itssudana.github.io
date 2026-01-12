import { ScrollTimeline } from "../lightswind/scroll-timeline";
import ScrollFloat from "../lightswind/ScrollFloat";
import { Camera, LaptopMinimalCheck, Router } from "lucide-react";

export const CareerTimeline = () => {
  const careerEvents = [
    {
      year: "01/2026 to 12/2027",
      title: "IT Staff",
      subtitle: "SILOAM HOSPITALS DENPASAR",
      description:
        "IT Support at Siloam Hospitals Denpasar responsible for ensuring the stability, security and availability of hospital IT systems 24/7 through technical support, network management and compliance with hospital SOPs",
      icon: <LaptopMinimalCheck className="h-4 w-4 mr-2 text-primary" />,
    },
    {
      year: "06/2025 to 12/2025",
      title: "IT Staff",
      subtitle: "THE HAVEN BALI SEMINYAK",
      description:
        "Maintain and optimize network infrastructure while monitoring performance and security to ensure reliable connectivity",
      icon: <Router className="h-4 w-4 mr-2 text-primary" />,
    },
    {
      year: "06/2022 to 12/2022",
      title: "IT Support",
      subtitle: "INSPEKTORAT PROVINSI BALI",
      description:
        "Delivered IT support to staff while maintaining system performance and resolving technical issues efficiently",
      icon: <LaptopMinimalCheck className="h-4 w-4 mr-2 text-primary" />,
    },
    {
      year: "10/2019 to 01/2020",
      title: "Editor",
      subtitle: "EX-IT STUDIO",
      description:
        "Produced visually compelling content through photography, videography and motion graphics, while handling multiple projects efficiently",
      icon: <Camera className="h-4 w-4 mr-2 text-primary" />,
    },
  ];

  
return (
  <div id="career" className="mt-12 md:mt-16">
    {/* ScrollFloat untuk judul + subtitle (tetap) */}
    <ScrollFloat
  containerClassName="text-center"
  textClassName="leading-snug" // lebih rapat
>
  <span className="block font-bold text-primary text-4xl sm:text-4xl md:text-5xl">
    Career Journey
  </span>
  <span className="block text-muted-foreground text-xs sm:text-sm md:text-base font-normal mt-5 px-4 sm:px-6 md:px-8 mx-auto max-w-[600px]">
    A journey driven by growth, creativity and meaningful contributions
  </span>
</ScrollFloat>


    {/* Pastikan title/subtitle ScrollTimeline dikosongkan supaya tidak duplikat */}
    <ScrollTimeline
      events={careerEvents}
      title={""}               // <-- kosongkan judul internal
      subtitle={""}            // <-- kosongkan subtitle internal
      animationOrder="staggered"
      cardAlignment="alternating"
      cardVariant="elevated"
      parallaxIntensity={0.15}
      revealAnimation="fade"
      progressIndicator={true}
      lineColor="bg-primary/20"
      activeColor="bg-primary"
      progressLineWidth={3}
      progressLineCap="round"
    />
  </div>
);

};
