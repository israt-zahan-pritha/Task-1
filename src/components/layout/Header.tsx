"use client";

import { useState } from "react";
import { Menu, X, MoonIcon, SunIcon, ChevronDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { Button } from "../ui/button";

const navigation = [
  { name: "Blog", href: "/blog" },
  { name: "SingleBlog", href: "/singleblog" },
  { name: "Features", href: "/features" },
  { name: "Price", href: "/price" },
];

export default function Header() {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 w-full bg-white dark:bg-black z-50">
        <nav className="max-w-custom h-[91px] mx-auto flex justify-between items-center p-4">
          {/* Logo */}
          <div>
            <Link href="/">
              <Image
                src="/images/banquee.png"
                alt="Banquee Logo"
                width={135}
                height={32}
              />
            </Link>
          </div>

          {/* Desktop Navbar */}
          <ul className="hidden md:flex space-x-6 text-primary text-base font-medium dark:text-gray-200">
            {navigation.map((item) => (
              <li
                key={item.name}
                className="relative flex items-center space-x-1 cursor-pointer hover:text-[#5BB5A2]"
              >
                <Link href={item.href}>{item.name}</Link>
                {(item.name === "Features" || item.name === "Price") && (
                  <ChevronDown className="h-4 w-4" />
                )}
              </li>
            ))}
          </ul>

          {/* Buttons & Theme Toggle */}
          <div className="hidden md:flex space-x-4 items-center ">
            <button className="text-[#5BB5A2]  dark:text-white hover:text-black text-lg">
              Login
            </button>
            <button className="bg-[#5BB5A2] text-[15px] text-white px-4 py-3 rounded-lg hover:bg-black dark:hover:bg-white dark:hover:text-black">
              Open Account
            </button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="relative"
            >
              <SunIcon className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <MoonIcon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-primary dark:text-gray-200"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>

        {/* Mobile Menu with Fixes */}
        <div
          className={`fixed inset-0 bg-white dark:bg-black shadow-md p-4 max-h-[40vh] overflow-y-auto transform transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } md:hidden`}
        >
          {/* Mobile Header with Close Button */}
          <div className="flex justify-between items-center mb-4">
            {/* Logo */}
            <Link href="/" onClick={() => setIsOpen(false)}>
              <Image
                src="/images/banquee.png"
                alt="Banquee Logo"
                width={120}
                height={28}
              />
            </Link>

            {/* Close Button */}
            <button onClick={() => setIsOpen(false)}>
              <X size={28} className="text-primary dark:text-gray-200" />
            </button>
          </div>

          {/* Mobile Navigation */}
          <ul className="flex flex-col space-y-4 text-primary dark:text-gray-200 px-6">
            {navigation.map((item) => (
              <li
                key={item.name}
                className="relative flex items-center space-x-1 cursor-pointer hover:text-[#5BB5A2]"
              >
                <Link href={item.href} onClick={() => setIsOpen(false)}>
                  {item.name}
                </Link>
                {(item.name === "Features" || item.name === "Price") && (
                  <ChevronDown className="h-4 w-4" />
                )}
              </li>
            ))}
          </ul>

          {/* Mobile Buttons */}
          <div className="flex flex-col space-y-4 mt-6 px-6">
            <button
              className="text-[#5BB5A2] dark:text-white hover:text-[#5BB5A2] text-left"
              onClick={() => setIsOpen(false)}
            >
              Login
            </button>
            <button
              className="bg-[#5BB5A2] text-white px-4 py-2 rounded-lg hover:bg-[#5BB5A2] text-left"
              onClick={() => setIsOpen(false)}
            >
              Open Account
            </button>

            {/* Theme Toggle Button */}
            <Button
              variant="ghost"
              size="icon"
              // title="Toggle theme"
              // aria-label="Toggle theme"
              onClick={() => {
                setTheme(theme === "dark" ? "light" : "dark");
                setIsOpen(false);
              }}
              className="self-start relative"
            >
              <SunIcon className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <MoonIcon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </div>
        </div>
      </header>
    </>
  );
}
