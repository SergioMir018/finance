import { createFileRoute } from "@tanstack/react-router";
import { ArrowUp, Plus, TrendingUp } from "lucide-react";
import { BalanceCardContent } from "~/components/balance-card-content";
import { Button } from "~/components/button";
import { PageHeader } from "~/components/page-header";
import { PageHeaderTitle } from "~/components/page-header-title";
import { TabContent } from "~/components/tab-content";
import { TabTrigger } from "~/components/tab-trigger";
import { Tabs } from "~/components/tabs";
import { TabsList } from "~/components/tabs-list";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";

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
              <CardTitle>Total Ingresos</CardTitle>
              <TrendingUp size={18} />
            </CardHeader>
            <CardContent>
              <BalanceCardContent amount={1000} variant="saving" />
            </CardContent>
          </Card>
          <Card className="col-span-1">
            <CardHeader className="flex-row items-center justify-between">
              <CardTitle>Total Ingresos</CardTitle>
              <TrendingUp size={18} />
            </CardHeader>
            <CardContent>
              <BalanceCardContent amount={1000} variant="saving" />
            </CardContent>
          </Card>
          <Card className="col-span-1">
            <CardHeader className="flex-row items-center justify-between">
              <CardTitle>Total Ingresos</CardTitle>
              <TrendingUp size={18} />
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
            <Card>
              <CardHeader></CardHeader>
            </Card>
            <Card>
              <CardHeader></CardHeader>
            </Card>
            <Card>
              <CardHeader></CardHeader>
            </Card>
            <Card>
              <CardHeader></CardHeader>
            </Card>
          </TabContent>
          <TabContent value="goals">
            <Card>
              <CardHeader></CardHeader>
            </Card>
          </TabContent>
          <TabContent value="movements">
            <Card>
              <CardHeader></CardHeader>
            </Card>
          </TabContent>
        </Tabs>
      </section>
    </>
  );
}
