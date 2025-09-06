import React from "react";
import { ServicePageTemplate } from "@/components/ServicePageTemplate";
import { Shield, Home, Users, Check } from "lucide-react";

export default function SDA() {
  return (
    <ServicePageTemplate
      serviceName="Specialist Disability Accommodation (SDA)"
      heroTitle="Purpose-built homes for independence"
      heroDescription="Accessible, safe, and supportive living environments designed for people with extreme functional impairment or very high support needs."
      heroImages={[
        "/images/doctor-with-stethoscope-hands-hospital-background.jpg",
        "/images/old-patient-suffering-from-parkinson (1).jpg",
        "/images/female-doctor-hospital.jpg",
      ]}
      overview="Our Specialist Disability Accommodation (SDA) provides modern, accessible homes tailored to individual needs. We work closely with participants, families, and support coordinators to ensure the right housing solution that promotes safety, comfort, and independence."
      features={[
        "High accessibility features (ramps, wider doorways, assistive tech)",
        "24/7 on-call support options and emergency response systems",
        "Choice of shared or single-occupancy living arrangements",
        "Proximity to community, transport, and essential services",
      ]}
      benefits={[
        {
          icon: Shield,
          title: "Safe & Secure",
          description:
            "Homes equipped with safety systems and assistive technologies for peace of mind.",
        },
        {
          icon: Home,
          title: "Truly Accessible",
          description:
            "Purpose-built layouts that remove barriers and support everyday living.",
        },
        {
          icon: Users,
          title: "Community Living",
          description:
            "Options for shared living with compatible peers and support staff.",
        },
      ]}
      serviceDetails={[
        {
          title: "Who is SDA for?",
          description:
            "Participants with SDA funding in their NDIS plan who require specialist housing to support daily living and reduce the need for intensive person-to-person supports.",
        },
        {
          title: "How we help",
          description:
            "We assist with property matching, transition planning, and ongoing tenancy support to ensure comfort, stability, and long-term success.",
        },
      ]}
    />
  );
}
