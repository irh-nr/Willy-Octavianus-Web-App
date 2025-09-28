import { Mail, Linkedin, Calendar, CheckCircle } from "lucide-react";
import ContactForm from "../ui/contact-form";

export default function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2>Let's Work Together</h2>
          <p>
            Ready to transform your engineering organization? Let's discuss how
            we can accelerate your team's performance and drive sustainable
            growth.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="heading-tertiary mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center text-primary">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <a
                      href="mailto:willy.octavianus@example.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-gray-800"
                    >
                      willy.octavianus@example.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center text-primary">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">LinkedIn</p>
                    <a
                      href="https://linkedin.com/in/willyoctavianus"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-gray-800"
                    >
                      /in/willyoctavianus
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center text-primary">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">
                      Schedule a Call
                    </p>
                    <a
                      href="https://calendly.com/willyoctavianus"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-gray-800"
                    >
                      Book a 30-minute consultation
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Response Times */}
            <div className="bg-blue-50 rounded-lg p-6">
              <h4 className="font-semibold text-blue-900 mb-3">
                Response Times
              </h4>
              <ul className="space-y-2 text-sm text-blue-700">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>Email inquiries: Within 24 hours</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>Consultation requests: Within 48 hours</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>Urgent matters: Same business day</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="rounded-lg shadow-xs border-2 p-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
