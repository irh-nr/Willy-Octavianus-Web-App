import Image from "next/image";
import CTAbutton from "@/components/ui/CTA-button";
import { Linkedin } from "lucide-react";
import { Mail } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Dot } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero">
      <div className="flex flex-col-reverse container lg:flex-row min-h-screen justify-between items-center mt-12 gap-4">
        <div className="flex flex-col gap-6 p-4">
          <div className="flex flex-col text-center lg:text-start">
            <h1>
              Willy <span className="text-primary">Octavianus</span>
            </h1>
            <p className="font-semibold">
              Scientist, Technologist, Engineer, Architect, Modeller
            </p>

            <p className="max-w-lg">
              I make complexity manageable. I use Management-STEAM approach to
              improve management systems and workflow performance
            </p>
          </div>
          <div className="flex items-center space-x-4 h-28 text-center lg:text-start md:h-20">
            <span>15+ Years</span>
            <Separator orientation="vertical" />
            <span>
              5 Countries lived <br /> (IDN, JPN, CHN, DEU, GBR)
            </span>
            <Dot />
            <span>10+ Client Countries (EMEA & APAC)</span>
          </div>
          <div className="flex flex-row items-center gap-6 justify-center lg:justify-start">
            <CTAbutton />
            <a
              href={"https://www.linkedin.com/in/willy-octavianus"}
              target="blank"
              rel="noopener noreferrer"
            >
              <Linkedin opacity={"50%"} />
            </a>
            <a
              href={"mailto:willyoctavianus@gmail.com"}
              target="blank"
              rel="noopener noreferrer"
            >
              <Mail opacity={"50%"} />
            </a>
          </div>
        </div>

        <div className="relative">
          {/* Accent panel */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute z-0 h-[100%] w-[100%] rotate-3 rounded-3xl bg-primary/15 md:rotate-3"
          />
          <div className="relative z-10 rounded-3xl bg-card p-5 md:p-6 shadow-2xl">
            <div className="bg-white-10 backdrop-blur-md" />
            <Image
              src={"/img/Willy.jpg"}
              alt="Willy Octavianus - Engineering Management Professional"
              width={500}
              height={500}
              className="h-96 w-80 rounded-2xl object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
