import React, { useMemo } from "react";
import { Area, AreaChart, CartesianGrid, Line, XAxis } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "~/components/ui/chart";

const rawData = [
  { month: "Enero", income: 186, expenses: 80 },
  { month: "Febrero", income: 305, expenses: 200 },
  { month: "Marzo", income: 237, expenses: 120 },
  { month: "Abril", income: 73, expenses: 190 },
  { month: "Mayo", income: 209, expenses: 130 },
  { month: "Junio", income: 214, expenses: 140 },
];

const chartData = rawData.map((item) => ({
  ...item,
  balance: item.income - item.expenses,
}));

const chartConfig = {
  income: {
    label: "Ingresos",
    color: "hsl(var(--chart-2))",
  },
  expenses: {
    label: "Gastos",
    color: "hsl(var(--chart-6))",
  },
  balance: {
    label: "Ingreso neto",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig;

export const ChartAreaGradient = React.memo(function ChartAreaGradient() {
  const memoTooltipContent = useMemo(() => <ChartTooltipContent />, []);

  return (
    <Card className="col-span-7">
      <CardHeader>
        <CardTitle>Tendencia de Balance</CardTitle>
        <CardDescription>
          Tu balance durante los últimos 6 meses
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          {React.useMemo(
            () => (
              <AreaChart
                accessibilityLayer
                data={chartData}
                margin={{
                  left: 12,
                  right: 12,
                }}
              >
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey="month"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                  tickFormatter={(value) => String(value).slice(0, 3)}
                />
                <ChartTooltip cursor={true} content={memoTooltipContent} />
                <defs>
                  <linearGradient id="fillIncome" x1="0" y1="0" x2="0" y2="1">
                    <stop
                      offset="5%"
                      stopColor="var(--color-income)"
                      stopOpacity={0.8}
                    />
                    <stop
                      offset="95%"
                      stopColor="var(--color-income)"
                      stopOpacity={0.1}
                    />
                  </linearGradient>
                  <linearGradient id="fillExpenses" x1="0" y1="0" x2="0" y2="1">
                    <stop
                      offset="5%"
                      stopColor="var(--color-expenses)"
                      stopOpacity={0.8}
                    />
                    <stop
                      offset="95%"
                      stopColor="var(--color-expenses)"
                      stopOpacity={0.1}
                    />
                  </linearGradient>
                </defs>
                <Area
                  dataKey="expenses"
                  type="natural"
                  fill="url(#fillExpenses)"
                  fillOpacity={0.4}
                  stroke="var(--color-expenses)"
                />
                <Area
                  dataKey="income"
                  type="natural"
                  fill="url(#fillIncome)"
                  fillOpacity={0.4}
                  stroke="var(--color-income)"
                />
                <Line
                  dataKey="balance"
                  stroke="hsl(var(--saving))"
                  strokeWidth={2}
                  dot={{ r: 3 }}
                  type="monotone"
                />
              </AreaChart>
            ),
            [chartData]
          )}
        </ChartContainer>
      </CardContent>
    </Card>
  );
});
