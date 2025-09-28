import React from "react";
import { Mail, Linkedin, Github, Twitter } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <section id="footer">
      <footer className="bg-gray-900 text-white">
        <div className="container">
          {/* Main Footer Content */}
          <div className="py-12 grid md:grid-cols-3 gap-8">
            {/* Brand Section */}
            <div className="space-y-4 text-center md:text-start">
              <h3 className="font-poppins font-bold text-xl">
                Willy Octavianus
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Engineering Management Professional helping organizations build
                high-performing technical teams and scalable engineering
                practices.
              </p>
              <div className="flex space-x-4 justify-center md:justify-start">
                <a
                  href="mailto:willy.octavianus@example.com"
                  className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors"
                  aria-label="Email"
                >
                  <Mail size={18} />
                </a>
                <a
                  href="https://linkedin.com/in/willyoctavianus"
                  className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href="https://github.com/willyoctavianus"
                  className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={18} />
                </a>
                <a
                  href="https://twitter.com/willyoctavianus"
                  className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter size={18} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4 text-center md:text-start">
              <h4 className="font-semibold text-lg">Quick Links</h4>
              <ul className="space-y-2">
                {[
                  { label: "About", href: "/#about" },
                  { label: "Expertise", href: "/#expertise" },
                  { label: "Projects", href: "/#projects" },
                  { label: "Services", href: "/#services" },
                  { label: "Contact", href: "/#contact" },
                ].map((link) => (
                  <li key={link.label}>
                    <button className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                      <Link href={link.href}>{link.label}</Link>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="space-y-4 text-center md:text-start">
              <h4 className="font-semibold text-lg">Services</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>Engineering Team Assessment</li>
                <li>Agile Transformation Consulting</li>
                <li>Technical Leadership Coaching</li>
                <li>DevOps Implementation</li>
              </ul>
              <div className="pt-4">
                <button className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors">
                  <a href={"/#contact"}>Schedule a Consultation →</a>
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 py-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © {new Date().getFullYear()} Willy Octavianus. All rights
              reserved.
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <button className="hover:text-blue-400 transition-colors">
                Privacy Policy
              </button>
              <button className="hover:text-blue-400 transition-colors">
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}
