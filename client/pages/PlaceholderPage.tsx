import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Construction } from 'lucide-react';
import { Link } from 'react-router-dom';

interface PlaceholderPageProps {
  title: string;
  description: string;
}

export function PlaceholderPage({ title, description }: PlaceholderPageProps) {
  return (
    <div className="min-h-screen bg-brand-light flex items-center justify-center py-20">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <Construction className="w-16 h-16 text-brand-teal mx-auto mb-4" />
        </div>
        
        <h1 className="text-4xl font-bold text-brand-navy mb-4">
          {title}
        </h1>
        
        <p className="text-xl text-gray-700 mb-8 leading-relaxed">
          {description}
        </p>
        
        <p className="text-lg text-gray-600 mb-8">
          This page is currently under development. Please continue prompting to help us build 
          out this section with the specific content and functionality you need.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild className="bg-brand-teal hover:bg-brand-teal/90">
            <Link to="/">
              Return Home <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
          <Button asChild variant="outline" className="border-brand-teal text-brand-teal hover:bg-brand-teal hover:text-white">
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

// Individual placeholder pages
export function AboutPage() {
  return (
    <PlaceholderPage
      title="About Wellbeing First Care"
      description="Learn more about our mission, values, and the dedicated team that makes our comprehensive disability support services possible."
    />
  );
}

export function ServicesPage() {
  return (
    <PlaceholderPage
      title="Our Services"
      description="Discover our full range of NDIS support services designed to empower individuals with disabilities to achieve their goals and live independently."
    />
  );
}

export function ContactPage() {
  return (
    <PlaceholderPage
      title="Contact Us"
      description="Get in touch with our team to discuss your support needs or ask questions about our services. We're here to help you on your journey."
    />
  );
}

export function CareerPage() {
  return (
    <PlaceholderPage
      title="Join Our Team"
      description="Explore career opportunities with Wellbeing First Care and become part of a team that's making a real difference in people's lives."
    />
  );
}
