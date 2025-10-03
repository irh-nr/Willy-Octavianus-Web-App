import React from "react";
import { Button } from "./button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CTAbutton() {
  return (
    <div>
      <Button
        asChild
        className="group hover:scale-101 transition-transform p-5"
        variant={"default"}
      >
        <Link href={"/#contact"}>
          Get in Touch
          <ArrowRight
            size={20}
            className="ml-2 group-hover:translate-x-1 transition-transform"
          />
        </Link>
      </Button>
    </div>
  );
}
