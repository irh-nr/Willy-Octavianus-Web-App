/* eslint-disable react/no-unescaped-entities */

import React from "react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { CheckCircle, ArrowRight, Clock, Target } from "lucide-react";

interface Services {
  title: string;
  description: string;
  features: string[];
  duration: string;
  ideal: string;
}

const services: Services[] = [
  {
    title: "Industry 4.0 Transformation Consulting",
    description:
      "Comprehensive digital factory solutions and smart manufacturing implementations based on 5+ years experience across Asian markets with leading automation companies.",
    features: [
      "Smart manufacturing system design",
      "Digital transformation workshops for all departments",
      "Industry 4.0 technology selection and integration",
      "ROI-focused implementation roadmap",
    ],
    duration: "3-6 months",
    ideal: "Manufacturing companies adopting smart factory solutions",
  },
  {
    title: "Enterprise Systems Architecture",
    description:
      "End-to-end enterprise management system design and integration, specializing in scalable cloud-based solutions and ERP implementations.",
    features: [
      "Cross-departmental business process analysis",
      "Enterprise management system strategy development",
      "Multi-platform software integration",
      "Data management and reporting capabilities setup",
    ],
    duration: "2-4 months",
    ideal: "Growing businesses requiring unified management platforms",
  },
  {
    title: "Cross-Cultural Business Consulting",
    description:
      "Strategic consulting for international business expansion, leveraging deep understanding of Asian markets and cross-cultural business practices.",
    features: [
      "Asia-Pacific market entry strategy",
      "Cross-cultural team management guidance",
      "International partnership development",
      "Cultural adaptation of business processes",
    ],
    duration: "Ongoing/Project-based",
    ideal: "Companies expanding operations to Asian markets",
  },
  {
    title: "Google Cloud & Digital Transformation",
    description:
      "Cloud infrastructure consulting and digital transformation strategy, backed by Google Cloud certification and proven business unit development experience.",
    features: [
      "Google Cloud Platform architecture design",
      "Cloud migration strategy and execution",
      "Digital transformation roadmap development",
      "Team capability building and training",
    ],
    duration: "1-3 months planning + implementation",
    ideal: "Organizations modernizing IT infrastructure and processes",
  },
  {
    title: "Financial Systems & Business Turnaround",
    description:
      "Comprehensive financial management consulting including cashflow optimization, system implementation, and business recovery strategies.",
    features: [
      "Financial process analysis and optimization",
      "Cashflow management system design",
      "Enterprise bookkeeping and reporting setup",
      "Business turnaround strategy development",
    ],
    duration: "3-12 months",
    ideal:
      "Companies facing financial challenges or requiring CFO-level expertise",
  },
  {
    title: "Technology Strategy & Architecture",
    description:
      "Strategic technology consulting for complex business challenges, translating technical solutions into measurable business outcomes across industries.",
    features: [
      "Technology stack evaluation and selection",
      "Solution architecture design and validation",
      "Business-technology alignment consulting",
      "Executive-level technology presentations",
    ],
    duration: "1-2 months assessment + ongoing",
    ideal: "Enterprises requiring strategic technology decision-making support",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-primary-foreground">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2>Consulting Services</h2>
          <p>
            Strategic technology consulting services designed to transform your
            business through Industry 4.0 solutions, enterprise architecture,
            and international market expertise
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="p-8">
              <div className="space-y-6">
                {/* Header */}
                <div>
                  <h3 className="heading-tertiary mb-3">{service.title}</h3>
                  <p className="body-regular">{service.description}</p>
                </div>

                {/* Features */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">
                    What's Included:
                  </h4>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Details */}
                <div className="border-t pt-6 space-y-3">
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Clock className="w-4 h-4" />
                    <span>
                      <strong>Duration:</strong> {service.duration}
                    </span>
                  </div>
                  <div className="flex items-start space-x-2 text-sm text-gray-600">
                    <Target className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Ideal for:</strong> {service.ideal}
                    </span>
                  </div>
                </div>

                {/* CTA */}
                <Button asChild variant={"default"} className="w-full group">
                  <a href={"/#contact"}>
                    Learn More
                    <ArrowRight
                      size={16}
                      className="ml-2 group-hover:translate-x-1 transition-transform"
                    />
                  </a>
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Service Process */}
        <div className="bg-background rounded-xl p-8 shadow-sm border border-blue-200">
          <h3 className="text-center mb-8">How We Work Together</h3>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery Call",
                description:
                  "We start with a detailed discussion about your business challenges and transformation goals",
              },
              {
                step: "02",
                title: "Business Analysis",
                description:
                  "Thorough evaluation of your current systems, processes, and market requirements",
              },
              {
                step: "03",
                title: "Solution Design",
                description:
                  "Custom strategy development with clear implementation roadmap and success metrics",
              },
              {
                step: "04",
                title: "Execution & Support",
                description:
                  "Hands-on implementation with ongoing guidance and progress monitoring",
              },
            ].map((phase, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="w-16 h-16 bg-blue-50 text-primary rounded-full flex items-center justify-center mx-auto font-bold text-lg">
                  {phase.step}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    {phase.title}
                  </h4>
                  <p className="text-sm text-gray-600">{phase.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
