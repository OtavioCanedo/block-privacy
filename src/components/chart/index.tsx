"use client";

import { Eye } from "lucide-react";
import { ChartConfig, ChartContainer } from "../ui/chart";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import { Card } from "../card";

export function ChartOverview() {
  const chartData = [
    { month: "Janeiro", access: 15 },
    { month: "Fevereiro", access: 10 },
    { month: "Março", access: 28 },
    { month: "Abril", access: 12 },
    { month: "Maio", access: 15 },
    { month: "Junho", access: 22 },
    { month: "Agosto", access: 17 },
    { month: "Setembro", access: 19 },
    { month: "Outubro", access: 12 },
  ];

  const chartConfig = {
    access: {
      label: "Acessos",
      color: "#2563eb",
    },
  } satisfies ChartConfig;

  return (
    <Card
      className="w-full md:w-1/2 md:max-w-[600px]"
      title="Acessos por mês"
      icon={<Eye className="h-4 w-4" />}
      content={
        <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
          <BarChart data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <YAxis tickLine={false} tickMargin={10} axisLine={false} />
            <Bar dataKey="access" fill={chartConfig.access.color} radius={4} />
          </BarChart>
        </ChartContainer>
      }
    />
  );
}
