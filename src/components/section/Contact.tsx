import { Mail, Linkedin } from "lucide-react";
import ContactForm from "../ui/contact-form";

export default function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <h2>Help Me Help You</h2>
          <p>
            I dont stand in one spot and point out a destination for you to
            reach on your own. I walk alongside you. I hold the map, we look at
            it together, and we discuss it as we go. You guide me in how best I
            can guide you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="rounded-lg shadow-xs border-2 p-8">
            <ContactForm />
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="flex flex-col items-center lg:items-start">
              <h3 className="heading-tertiary mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <a
                    className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-700 hover:text-blue-800 hover:bg-blue-200 transition-all"
                    href="mailto:willyoctavianus@gmail.com"
                    target="blank"
                    rel="noopener noreferrer"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                  <div>
                    <a
                      href="mailto:willyoctavianus@gmail.com"
                      target="blank"
                      rel="noopener noreferrer"
                      className="text-blue-700 hover:text-blue-800"
                    >
                      <h4>willyoctavianus@gmail.com</h4>
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <a
                    className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-700 hover:text-blue-800 hover:bg-blue-200 transition-all"
                    href="https://www.linkedin.com/in/willy-octavianus"
                    target="blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <div>
                    <a
                      href="https://www.linkedin.com/in/willy-octavianus"
                      target="blank"
                      rel="noopener noreferrer"
                      className="text-blue-700 hover:text-blue-800"
                    >
                      <h4>/in/willy-octavianus</h4>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
