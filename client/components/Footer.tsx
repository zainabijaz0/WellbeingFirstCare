import React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, Facebook, Instagram, Linkedin } from "lucide-react";
import { Logo } from "./Logo";

export function Footer() {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
    { name: "Career", href: "/career" },
    { name: "Reviews", href: "/reviews" },
  ];

  const services = [
    { name: "Personal Care", href: "/services/personal-care" },
    { name: "Assistance with Daily Living", href: "/services/daily-living" },
    { name: "Respite Care", href: "/services/respite-care" },
    { name: "Supported Living", href: "/services/supported-living" },
    {
      name: "Disability Accommodation",
      href: "/services/disability-accommodation",
    },
    { name: "Assist-Travel/Transport", href: "/services/transport" },
    { name: "Autism Support", href: "/services/autism" },
  ];

  return (
    <footer className="bg-brand-navy text-white relative mt-10">
      {/* Top curve */}
      <div className="absolute -top-8 left-0 right-0 select-none pointer-events-none">
        <svg
          className="w-full h-8"
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          aria-hidden
        >
          <path
            d="M0,64 C240,16 480,16 720,64 C960,112 1200,112 1440,64 L1440,0 L0,0 Z"
            fill="#ffffff"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <img src="/images/footer-logo.png" alt="Wellbeing First Care" className="h-16 md:h-20 w-auto mb-4 select-none" loading="lazy" decoding="async" />
            <p className="text-gray-100 text-sm leading-relaxed mb-4">
              We improve lives for individuals with disabilities through
              compassionate, comprehensive support.
            </p>
            <div className="mt-3 inline-flex items-center gap-3">
              <div className="rounded-full bg-white p-1.5 shadow ring-1 ring-black/5">
                <img
                  src="/images/NDIS.png"
                  alt="NDIS"
                  className="h-10 w-auto object-contain select-none"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    onClick={(e) => {
                      if (link.href === "/") {
                        e.preventDefault();
                        window.history.pushState({}, "", "/");
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }
                    }}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <p className="text-gray-300 text-sm">
                Stay updated with the latest news, exclusive offers, and
                inspiring stories. Subscribe to our newsletter today!
              </p>

              <div className="flex items-center gap-2 text-sm">
                <Phone className="w-4 h-4 text-brand-teal" />
                <span className="text-gray-300">+61 451 034 940</span>
              </div>

              <div className="flex items-center gap-2 text-sm">
                <Phone className="w-4 h-4 text-brand-teal" />
                <span className="text-gray-300">+61 451 185 550</span>
              </div>

              <div className="flex items-center gap-2 text-sm">
                <Mail className="w-4 h-4 text-brand-teal" />
                <span className="text-gray-300">
                  info@wellbeingfirstcare.com
                </span>
              </div>

              {/* Social Media */}
              <div className="flex items-center gap-3 pt-2">
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="text-center">
            <p className="text-gray-400 text-sm">
              © 2024 All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
