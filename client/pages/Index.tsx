import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Heart,
  Users,
  Shield,
  Award,
  Star,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";
import { useParallax } from "@/hooks/use-parallax";
import NDISBadge from "@/components/NDISBadge";
import HorizontalScroller from "@/components/HorizontalScroller";
import ServiceCard from "@/components/ServiceCard";

export default function Index() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const parallaxRef = useParallax(0.2);

  const heroContent = [
    {
      image: "/images/female-nurse-taking-care-elderly-person.jpg",
      title: "Compassionate Care For Every Individual",
      description: "Person‑centred care that puts you first.",
    },
    {
      image: "/images/senior-woman-with-her-caregiver-outdoor.jpg",
      title: "Personalized Support Services",
      description: "Support tailored to your goals.",
    },
    {
      image: "/images/medium-shot-smiley-disabled-man-work.jpg",
      title: "Empowering Independence Together",
      description: "Confidence, skills and connection.",
    },
    {
      image: "/images/doctor-talking-senior-man-indoors.jpg",
      title: "Quality Care You Can Trust",
      description: "Reliable support you can trust.",
    },
  ];

  // Auto-rotate hero carousel; preserve scroll position across slide changes.
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === heroContent.length - 1 ? 0 : prevIndex + 1,
      );
    }, 4000);
    return () => clearInterval(interval);
  }, [heroContent.length]);

  return (
    <div className="min-h-screen">
      {/* Hero Section with Left-aligned Text and Image Carousel */}
      <section className="relative min-h-[70vh] sm:min-h-[80vh] lg:min-h-screen flex items-center overflow-hidden">
        {/* Background Images Carousel */}
        <div ref={parallaxRef as any} className="absolute inset-0 will-change-transform">
          {heroContent.map((content, index) => (
            <img
              key={index}
              src={content.image}
              alt=""
              className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000 select-none ${
                index === currentImageIndex ? "opacity-100" : "opacity-0"
              }`}
              loading={index === currentImageIndex ? "eager" : "lazy"}
              decoding="async"
            />
          ))}
          {/* Gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/45 to-transparent" />
        </div>

        {/* Hero Content - Left Aligned */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white -mt-16 md:-mt-24">
              <AnimatePresence mode="wait">
                <motion.h1
                  key={`title-${currentImageIndex}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight tracking-tight drop-shadow"
                >
                  {(() => {
                    const words =
                      heroContent[currentImageIndex].title.split(" ");
                    const splitIndex =
                      words.length > 3 ? 3 : Math.max(1, words.length - 1);
                    const normal = words.slice(0, splitIndex).join(" ");
                    const highlight = words.slice(splitIndex).join(" ");
                    return (
                      <>
                        {normal}
                        {highlight && (
                          <>
                            {" "}
                            <br />
                            <span className="bg-gradient-to-r from-white to-brand-teal text-transparent bg-clip-text drop-shadow">
                              {highlight}
                            </span>
                          </>
                        )}
                      </>
                    );
                  })()}
                </motion.h1>
                <motion.p
                  key={`desc-${currentImageIndex}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4, delay: 0.05 }}
                  className="text-sm md:text-base mb-4 opacity-95 leading-relaxed max-w-sm"
                >
                  {(() => {
                    const desc = heroContent[currentImageIndex].description;
                    const max = 70;
                    return desc.length > max ? desc.slice(0, max) + "…" : desc;
                  })()}
                </motion.p>
              </AnimatePresence>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-brand-teal hover:bg-gray-100 text-lg px-6 py-3 sm:px-8 sm:py-4 transition-transform duration-300 hover:scale-105 whitespace-nowrap"
                >
                  <Link to="/services">
                    Explore Our Services <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="bg-transparent border-white text-white hover:bg-white hover:text-brand-teal text-lg px-6 py-3 sm:px-8 sm:py-4 transition-transform duration-300 hover:scale-105 whitespace-nowrap"
                >
                  <Link to="/contact">Get In Touch</Link>
                </Button>
              </div>
            </div>
            {/* Right side intentionally left for image carousel background */}
          </div>
        </div>

        <NDISBadge className="z-20" />
        {/* Carousel Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
          {heroContent.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentImageIndex ? "bg-white" : "bg-white/50"
              }`}
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => setCurrentImageIndex(index)}
            />
          ))}
        </div>
      </section>

      {/* About Section with Parallax */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-brand-navy mb-6">
                Wellbeing First Care
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our mission is simple: to provide compassionate, person-centered
                care that empowers individuals with disabilities to achieve
                their goals and live their best lives. We believe that everyone
                deserves dignity, respect, and the opportunity to thrive in
                their community.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                With years of experience and a dedicated team of professionals,
                we offer a comprehensive range of NDIS support services tailored
                to meet each person's unique needs and aspirations.
              </p>
              <Button asChild className="bg-brand-teal hover:bg-brand-teal/90">
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </div>
            <div className="relative">
              <img
                src="/images/contented-senior-patient-with-kind-doctor-nursing-home-time-together.jpg"
                alt="Caring support worker helping elderly person"
                className="rounded-lg shadow-xl"
              />
              <NDISBadge />
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-brand-light relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-navy mb-4">
              Fast And Reliable Services
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              See Living Life – Your Perspective, Medication Management –
              Amazing With Organizing Services And Adventures By Committed
              Healthcare Ensured That Has Been Changes And Not Compromises.
            </p>
          </div>

          <div className="marquee hide-scrollbar">
            <div className="marquee-track gap-6 pr-6">
              {(() => {
                const base = [
                  {
                    title: "Autism Support",
                    image: "/images/female-doctor-hospital.jpg",
                    description:
                      "Specialised autism support focusing on communication, routines, sensory needs and independence.",
                    href: "/services",
                  },
                  {
                    title: "Personal Care",
                    image:
                      "/images/female-caretaker-her-client-s-house-taking-care-elderly-person.jpg",
                    description:
                      "Compassionate personal care services tailored to individual needs.",
                    href: "/services/personal-care",
                  },
                  {
                    title: "Assistance with Daily Living",
                    image:
                      "/images/medium-shot-men-working-together-indoors.jpg",
                    description:
                      "Supporting independence through daily living assistance.",
                    href: "/services/daily-living",
                  },
                  {
                    title: "Respite Care",
                    image:
                      "/images/young-woman-doing-sport-exercises-sunrise-beach-morning.jpg",
                    description:
                      "Quality respite care to give families peace of mind.",
                    href: "/services/respite-care",
                  },
                  {
                    title: "Supported Independent Living (SIL)",
                    image:
                      "/images/wellness-exercise-health-lifestyle-nutrition-concept.jpg",
                    description:
                      "Empowering independent living with the right support.",
                    href: "/services/supported-living",
                  },
                  {
                    title: "Specialist Disability Accommodation",
                    image:
                      "/images/doctor-with-stethoscope-hands-hospital-background.jpg",
                    description:
                      "Specialized accommodation designed for accessibility.",
                    href: "/services/disability-accommodation",
                  },
                  {
                    title: "Assist-Travel/ Transport",
                    image:
                      "/images/senior-couple-going-holiday-vacation-putting-luggage-travelling-bags-automobile-trunk-people-leaving-retirement-trip-journey-with-suitcases-trolley-vehicle.jpg",
                    description:
                      "Safe and reliable transport assistance services.",
                    href: "/services/transport",
                  },
                ];
                const list = [...base, ...base, ...base];
                return list.map((service, index) => (
                  <ServiceCard
                    key={index}
                    item={service}
                    className="w-64 sm:w-72 md:w-96 shrink-0"
                    revealOnHover={false}
                  />
                ));
              })()}
            </div>
          </div>

          <div className="text-center mt-12">
            <Button asChild className="bg-brand-teal hover:bg-brand-teal/90">
              <Link to="/services">See All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="/images/smiley-man-woman-talking.jpg"
                alt="Support workers with clients"
                className="rounded-lg shadow-xl"
              />
              <NDISBadge />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-brand-navy mb-6">
                Our Mission Is Simple
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                To provide person-centered care that respects individual choice,
                promotes independence, and enhances quality of life. We are
                committed to creating inclusive communities where everyone can
                participate fully and meaningfully.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Personalized care plans tailored to individual goals",
                  "Experienced and qualified support workers",
                  "Flexible services that adapt to changing needs",
                  "Strong focus on dignity and respect",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-brand-teal rounded-full flex items-center justify-center mt-0.5">
                      <Heart className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <Button asChild className="bg-brand-teal hover:bg-brand-teal/90">
                <Link to="/about">Discover Our Values</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-brand-light relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-navy mb-4">
              Our Values
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              These core values guide everything we do and shape the way we
              deliver care and support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Heart,
                title: "Family Centred Care",
                description:
                  "We involve families and support networks in all aspects of care planning and delivery.",
              },
              {
                icon: Users,
                title: "Compassion",
                description:
                  "Our approach is grounded in empathy, understanding, and genuine care for each individual.",
              },
              {
                icon: Shield,
                title: "Integrity",
                description:
                  "We maintain the highest standards of honesty, transparency, and ethical practice.",
              },
              {
                icon: Award,
                title: "Respect",
                description:
                  "We honor the dignity, choices, and rights of every person we support.",
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <Card className="bg-white border border-gray-100 text-brand-navy shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:ring-2 hover:ring-brand-teal/30">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-brand-teal rounded-full flex items-center justify-center mx-auto mb-4 shadow-md shadow-brand-teal/20">
                      <value.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">
                      {value.title}
                    </h3>
                    <p className="text-gray-700">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'url("/images/female-doctor-hospital.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-navy mb-4">
              See Our Clients Feedback
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Hear from our clients and their families about their experiences
              with Wellbeing First Care.
            </p>
          </div>

          <div className="marquee">
            <div className="marquee-track gap-6 pr-6">
              {(() => {
                const base = [
                  {
                    name: "Sarah Mitchell",
                    rating: 5,
                    platform: "Google Reviews",
                    location: "Melbourne, Australia",
                    review:
                      "Kabir Awan's team provided outstanding personal care and truly listened to our needs. We felt supported every step of the way.",
                  },
                  {
                    name: "David Chen",
                    rating: 5,
                    platform: "Care.com",
                    location: "Melbourne, Australia",
                    review:
                      "Mureed Awan and Arshad Mehmood ensured a smooth experience. Professional, kind and always on time. Exceptional service!",
                  },
                  {
                    name: "Aisha Khan",
                    rating: 5,
                    platform: "Google Reviews",
                    location: "Melbourne, Australia",
                    review:
                      "Kabir Awan guided us through the plan so clearly. The whole team made a real difference in our daily life.",
                  },
                  {
                    name: "Emily Turner",
                    rating: 5,
                    platform: "NDIS Portal",
                    location: "Melbourne, Australia",
                    review:
                      "Arshad Mehmood's coordination and Kabir Awan's follow‑up were incredible. We always felt heard and cared for.",
                  },
                  {
                    name: "Michael Roberts",
                    rating: 5,
                    platform: "NDIS Portal",
                    location: "Melbourne, Australia",
                    review:
                      "Mureed Awan's team delivered reliable support. Friendly staff and consistent quality—highly recommended.",
                  },
                  {
                    name: "Lisa Garcia",
                    rating: 5,
                    platform: "Care.com",
                    location: "Melbourne, Australia",
                    review:
                      "Kabir Awan and the team helped my mother regain confidence. Compassionate care with real results.",
                  },
                  {
                    name: "James Wilson",
                    rating: 5,
                    platform: "Google Reviews",
                    location: "Melbourne, Australia",
                    review:
                      "We appreciate Arshad Mehmood's attention to detail and Mureed Awan's responsiveness. Outstanding all around.",
                  },
                  {
                    name: "Maria Rodriguez",
                    rating: 5,
                    platform: "Google Reviews",
                    location: "Melbourne, Australia",
                    review:
                      "Kabir Awan's team went above and beyond. Their support helped us achieve goals sooner than expected.",
                  },
                ];
                const list = [...base, ...base, ...base];
                return list.map((review, index) => (
                  <Card
                    key={index}
                    className="relative w-64 sm:w-72 md:w-[26rem] shrink-0 group transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl before:content-[''] before:absolute before:inset-0 before:rounded-lg before:bg-gradient-to-br before:from-brand-teal/10 before:to-transparent before:opacity-0 group-hover:opacity-100"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="flex">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-5 h-5 text-yellow-400 fill-current"
                            />
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
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-semibold text-brand-navy">
                              {review.name}
                            </p>
                            <p className="text-sm text-gray-600">
                              {review.location}
                            </p>
                          </div>
                          <div className="text-right">
                            <p className="text-sm font-medium text-brand-teal">
                              {review.platform}
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ));
              })()}
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
      <section className="py-16 bg-brand-teal relative overflow-hidden mx-3 sm:mx-6 lg:mx-8 rounded-3xl shadow-lg mb-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Start Your Journey With Us?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your needs and learn how we can support
            you or your loved one in achieving your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="bg-white text-brand-teal hover:bg-gray-100 text-lg px-8 py-4 transition-transform duration-300 hover:scale-105"
            >
              <Link to="/contact">
                Get In Contact <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white hover:text-brand-teal text-lg px-8 py-4 transition-transform duration-300 hover:scale-105"
            >
              <Link to="/services">Explore Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
