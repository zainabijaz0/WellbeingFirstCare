import React from "react";
import { ServicePageTemplate } from "@/components/ServicePageTemplate";
import { Heart, Users, Clock, Shield, Scissors, Bath } from "lucide-react";

export default function PersonalCare() {
  const heroImages = [
    "\/images\/female-caretaker-her-client-s-house-taking-care-elderly-person.jpg",
    "\/images\/female-nurse-taking-care-elderly-person.jpg",
    "\/images\/contented-senior-patient-with-kind-doctor-nursing-home-time-together.jpg",
  ];

  const benefits = [
    {
      icon: Scissors,
      title: "Grooming",
      description:
        "Enhancing dignity and self-confidence through comprehensive grooming care.",
    },
    {
      icon: Heart,
      title: "Mobility",
      description:
        "Supporting your independence with safe and reliable mobility assistance.",
    },
    {
      icon: Bath,
      title: "Incontinence Care",
      description:
        "Providing respectful and gentle incontinence care for your comfort and hygiene.",
    },
  ];

  const features = [
    "Experienced caregivers who lead with empathy and professionalism.",
    "Personalised plans aligned to your routines, goals and preferences.",
    "Respectful assistance delivered with privacy, sensitivity and care.",
  ];

  return (
    <ServicePageTemplate
      serviceName="Personal Care"
      heroTitle="Personal Care With Dignity And Warmth"
      heroDescription="Thoughtful support with grooming, mobility and hygiene that respects privacy, builds confidence, and enhances daily comfort."
      heroImages={heroImages}
      overview="Personal care should feel safe, dignified and reassuring. Our trained support workers provide gentle assistance with daily tasks while protecting your independence and preferences. From grooming to mobility and personal hygiene, we tailor care to what matters most to you."
      features={features}
      benefits={benefits}
      serviceDetails={[
        {
          title: "Individualized Care Plans",
          description:
            "Every person has unique needs, and we develop personalized care plans to address them.",
        },
        {
          title: "Trained Professionals",
          description:
            "Our support workers are experienced and trained in personal care best practices.",
        },
      ]}
    />
  );
}
