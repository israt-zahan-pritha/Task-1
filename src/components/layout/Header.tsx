// "use client";

// import { useState } from "react";
// import { ChevronDown, Menu, X, MoonIcon, SunIcon } from "lucide-react";
// import Link from "next/link";
// import Image from "next/image";
// import { useTheme } from "next-themes";
// import { Button } from "../ui/button";

// export default function Header() {
//   const { theme, setTheme } = useTheme();
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <header className="fixed top-0 left-0 w-full  bg-white dark:bg-black shadow-md z-50">
//       <nav className="max-w-custom h-[91px] mx-auto flex justify-between items-center p-4">
//         {/* Logo */}
//         <div>
//           <Link href="/">
//             <Image
//               src="/images/banquee.png"
//               alt="Banquee Logo"
//               width={135}
//               height={32}
//             />
//           </Link>
//         </div>

//         {/* Desktop Navbar */}
//         <ul className="hidden md:flex space-x-6 text-primary text-base font-medium dark:text-gray-200">
//           <li className="cursor-pointer hover:text-gray-500">Blog</li>
//           <li className="cursor-pointer hover:text-gray-500">SigleBlog</li>
//           <li className="cursor-pointer hover:text-gray-500 relative flex items-center space-x-1">
//             <span>Compare</span>
//             <ChevronDown className="w-4 h-4 text-gray-500 dark:text-gray-400" />
//           </li>
//           <li className="cursor-pointer hover:text-gray-500">Support</li>
//           <li className="cursor-pointer hover:text-gray-500 relative flex items-center space-x-1">
//             <span>Blog</span>
//             <ChevronDown className="w-4 h-4 text-gray-500 dark:text-gray-400" />
//           </li>
//         </ul>

//         {/* Buttons & Theme Toggle */}
//         <div className="hidden  md:flex space-x-4 items-center ">
//           <button className="text-teal-500 dark:text-teal-300 hover:text-teal-700">
//             Login
//           </button>
//           <button className="bg-teal-400 text-white px-4 py-2 rounded-lg hover:bg-teal-500">
//             Open Account
//           </button>

//           <Button
//             variant="ghost"
//             size="icon"
//             onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
//           >
//             <SunIcon className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
//             <MoonIcon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
//             <span className="sr-only">Toggle theme</span>
//           </Button>
//         </div>

//         {/* Mobile Menu Button */}
//         <button
//           className="md:hidden text-primary dark:text-gray-200"
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           {isOpen ? <X size={28} /> : <Menu size={28} />}
//         </button>
//       </nav>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-gray-900 shadow-md p-4">
//           <ul className="flex flex-col space-y-4 text-primary dark:text-gray-200">
//             <li className="cursor-pointer hover:text-gray-500">Features</li>
//             <li className="cursor-pointer hover:text-gray-500 flex items-center space-x-1">
//               <span>Compare</span>
//               <ChevronDown className="w-4 h-4 text-gray-500 dark:text-gray-400" />
//             </li>
//             <li className="cursor-pointer hover:text-gray-500">Support</li>
//             <li className="cursor-pointer hover:text-gray-500 flex items-center space-x-1">
//               <span>Blog</span>
//               <ChevronDown className="w-4 h-4 text-gray-500 dark:text-gray-400" />
//             </li>
//           </ul>

//           {/* Mobile Buttons */}
//           <div className="flex flex-col space-y-4 mt-4">
//             <button className="text-teal-500 dark:text-teal-300 hover:text-teal-700 text-left">
//               Login
//             </button>
//             <button className="bg-teal-400 text-white px-4 py-2 rounded-lg hover:bg-teal-500 text-left">
//               Open Account
//             </button>

//             {/* Theme Toggle */}
//             <Button
//               variant="ghost"
//               size="icon"
//               onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
//               className="self-start"
//             >
//               <SunIcon className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
//               <MoonIcon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
//               <span className="sr-only">Toggle theme</span>
//             </Button>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// }
"use client";

import { useState } from "react";
import { ChevronDown, Menu, X, MoonIcon, SunIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { Button } from "../ui/button";

export default function Header() {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white dark:bg-black shadow-md z-50">
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
          <li className="cursor-pointer hover:text-gray-500">
            <Link href="/blog">Blog</Link>
          </li>
          <li className="cursor-pointer hover:text-gray-500">
            <Link href="/singleblog">SingleBlog</Link>
          </li>
          <li className="cursor-pointer hover:text-gray-500 relative flex items-center space-x-1">
            <span>Compare</span>
            <ChevronDown className="w-4 h-4 text-gray-500 dark:text-gray-400" />
          </li>
          <li className="cursor-pointer hover:text-gray-500">Support</li>
        </ul>

        {/* Buttons & Theme Toggle */}
        <div className="hidden md:flex space-x-4 items-center">
          <button className="text-teal-500 dark:text-teal-300 hover:text-teal-700">
            Login
          </button>
          <button className="bg-teal-400 text-white px-4 py-2 rounded-lg hover:bg-teal-500">
            Open Account
          </button>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
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

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-gray-900 shadow-md p-4">
          <ul className="flex flex-col space-y-4 text-primary dark:text-gray-200">
            <li className="cursor-pointer hover:text-gray-500">
              <Link href="/blog">Blog</Link>
            </li>
            <li className="cursor-pointer hover:text-gray-500">
              <Link href="/singleblog">SingleBlog</Link>
            </li>
            <li className="cursor-pointer hover:text-gray-500 flex items-center space-x-1">
              <span>Compare</span>
              <ChevronDown className="w-4 h-4 text-gray-500 dark:text-gray-400" />
            </li>
            <li className="cursor-pointer hover:text-gray-500">Support</li>
          </ul>

          {/* Mobile Buttons */}
          <div className="flex flex-col space-y-4 mt-4">
            <button className="text-teal-500 dark:text-teal-300 hover:text-teal-700 text-left">
              Login
            </button>
            <button className="bg-teal-400 text-white px-4 py-2 rounded-lg hover:bg-teal-500 text-left">
              Open Account
            </button>

            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="self-start"
            >
              <SunIcon className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <MoonIcon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
