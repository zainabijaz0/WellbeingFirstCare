import React from "react";
import { ServicePageTemplate } from "@/components/ServicePageTemplate";
import {
  Users,
  Clock,
  Home,
  Heart,
  Utensils,
  ShoppingCart,
} from "lucide-react";

export default function DailyLiving() {
  const heroImages = [
    "\/images\/medium-shot-men-working-together-indoors.jpg",
    "\/images\/medium-shot-woman-getting-tasty-breakfast.jpg",
    "\/images\/smiley-man-woman-talking.jpg",
  ];

  const benefits = [
    {
      icon: Utensils,
      title: "Personal Hygiene Assistance",
      description:
        "Helping with bathing, dressing, and grooming to ensure cleanliness and self-esteem.",
    },
    {
      icon: Home,
      title: "Meal Preparation",
      description:
        "Planning and cooking nutritious meals that cater to dietary needs and preferences.",
    },
    {
      icon: ShoppingCart,
      title: "Household Management",
      description:
        "Assisting with light cleaning, laundry, and other household tasks to maintain a comfortable living environment.",
    },
  ];

  const features = [
    "Trained professionals providing gentle, reliable assistance with daily activities.",
    "Personalised support tailored to your routine, goals, and preferences.",
    "A dignity‑first approach that promotes comfort, choice, and confidence.",
  ];

  return (
    <ServicePageTemplate
      serviceName="Assistance with Daily Living"
      heroTitle="Support For Everyday Living"
      heroDescription="Practical, respectful help with day‑to‑day activities so you can live comfortably and independently at home."
      heroImages={heroImages}
      overview="Our Assistance with Daily Living service is designed to strengthen independence while providing the right level of support. From personal hygiene to meal preparation and household tasks, our experienced team delivers compassionate assistance that upholds your dignity and preferences. Together, we create a tailored plan that fits your routine and goals."
      features={features}
      benefits={benefits}
      serviceDetails={[
        {
          title: "Comprehensive Daily Support",
          description:
            "We provide assistance with all aspects of daily living to promote independence.",
        },
        {
          title: "Flexible Scheduling",
          description:
            "Our services can be scheduled to fit your routine and preferences.",
        },
      ]}
    />
  );
}
