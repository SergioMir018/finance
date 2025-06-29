import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, Car, Plus, TrendingUp } from "lucide-react";
import { BalanceCardContent } from "~/components/balance-card-content";
import { Button } from "~/components/button";
import { Label } from "~/components/label";
import { PageHeader } from "~/components/page-header";
import { PageHeaderTitle } from "~/components/page-header-title";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";

export const Route = createFileRoute("/transactions")({
  component: RouteComponent,
});

const sample_number = 4;

function RouteComponent() {
  return (
    <>
      <PageHeader className="flex items-center justify-between">
        <PageHeaderTitle>Transacciones</PageHeaderTitle>
        <Button>
          <Plus size={18} strokeWidth={4} />
          Nueva Transacción
        </Button>
      </PageHeader>
      <section className="flex-1 grid grid-cols-3 gap-x-4 gap-y-8">
        <Card className="col-span-1">
          <CardHeader className="flex-row items-center justify-between">
            <CardTitle>Total Ingresos</CardTitle>
            <TrendingUp size={18} />
          </CardHeader>
          <CardContent>
            <BalanceCardContent
              amount={1000}
              variant="income"
              subtext={`${sample_number} transacciones`}
            />
          </CardContent>
        </Card>
        <Card className="col-span-1">
          <CardHeader className="flex-row items-center justify-between">
            <CardTitle>Total Gastos</CardTitle>
            <ArrowDown size={18} />
          </CardHeader>
          <CardContent>
            <BalanceCardContent
              amount={3000}
              variant="expense"
              subtext={`${sample_number} transacciones`}
            />
          </CardContent>
        </Card>
        <Card className="col-span-1">
          <CardHeader className="flex-row items-center justify-between">
            <CardTitle>Balance Neto</CardTitle>
            <ArrowDown size={18} />
          </CardHeader>
          <CardContent>
            <BalanceCardContent
              amount={3000}
              variant="income"
              subtext={`${sample_number + sample_number} transacciones totales`}
            />
          </CardContent>
        </Card>
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Filtros</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-5">
            <div className="col-span-1">
              <Label>Categoría</Label>
            </div>
            <div className="col-span-1">
              <Label>Categoría</Label>
            </div>
            <div className="col-span-1">
              <Label>Categoría</Label>
            </div>
            <div className="col-span-1">
              <Label>Categoría</Label>
            </div>
          </CardContent>
        </Card>
      </section>
    </>
  );
}
