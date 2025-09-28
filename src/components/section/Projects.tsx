import React from "react";
import { ExternalLink, Calendar, Users, Zap } from "lucide-react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";

interface ProjectItems {
  title: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

const projectItems: ProjectItems[] = [
  {
    title: "E-Commerce Platform Modernization",
    company: "TechCorp Solutions",
    period: "2023 - 2024",
    description:
      "Led the complete architectural overhaul of a legacy e-commerce platform serving 2M+ users. Migrated from monolithic to microservices architecture, reducing page load times by 60% and improving system reliability to 99.9% uptime.",
    achievements: [
      "40% reduction in operational costs",
      "60% faster page load times",
      "99.9% system uptime achieved",
      "Successfully migrated 2M+ user accounts with zero data loss",
    ],
    technologies: ["React", "Node.js", "Kubernetes", "AWS", "PostgreSQL"],
  },
  {
    title: "Cross-Platform Mobile Development Initiative",
    company: "FinanceFlow Inc",
    period: "2022 - 2023",
    description:
      "Managed the development of a unified mobile application for iOS and Android platforms. Coordinated a team of 15 developers and designers to deliver the app 3 months ahead of schedule with a 4.8-star rating.",
    achievements: [
      "Delivered 3 months ahead of schedule",
      "4.8-star average rating on app stores",
      "500K+ downloads in first quarter",
      "30% increase in user engagement",
    ],
    technologies: ["React Native", "TypeScript", "Firebase", "GraphQL"],
  },
  {
    title: "DevOps Transformation Program",
    company: "GlobalTech Enterprises",
    period: "2021 - 2022",
    description:
      "Spearheaded company-wide DevOps adoption, implementing CI/CD pipelines, automated testing, and infrastructure as code. Reduced deployment time from days to hours while improving code quality metrics by 50%.",
    achievements: [
      "95% reduction in deployment time",
      "50% improvement in code quality metrics",
      "Zero critical production incidents for 6 months",
      "Team productivity increased by 35%",
    ],
    technologies: ["Jenkins", "Docker", "Terraform", "AWS", "Python", "Bash"],
  },
];

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <h2>Featured Projects</h2>
          <p>
            Real-world engineering management success stories demonstrating
            leadership, technical excellence, and measurable business impact
          </p>
        </div>

        <div className="space-y-8">
          {projectItems.map((project, index) => (
            <Card key={index} className="p-4">
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Project Info */}
                <div className="lg:col-span-2 space-y-6">
                  <div>
                    <div className="flex items-center space-x-3 text-sm text-blue-700 mb-2">
                      <Calendar className="w-4 h-4" />
                      <span>{project.period}</span>
                      <span>•</span>
                      <span>{project.company}</span>
                    </div>
                    <h3 className="heading-tertiary mb-4">{project.title}</h3>
                    <p className="body-regular">{project.description}</p>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <Zap className="w-4 h-4 mr-2" />
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
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
                    {project.achievements.map((achievement, idx) => (
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
            Interested in learning more about these projects or discussing
            similar challenges?
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
