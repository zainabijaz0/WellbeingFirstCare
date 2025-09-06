import { ServicePageTemplate } from "@/components/ServicePageTemplate";
import { Heart, Users, Shield, Clock } from "lucide-react";

export default function Autism() {
  const heroImages = [
    "/images/female-doctor-hospital.jpg",
    "/images/young-woman-doing-sport-exercises-sunrise-beach-morning.jpg",
  ];

  return (
    <ServicePageTemplate
      serviceName="Autism Support"
      heroTitle="Specialised Autism Support"
      heroDescription="Structured, compassionate supports tailored to communication, sensory needs, routines and independence at home and in the community."
      heroImages={heroImages}
      overview="Our Autism Support focuses on strengths-based, individualised strategies that help build communication, daily living skills, self-regulation and community participation. We collaborate with families, therapists and coordinators to ensure consistent, effective support."
      features={[
        "Routine building and visual supports",
        "Communication support (AAC, social stories)",
        "Sensory-aware environments and strategies",
        "Community access and social skills coaching",
      ]}
      benefits={[
        {
          icon: Users,
          title: "Person‑Centred",
          description:
            "Plans tailored to the preferences, goals and learning pace of each person.",
        },
        {
          icon: Heart,
          title: "Family Collaboration",
          description:
            "Active family involvement to reinforce routines and support across settings.",
        },
        {
          icon: Shield,
          title: "Safe & Supportive",
          description:
            "Predictable, low‑arousal approaches that respect sensory needs and dignity.",
        },
      ]}
      serviceDetails={[
        {
          title: "Daily Living & Routines",
          description:
            "Step‑by‑step skill development for meals, hygiene, organisation and transitions.",
        },
        {
          title: "Community & Social Skills",
          description:
            "Coaching and graded exposure to build confidence in community environments.",
        },
        {
          title: "Coordination with Therapists",
          description:
            "We align with clinical recommendations to ensure consistent progress.",
        },
      ]}
    />
  );
}
