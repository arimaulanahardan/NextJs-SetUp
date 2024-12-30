"use client";
import * as React from "react";
import NavbarComponents from "@/components/layouts/NavbarComponents";
import FooterComponent from "@/components/layouts/FooterComponent";
import { LoginForm } from "@/components/loginForm";

export default function HomePage() {
  return (
    <div className="flex flex-col mx-auto items-center justify-items-center min-h-screen">
      <NavbarComponents />
      <main className="flex flex-grow items-center w-full mx-auto justify-center">
       <LoginForm />
      </main>
      <FooterComponent />
    </div>
  );
}
