"use client";
import * as React from "react";
import NavbarComponents from "@/components/layouts/NavbarComponents";
import FooterComponent from "@/components/layouts/FooterComponent";
import CounterComponent from "@/components/CounterComponent";
import SortingComponents from "@/components/SortingComponents";
import TabsComponents from "@/components/TabsComponents";
import ModalDialogComponent from "@/components/ModalDialogComponent";
import { useFetchDataTable } from "@/components/hooks/useFetchDataTable";
import { DataTable } from "@/components/dataTable/dataTable";
import { columns } from "@/components/dataTable/columns";
import {
  Card,
  CardFooter,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";

export default function HomePage() {
  const { data, loading } = useFetchDataTable();
  return (
    <div className="flex flex-col mx-auto items-center justify-items-center min-h-screen">
      <NavbarComponents />
      {/* Number One */}
      <main className="flex flex-grow items-center w-full text-center">
        <div className="grid space-y-10 mx-auto">
          <CounterComponent />
          <SortingComponents />
          <TabsComponents />
          <ModalDialogComponent />
          <Card>
            <CardHeader>
              <CardTitle>No. 5 Data Table</CardTitle>
            </CardHeader>
            <CardContent>
              {loading && (
                <h1>Loadingg... Tunggu yaaa sengaja delay 3 detik..</h1>
              )}
              {!loading && <DataTable columns={columns} data={data} />}
            </CardContent>
          </Card>
        </div>
      </main>
      <FooterComponent />
    </div>
  );
}
