/* eslint-disable react/no-unescaped-entities */

import React, { ReactElement } from "react";
import { Card, CardTitle, CardDescription } from "@/components/ui/card";
import { Award, Users, Target, TrendingUp } from "lucide-react";

interface KeySkills {
  title: string;
  description: string;
  icon: ReactElement;
}

const keySkills: KeySkills[] = [
  {
    icon: <Users className="w-6 h-6" />,
    title: "Team Leadership",
    description:
      "Led cross-functional teams of 20+ engineers across multiple product lines",
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Process Optimization",
    description:
      "Improved delivery efficiency by 40% through agile transformation initiatives",
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: "Strategic Planning",
    description:
      "Architected technical roadmaps aligning engineering goals with business objectives",
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "Proven Results",
    description:
      "Successfully delivered 15+ major product releases on time and within budget",
  },
];

export default function About() {
  return (
    <section id="about">
      <div className="container lg:flex justify-between gap-12 space-y-16">
        <div className="text-center lg:text-start max-w-xl">
          <h2>About Willy</h2>
          <p>
            With over 8 years of experience in engineering management, I
            specialize in building and scaling high-performance engineering
            teams. My passion lies in creating systems and processes that enable
            developers to do their best work while delivering exceptional
            products to users.
          </p>
          <p>
            I believe in leading by example, fostering a culture of continuous
            learning, and maintaining a balance between technical excellence and
            business impact. My approach combines data-driven decision making
            with empathetic leadership to drive sustainable growth.
          </p>
          <p>
            Currently, I'm helping organizations transform their engineering
            practices through consulting and advisory work, sharing insights
            gained from managing teams at both startups and enterprise
            companies.
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
