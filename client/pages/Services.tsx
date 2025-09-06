import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Heart,
  Users,
  Clock,
  Home,
  Car,
  Shield,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ServiceCard from "@/components/ServiceCard";

export default function Services() {
  const services = [
    {
      title: "Personal Care",
      image:
        "/images/female-caretaker-her-client-s-house-taking-care-elderly-person.jpg",
      description:
        "Compassionate personal care services including grooming, mobility assistance, and incontinence care delivered with dignity and respect.",
      href: "/services/personal-care",
      icon: Heart,
    },
    {
      title: "Assistance with Daily Living",
      image: "/images/medium-shot-men-working-together-indoors.jpg",
      description:
        "Supporting independence through assistance with daily tasks, meal preparation, and household management.",
      href: "/services/daily-living",
      icon: Home,
    },
    {
      title: "Respite Care",
      image:
        "/images/young-woman-doing-sport-exercises-sunrise-beach-morning.jpg",
      description:
        "Quality short-term care that gives primary caregivers a well-deserved break while ensuring loved ones receive excellent support.",
      href: "/services/respite-care",
      icon: Clock,
    },
    {
      title: "Supported Independent Living (SIL)",
      image: "/images/wellness-exercise-health-lifestyle-nutrition-concept.jpg",
      description:
        "Empowering individuals to live independently with the right level of support, skill development, and community engagement.",
      href: "/services/supported-living",
      icon: Users,
    },
    {
      title: "Specialist Disability Accommodation",
      image: "/images/doctor-with-stethoscope-hands-hospital-background.jpg",
      description:
        "Purpose-built housing designed with accessibility features for people with extreme functional impairment or very high support needs.",
      href: "/services/disability-accommodation",
      icon: Shield,
    },
    {
      title: "Assist-Travel/Transport",
      image:
        "/images/senior-couple-going-holiday-vacation-putting-luggage-travelling-bags-automobile-trunk-people-leaving-retirement-trip-journey-with-suitcases-trolley-vehicle.jpg",
      description:
        "Safe and reliable transport assistance to help individuals access their community, attend appointments, and maintain independence.",
      href: "/services/transport",
      icon: Car,
    },
    {
      title: "Autism Support",
      image: "/images/female-doctor-hospital.jpg",
      description:
        "Specialised autism support focusing on communication, routines, sensory needs and independence at home and in the community.",
      href: "/services/autism",
      icon: Users,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(0,0,0,0.6), rgba(0,0,0,0.4)), url("/images/medium-shot-smiley-disabled-man-work.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Services
          </h1>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="text-sm font-medium text-brand-teal mb-2 uppercase tracking-wide">
              RELIABLE SERVICES
            </div>
            <h2 className="text-4xl font-bold text-brand-navy mb-4">
              Fast And Reliable Services
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              See Living Life – Your Perspective, Medication Management –
              Amazing With Organizing Services And Adventures By Committed
              Healthcare Ensured That Has Been Changes And Not Compromises.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                item={service}
                revealOnHover={false}
                fullWidth
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild className="bg-brand-teal hover:bg-brand-teal/90">
              <Link to="/contact">Get In Contact</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Client Feedback */}
      <section className="py-20 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-navy mb-4">
              See Our Clients Feedback
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Real experiences from our clients and their families about the
              quality of care and support they receive from Wellbeing First
              Care.
            </p>
          </div>

          <div className="marquee hide-scrollbar">
            <div className="marquee-track gap-6 pr-6">
              {[
                {
                  name: "Peak Mobility",
                  rating: 5,
                  review:
                    "Highly recommend the support service with NDIS access assistance! They matched us with the perfect care provider for my daughter who needs specialized help for autism support.",
                  service: "Daily Living Support",
                },
                {
                  name: "Shania Awais",
                  rating: 5,
                  review:
                    "Very good team and operation. They provide me home support as a single mother with many kinds of housework and my daughter like them.",
                  service: "Personal Care",
                },
                {
                  name: "Pradeepkumar Kaur",
                  rating: 5,
                  review:
                    "I have been using their services for several months now and am very satisfied with the professional care and support they provide.",
                  service: "Respite Care",
                },
              ]
                .concat([
                  {
                    name: "Emily Turner",
                    rating: 5,
                    review:
                      "Kabir Awan and Mureed Awan ensured we had the right supports from day one. Truly caring and responsive team.",
                    service: "Supported Independent Living",
                  },
                  {
                    name: "Aisha Khan",
                    rating: 5,
                    review:
                      "Arshad Mehmood coordinated transport flawlessly and Kabir Awan followed up personally. Highly recommended!",
                    service: "Transport Services",
                  },
                ])
                .flatMap((r) => [r, r, r])
                .map((review, index) => (
                  <Card
                    key={index}
                    className="relative w-64 sm:w-72 md:w-[26rem] shrink-0 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="flex">
                          {[...Array(review.rating)].map((_, i) => (
                            <div key={i} className="w-5 h-5 text-yellow-400">
                              ★
                            </div>
                          ))}
                        </div>
                        <span className="ml-2 text-sm text-gray-600">
                          {review.rating}.0
                        </span>
                      </div>
                      <p className="text-gray-700 mb-6 leading-relaxed">
                        "{review.review}"
                      </p>
                      <div className="border-t pt-4">
                        <p className="font-semibold text-brand-navy">
                          {review.name}
                        </p>
                        <p className="text-sm text-brand-teal">
                          {review.service}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <Button
              asChild
              variant="outline"
              className="border-brand-teal text-brand-teal hover:bg-brand-teal hover:text-white"
            >
              <Link to="/reviews">Read More Reviews</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-brand-navy relative overflow-hidden mx-3 sm:mx-6 lg:mx-8 rounded-3xl shadow-lg mb-10">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'url("/images/relax-woman-looking-sea-beach.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Access Our Services?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact our team today to discuss your support needs and learn how
            we can help you achieve your goals through our comprehensive NDIS
            services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-brand-teal hover:bg-brand-teal/90"
            >
              <Link to="/contact">
                Get In Contact <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white hover:text-brand-navy"
            >
              <a href="tel:+61451034940">Call: +61 451 034 940</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
