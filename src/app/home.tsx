"use client";
import * as React from "react";
import NavbarComponents from "@/components/layouts/NavbarComponents";
import FooterComponent from "@/components/layouts/FooterComponent";
import { columns } from "@/components/colums";
import { DataTable } from "@/components/dataTable";
import { useFetchUser } from "@/hooks/useFetchUser";

export default function HomePage() {
  const { users, loading, error } = useFetchUser();

  return (
    <div className="flex flex-col mx-auto items-center justify-items-center min-h-screen">
      <NavbarComponents />
      <main className="flex flex-grow items-center w-full text-center mx-auot justify-center p-4">
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {!loading && !error && users.length > 0 && (
          <DataTable data={users} columns={columns} />
        )}
      </main>
      <FooterComponent />
    </div>
  );
}
