import React, { ReactElement } from "react";
import {
  PieChart,
  GitBranch,
  Cloud,
  BarChart3,
  Zap,
  Globe,
  Code,
  Users2,
} from "lucide-react";
import { Card } from "../ui/card";

interface SkillsItems {
  title: string;
  description: string;
  icon: ReactElement;
}

const skillsItems: SkillsItems[] = [
  {
    icon: <GitBranch className="w-6 h-6" />,
    title: "Industry 4.0 Solutions",
    description:
      "Implementing smart manufacturing and digital factory solutions across 6+ Asian countries",
  },
  {
    icon: <Cloud className="w-6 h-6" />,
    title: "Cloud Infrastructure",
    description:
      "Google Cloud certified architect specializing in scalable enterprise cloud solutions",
  },
  {
    icon: <Code className="w-6 h-6" />,
    title: "Enterprise Architecture",
    description:
      "Designing end-to-end business systems integrating multiple software tools and platforms",
  },
  {
    icon: <Users2 className="w-6 h-6" />,
    title: "Business Consulting",
    description:
      "Translating complex technical solutions into clear business value propositions",
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Cross-Cultural Strategy",
    description:
      "Successfully managing international projects across diverse cultural and market contexts",
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: "Financial Management",
    description:
      "Proven expertise in CFO services, cashflow optimization, and business turnaround strategies",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Digital Transformation",
    description:
      "Leading organizational change and technology modernization across multiple industries",
  },
  {
    icon: <PieChart className="w-6 h-6" />,
    title: "Executive Presentations",
    description:
      "Delivering high-impact presentations to C-suite executives and stakeholders across Asia",
  },
];

export default function Expertise() {
  return (
    <section id="expertise" className="bg-primary-foreground">
      <div className="container">
        <div className="text-center mb-12">
          <h2>Skills & Expertise</h2>
          <p className="max-w-3xl mx-auto">
            Comprehensive solutions consulting expertise spanning Industry 4.0
            implementation, enterprise architecture, and international business
            transformation
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skillsItems.map((skill, index) => (
            <Card key={index} className="group hover:border-primary">
              <div className="text-center space-y-6 px-6">
                <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center text-primary mx-auto group-hover:bg-background group-hover:scale-110 transition-all duration-300">
                  {skill.icon}
                </div>
                <div>
                  <h3 className="text-lg mb-2">{skill.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed !mt-0">
                    {skill.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
        {/* Additional Technologies Section */}
        <div className="mt-16 text-center">
          <h3 className="heading-tertiary mb-6">
            Technologies & Methodologies
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Industry 4.0",
              "Google Cloud Platform",
              "Enterprise Architecture",
              "Digital Transformation",
              "Business Analysis",
              "ISA95",
              "ERP Systems",
              "Cloud Infrastructure",
              "C++",
              "C#",
              "Java",
              "Oracle Database",
              "Financial Management",
              "Project Management",
              "Cross-Cultural Consulting",
              "CMMS",
              "Remote Desktop Services",
              "System Integration",
              "Business Development",
              "Strategic Planning",
              "Agile",
              "Change Management",
            ].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-white border border-blue-200 text-blue-700 rounded-full text-sm font-medium hover:bg-blue-50 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
