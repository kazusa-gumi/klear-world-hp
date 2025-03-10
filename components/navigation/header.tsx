"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

export function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-sm border-b">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center space-x-2">
          <Globe className="h-6 w-6" />
          <span className="text-xl font-bold">Global Estates Japan</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="#" className="text-sm font-medium hover:text-primary">
            Properties
          </Link>
          <Link href="#" className="text-sm font-medium hover:text-primary">
            Locations
          </Link>
          <Link href="#" className="text-sm font-medium hover:text-primary">
            Investment Guide
          </Link>
          <Link href="#" className="text-sm font-medium hover:text-primary">
            About Us
          </Link>
          <Button>Contact Us</Button>
        </nav>

        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="outline" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <nav className="flex flex-col space-y-4">
              <Link href="#" className="text-sm font-medium hover:text-primary">
                Properties
              </Link>
              <Link href="#" className="text-sm font-medium hover:text-primary">
                Locations
              </Link>
              <Link href="#" className="text-sm font-medium hover:text-primary">
                Investment Guide
              </Link>
              <Link href="#" className="text-sm font-medium hover:text-primary">
                About Us
              </Link>
              <Button className="w-full">Contact Us</Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}