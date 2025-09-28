import React, { ReactElement } from "react";
import { Card, CardTitle, CardDescription } from "@/components/ui/card";
import { Globe, Building, TrendingUp, DollarSign } from "lucide-react";

interface KeySkills {
  title: string;
  description: string;
  icon: ReactElement;
}

const keySkills: KeySkills[] = [
  {
    icon: <Globe className="w-6 h-6" />,
    title: "International Expertise",
    description:
      "15+ years across 6 Asian countries with deep cross-cultural business understanding",
  },
  {
    icon: <Building className="w-6 h-6" />,
    title: "Systems Architecture",
    description:
      "Certified Cloud Infrastructure Architect specializing in Industry 4.0 and ERP solutions",
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Strategic Consulting",
    description:
      "Expert at translating complex technology into clear business value propositions",
  },
  {
    icon: <DollarSign className="w-6 h-6" />,
    title: "Proven Results",
    description:
      "Saved construction company from bankruptcy and led successful GCP business unit development",
  },
];

export default function About() {
  return (
    <section id="about">
      <div className="container lg:flex justify-between items-center gap-12 space-y-16">
        <div className="text-center lg:text-start max-w-xl">
          <h2>About Willy</h2>
          <p>
            With over 15 years of international experience in solutions
            consulting and business architecture, I specialize in transforming
            complex technology challenges into strategic business advantages
            across diverse cultural and market landscapes.
          </p>
          <p>
            I believe in data-driven decision making combined with deep cultural
            understanding to deliver solutions that truly resonate with local
            market needs. My approach integrates technical excellence with
            strategic business thinking.
          </p>
          <p>
            Currently serving as Enterprise Management Systems Architect with UK
            Research & Innovation while continuing my consulting work across
            Asia-Pacific markets. I bring unique insights from living and
            working across five countries.
          </p>
        </div>

        <div className="mt-8 lg:mt-0">
          <div className="grid grid-cols-2 gap-4">
            {keySkills.map((skill, index) => (
              <Card
                key={index}
                className="p-4 hover:scale-105 hover:shadow-lg duration-200 transition-all cursor-default"
              >
                <div className="w-12 h-12 bg-blue-50 rounded-lg grid place-items-center text-primary mb-4">
                  {skill.icon}
                </div>
                <div className="space-y-4">
                  <CardTitle>{skill.title}</CardTitle>
                  <CardDescription>{skill.description}</CardDescription>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
