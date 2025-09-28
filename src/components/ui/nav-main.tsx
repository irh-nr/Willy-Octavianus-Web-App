import React from "react";
import { Button } from "./button";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
} from "./sheet";
import { XIcon } from "lucide-react";

interface NavItems {
  title: string;
  href: string;
}

const navItems: NavItems[] = [
  { title: "About", href: "/#about" },
  { title: "Expertise", href: "/#expertise" },
  { title: "Projects", href: "/#projects" },
  { title: "Services", href: "/#services" },
];

export default function NavMain() {
  return (
    <div className="flex flex-row justify-between backdrop-blur-sm">
      <div>
        <a href={"/#hero"}>
          <span className="logo">Willy Octavianus</span>
        </a>
      </div>

      <div className="hidden gap-6 md:flex">
        {" "}
        {/*Dekstop View*/}
        {navItems.map((items, index) => (
          <Button asChild key={index} variant={"ghost"}>
            <a href={items.href}>{items.title}</a>
          </Button>
        ))}
        <Button asChild>
          <a href={"/#contact"}>Get in Touch</a>
        </Button>
      </div>

      <div className="flex md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant={"ghost"}>
              <Menu className="size-5" />
            </Button>
          </SheetTrigger>

          <SheetContent side="top">
            <SheetHeader className="shadow-sm">
              <SheetTitle className="flex justify-between border-none leading-none !pb-0">
                <SheetClose asChild>
                  <a href={"/#hero"}>
                    <span className="logo">Willy Octavianus</span>
                  </a>
                </SheetClose>
                <SheetClose asChild>
                  <Button variant={"ghost"}>
                    <XIcon className="size-5" />
                  </Button>
                </SheetClose>
              </SheetTitle>
            </SheetHeader>
            <div className="flex flex-col gap-6 px-4">
              {navItems.map((items, index) => (
                <SheetClose asChild key={index}>
                  <Button asChild variant={"link"} className="h-10">
                    <a href={items.href}>{items.title}</a>
                  </Button>
                </SheetClose>
              ))}
              <SheetClose asChild>
                <Button asChild>
                  <a href={"/#contact"}>Get in Touch</a>
                </Button>
              </SheetClose>
            </div>
            <SheetFooter>
              {/* Bottom Bar */}
              <div className="border-gray-800 py-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
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
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}
