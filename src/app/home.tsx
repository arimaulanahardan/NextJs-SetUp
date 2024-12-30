"use client";
import * as React from "react";
import NavbarComponents from "@/components/layouts/NavbarComponents";
import FooterComponent from "@/components/layouts/FooterComponent";

export default function HomePage() {
  return (
    <div className="flex flex-col mx-auto items-center justify-items-center min-h-screen">
      <NavbarComponents />
      <main className="flex flex-grow items-center w-full bg-blue-500 text-center">
        <h1 className="mx-auto">Hi There...! Main Content Here</h1>
      </main>
      <FooterComponent />
    </div>
  );
}
