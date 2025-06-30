import React, { useEffect, useState } from "react";
import { Transaction } from "~/types/transactionTypes/transaction.type";
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

interface TransactionsTableProps
  extends React.HTMLAttributes<HTMLTableElement> {
  transactions?: Array<Transaction>;
}

export const TransactionsTable = React.forwardRef<
  HTMLTableElement,
  TransactionsTableProps
>(({ transactions, className, ...props }, ref) => {
  return (
    <Table ref={ref} className={className} {...props}>
      <TableCaption>Historial reciente de transacciones</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Fecha</TableHead>
          <TableHead>Descripción</TableHead>
          <TableHead>Categoría</TableHead>
          <TableHead>Cuenta</TableHead>
          <TableHead className="text-right">Monto</TableHead>
          <TableHead className="text-right">Acciones</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {transactions?.map((transaction, index) => (
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
    </Table>
  );
});

TransactionsTable.displayName = "TransactionsTable";
