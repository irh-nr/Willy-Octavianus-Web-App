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
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "./accordion";
import { XIcon } from "lucide-react";
import { Button } from "./button";
import { navItems } from "@/lib/navitems";
import Link from "next/link";

export default function Navmobile() {
  return (
    <div className="flex md:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant={"ghost"}>
            <Menu className="size-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="right">
          <SheetHeader className="shadow-sm">
            <SheetTitle className="flex justify-between border-none leading-none !pb-0">
              <SheetClose asChild>
                <Link href={"/#"}>
                  <span className="logo">Willy Octavianus</span>
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Button variant={"ghost"}>
                  <XIcon className="size-5" />
                </Button>
              </SheetClose>
            </SheetTitle>
          </SheetHeader>

          {/*Navmenu*/}

          <div className="flex flex-col px-4">
            <Accordion
              type="single"
              collapsible
              className="w-full"
              defaultValue="item-2"
            >
              <AccordionItem value="item-1" className="py-2">
                <AccordionTrigger className="hover:no-underline py-3 text-base font-medium hover:bg-accent rounded-md px-2 border-none">
                  Home
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="p-4 space-y-4 text-blue-800">
                    {[
                      { href: "/#about", label: "About Me" },
                      { href: "/#contact", label: "Contact Me" },
                    ].map((link, index) => (
                      <li key={index}>
                        <SheetClose asChild>
                          <Link
                            href={link.href}
                            className="text-sm leading-none font-medium underline"
                          >
                            {link.label}
                          </Link>
                        </SheetClose>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="py-2">
                <AccordionTrigger className="hover:no-underline py-3 text-base font-medium hover:bg-accent rounded-md px-2">
                  Experience & Services
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="p-4 space-y-4 text-blue-800">
                    {navItems.map((items, index) => (
                      <li key={index}>
                        <SheetClose asChild>
                          <Link
                            href={items.href}
                            className="text-sm leading-none font-medium underline"
                          >
                            {items.title}
                          </Link>
                        </SheetClose>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div className="flex flex-col px-4">
            <SheetClose asChild>
              <Button asChild className="">
                <Link href={"/#contact"}>Get in Touch</Link>
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
            </div>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
}
