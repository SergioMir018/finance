import React, { useEffect, useState } from "react";
import { Transaction } from "~/lib/types";
import {
  TableCaption,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  TableFooter,
  Table,
} from "~/components/ui/table";

interface DashboardTableProps {
  transactions: Array<Transaction>;
}

export const DashboardTable: React.FC<DashboardTableProps> = ({
  transactions,
}) => {
  const total = transactions.reduce((acc, curr) => acc + curr.amount, 0);

  return (
    <Table>
      <TableCaption>Historial reciente de transacciones</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Descripción</TableHead>
          <TableHead>Categoría</TableHead>
          <TableHead className="text-right">Monto</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {transactions.map((transaction, index) => (
          <TableRow key={`${transaction.description}-${index}`}>
            <TableCell className="font-medium">
              {transaction.description}
            </TableCell>
            <TableCell>{transaction.category}</TableCell>
            <TableCell className="text-right">
              ${transaction.amount.toFixed(2)}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={2 as number}>Total</TableCell>
          <TableCell className="text-right">${total.toFixed(2)}</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
};
