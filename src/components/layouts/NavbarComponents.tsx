import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { PanelsTopLeft } from "lucide-react";
import { ModeToggle } from "@/components/modeToggle";

const NavbarComponents = () => {
  return (
    <header className="z-[50] sticky top-0 w-full bg-background/95 border-b backdrop-blur-sm dark:bg-black/[0.6] border-border/40">
    <div className="container h-14 flex items-center mx-auto">
      <Link
        href="/"
        className="flex justify-start items-center hover:opacity-85 transition-opacity duration-300"
      >
        <PanelsTopLeft className="w-6 h-6 mr-3" />
        <span className="font-bold">Take Home Test</span>
        <span className="sr-only">Back to main page</span>
      </Link>
      <nav className="ml-auto flex items-center gap-2">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full w-8 h-8 bg-background"
          asChild
        ></Button>
        <ModeToggle />
       
      </nav>
    </div>
  </header>
  )
}

export default NavbarComponents
