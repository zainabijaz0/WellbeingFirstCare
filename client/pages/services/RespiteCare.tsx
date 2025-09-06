import React from "react";
import { ServicePageTemplate } from "@/components/ServicePageTemplate";
import { Clock, Heart, Users, Home, Coffee, Calendar } from "lucide-react";

export default function RespiteCare() {
  const heroImages = [
    "\/images\/young-woman-doing-sport-exercises-sunrise-beach-morning.jpg",
    "\/images\/senior-woman-with-her-caregiver-outdoor.jpg",
    "\/images\/medium-shot-smiley-disabled-man-work.jpg",
  ];

  const benefits = [
    {
      icon: Clock,
      title: "Short-Term Care",
      description:
        "Temporary support for a few hours, days, or weeks, tailored to meet our clients' needs of each individual.",
    },
    {
      icon: Home,
      title: "In-Home and Facility-Based Care",
      description:
        "Whether you prefer care in the comfort of your own home or in a specialized facility, we provide flexible options.",
    },
    {
      icon: Coffee,
      title: "Engaging Activities",
      description:
        "We keep your loved ones engaged with meaningful activities that promote mental and physical well-being.",
    },
  ];

  const features = [
    "Peace of mind for caregivers with trusted, compassionate support.",
    "Flexible options for a few hours, overnight or short stays to suit your needs.",
    "Experienced staff who ensure safety, comfort and meaningful engagement.",
  ];

  return (
    <ServicePageTemplate
      serviceName="Respite Care"
      heroTitle="Temporary Relief With Compassionate Care"
      heroDescription="Short‑term, quality care so primary caregivers can rest, while loved ones receive safe, attentive and compassionate support."
      heroImages={heroImages}
      overview="Caring for someone you love can be demanding. Our respite service offers reliable short‑term support so you can recharge with confidence. Whether you need a few hours or several days, our experienced workers maintain continuity of care and keep routines familiar and reassuring."
      features={features}
      benefits={benefits}
      serviceDetails={[
        {
          title: "Flexible Respite Options",
          description:
            "Choose from in-home care, center-based care, or overnight respite services.",
        },
        {
          title: "Qualified Support Workers",
          description:
            "Our team is trained to provide specialized care for individuals with various disabilities.",
        },
      ]}
    />
  );
}
