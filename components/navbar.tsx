"use client";

import {
  NavbarBrand,
  NavbarContent,
  Navbar as NextUINavbar,
} from "@nextui-org/navbar";
import NextLink from "next/link";

import { ThemeSwitch } from "@/components/theme-switch";
import { Logo } from "./branding";
import { ShoppingCart, User } from "@phosphor-icons/react/dist/ssr";
import { Link } from "@nextui-org/link";

const navItems = {
  names: ["Store", "AI", "BadOS", "Software", "BadBand", "Support"],
  hrefs: [],
};

export const Navbar = () => {
  return (
    <NextUINavbar maxWidth="xl" position="sticky">
      <NavbarContent justify="start" className="gap-5">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink href="/">
            <Logo />
          </NextLink>
        </NavbarBrand>
        {navItems.names.map((name, i) => {
          return (
            <Link
              href={navItems.hrefs[i] || "#"}
              className="text-sm font-medium text-foreground-800 hover:text-foreground transition-colors"
              color="foreground"
              key={i}
            >
              {name}
            </Link>
          );
        })}
      </NavbarContent>

      <NavbarContent className="pl-4" justify="end">
        <ShoppingCart size={18} weight="fill" />
        <User size={18} weight="fill" />
        <ThemeSwitch />
      </NavbarContent>
    </NextUINavbar>
  );
};
