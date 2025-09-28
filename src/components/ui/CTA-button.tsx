import React from "react";
import { Button } from "./button";
import { ArrowRight } from "lucide-react";

export default function CTAbutton() {
  return (
    <div>
      <Button
        asChild
        className="group hover:scale-101 transition-transform p-5"
        variant={"default"}
      >
        <a href={"/#contact"}>
          Get in Touch
          <ArrowRight
            size={20}
            className="ml-2 group-hover:translate-x-1 transition-transform"
          />
        </a>
      </Button>
    </div>
  );
}
