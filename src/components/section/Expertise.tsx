import React, { ReactElement } from "react";
import {
  Settings,
  GitBranch,
  Shield,
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
    icon: <Users2 className="w-6 h-6" />,
    title: "Team Leadership & Management",
    description:
      "Building, mentoring, and scaling engineering teams from 5 to 50+ members",
  },
  {
    icon: <Settings className="w-6 h-6" />,
    title: "Process Optimization",
    description:
      "Implementing Agile, DevOps, and CI/CD practices to improve delivery speed",
  },
  {
    icon: <Code className="w-6 h-6" />,
    title: "Technical Architecture",
    description:
      "Designing scalable systems and making strategic technology decisions",
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: "Performance Analytics",
    description:
      "Using data and metrics to drive engineering excellence and business outcomes",
  },
  {
    icon: <GitBranch className="w-6 h-6" />,
    title: "Product Development",
    description:
      "Full-cycle product management from conception to market deployment",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Risk Management",
    description:
      "Identifying and mitigating technical and operational risks proactively",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Digital Transformation",
    description:
      "Leading organizational change and technology modernization initiatives",
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Remote Team Management",
    description:
      "Successfully managing distributed teams across multiple time zones",
  },
];

export default function Expertise() {
  return (
    <section id="expertise" className="bg-primary-foreground">
      <div className="container">
        <div className="text-center mb-12">
          <h2>Skills & Expertise</h2>
          <p className="max-w-3xl mx-auto">
            Comprehensive engineering management expertise spanning team
            leadership, technical strategy, and organizational transformation
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
              "Agile",
              "Scrum",
              "Kanban",
              "DevOps",
              "CI/CD",
              "AWS",
              "Docker",
              "Kubernetes",
              "Microservices",
              "React",
              "Node.js",
              "Python",
              "Java",
              "PostgreSQL",
              "MongoDB",
              "Redis",
              "Jenkins",
              "Git",
              "Jira",
              "Confluence",
              "Slack",
              "Zoom",
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
