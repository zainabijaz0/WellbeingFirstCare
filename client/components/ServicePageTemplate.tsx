import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Check, Clock, Users, Heart, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import NDISBadge from "@/components/NDISBadge";
import { motion, AnimatePresence } from "framer-motion";

interface ServicePageProps {
  serviceName: string;
  heroTitle: string;
  heroDescription: string;
  heroImages: string[];
  overview: string;
  features: string[];
  benefits: Array<{
    icon: any;
    title: string;
    description: string;
  }>;
  serviceDetails: Array<{
    title: string;
    description: string;
  }>;
  bgColor?: string;
}

export function ServicePageTemplate({
  serviceName,
  heroTitle,
  heroDescription,
  heroImages,
  overview,
  features,
  benefits,
  serviceDetails,
  bgColor = "bg-brand-teal",
}: ServicePageProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  // Auto-rotate carousel and preserve scroll position across slide changes.
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1,
      );
    }, 4000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <div className="min-h-screen">
      {/* Hero Section with Left-aligned Text and Image Carousel */}
      <section className="relative h-screen flex items-center overflow-hidden">
        {/* Background Images Carousel */}
        <div className="absolute inset-0">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentImageIndex ? "opacity-100" : "opacity-0"
              }`}
              style={{
                backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.6), rgba(0,0,0,0.4)), url("${image}")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          ))}
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
                  {heroTitle || serviceName}
                </motion.h1>
              </AnimatePresence>
              <motion.p
                key={`hero-desc-${currentImageIndex}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, delay: 0.05 }}
                className="text-sm md:text-base mb-4 opacity-95 leading-relaxed max-w-md"
              >
                {(() => {
                  const max = 90;
                  return heroDescription.length > max
                    ? heroDescription.slice(0, max) + "…"
                    : heroDescription;
                })()}
              </motion.p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-white text-brand-teal hover:bg-gray-100 text-lg px-6 py-3 sm:px-8 sm:py-4 whitespace-nowrap"
                >
                  <Link to="/contact">
                    Get In Contact <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="bg-transparent border-white text-white hover:bg-white hover:text-brand-teal text-lg px-8 py-4"
                >
                  <Link to="/services">View All Services</Link>
                </Button>
              </div>
            </div>
            {/* Right side intentionally left for image carousel background */}
          </div>
        </div>

        <NDISBadge position="top-right" size="lg" className="z-20" />
        {/* Carousel Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
          {heroImages.map((_, index) => (
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

      {/* Service Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-sm font-medium text-brand-teal mb-2 uppercase tracking-wide">
                {serviceName.toUpperCase()}
              </div>
              <h2 className="text-3xl font-bold text-brand-navy mb-6">
                {serviceName}
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                {overview}
              </p>
              <Button className="bg-brand-teal hover:bg-brand-teal/90">
                <Link to="/contact">Get In Contact</Link>
              </Button>
            </div>
            <div className="relative">
              <img
                src={heroImages[0]}
                alt={serviceName}
                className="rounded-lg shadow-xl"
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
                onError={(e) => (e.currentTarget.style.display = "none")}
              />
              <NDISBadge />
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-20 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-navy mb-4">
              What We Offer
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Comprehensive {serviceName.toLowerCase()} designed to meet your
              unique needs and support your independence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow duration-300"
              >
                <CardContent className="p-8">
                  <div
                    className={`w-16 h-16 ${index === 1 ? "bg-brand-teal" : "bg-brand-orange"} rounded-lg flex items-center justify-center mx-auto mb-6`}
                  >
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-brand-navy mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src={heroImages[1] || heroImages[0]}
                alt={`${serviceName} benefits`}
                className="rounded-lg shadow-xl"
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
                onError={(e) => (e.currentTarget.style.display = "none")}
              />
              <NDISBadge />
            </div>
            <div>
              <div className="text-sm font-medium text-brand-teal mb-2 uppercase tracking-wide">
                SERVICE BENEFITS
              </div>
              <h2 className="text-4xl font-bold text-brand-navy mb-6">
                The Benefits Of Our {serviceName}
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Our {serviceName.toLowerCase()} provides dignity, comfort, and
                individualized support. Here's why our clients trust us:
              </p>
              <ul className="space-y-4 mb-8">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-brand-teal rounded-full flex items-center justify-center mt-0.5">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-20 bg-brand-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              How to Access Our Assistance
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Starting with our {serviceName.toLowerCase()} service is simple.
              Contact us to discuss your needs, and we will create a
              personalized care plan to support you or your loved one
              effectively.
            </p>
          </div>

          <div className="text-center">
            <Button
              size="lg"
              className="bg-brand-teal hover:bg-brand-teal/90 text-lg px-8 py-4"
            >
              <Link to="/contact">
                Get In Contact <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
