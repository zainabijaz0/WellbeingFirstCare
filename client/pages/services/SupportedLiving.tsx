import React from "react";
import { ServicePageTemplate } from "@/components/ServicePageTemplate";
import {
  Home,
  Users,
  Heart,
  GraduationCap,
  Building,
  Users2,
} from "lucide-react";

export default function SupportedLiving() {
  const heroImages = [
    "\/images\/wellness-exercise-health-lifestyle-nutrition-concept.jpg",
    "\/images\/man-woman-practicing-yoga-outdoor.jpg",
    "\/images\/medium-shot-smiley-disabled-man-work.jpg",
  ];

  const benefits = [
    {
      icon: GraduationCap,
      title: "Skill Development",
      description:
        "Help with building essential life skills such as budgeting, cooking, and maintaining a home.",
    },
    {
      icon: Users2,
      title: "Community Engagement",
      description:
        "Encouraging participation in community activities and social events to foster connections and reduce isolation.",
    },
    {
      icon: Heart,
      title: "Health and Well-being Support",
      description:
        "Assistance with managing medications, attending appointments, and maintaining a healthy lifestyle.",
    },
  ];

  const features = [
    "Independence first: the right support at the right time to build skills and confidence.",
    "Safe, comfortable environments that feel like home and enable daily routines.",
    "Experienced staff offering practical guidance, encouragement and continuity.",
  ];

  return (
    <ServicePageTemplate
      serviceName="Supported Independent Living (SIL)"
      heroTitle="Empowering Independence With Tailored Support"
      heroDescription="Live independently with tailored support that builds capability, confidence and connection at home and in the community."
      heroImages={heroImages}
      overview="Supported Independent Living (SIL) provides the ongoing assistance needed to live well at home while developing everyday skills. We focus on empowerment, choice and self‑determination, helping you build capability with reliable support when you need it."
      features={features}
      benefits={benefits}
      serviceDetails={[
        {
          title: "Individualized Support Plans",
          description:
            "Each person receives a customized support plan based on their goals and needs.",
        },
        {
          title: "24/7 Support Available",
          description:
            "We provide around-the-clock support when needed to ensure safety and independence.",
        },
      ]}
    />
  );
}
