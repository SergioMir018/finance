import { createFileRoute } from "@tanstack/react-router";
import { ArrowUp, DollarSign, PiggyBank, Plus, TrendingUp } from "lucide-react";
import { BalanceCardContent } from "~/components/balance-card-content";
import { Button } from "~/components/button";
import { PageHeader } from "~/components/page-header";
import { PageHeaderTitle } from "~/components/page-header-title";
import { ProgressBar } from "~/components/progress-bar";
import { SavingGoalCard } from "~/components/savings/saving-goal-card";
import { SavingsFondCard } from "~/components/savings/savings-fond-card";
import { TabContent } from "~/components/tab-content";
import { TabTrigger } from "~/components/tab-trigger";
import { Tabs } from "~/components/tabs";
import { TabsList } from "~/components/tabs-list";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";

export const Route = createFileRoute("/savings")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <PageHeader className="flex justify-between">
        <PageHeaderTitle>Ahorros</PageHeaderTitle>
        <div className="flex gap-2">
          <Button variant="secondary">
            <ArrowUp size={18} />
            Transferir
          </Button>
          <Button>
            <Plus size={18} strokeWidth={4} />
            Nueva Cuenta
          </Button>
        </div>
      </PageHeader>
      <section className="flex flex-col gap-8">
        <div className="grid grid-cols-3 gap-4">
          <Card className="col-span-1">
            <CardHeader className="flex-row items-center justify-between">
              <CardTitle>Total Ahorros</CardTitle>
              <PiggyBank size={18} />
            </CardHeader>
            <CardContent>
              <BalanceCardContent
                amount={1000}
                variant="saving"
                subtext="De 4 fondos"
              />
            </CardContent>
          </Card>
          <Card className="col-span-1">
            <CardHeader className="flex-row items-center justify-between">
              <CardTitle>Ahorro Mensual</CardTitle>
              <TrendingUp size={18} />
            </CardHeader>
            <CardContent className="flex gap-2 relative">
              <BalanceCardContent
                amount={1000}
                variant="saving"
                subtext="Total ahorrado en el mes"
              />
            </CardContent>
          </Card>
          <Card className="col-span-1">
            <CardHeader className="flex-row items-center justify-between">
              <CardTitle>Promedio por fondo de ahorro</CardTitle>
              <DollarSign size={18} />
            </CardHeader>
            <CardContent>
              <BalanceCardContent amount={1000} variant="saving" />
            </CardContent>
          </Card>
        </div>
        <Tabs defaultValue="accounts" className="gap-2">
          <TabsList className="grid grid-cols-3">
            <TabTrigger value="accounts">Cuentas</TabTrigger>
            <TabTrigger value="goals">Metas</TabTrigger>
            <TabTrigger value="movements">Moviemientos</TabTrigger>
          </TabsList>
          <TabContent value="accounts" className="grid grid-cols-2 gap-2">
            <SavingsFondCard
              title={"Fondo de Emergencias"}
              balance={3700}
              description={"Para gastos medicos y de emergencia"}
              creationDate={"14/2/2023"}
            />
          </TabContent>
          <TabContent value="goals" className="grid grid-cols-2 gap-2">
            <SavingGoalCard
              title={"Fondo de Emergencias"}
              currentBalance={3700}
              goal={7000}
            />
          </TabContent>
          <TabContent value="movements" className="grid grid-cols-2 gap-2">
            <Card>
              <CardHeader></CardHeader>
            </Card>
          </TabContent>
        </Tabs>
      </section>
    </>
  );
}
