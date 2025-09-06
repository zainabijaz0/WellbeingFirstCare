import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { Logo } from "./Logo";
import { Button } from "./ui/button";
import { AnimatePresence, motion } from "framer-motion";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    {
      name: "Services",
      href: "/services",
      hasDropdown: true,
      submenu: [
        { name: "Personal Care", href: "/services/personal-care" },
        { name: "Daily Living Tasks", href: "/services/daily-living" },
        { name: "Respite Care", href: "/services/respite-care" },
        {
          name: "Supported Independent Living (SIL)",
          href: "/services/supported-living",
        },
        {
          name: "Specialist Disability Accommodation (SDA)",
          href: "/services/disability-accommodation",
        },
        { name: "Assist-Travel/Transport", href: "/services/transport" },
        { name: "Autism Support", href: "/services/autism" },
      ],
    },
    { name: "About", href: "/about" },
    { name: "Reviews", href: "/reviews" },
    { name: "Contact", href: "/contact" },
    { name: "Career", href: "/career" },
  ];

  const isActiveLink = (href: string) => {
    if (href === "/" && location.pathname === "/") return true;
    if (href !== "/" && location.pathname.startsWith(href)) return true;
    return false;
  };

  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setIsServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-brand-teal text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-xs sm:text-sm">
          <div className="flex items-center gap-2 whitespace-nowrap">
            <Phone className="w-4 h-4" />
            <a href="tel:+61451034940" className="hover:underline">
              +61 451 034 940
            </a>
            <span className="hidden sm:inline">|</span>
            <a
              href="tel:+61451185550"
              className="hidden sm:inline hover:underline"
            >
              +61 451 185 550
            </a>
          </div>
          <a
            href="tel:+61451034940"
            className="px-2 py-1 rounded-md bg-white/15 hover:bg-white/25 transition-colors"
          >
            Call Now
          </a>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-sm border-b sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0">
              <Logo showText={false} size="lg" />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <div key={item.name} className="relative">
                  {item.hasDropdown ? (
                    <div className="relative" ref={dropdownRef}>
                      <button
                        type="button"
                        className={`flex items-center text-sm font-medium transition-colors duration-200 hover:text-brand-teal ${
                          isActiveLink(item.href)
                            ? "text-brand-teal border-b-2 border-brand-teal pb-1"
                            : "text-brand-navy"
                        }`}
                        onClick={() => setIsServicesOpen((v) => !v)}
                        aria-expanded={isServicesOpen}
                        aria-haspopup="menu"
                      >
                        {item.name}
                        <ChevronDown className="ml-1 w-4 h-4" />
                      </button>

                      {isServicesOpen && (
                        <div
                          className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-lg border py-2 z-50"
                          role="menu"
                        >
                          <Link
                            to={item.href}
                            className="block px-4 py-3 text-sm text-brand-navy hover:bg-brand-light hover:text-brand-teal transition-colors duration-200"
                            onClick={() => setIsServicesOpen(false)}
                          >
                            View all services
                          </Link>
                          <div className="my-1 h-px bg-gray-100" />
                          {item.submenu?.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.href}
                              className="block px-4 py-3 text-sm text-brand-navy hover:bg-brand-light hover:text-brand-teal transition-colors duration-200"
                              onClick={() => setIsServicesOpen(false)}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className={`text-sm font-medium transition-colors duration-200 hover:text-brand-teal ${
                        isActiveLink(item.href)
                          ? "text-brand-teal border-b-2 border-brand-teal pb-1"
                          : "text-brand-navy"
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Button + NDIS badge */}
            <div className="hidden md:flex items-center gap-4">
              <Button
                asChild
                className="bg-brand-teal hover:bg-brand-teal/90 text-white"
              >
                <Link to="/about">Explore Us</Link>
              </Button>
              <div className="rounded-full bg-white p-1.5 shadow ring-1 ring-black/5">
                <img
                  src="/images/NDIS.png"
                  alt="NDIS registered provider"
                  className="h-10 w-auto object-contain select-none"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>

            {/* Mobile menu button */}
            <button
              type="button"
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-brand-navy hover:text-brand-teal focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-teal"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="md:hidden bg-white border-t overflow-hidden"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                  <div key={item.name}>
                    <Link
                      to={item.href}
                      className={`block px-3 py-2 text-base font-medium transition-colors duration-200 hover:text-brand-teal hover:bg-gray-50 ${
                        isActiveLink(item.href)
                          ? "text-brand-teal bg-gray-50"
                          : "text-brand-navy"
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                    {/* Mobile submenu */}
                    {item.hasDropdown && item.submenu && (
                      <div className="pl-6 space-y-1">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.href}
                            className="block px-3 py-2 text-sm text-brand-gray hover:text-brand-teal hover:bg-gray-50"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="px-3 py-2 space-y-3">
                  <Button
                    asChild
                    className="w-full bg-brand-teal hover:bg-brand-teal/90 text-white"
                  >
                    <Link to="/about" onClick={() => setIsMenuOpen(false)}>
                      Explore Us
                    </Link>
                  </Button>
                  <div className="flex justify-end">
                    <div className="rounded-full bg-white p-1.5 shadow ring-1 ring-black/5">
                      <img
                        src="/images/NDIS.png"
                        alt="NDIS registered provider"
                        className="h-9 w-auto object-contain select-none"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
