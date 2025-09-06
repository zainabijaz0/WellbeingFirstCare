import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Heart,
  Users,
  Shield,
  Award,
  ArrowRight,
  CheckCircle,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import NDISBadge from "@/components/NDISBadge";
import ServiceCard from "@/components/ServiceCard";

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Parallax */}
      <section className="relative h-96 sm:h-[28rem] md:h-[32rem] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(0,0,0,0.6), rgba(0,0,0,0.4)), url("/images/medium-shot-smiley-disabled-man-work.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6">
            About Us
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed">
            Dedicated to providing exceptional care and support services that
            empower individuals with disabilities.
          </p>
        </div>
        <NDISBadge className="z-20" />
      </section>

      {/* Our Story */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <div className="text-sm font-medium text-brand-teal mb-2 uppercase tracking-wide">
                OUR STORY
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
                <span className="bg-gradient-to-r from-brand-teal to-brand-purple bg-clip-text text-transparent">
                  Wellbeing First Care
                </span>
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                At Wellbeing First Care, we are dedicated to providing
                exceptional support services for individuals with disabilities.
                Our mission is to empower our clients to live independently,
                pursue their goals, and participate fully in their communities.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Founded on the principles of dignity, respect, and
                person-centered care, we understand that every individual has
                unique needs, preferences, and aspirations. Our experienced team
                of support workers is committed to delivering personalized
                services that enhance quality of life and promote independence.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                As a registered NDIS provider, we offer a comprehensive range of
                support services designed to meet the diverse needs of our
                clients across Australia. From personal care and daily living
                assistance to specialized accommodation and transport services,
                we are here to support you every step of the way.
              </p>
              <Button asChild className="bg-brand-teal hover:bg-brand-teal/90">
                <Link to="/contact">Get In Touch</Link>
              </Button>
            </div>
            <div className="relative mt-8 lg:mt-0">
              <img
                src="/images/contented-senior-patient-with-kind-doctor-nursing-home-time-together.jpg"
                alt="Support worker helping elderly client"
                className="rounded-lg shadow-xl w-full h-auto object-cover"
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
              />
              <NDISBadge />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-12 sm:py-16 md:py-20 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-navy mb-4">
              Our Values
            </h2>
            <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto">
              These fundamental values guide every aspect of our service
              delivery and shape our commitment to excellence in disability
              support.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                icon: Heart,
                title: "Family Centred Care",
                description:
                  "We recognize the importance of family and support networks in providing holistic care that encompasses the entire support system.",
              },
              {
                icon: Users,
                title: "Compassion",
                description:
                  "Every interaction is guided by empathy, understanding, and genuine care for the wellbeing of those we support.",
              },
              {
                icon: Shield,
                title: "Integrity",
                description:
                  "We maintain the highest standards of honesty, transparency, and ethical practice in all our services.",
              },
              {
                icon: Award,
                title: "Respect",
                description:
                  "We honor the dignity, autonomy, and individual choices of every person we have the privilege to support.",
              },
            ].map((value, index) => (
              <Card
                key={index}
                className="group text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-transparent hover:border-brand-teal/40"
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-brand-teal rounded-full flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-brand-navy mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Caring Support Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="relative">
              <img
                src="/images/female-nurse-taking-care-elderly-person.jpg"
                alt="Caring support for independent living"
                className="rounded-lg shadow-xl w-full h-auto object-cover"
              />
              <NDISBadge />
            </div>
            <div className="mt-8 lg:mt-0">
              <div className="text-sm font-medium text-brand-teal mb-2 uppercase tracking-wide">
                CARING SUPPORT
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-navy mb-4 sm:mb-6">
                Caring Support For Independent Living
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                At Wellbeing First Care, we believe everyone deserves to live
                with dignity and independence. Our comprehensive support
                services are designed to help individuals with disabilities
                achieve their personal goals and participate fully in community
                life.
              </p>

              <ul className="space-y-4 mb-8">
                {[
                  "Individual and Group Living",
                  "Personal Development Plans",
                  "Community Access Programs",
                  "Skill Building Activities",
                  "Recreational Support Services",
                  "Family & Caregiver Support (FCO)",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-brand-teal flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>

              <Button asChild className="bg-brand-teal hover:bg-brand-teal/90">
                <Link to="/services">
                  Explore Our Services <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services (clickable like homepage) */}
      <section className="py-12 sm:py-16 md:py-20 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-navy">Our Services</h2>
            <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto">Explore our most in‑demand supports.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { title: "Respite Care", image: "/images/young-woman-doing-sport-exercises-sunrise-beach-morning.jpg", description: "Quality respite care for families.", href: "/services/respite-care" },
              { title: "Individual Support", image: "/images/medium-shot-men-working-together-indoors.jpg", description: "Personalised one‑on‑one support.", href: "/services/daily-living" },
              { title: "Specialist Disability Accommodation (SDA)", image: "/images/doctor-with-stethoscope-hands-hospital-background.jpg", description: "Purpose‑built accessible housing.", href: "/services/disability-accommodation" },
            ].map((s, i) => (
              <ServiceCard key={i} item={s} fullWidth ndisPosition="bottom-left" ndisSize="md" />
            ))}
          </div>
        </div>
      </section>

      {/* Client Feedback Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-navy mb-4">
              See Our Clients Feedback
            </h2>
            <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto">
              Our clients and their families share their experiences with our
              compassionate care and professional support services.
            </p>
          </div>

          <div className="marquee hide-scrollbar">
            <div className="marquee-track gap-6 pr-6">
              {(() => {
                const base = [
                  {
                    name: "Peak Mobility",
                    rating: 5,
                    review:
                      "Highly recommend their NDIS access assistance! Kabir Awan and team matched us with the perfect care provider for autism support.",
                    verified: true,
                  },
                  {
                    name: "Shania Awais",
                    rating: 5,
                    review:
                      "Very good team and operation. Arshad Mehmood coordinated support that fits our routine perfectly.",
                    verified: true,
                  },
                  {
                    name: "Pradeepkumar Kaur",
                    rating: 5,
                    review:
                      "Consistently professional care. Mureed Awan ensured smooth service delivery every time.",
                    verified: true,
                  },
                  {
                    name: "David Chen",
                    rating: 5,
                    review:
                      "Our support plan was tailored perfectly. Communication is excellent and carers are always on time.",
                    verified: true,
                  },
                  {
                    name: "Sarah Mitchell",
                    rating: 5,
                    review:
                      "Compassionate workers who really listen. My daughter looks forward to every visit.",
                    verified: true,
                  },
                  {
                    name: "Michael Roberts",
                    rating: 5,
                    review:
                      "Transition to SIL was smooth and respectful. The team handled everything professionally.",
                    verified: true,
                  },
                  {
                    name: "Emma Thompson",
                    rating: 5,
                    review:
                      "Responsive coordinators and flexible scheduling. Great experience overall.",
                    verified: true,
                  },
                  {
                    name: "Maria Rodriguez",
                    rating: 5,
                    review:
                      "Reliable transport and friendly drivers. Has made community access so much easier.",
                    verified: true,
                  },
                ];
                const list = [...base, ...base];
                return list.map((review, index) => (
                  <Card
                    key={index}
                    className="relative w-64 sm:w-72 md:w-[28rem] shrink-0 group transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
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
                            {review.verified && (
                              <p className="text-sm text-brand-teal">
                                ✓ Verified Client
                              </p>
                            )}
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
      <section className="py-12 sm:py-16 md:py-20 bg-brand-teal relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'url("/images/female-doctor-hospital.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            transform: `translateY(${scrollY * 0.1}px)`,
          }}
        />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            Ready to Experience Our Care?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join our growing family of satisfied clients and discover how we can
            support you or your loved one in achieving your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="bg-white text-brand-teal hover:bg-gray-100"
            >
              <Link to="/contact">
                Contact Us Today <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="bg-white text-brand-teal hover:bg-gray-100"
            >
              <Link to="/services">View Our Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
