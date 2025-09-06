import React, { useState } from "react";
import { Upload, Heart, Users, Award, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import NDISBadge from "@/components/NDISBadge";

export default function Career() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    resume: null as File | null,
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
      const fd = new FormData();
      fd.set("firstName", formData.firstName);
      fd.set("lastName", formData.lastName);
      fd.set("email", formData.email);
      fd.set("phone", formData.phone);
      fd.set("message", formData.message);
      if (formData.resume) fd.set("resume", formData.resume);

      const res = await fetch("/api/career", { method: "POST", body: fd });
      const json = await res.json();
      if (!res.ok) throw new Error(json?.error || "Failed to submit");
      setResult({ ok: true });
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        resume: null,
        message: "",
      });
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

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData((prev) => ({ ...prev, resume: file }));
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(0,0,0,0.6), rgba(0,0,0,0.4)), url("/images/medium-shot-men-working-together-indoors.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold">
            Join Our Team At Wellbeing First Care
          </h1>
        </div>
        <NDISBadge className="z-20" />
      </section>

      {/* Career Information */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Why Work With Us */}
            <div>
              <h2 className="text-4xl font-bold text-brand-navy mb-6">
                Why Work with Us?
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                At Wellbeing First Care, we are dedicated to providing
                exceptional support services that empower our clients to lead
                fulfilling lives. We are looking for compassionate, dedicated,
                and skilled professionals to join our team. Explore our career
                opportunities and find out how you can be a part of our mission.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-brand-teal rounded-lg flex items-center justify-center">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-navy mb-2">
                      Meaningful Work
                    </h3>
                    <p className="text-gray-600">
                      Make a real difference in the lives of our clients by
                      assisting them with their daily living tasks, community
                      access, and personal activities.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-brand-orange rounded-lg flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-navy mb-2">
                      Supportive Environment
                    </h3>
                    <p className="text-gray-600">
                      Work in a supportive and inclusive environment that values
                      teamwork, mutual respect, and professional growth.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-brand-green rounded-lg flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-navy mb-2">
                      Training and Development
                    </h3>
                    <p className="text-gray-600">
                      We provide ongoing training and development opportunities
                      to ensure our staff are equipped with the latest skills
                      and knowledge.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-brand-purple rounded-lg flex items-center justify-center">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-navy mb-2">
                      Competitive Compensation
                    </h3>
                    <p className="text-gray-600">
                      Enjoy competitive salaries and benefits that recognize
                      your hard work and dedication.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Application Form */}
            <div id="application-form">
              <Card className="shadow-lg border-0">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-brand-navy mb-6">
                    Submit Your Application
                  </h3>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label
                          htmlFor="firstName"
                          className="text-sm font-medium text-brand-navy"
                        >
                          First Name *
                        </Label>
                        <Input
                          id="firstName"
                          name="firstName"
                          type="text"
                          required
                          value={formData.firstName}
                          onChange={handleChange}
                          className="mt-1 focus:ring-brand-teal focus:border-brand-teal"
                          placeholder="Your first name"
                        />
                      </div>

                      <div>
                        <Label
                          htmlFor="lastName"
                          className="text-sm font-medium text-brand-navy"
                        >
                          Last Name *
                        </Label>
                        <Input
                          id="lastName"
                          name="lastName"
                          type="text"
                          required
                          value={formData.lastName}
                          onChange={handleChange}
                          className="mt-1 focus:ring-brand-teal focus:border-brand-teal"
                          placeholder="Your last name"
                        />
                      </div>
                    </div>

                    <div>
                      <Label
                        htmlFor="email"
                        className="text-sm font-medium text-brand-navy"
                      >
                        E-mail Address *
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
                        htmlFor="phone"
                        className="text-sm font-medium text-brand-navy"
                      >
                        Phone
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        className="mt-1 focus:ring-brand-teal focus:border-brand-teal"
                        placeholder="Your phone number"
                      />
                    </div>

                    <div>
                      <Label
                        htmlFor="resume"
                        className="text-sm font-medium text-brand-navy"
                      >
                        Resume (optional)
                      </Label>
                      <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md hover:border-brand-teal transition-colors duration-200">
                        <div className="space-y-1 text-center">
                          <Upload className="mx-auto h-12 w-12 text-gray-400" />
                          <div className="flex text-sm text-gray-600">
                            <label
                              htmlFor="resume"
                              className="relative cursor-pointer bg-white rounded-md font-medium text-brand-teal hover:text-brand-teal/80 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-brand-teal"
                            >
                              <span>Upload a file</span>
                              <input
                                id="resume"
                                name="resume"
                                type="file"
                                className="sr-only"
                                accept=".pdf,.doc,.docx"
                                onChange={handleFileChange}
                              />
                            </label>
                            <p className="pl-1">or drag and drop</p>
                          </div>
                          <p className="text-xs text-gray-500">
                            PDF, DOC, DOCX up to 10MB
                          </p>
                          {formData.resume && (
                            <p className="text-sm text-brand-teal font-medium">
                              Selected: {formData.resume.name}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>

                    <div>
                      <Label
                        htmlFor="message"
                        className="text-sm font-medium text-brand-navy"
                      >
                        Message
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className="mt-1 focus:ring-brand-teal focus:border-brand-teal resize-none"
                        placeholder="Tell us about your experience, qualifications, and why you'd like to join our team..."
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={submitting}
                      className="w-full bg-brand-teal hover:bg-brand-teal/90 disabled:opacity-60 text-lg py-3"
                    >
                      <Send className="w-5 h-5 mr-2" />
                      {submitting ? "Submitting..." : "Submit Application"}
                    </Button>
                    {result && (
                      <p
                        className={
                          "mt-3 text-sm " +
                          (result.ok ? "text-green-600" : "text-red-600")
                        }
                      >
                        {result.ok
                          ? "Your application was sent successfully."
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
      <section className="py-16 bg-brand-navy relative overflow-hidden mx-3 sm:mx-6 lg:mx-8 rounded-3xl shadow-lg mb-10">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'url("/images/female-doctor-hospital.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Make a Difference?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-brand-teal hover:bg-brand-teal/90"
            >
              <a href="#application-form">Apply Now</a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white hover:text-brand-navy"
            >
              <a href="mailto:careers@wellbeingfirstcare.com.au">
                Email HR Team
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
