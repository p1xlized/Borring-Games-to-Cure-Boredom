"use client"

import * as React from "react"
import { Link } from "@tanstack/react-router"
import {
  GameController,
  MoonStarsIcon,
  SunHorizonIcon,
  User,
} from "@phosphor-icons/react"

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"

export default function NavigationMenuDemo() {
  const [isDark, setIsDark] = React.useState(false)

  // Sync with document class on mount
  React.useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains("dark")
    setIsDark(isDarkMode)
  }, [])

  const toggleTheme = () => {
    const root = document.documentElement
    if (root.classList.contains("dark")) {
      root.classList.remove("dark")
      localStorage.setItem("theme", "light")
      setIsDark(false)
    } else {
      root.classList.add("dark")
      localStorage.setItem("theme", "dark")
      setIsDark(true)
    }
  }

  return (
    <NavigationMenu className="z-5">
      <NavigationMenuList>
        {/* --- GAMES --- */}
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link
              to="/games"
              className={cn(navigationMenuTriggerStyle(), "gap-2")}
            >
              <GameController size={20} weight="duotone" />
              <span>Games</span>
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        {/* --- PROFILE --- */}
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link
              to="/profile"
              className={cn(navigationMenuTriggerStyle(), "gap-2")}
            >
              <User size={20} weight="duotone" />
              <span>Profile</span>
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        {/* --- THEME CHANGER --- */}
        <NavigationMenuItem>
          <button
            onClick={toggleTheme}
            className={cn(
              navigationMenuTriggerStyle(),
              "hover:bg-accent cursor-pointer px-3 transition-all"
            )}
            aria-label="Toggle theme"
          >
            {isDark ? (
              <SunHorizonIcon
                size={20}
                className="text-primary animate-in duration-300 fade-in zoom-in"
              />
            ) : (
              <MoonStarsIcon
                size={20}
                className="text-primary animate-in duration-300 fade-in zoom-in"
              />
            )}
          </button>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
