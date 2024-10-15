import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ModeToggle } from "@/components/themeButton";

const Navbar = () => {
  return (
    <nav className="py-2 bg-background/50 sticky top-0 border-b backdrop:blur">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <div className="text-black dark:text-white text-2xl font-bold ml-4">
            BiLoG
          </div>
        </Link>
        
        <div className="hidden md:flex space-x-4 items-center ml-auto">
          <Link href="/" className="text-black dark:text-white">
            Home
          </Link>
          <Link href="/about" className="text-black dark:text-white">
            About
          </Link>
          <Link href="/contact" className="text-black dark:text-white">
            Contact
          </Link>
          <div className="flex space-x-2 items-center mr-4">
            <Button className="mx-1" variant="outline">
              Login
            </Button>
            <Button className="mx-1" variant="outline">
              Sign Up
            </Button>
            <ModeToggle className="mx-1" />
          </div>
        </div>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button className="text-black dark:text-white focus:outline-none" variant="ghost">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle className="pb-2 text-black dark:text-white">
                  Bilog
                </SheetTitle>
                <SheetDescription>
                  <div className="flex flex-col gap-5">
                    <Link href="/" className="text-black dark:text-white">
                      Home
                    </Link>
                    <Link href="/about" className="text-black dark:text-white">
                      About
                    </Link>
                    <Link href="/contact" className="text-black dark:text-white">
                      Contact
                    </Link>
                    <div className="flex space-x-2 items-center">
                      <Button className="mx-1 text-xs" variant="outline">
                        Login
                      </Button>
                      <Button className="mx-1 text-xs" variant="outline">
                        Sign Up
                      </Button>
                      <ModeToggle className="mx-1" />
                    </div>
                  </div>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
