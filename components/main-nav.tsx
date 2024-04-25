"use client"
 
import * as React from "react"
import Link from "next/link"
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
 

export function MainNav() {
  return (
    <div className="hidden md:flex">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Products</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-6 md:w-[300px] lg:w-[300px]">
                <ListItem href="/inspect" title="Inspect">
                  Read and write to smart contracts
                </ListItem>
                <ListItem href="/scans" title="Scans">
                  Library to query all the block explorers
                </ListItem>
                <ListItem href="/cache" title="Cache">
                  Pay, get paid in crypto and offramp
                </ListItem>
                <ListItem href="/port" title="Port">
                  Manage your crypto assets
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-6 md:w-[300px] lg:w-[300px]">
                  <ListItem href="/blog" title="Blog">
                    Read the latest stories from the BlockCMD team.
                  </ListItem>
                  <ListItem href="/changelog" title="Changelog">
                    Check out what&rsquo;s new in the latest release.
                  </ListItem>
                  <ListItem href="/faqs" title="FAQs">
                    Troubleshoot common problems and find solutions.
                  </ListItem>
                </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/contributors" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Contributors
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          {/* <NavigationMenuItem>
            <a href="https://twitter.com/blockcmdHQ" target="_blank">
              <NavigationMenuLink>
                𝕏
              </NavigationMenuLink>
            </a>
          </NavigationMenuItem> */}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
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