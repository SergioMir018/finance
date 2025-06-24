import { createFileRoute } from "@tanstack/react-router";
import { Card } from "~/components/card";
import { ArrowDown, DollarSign, PiggyBank, TrendingUp } from "lucide-react";
import { BalanceContent } from "~/components/balance-content";
import { CardHeadText } from "~/components/card-head-text";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <div className="text-white">
      <h1 className="text-center font-bold text-2xl py-3">
        Resumen financiero
      </h1>
      <section className="flex-1 grid grid-cols-12 gap-x-4 gap-y-12">
        <Card styles="col-span-3">
          <BalanceContent
            title="Balance total"
            icon={<DollarSign size={18} />}
            isBalanceCard={true}
          />
        </Card>
        <Card styles="col-span-3">
          <BalanceContent
            title="Ingresos"
            icon={<TrendingUp size={18} />}
            textColor="#3bc369"
          />
        </Card>
        <Card styles="col-span-3">
          <BalanceContent
            title="Gastos"
            icon={<ArrowDown size={18} />}
            textColor="#db4b33"
          />
        </Card>
        <Card styles="col-span-3">
          <BalanceContent
            title="Ahorros"
            icon={<PiggyBank size={18} />}
            textColor="#3bc369"
          />
        </Card>
        <Card styles="col-span-7">
          <CardHeadText
            title="Tendencia de balance"
            subtitle="Tu balance en los últimos 6 meses"
          />
        </Card>
        <Card styles="col-span-5">
          <CardHeadText
            title="Gastos por categoría"
            subtitle="Distribución de gastos este mes"
          />
        </Card>
      </section>
    </div>
  );
}
