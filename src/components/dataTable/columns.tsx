"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Idata } from "@/interfaces/dataInterface";
import { MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ArrowUpDown } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const columns: ColumnDef<Idata>[] = [
//   {
//     id: "select",
//     header: ({ table }) => (
//       <Checkbox
//         checked={
//           table.getIsAllPageRowsSelected() ||
//           (table.getIsSomePageRowsSelected() && "indeterminate")
//         }
//         onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
//         aria-label="Select all"
//       />
//     ),
//     cell: ({ row }) => (
//       <Checkbox
//         checked={row.getIsSelected()}
//         onCheckedChange={(value) => row.toggleSelected(!!value)}
//         aria-label="Select row"
//       />
//     ),

//     enableSorting: false,
//     enableHiding: false,
//   },
//   {
//     header: () => <div className="text-right">name</div>,
//     cell: ({ row }) => {
//       const amount = parseFloat(row.getValue("amount"));
//       const formatted = new Intl.NumberFormat("en-US", {
//         style: "currency",
//         currency: "USD",
//       }).format(amount);

//       return <div className="text-right font-medium">{formatted}</div>;
//     },
//     accessorKey: "amount",
//   },
// add columns for number
{
    header: "No",
    cell: ({ row }) => {
      return <div>{row.index + 1}</div>;
    },
  },
  {
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          ID
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    accessorKey: "id",
},
  {
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    accessorKey: "name",
  },
  {
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Age
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    accessorKey: "age",
  },
  {
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          occupation
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    accessorKey: "occupation",
  },
  {
    header: "Status",
    accessorKey: "status",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const data = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(data.id.toString())}
            >
              Copy Data ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View Data</DropdownMenuItem>
            <DropdownMenuItem>Edit Data</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];