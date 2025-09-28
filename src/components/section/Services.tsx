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
    title: "Engineering Team Assessment",
    description:
      "Comprehensive evaluation of your current engineering practices, team dynamics, and development processes.",
    features: [
      "Team performance analysis",
      "Process efficiency audit",
      "Technology stack evaluation",
      "Detailed recommendations report",
    ],
    duration: "2-4 weeks",
    ideal: "Growing companies with 10-50 engineers",
  },
  {
    title: "Agile Transformation Consulting",
    description:
      "Guide your organization through a complete agile transformation with proven methodologies and best practices.",
    features: [
      "Agile methodology implementation",
      "Team training and coaching",
      "Process optimization",
      "Performance metrics setup",
    ],
    duration: "3-6 months",
    ideal: "Teams transitioning from traditional to agile methods",
  },
  {
    title: "Technical Leadership Coaching",
    description:
      "One-on-one coaching for engineering managers and technical leads to develop leadership skills and strategic thinking.",
    features: [
      "Leadership skill development",
      "Strategic planning guidance",
      "Communication improvement",
      "Career advancement planning",
    ],
    duration: "Ongoing",
    ideal: "Senior engineers moving into management roles",
  },
  {
    title: "DevOps Implementation",
    description:
      "End-to-end DevOps transformation including CI/CD pipeline setup, infrastructure automation, and monitoring.",
    features: [
      "CI/CD pipeline design",
      "Infrastructure as code",
      "Monitoring and alerting setup",
      "Team training on DevOps practices",
    ],
    duration: "2-4 months",
    ideal: "Companies looking to improve deployment efficiency",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-primary-foreground">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2>Consulting Services</h2>
          <p>
            Tailored engineering management consulting designed to transform
            your technical organization and accelerate business growth through
            improved engineering practices
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
                  "We start with a detailed discussion about your challenges and goals",
              },
              {
                step: "02",
                title: "Assessment",
                description:
                  "Thorough evaluation of your current engineering practices and team dynamics",
              },
              {
                step: "03",
                title: "Strategy",
                description:
                  "Custom roadmap development with clear milestones and success metrics",
              },
              {
                step: "04",
                title: "Implementation",
                description:
                  "Hands-on execution with ongoing support and progress monitoring",
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
