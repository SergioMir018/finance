import { createFileRoute } from "@tanstack/react-router";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { ArrowDown, DollarSign, PiggyBank, TrendingUp } from "lucide-react";
import { BalanceContent } from "~/components/balance-content";
import { ChartAreaGradient } from "~/components/chart-area-gradient";
import { ChartPieLabel } from "~/components/chart-pie";
import { Transaction } from "~/lib/types";
import { D } from "node_modules/@tanstack/react-query-devtools/build/modern/ReactQueryDevtools-Cn7cKi7o";
import { DashboardTable } from "~/components/dashboard-table";

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
      <h1 className="font-bold text-3xl pt-4 pb-10">Resumen financiero</h1>
      <section className="flex-1 grid grid-cols-12 gap-x-4 gap-y-8">
        <Card className="col-span-3 px-6 py-5">
          <BalanceContent
            title="Balance total"
            icon={<DollarSign size={18} />}
            isBalanceCard={true}
          />
        </Card>
        <Card className="col-span-3 px-6 py-5">
          <BalanceContent
            title="Ingresos"
            icon={<TrendingUp size={18} />}
            textColor="hsl(var(--income))"
          />
        </Card>
        <Card className="col-span-3 px-6 py-5">
          <BalanceContent
            title="Gastos"
            icon={<ArrowDown size={18} />}
            textColor="hsl(var(--expense))"
          />
        </Card>
        <Card className="col-span-3 px-6 py-5">
          <BalanceContent
            title="Ahorros"
            icon={<PiggyBank size={18} />}
            textColor="hsl(var(--saving))"
          />
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
