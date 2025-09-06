import React from "react";
import { ServicePageTemplate } from "@/components/ServicePageTemplate";
import { Car, MapPin, Clock } from "lucide-react";

export default function AssistTransport() {
  return (
    <ServicePageTemplate
      serviceName="Assist-Travel/Transport"
      heroTitle="Reliable, safe transport for everyday life"
      heroDescription="Door-to-door assistance to help you get to appointments, education, work, and community activities with confidence."
      heroImages={[
        "/images/senior-couple-going-holiday-vacation-putting-luggage-travelling-bags-automobile-trunk-people-leaving-retirement-trip-journey-with-suitcases-trolley-vehicle.jpg",
        "/images/high-angle-woman-working-as-travel-agent.jpg",
        "/images/relax-woman-looking-sea-beach.jpg",
      ]}
      overview="Our transport assistance ensures you can access the community, attend appointments, and participate in everyday life. We provide punctual, friendly drivers and vehicles suited to your mobility needs."
      features={[
        "Door-to-door pickups and drop-offs",
        "Flexible scheduling for regular and one-off trips",
        "Support with mobility aids and safe transfers",
        "Transport to medical, social, education and recreation activities",
      ]}
      benefits={[
        {
          icon: Car,
          title: "Safe & Comfortable",
          description:
            "Clean, well-maintained vehicles and trained staff focused on your comfort.",
        },
        {
          icon: Clock,
          title: "On Time",
          description:
            "Reliable pickups and clear communication so you’re never left waiting.",
        },
        {
          icon: MapPin,
          title: "Go Anywhere",
          description:
            "From appointments to community events—get where you need to be with ease.",
        },
      ]}
      serviceDetails={[
        {
          title: "Booking made easy",
          description:
            "Schedule recurring transport or ad‑hoc trips. We confirm details and keep you updated before arrival.",
        },
        {
          title: "Accessible options",
          description:
            "Vehicle options to suit different support and mobility requirements. Let us know your needs when booking.",
        },
      ]}
    />
  );
}
