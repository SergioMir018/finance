import { createFileRoute } from "@tanstack/react-router";
import { OverviewBalanceCard } from "~/components/overview-balance-card";
import { ArrowDown, DollarSign, PiggyBank, TrendingUp } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <div className="text-white">
      <h1 className="text-center font-bold text-2xl py-3">
        Resumen financiero
      </h1>
      <section className="flex-1 grid grid-cols-4 gap-4">
        <OverviewBalanceCard
          title="Balance total"
          icon={<DollarSign size={18} />}
          isBalanceCard={true}
        />
        <OverviewBalanceCard
          title="Ingresos"
          icon={<TrendingUp size={18} />}
          textColor="#3bc369"
        />
        <OverviewBalanceCard
          title="Gastos"
          icon={<ArrowDown size={18} />}
          textColor="#db4b33"
        />
        <OverviewBalanceCard
          title="Ahorros"
          icon={<PiggyBank size={18} />}
          textColor="#3bc369"
        />
      </section>
    </div>
  );
}
