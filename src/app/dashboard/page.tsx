"use client";

import { logout } from "@/app/login/action";
import { Button } from "@/components/ui/button";

export default function Dashboard() {
  return (
    <div className="w-full flex flex-col justify-center mt-10 text-center items-center">
        <h1>Dashboard</h1>
        <Button onClick={logout}>Logout</Button>
    </div>
  );
}