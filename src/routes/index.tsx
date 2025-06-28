import { createFileRoute } from "@tanstack/react-router";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { ArrowDown, DollarSign, PiggyBank, TrendingUp } from "lucide-react";
import { BalanceCardContent } from "~/components/balance-card-content";
import { ChartAreaGradient } from "~/components/chart-area-gradient";
import { ChartPieLabel } from "~/components/chart-pie";
import { Transaction } from "~/types/transactionTypes/transaction.type";
import { DashboardTable } from "~/components/dashboard-table";
import { PageHeader } from "~/components/page-header";

export const Route = createFileRoute("/")({
  component: Home,
});

const transactions: Array<Transaction> = [
  {
    description: "Venta de producto",
    category: "Ingresos",
    amount: 250.0,
  },
  {
    description: "Compra de insumos",
    category: "Gastos",
    amount: -150.0,
  },
  {
    description: "Servicio de consultoría",
    category: "Ingresos",
    amount: 350.0,
  },
  {
    description: "Compra de insumos",
    category: "Gastos",
    amount: -150.0,
  },
  {
    description: "Servicio de consultoría",
    category: "Ingresos",
    amount: 350.0,
  },
];

function Home() {
  return (
    <>
      <PageHeader>Resumen financiero</PageHeader>
      <section className="flex-1 grid grid-cols-12 gap-x-4 gap-y-8">
        <Card className="col-span-3">
          <CardHeader className="flex-row items-center justify-between">
            <CardTitle>Balance total</CardTitle>
            <DollarSign size={18} />
          </CardHeader>
          <CardContent>
            <BalanceCardContent
              amount={1000}
              changePercent={5}
              variant="balance"
            />
          </CardContent>
        </Card>
        <Card className="col-span-3">
          <CardHeader className="flex-row items-center justify-between">
            <CardTitle>Ingresos</CardTitle>
            <TrendingUp size={18} />
          </CardHeader>
          <CardContent>
            <BalanceCardContent amount={5000} variant="income" />
          </CardContent>
        </Card>
        <Card className="col-span-3">
          <CardHeader className="flex-row items-center justify-between">
            <CardTitle>Gastos</CardTitle>
            <ArrowDown size={18} />
          </CardHeader>
          <CardContent>
            <BalanceCardContent amount={3000} variant="expense" />
          </CardContent>
        </Card>
        <Card className="col-span-3">
          <CardHeader className="flex-row items-center justify-between">
            <CardTitle>Ahorros</CardTitle>
            <PiggyBank size={18} />
          </CardHeader>
          <CardContent>
            <BalanceCardContent amount={2000} variant="saving" />
          </CardContent>
        </Card>
        <ChartAreaGradient />
        <ChartPieLabel />
        <Card className="col-span-12">
          <CardHeader>
            <CardTitle>Transacciones Recientes</CardTitle>
            <CardDescription>Tus últimas 5 transacciones</CardDescription>
          </CardHeader>
          <CardContent>
            <DashboardTable transactions={transactions} />
          </CardContent>
        </Card>
      </section>
    </>
  );
}
