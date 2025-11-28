"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { NAV_LINKS } from "@/constants";
import Button from "./Button";
import { IconArrowLeft, IconBrandTabler } from "@tabler/icons-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";
import { cn } from "@/lib/utils";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
];

const Nav = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const sidebarLinks = NAV_LINKS.map((link) => ({
    label: link.label,
    href: link.href,
    icon: <IconBrandTabler className="text-white h-5 w-5 flex-shrink-0" />,
  }));

  return (
    <>
      <nav className="flexBetween max-container padding-container relative z-30 py-5">
        <Link href="/" className="flex gap-2 flex-center">
          <Image
            src="/assets/images/logo.png"
            alt="ESRIC Logo"
            width={90}
            height={90}
            className="object-contain"
          />
        </Link>

        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>
                <p className="regular-20 flexCenter text-blue-70">For Me</p>
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  {components.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                    >
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>
                <p className="regular-20 text-blue-70">For My Business</p>
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink>
                  <p className="regular-20 text-white flexCenter">Link</p>
                </NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* <ul className="hidden h-full gap-12 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              href={link.href}
              key={link.key}
              className="hover:font-bold text-blue-70 regular-20"
            >
              {link.label}
            </Link>
          ))}
        </ul> */}

        <div className="lg:flexCenter hidden gap-10">
          <div className="flex gap-10">
            <a
              href="https://cdn.botpress.cloud/webchat/v2.4/shareable.html?configUrl=https://files.bpcontent.cloud/2025/05/19/06/20250519064544-LGPSC121.json"
              className="hover:font-bold text-blue-70 regular-20"
            >
              Chat
            </a>
            <a href="/" className="hover:font-bold text-blue-70 regular-20">
              My Account
            </a>
          </div>
          <Link href="http://localhost:3001/">
            <Button type="button" title="Get a Quote" variant="btn_yellow" />
          </Link>
        </div>

        <button
          onClick={() => setSidebarOpen(true)}
          className="inline-block cursor-pointer lg:hidden"
        >
          <Image src="/menu.svg" alt="menu" width={32} height={32} />
        </button>
      </nav>

      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
          sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setSidebarOpen(false)}
      ></div>

      <div
        className={`fixed inset-y-0 right-0 w-64 bg-black bg-opacity-75 text-white z-50 transform transition-transform duration-300 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex justify-end p-4">
            <button
              onClick={() => setSidebarOpen(false)}
              className="text-white"
            >
              <IconArrowLeft className="h-6 w-6" />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto">
            <Link href="/" className="flex gap-2 flex-center p-4">
              <Image
                src="/assets/images/logo.png"
                alt="ESRIC Logo"
                width={70}
                height={70}
                className="object-contain"
              />
            </Link>
            <div className="mt-8 flex flex-col gap-2">
              {sidebarLinks.map((link, idx) => (
                <Link
                  key={idx}
                  href={link.href}
                  className="flex items-center gap-2 px-4 py-2 hover:bg-white hover:bg-opacity-20"
                >
                  {link.icon}
                  <span>{link.label}</span>
                </Link>
              ))}
            </div>
          </div>
          <div className="p-4 mb-20">
            <div className="mb-5">
              <Button type="button" title="Login" variant="btn_blue_outline" />
            </div>
            <Button type="button" title="Sign Up" variant="btn_blue_outline" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
