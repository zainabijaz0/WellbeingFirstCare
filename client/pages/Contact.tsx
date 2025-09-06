import React, { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import NDISBadge from "@/components/NDISBadge";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState<null | { ok: boolean; error?: string }>(
    null,
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setResult(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json?.error || "Failed to send");
      setResult({ ok: true });
      setFormData({ name: "", email: "", number: "", message: "" });
    } catch (err: any) {
      setResult({ ok: false, error: err.message });
    } finally {
      setSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-fixed"
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(0,0,0,0.6), rgba(0,0,0,0.4)), url("/images/female-doctor-hospital.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "center 20%",
          }}
        />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold">Contact Us</h1>
        </div>
        <NDISBadge className="z-20" />
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-4xl font-bold text-brand-navy mb-6">
                Send Us Message
                <br />
                We Will Get Back
                <br />
                To Your ASAP!
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                At Wellbeing First Care, we are here to support you every step
                of the way. Whether you have questions about our services, need
                assistance, or would like to provide feedback, our team is
                always ready to help. Reach out to us through any of the
                following methods:
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-brand-teal rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-navy mb-1">
                      Contact
                    </h3>
                    <p className="text-gray-600">+61 451 034 940</p>
                    <p className="text-gray-600">+61 451 185 550</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-brand-teal rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-navy mb-1">
                      Email
                    </h3>
                    <p className="text-gray-600">
                      info@wellbeingfirstcare.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-brand-teal rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-navy mb-1">
                      Location
                    </h3>
                    <p className="text-gray-600">Serving Australia-wide</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-brand-teal rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-navy mb-1">
                      Business Hours
                    </h3>
                    <p className="text-gray-600">
                      Mon - Fri: 8:00 AM - 6:00 PM
                    </p>
                    <p className="text-gray-600">
                      Emergency support available 24/7
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="shadow-lg border-0">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label
                        htmlFor="name"
                        className="text-sm font-medium text-brand-navy"
                      >
                        Name *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="mt-1 focus:ring-brand-teal focus:border-brand-teal"
                        placeholder="Your full name"
                      />
                    </div>

                    <div>
                      <Label
                        htmlFor="email"
                        className="text-sm font-medium text-brand-navy"
                      >
                        Email *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="mt-1 focus:ring-brand-teal focus:border-brand-teal"
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div>
                      <Label
                        htmlFor="number"
                        className="text-sm font-medium text-brand-navy"
                      >
                        Phone Number
                      </Label>
                      <Input
                        id="number"
                        name="number"
                        type="tel"
                        value={formData.number}
                        onChange={handleChange}
                        className="mt-1 focus:ring-brand-teal focus:border-brand-teal"
                        placeholder="Your phone number"
                      />
                    </div>

                    <div>
                      <Label
                        htmlFor="message"
                        className="text-sm font-medium text-brand-navy"
                      >
                        Message *
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        className="mt-1 focus:ring-brand-teal focus:border-brand-teal resize-none"
                        placeholder="Tell us about your needs, questions, or how we can help you..."
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={submitting}
                      className="w-full bg-brand-teal hover:bg-brand-teal/90 disabled:opacity-60 text-lg py-3"
                    >
                      <Send className="w-5 h-5 mr-2" />
                      {submitting ? "Sending..." : "Submit"}
                    </Button>
                    {result && (
                      <p
                        className={
                          "mt-3 text-sm " +
                          (result.ok ? "text-green-600" : "text-red-600")
                        }
                      >
                        {result.ok
                          ? "Your message was sent successfully."
                          : `Error: ${result.error}`}
                      </p>
                    )}
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-brand-teal relative overflow-hidden mx-3 sm:mx-6 lg:mx-8 rounded-3xl shadow-lg mb-10">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'url("/images/female-doctor-hospital.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "center 20%",
          }}
        />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="bg-white text-brand-teal hover:bg-gray-100"
            >
              <a href="tel:+61451034940">Call: +61 451 034 940</a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="bg-white text-brand-teal hover:bg-gray-100"
            >
              <a href="tel:+61451185550">Call: +61 451 185 550</a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white hover:text-brand-teal"
            >
              <a href="mailto:info@wellbeingfirstcare.com.au">Send Email</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
