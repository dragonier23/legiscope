"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image";

import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { ModeToggle } from "@/app/_components/darkmode"
import { CommandMenu } from "@/app/_components/search"
import { Button } from "@/components/ui/button"
import { Icons } from "@/app/_components/icons"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Corperate M&A",
    href: "/",
    description:
      "Filler",
  },
  {
    title: "Finance & Capital Markets",
    href: "/",
    description:
      "Filler",
  },
  {
    title: "Litigation & Dispute Resolution",
    href: "/",
    description:
      "Filler",
  },
  {
    title: "ESG",
    href: "/",
    description:
      "Filler",
  },
  {
    title: "TMT/IP",
    href: "/",
    description:
      "Filler",
  },
  {
    title: "Law Firm Trends",
    href: "/",
    description:
      "Filler",
  },
  {
    title: "More",
    href: "/",
    description:
      "Filler",
  },
]

export function NaviMenu() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-opacity-90 backdrop-blur-lg">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-10 py-4">
        {/* Left: Logo */}
        <div className="flex items-center space-x-6">
          <Link href="/">
            <Image src="/logo.png" alt="Logo" width={40} height={40} priority />
          </Link>

          {/* Menu Items */}
          <NavigationMenu>
            <NavigationMenuList className="flex space-x-6">
              <NavigationMenuItem>
                <Link href="/about" legacyBehavior passHref>
                  <NavigationMenuLink className="text-white">About Us</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-transparent text-white">
                  Articles
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                    {components.map((component) => (
                      <ListItem key={component.title} title={component.title} href={component.href}>
                        {component.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Right: Search and Icons */}
        <div className="flex items-center space-x-4">
          <div className="hidden md:flex">
            <CommandMenu />
          </div>
          <nav className="flex items-center gap-2">
            <Button asChild variant="ghost" size="icon" className="h-8 w-8 px-0">
              <Link href="https://github.com/shadcn-ui" target="_blank" rel="noreferrer">
                <Icons.gitHub className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <ModeToggle />
          </nav>
        </div>
      </div>
    </nav>
  );
}




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
  )
})
ListItem.displayName = "ListItem"
