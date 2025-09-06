import React from "react";
import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import HorizontalScroller from "@/components/HorizontalScroller";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import NDISBadge from "@/components/NDISBadge";

export default function Reviews() {
  const allReviews = [
    {
      name: "Sarah Mitchell",
      rating: 5,
      review:
        "The care and support my daughter receives from Wellbeing First Care has been life-changing. The team is professional, caring, and truly understands her needs. We couldn't be happier with the service.",
      platform: "Google Reviews",
      location: "Melbourne, Australia",
      date: "December 2023",
      service: "Personal Care",
    },
    {
      name: "David Chen",
      rating: 5,
      review:
        "Outstanding service and exceptional staff. They treat my son with such respect and kindness. The personalized care plan has helped him achieve goals we never thought possible. Highly recommended!",
      platform: "Care.com",
      location: "Melbourne, Australia",
      date: "November 2023",
      service: "Supported Independent Living",
    },
    {
      name: "Pradeepkumar Kaur",
      rating: 5,
      review:
        "I am very happy with the quality of care provided. The support workers are reliable, professional, and genuinely care about my wellbeing. They have made such a positive difference in my daily life.",
      platform: "NDIS Portal",
      location: "Melbourne, Australia",
      date: "October 2023",
      service: "Daily Living Assistance",
    },
    {
      name: "Emma Thompson",
      rating: 5,
      review:
        "Fantastic respite care service! The staff are so understanding and patient with my mother. It gives me peace of mind knowing she's in such good hands when I need to take a break.",
      platform: "Google Reviews",
      location: "Melbourne, Australia",
      date: "October 2023",
      service: "Respite Care",
    },
    {
      name: "Michael Roberts",
      rating: 5,
      review:
        "The accommodation support has been incredible. The team helped me set up my new place and continues to provide ongoing support. I feel more independent than ever before.",
      platform: "NDIS Portal",
      location: "Melbourne, Australia",
      date: "September 2023",
      service: "Specialist Disability Accommodation",
    },
    {
      name: "Lisa Garcia",
      rating: 5,
      review:
        "Transport assistance has opened up so many opportunities for my brother. The drivers are friendly and always on time. He can now participate in community activities independently.",
      platform: "Care.com",
      location: "Melbourne, Australia",
      date: "September 2023",
      service: "Transport Services",
    },
    {
      name: "James Wilson",
      rating: 5,
      review:
        "Professional, compassionate, and reliable. The support workers go above and beyond to help me maintain my independence. I couldn't ask for better care.",
      platform: "Google Reviews",
      location: "Melbourne, Australia",
      date: "August 2023",
      service: "Personal Care",
    },
    {
      name: "Maria Rodriguez",
      rating: 5,
      review:
        "The team at Wellbeing First Care treats my daughter like family. They understand her unique needs and have helped her develop new skills and confidence.",
      platform: "NDIS Portal",
      location: "Melbourne, Australia",
      date: "August 2023",
      service: "Daily Living Skills",
    },
    {
      name: "Robert Anderson",
      rating: 5,
      review:
        "Excellent service from start to finish. The care coordinators are responsive and always available when we need them. Highly recommend to other families.",
      platform: "Care.com",
      location: "Melbourne, Australia",
      date: "July 2023",
      service: "Family Support",
    },
  ];

  const stats = [
    { label: "Total Reviews", value: "150+" },
    { label: "Average Rating", value: "4.9/5" },
    { label: "Google Reviews", value: "85+" },
    { label: "Satisfied Families", value: "200+" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-fixed" style={{
          backgroundImage: 'linear-gradient(to right, rgba(0,0,0,0.55), rgba(0,0,0,0.35)), url("/images/doctor-with-stethoscope-hands-hospital-background.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center 20%'
        }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            What Our Clients Say
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Read genuine feedback from our clients and their families about
            their experiences with Wellbeing First Care's support services.
          </p>
        </div>
        <NDISBadge className="z-20" />
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-brand-teal mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Excellence */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-brand-navy mb-3">
              Our Leadership
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Guided by excellence and a commitment to person‑centred care.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Kabir Awan",
                role: "Co‑Founder",
                note: "Renowned for compassionate leadership and outstanding client outcomes.",
                phone: "+61 451 034 940",
              },
              {
                name: "Mureed Awan",
                role: "Co‑Founder",
                note: "Drives service quality and reliability with an unwavering focus on dignity.",
                phone: "+61 451 185 550",
              },
              {
                name: "Arshad Mehmood",
                role: "Operations",
                note: "Ensures smooth delivery of supports with attention to every detail.",
              },
            ].map((p) => (
              <div
                key={p.name}
                className="rounded-lg border p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-semibold text-brand-navy">
                  {p.name}
                </h3>
                <p className="text-sm text-brand-teal mb-2">{p.role}</p>
                <p className="text-gray-700 mb-3">{p.note}</p>
                {p.phone && (
                  <a
                    href={`tel:${p.phone.replace(/\s/g, "")}`}
                    className="text-brand-teal text-sm font-medium"
                  >
                    {p.phone}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-navy mb-4">
              Client Testimonials
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Every review represents a real person whose life has been
              positively impacted by our compassionate care and professional
              support services.
            </p>
          </div>

          <div className="marquee hide-scrollbar">
            <div className="marquee-track gap-6 pr-6">
              {(() => {
                const list = [...allReviews, ...allReviews, ...allReviews];
                return list.map((review, index) => (
                  <Card
                    key={index}
                    className="relative w-64 sm:w-72 md:w-[28rem] shrink-0 group transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl before:content-[''] before:absolute before:inset-0 before:rounded-lg before:bg-gradient-to-br before:from-brand-teal/10 before:to-transparent before:opacity-0 group-hover:opacity-100"
                  >
                    <CardContent className="p-6">
                      {/* Quote Icon */}
                      <Quote className="w-8 h-8 text-brand-teal mb-4" />

                      {/* Rating */}
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

                      {/* Review Text */}
                      <p className="text-gray-700 mb-6 leading-relaxed">
                        "{review.review}"
                      </p>

                      {/* Service Badge */}
                      <div className="mb-4">
                        <span className="inline-block bg-brand-teal/10 text-brand-teal text-xs font-semibold px-2 py-1 rounded-full">
                          {review.service}
                        </span>
                      </div>

                      {/* Reviewer Info */}
                      <div className="border-t pt-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-semibold text-brand-navy">
                              {review.name}
                            </p>
                            <p className="text-sm text-gray-600">
                              {review.location}
                            </p>
                            <p className="text-xs text-gray-500">
                              {review.date}
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
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-brand-teal mx-3 sm:mx-6 lg:mx-8 rounded-3xl shadow-lg mb-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
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
              <Link to="/contact">Contact Us Today</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white hover:text-brand-teal"
            >
              <Link to="/services">View Our Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
