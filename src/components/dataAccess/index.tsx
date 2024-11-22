"use client";

import { PieChart } from "lucide-react";
import { ChartConfig, ChartContainer } from "../ui/chart";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import { Card } from "../card";

export function DataAccess() {
  const chartData = [
    { dataType: "Nome", percentage: 35 },
    { dataType: "E-mail", percentage: 25 },
    { dataType: "Endereço", percentage: 15 },
    { dataType: "Telefone", percentage: 10 },
    { dataType: "Outros", percentage: 15 },
  ];

  const chartConfig = {
    percentage: {
      label: "Percentual",
      color: "#10b981",
    },
  } satisfies ChartConfig;

  return (
    <Card
      className="w-full md:w-1/2 md:max-w-[600px]"
      title="Percentual de Acesso por Tipo de Dado"
      icon={<PieChart className="h-4 w-4" />}
      content={
        <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
          <BarChart data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="dataType"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value}
            />
            <YAxis
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => `${value}%`}
            />
            <Bar
              dataKey="percentage"
              fill={chartConfig.percentage.color}
              radius={4}
            />
          </BarChart>
        </ChartContainer>
      }
    />
  );
}
