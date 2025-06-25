import { createFileRoute } from "@tanstack/react-router";
import { Card } from "~/components/ui/card";
import { ArrowDown, DollarSign, PiggyBank, TrendingUp } from "lucide-react";
import { BalanceContent } from "~/components/balance-content";
import { ChartAreaGradient } from "~/components/chart-area-gradient";
import { ChartPieLabel } from "~/components/chart-pie";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <div className="text-white">
      <h1 className="font-bold text-3xl pt-4 pb-10">
        Resumen financiero
      </h1>
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
            textColor="#3bc369"
          />
        </Card>
        <Card className="col-span-3 px-6 py-5">
          <BalanceContent
            title="Gastos"
            icon={<ArrowDown size={18} />}
            textColor="#db4b33"
          />
        </Card>
        <Card className="col-span-3 px-6 py-5">
          <BalanceContent
            title="Ahorros"
            icon={<PiggyBank size={18} />}
            textColor="#3bc369"
          />
        </Card>
        <ChartAreaGradient />
        <ChartPieLabel />

        <ChartAreaGradient />
        <ChartPieLabel />

        <ChartAreaGradient />
        <ChartPieLabel />
      </section>
    </div>
  );
}
