import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDown,
  ChevronDown,
  DollarSign,
  Plus,
  TrendingUp,
} from "lucide-react";
import { BalanceCardContent } from "~/components/balance-card-content";
import { Button } from "~/components/button";
import { DatePicker } from "~/components/transactions/date-picker";
import { Dropdown } from "~/components/dropdown";
import { Label } from "~/components/label";
import { PageHeader } from "~/components/page-header";
import { PageHeaderTitle } from "~/components/page-header-title";
import { TransactionsTable } from "~/components/transactions/transactions-table";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";

export const Route = createFileRoute("/transactions")({
  component: RouteComponent,
});

const sample_number = 4;

const sample_categories = [
  "Todas las categorías",
  "Alimentos",
  "Transporte",
  "Salud",
  "Entretenimiento",
  "Servicios",
];
const sample_types = ["Todas las transacciones", "Ingresos", "Gastos"];

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
            <DollarSign size={18} />
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
          <CardContent className="grid grid-cols-[minmax(320px,1fr)_minmax(320px,1fr)_minmax(210px,0.5fr)_minmax(210px,0.5fr)] gap-4 w-fit">
            <div className="flex flex-col gap-2">
              <Label>Categoría</Label>
              <Dropdown
                data={sample_categories}
                icon={<ChevronDown size={18} />}
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label>Tipo</Label>
              <Dropdown data={sample_types} icon={<ChevronDown size={18} />} />
            </div>
            <div className="flex flex-col gap-2">
              <Label>Fecha Desde</Label>
              <DatePicker />
            </div>
            <div className="flex flex-col gap-2">
              <Label>Fecha Hasta</Label>
              <DatePicker />
            </div>
          </CardContent>
        </Card>
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Lista de Transacciones</CardTitle>
            <CardDescription>
              Mostrando "numero seleccionado" de "total"
            </CardDescription>
          </CardHeader>
          <CardContent>
            <TransactionsTable />
          </CardContent>
        </Card>
      </section>
    </>
  );
}
