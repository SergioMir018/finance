import React from "react";
import { Pie, PieChart } from "recharts";
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

const chartData = [
  { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
  { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
  { browser: "firefox", visitors: 187, fill: "var(--color-firefox)" },
  { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
  { browser: "other", visitors: 90, fill: "var(--color-other)" },
];

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "Chrome",
    color: "hsl(var(--chart-1))",
  },
  safari: {
    label: "Safari",
    color: "hsl(var(--chart-2))",
  },
  firefox: {
    label: "Firefox",
    color: "hsl(var(--chart-3))",
  },
  edge: {
    label: "Edge",
    color: "hsl(var(--chart-4))",
  },
  other: {
    label: "Other",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig;

export const ChartPieLabel = React.memo(function ChartPieLabel() {
  const chartTooltipContent = React.useMemo(
    () => <ChartTooltipContent hideLabel />,
    []
  );

  const pie = React.useMemo(
    () => <Pie data={chartData} dataKey="visitors" label nameKey="browser" />,
    [chartData]
  );

  return (
    <Card className="flex flex-col col-span-5">
      <CardHeader className="items-center pb-0">
        <CardTitle>Gastos por Categoría</CardTitle>
        <CardDescription>Distribución de gastos este mes</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="[&_.recharts-pie-label-text]:fill-foreground mx-auto aspect-square h-[600px] pb-0"
        >
          <PieChart>
            <ChartTooltip content={chartTooltipContent} />
            {pie}
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
});
