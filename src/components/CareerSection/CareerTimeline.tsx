import { ScrollTimeline } from "../lightswind/scroll-timeline";
import { Camera, LaptopMinimalCheck, Router } from "lucide-react";

export const CareerTimeline = () => {
  const careerEvents = [
    {
      year: "06/2025 to 12/2025",
      title: "Network Administrator",
      subtitle: "THE HAVEN BALI SEMINYAK",
      description:
        "Maintain and optimize network infrastructure while monitoring performance and security to ensure reliable connectivity",
      icon: <Router className="h-4 w-4 mr-2 text-primary" />,
    },
    {
      year: "10/2022 to 12/2022",
      title: "IT Support",
      subtitle: "INSPEKTORAT PROVINSI BALI",
      description:
        "Delivered IT support to staff while maintaining system performance and resolving technical issues efficiently",
      icon: <LaptopMinimalCheck className="h-4 w-4 mr-2 text-primary" />,
    },
    {
      year: "10/2019 to 01/2020",
      title: "Editor",
      subtitle: "EX-IT Studio",
      description:
        "Produced visually compelling content through photography, videography, and motion graphics, while handling multiple projects efficiently",
      icon: <Camera className="h-4 w-4 mr-2 text-primary" />,
    },
  ];

  return (
    <div id="career">
      <ScrollTimeline
        events={careerEvents}
        title="Career Journey"
        subtitle="A journey driven by growth, creativity and meaningful contributions"
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
