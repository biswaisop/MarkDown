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

const Navbar = () => {
  return (
    <nav className="p-4 bg-background/50 sticky top-0 border-b backdrop:blur">
      <div className="container mx-auto flex pb-6 justify-between items-center">
        <Link href="/">
          <div className="text-black text-2xl font-bold">BiLoG</div>
        </Link>
        <div className="hidden md:flex space-x-4 items-center">
          <Link href="/" className="text-black">
            Home
          </Link>
          <Link href="/about" className="text-black">
            About
          </Link>
          <Link href="/contact" className="text-black">
            Contact
          </Link>
          <div>
            <Button className="mx-1" variant="outline">
              Login
            </Button>
            <Button className="mx-1" variant="outline">
              Sign Up
            </Button>
          </div>
        </div>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button className="text-black focus:outline-none" variant="ghost">
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
                <SheetTitle>Are you absolutely sure?</SheetTitle>
                <SheetDescription>
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers.
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
