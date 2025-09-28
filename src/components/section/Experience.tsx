/* eslint-disable react/no-unescaped-entities */

import React from "react";
import { ExternalLink, Calendar, Users, Zap, Building2 } from "lucide-react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";

interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

const experienceItems: ExperienceItem[] = [
  {
    title: "Enterprise Management Systems Architect",
    company: "UK Research & Innovation, FixFX Ltd., University of Strathclyde",
    location: "Glasgow, UK",
    period: "Feb 2025 - Present",
    description:
      "Lead cross-departmental analysis of existing end-to-end business processes to identify ineffectiveness and operational challenges. Design and develop strategies for Enterprise Management Systems, enhancing collaboration and resource allocation through scalable architecture.",
    achievements: [
      "Leading EMS development across multiple departments",
      "Integrating multiple software tools into unified platform",
      "Enabling data-driven decision-making capabilities",
      "Managing cross-departmental stakeholder alignment",
    ],
    technologies: [
      "Enterprise Architecture",
      "System Integration",
      "Project Management",
      "Data Analytics",
    ],
  },
  {
    title: "Google Cloud Solution Manager",
    company: "Mitra Integrasi Informatika",
    location: "Jakarta, Indonesia",
    period: "Jan 2023 - Aug 2023",
    description:
      "Led end-to-end development of Google Cloud Platform business unit, managing cross-functional team of Solutions Architects and Business Development personnel. Oversaw technical capability building and commercial performance through targeted KPIs and client engagement.",
    achievements: [
      "Built GCP business unit from ground up",
      "Managed Solutions Architects and BD teams",
      "Achieved technical certifications across team",
      "Coordinated joint go-to-market strategies with Google",
    ],
    technologies: [
      "Google Cloud Platform",
      "Business Development",
      "Team Management",
      "Strategic Planning",
    ],
  },
  {
    title: "Senior Solutions Consultant & Software Business Lead",
    company: "Rockwell Automation",
    location: "Asia Pacific Region",
    period: "May 2018 - Jan 2023",
    description:
      "Delivered presentations and demonstrations at industry events across six countries in Asia. Bridged gap between technical and business stakeholders by articulating complex software and Industry 4.0 technologies into clear business outcomes.",
    achievements: [
      "Presented across 6 Asian countries to C-suite executives",
      "Conducted Industry 4.0 workshops for diverse departments",
      "Translated technical solutions into business requirements",
      "Supervised end-to-end solution development",
    ],
    technologies: [
      "Industry 4.0",
      "Business Analysis",
      "Software Solutions",
      "Cross-Cultural Communication",
    ],
  },
  {
    title: "Co-owner and Part-time CFO",
    company: "Berkah Karya Sejahtera",
    location: "Indonesia",
    period: "Jan 2021 - Jun 2022",
    description:
      "Served as both contracted CFO and part-owner of civil construction company. Significantly improved financial stability and saved company from bankruptcy by overhauling cashflow management and reforming bookkeeping practices.",
    achievements: [
      "Saved company from bankruptcy",
      "Overhauled cashflow management systems",
      "Reformed bookkeeping from ground up",
      "Designed new resource allocation systems",
    ],
    technologies: [
      "Financial Management",
      "Cashflow Optimization",
      "Enterprise Management",
      "Strategic Planning",
    ],
  },
  {
    title: "Solutions Consultant Manager",
    company: "Contromatic Prima Mandiri",
    location: "Jakarta, Indonesia",
    period: "Nov 2012 - May 2018",
    description:
      "Managed team of 5 technical consultants conducting customer presentations. Oversaw 2 marketing specialists for creating materials and organizing industry events. Served as primary technology training recipient and knowledge disseminator.",
    achievements: [
      "Managed team of 5 technical consultants",
      "Oversaw marketing and industry event organization",
      "Transformed leads into inquiries through system designs",
      "Enhanced company market presence significantly",
    ],
    technologies: [
      "Team Management",
      "Technical Consulting",
      "Marketing Strategy",
      "System Architecture",
    ],
  },
  {
    title: "Web Programmer",
    company: "Astra International",
    location: "Jakarta, Indonesia",
    period: "Nov 2011 - Nov 2012",
    description:
      "Developed and debugged the finance module of the in-house ERP system for a holding company. Primarily programmed in C# with occasional Java development, conducting database-related coding tasks using Oracle within an agile framework.",
    achievements: [
      "Developed complete finance module for ERP system",
      "Ensured seamless Oracle database integration",
      "Performed manual testing within agile framework",
      "Successfully delivered code to QA environment",
    ],
    technologies: [
      "C#",
      "Java",
      "Oracle Database",
      "ERP Systems",
      "Agile Methodology",
    ],
  },
  {
    title: "Sales Associate & Market Research Analyst",
    company: "Prostar Sports Equipment",
    location: "Dong Guan, China",
    period: "Sep 2011 - Nov 2011",
    description:
      "Served as Sales Associate for Japanese customers in export division, providing trilingual interpretation in Chinese Mandarin, English, and Japanese. Conducted comprehensive market research for factory expansion to Indonesia market.",
    achievements: [
      "Provided trilingual interpretation services",
      "Managed Japanese export customer relationships",
      "Completed market research for Indonesia expansion",
      "Facilitated cross-cultural business communications",
    ],
    technologies: [
      "Cross-Cultural Communication",
      "Market Research",
      "Business Development",
      "Export Management",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <h2>Work Experience</h2>
          <p>
            15+ years of international consulting experience across diverse
            industries, driving digital transformation and business growth
            through strategic technology solutions
          </p>
        </div>

        <div className="space-y-8">
          {experienceItems.map((experience, index) => (
            <Card key={index} className="p-4">
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Experience Info */}
                <div className="lg:col-span-2 space-y-6">
                  <div>
                    <div className="flex items-center space-x-3 text-sm text-blue-700 mb-2">
                      <Calendar className="w-4 h-4" />
                      <span>{experience.period}</span>
                      <span>•</span>
                      <Building2 className="w-4 h-4" />
                      <span>{experience.location}</span>
                    </div>
                    <h3 className="heading-tertiary mb-2">
                      {experience.title}
                    </h3>
                    <p className="font-medium text-gray-700 mb-4">
                      {experience.company}
                    </p>
                    <p className="body-regular">{experience.description}</p>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <Zap className="w-4 h-4 mr-2" />
                      Key Skills & Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Achievements */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-900 flex items-center">
                    <Users className="w-4 h-4 mr-2" />
                    Key Achievements
                  </h4>
                  <ul className="space-y-3">
                    {experience.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-gray-600">
                          {achievement}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="mb-6">
            Interested in learning more about my experience or discussing how I
            can help your organization?
          </p>
          <Button asChild variant={"outline"}>
            <a href={"/#contact"}>
              Let's Discuss Your Project
              <ExternalLink
                size={16}
                className="ml-2 group-hover:translate-x-1 transition-transform"
              />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
