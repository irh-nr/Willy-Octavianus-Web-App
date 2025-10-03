import React from "react";
import Navmobile from "./nav-mobile";
import { navItems } from "@/lib/navitems";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./button";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
} from "./navigation-menu";

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-3 text-sm leading-snug !mt-0">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}

export default function NavMain() {
  return (
    <div className="flex flex-row justify-between backdrop-blur-sm">
      <div>
        <Link href={"/#"}>
          <span className="logo hidden lg:flex">Willy Octavianus</span>
        </Link>
        <Link href={"/#"}>
          <span className="logo lg:hidden">Wo.</span>
        </Link>
      </div>

      {/*Dekstop View*/}
      <div className="hidden md:flex">
        <NavigationMenu viewport={false}>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Home</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <Link
                        className="flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-6 no-underline outline-hidden select-none focus:shadow-md relative overflow-hidden"
                        href="/#"
                      >
                        <div className="absolute inset-0">
                          <Image
                            src={"/img/Willy.jpg"}
                            alt="Willy Octavianus - Engineering Management Professional"
                            width={500}
                            height={500}
                            className="w-full h-full rounded-md object-cover"
                            priority
                          />
                          {/* Overlay Layer - position absolute */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent rounded-md" />
                        </div>

                        <div className="z-3">
                          <div className="mt-4 text-lg font-medium text-secondary text-shadow-white">
                            Willy Octavianus
                          </div>
                          <p className="text-secondary text-sm leading-tight text-shadow-white !mt-0">
                            Scientist, Technologist, Engineer, Architect,
                            Modeller
                          </p>
                        </div>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <ListItem href="/#about" title="About Me">
                    15+ years transforming technology challenges into business
                    advantages across Asia-Pacific markets. Currently Enterprise
                    Management Systems Architect with UK Research & Innovation,
                    specializing in cross-cultural solutions consulting.
                  </ListItem>
                  <ListItem href="/#contact" title="Help Me Help You">
                    I dont stand in one spot and point out a destination for you
                    to reach on your own. I walk alongside you. I hold the map,
                    we look at it together, and we discuss it as we go. You
                    guide me in how best I can guide you.
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>
                Experience & Services
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {navItems.map((item, index) => (
                    <ListItem key={index} title={item.title} href={item.href}>
                      {item.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <Button asChild className="hidden md:flex">
        <Link href={"/#contact"}>Get in Touch</Link>
      </Button>
      <Navmobile />
    </div>
  );
}
