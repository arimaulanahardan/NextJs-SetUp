"use client";
import * as React from "react";
import NavbarComponents from "@/components/layouts/NavbarComponents";
import FooterComponent from "@/components/layouts/FooterComponent";
import { Ipayments } from "@/interfaces/payment";
import { columns } from "@/components/colums";
import { DataTable } from "@/components/dataTable";
import { useFetchPayments } from "@/hooks/useFetchPayments";

export default function HomePage() {
  const { payments, loading, error } = useFetchPayments();

  return (
    <div className="flex flex-col mx-auto items-center justify-items-center min-h-screen">
      <NavbarComponents />
      <main className="flex flex-grow items-center w-full text-center mx-auot justify-center p-4">
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {!loading && !error && payments.length > 0 && (
          <DataTable data={payments} columns={columns} />
        )}
      </main>
      <FooterComponent />
    </div>
  );
}
