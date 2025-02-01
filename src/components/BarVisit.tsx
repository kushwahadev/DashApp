"use client"

import * as React from "react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
const chartData = [
  { date: "2024-04-01", Sales: 222, NetMargin: 150 },
  { date: "2024-04-02", Sales: 97, NetMargin: 180 },
  { date: "2024-04-03", Sales: 167, NetMargin: 120 },
  { date: "2024-04-04", Sales: 242, NetMargin: 260 },
  { date: "2024-04-05", Sales: 373, NetMargin: 290 },
  { date: "2024-04-06", Sales: 301, NetMargin: 340 },
  { date: "2024-04-07", Sales: 245, NetMargin: 180 },
  { date: "2024-04-08", Sales: 409, NetMargin: 320 },
  { date: "2024-04-09", Sales: 59, NetMargin: 110 },
  { date: "2024-04-10", Sales: 261, NetMargin: 190 },
  { date: "2024-04-11", Sales: 327, NetMargin: 350 },
  { date: "2024-04-12", Sales: 292, NetMargin: 210 },
  { date: "2024-04-13", Sales: 342, NetMargin: 380 },
  { date: "2024-04-14", Sales: 137, NetMargin: 220 },
  { date: "2024-04-15", Sales: 120, NetMargin: 170 },
  { date: "2024-04-16", Sales: 138, NetMargin: 190 },
  { date: "2024-04-17", Sales: 446, NetMargin: 360 },
  { date: "2024-04-18", Sales: 364, NetMargin: 410 },
  { date: "2024-04-19", Sales: 243, NetMargin: 180 },
  { date: "2024-04-20", Sales: 89, NetMargin: 150 },
  { date: "2024-04-21", Sales: 137, NetMargin: 200 },
  { date: "2024-04-22", Sales: 224, NetMargin: 170 },
  { date: "2024-04-23", Sales: 138, NetMargin: 230 },
  { date: "2024-04-24", Sales: 387, NetMargin: 290 },
  { date: "2024-04-25", Sales: 215, NetMargin: 250 },
  { date: "2024-04-26", Sales: 75, NetMargin: 130 },
  { date: "2024-04-27", Sales: 383, NetMargin: 420 },
  { date: "2024-04-28", Sales: 122, NetMargin: 180 },
  { date: "2024-04-29", Sales: 315, NetMargin: 240 },
  { date: "2024-04-30", Sales: 454, NetMargin: 380 },
  { date: "2024-05-01", Sales: 165, NetMargin: 220 },
  { date: "2024-05-02", Sales: 293, NetMargin: 310 },
  { date: "2024-05-03", Sales: 247, NetMargin: 190 },
  { date: "2024-05-04", Sales: 385, NetMargin: 420 },
  { date: "2024-05-05", Sales: 481, NetMargin: 390 },
  { date: "2024-05-06", Sales: 498, NetMargin: 520 },
  { date: "2024-05-07", Sales: 388, NetMargin: 300 },
  { date: "2024-05-08", Sales: 149, NetMargin: 210 },
  { date: "2024-05-09", Sales: 227, NetMargin: 180 },
  { date: "2024-05-10", Sales: 293, NetMargin: 330 },
  { date: "2024-05-11", Sales: 335, NetMargin: 270 },
  { date: "2024-05-12", Sales: 197, NetMargin: 240 },
  { date: "2024-05-13", Sales: 197, NetMargin: 160 },
  { date: "2024-05-14", Sales: 448, NetMargin: 490 },
  { date: "2024-05-15", Sales: 473, NetMargin: 380 },
  { date: "2024-05-16", Sales: 338, NetMargin: 400 },
  { date: "2024-05-17", Sales: 499, NetMargin: 420 },
  { date: "2024-05-18", Sales: 315, NetMargin: 350 },
  { date: "2024-05-19", Sales: 235, NetMargin: 180 },
  { date: "2024-05-20", Sales: 177, NetMargin: 230 },
  { date: "2024-05-21", Sales: 82, NetMargin: 140 },
  { date: "2024-05-22", Sales: 81, NetMargin: 120 },
  { date: "2024-05-23", Sales: 252, NetMargin: 290 },
  { date: "2024-05-24", Sales: 294, NetMargin: 220 },
  { date: "2024-05-25", Sales: 201, NetMargin: 250 },
  { date: "2024-05-26", Sales: 213, NetMargin: 170 },
  { date: "2024-05-27", Sales: 420, NetMargin: 460 },
  { date: "2024-05-28", Sales: 233, NetMargin: 190 },
  { date: "2024-05-29", Sales: 78, NetMargin: 130 },
  { date: "2024-05-30", Sales: 340, NetMargin: 280 },
  { date: "2024-05-31", Sales: 178, NetMargin: 230 },
  { date: "2024-06-01", Sales: 178, NetMargin: 200 },
  { date: "2024-06-02", Sales: 470, NetMargin: 410 },
  { date: "2024-06-03", Sales: 103, NetMargin: 160 },
  { date: "2024-06-04", Sales: 439, NetMargin: 380 },
  { date: "2024-06-05", Sales: 88, NetMargin: 140 },
  { date: "2024-06-06", Sales: 294, NetMargin: 250 },
  { date: "2024-06-07", Sales: 323, NetMargin: 370 },
  { date: "2024-06-08", Sales: 385, NetMargin: 320 },
  { date: "2024-06-09", Sales: 438, NetMargin: 480 },
  { date: "2024-06-10", Sales: 155, NetMargin: 200 },
  { date: "2024-06-11", Sales: 92, NetMargin: 150 },
  { date: "2024-06-12", Sales: 492, NetMargin: 420 },
  { date: "2024-06-13", Sales: 81, NetMargin: 130 },
  { date: "2024-06-14", Sales: 426, NetMargin: 380 },
  { date: "2024-06-15", Sales: 307, NetMargin: 350 },
  { date: "2024-06-16", Sales: 371, NetMargin: 310 },
  { date: "2024-06-17", Sales: 475, NetMargin: 520 },
  { date: "2024-06-18", Sales: 107, NetMargin: 170 },
  { date: "2024-06-19", Sales: 341, NetMargin: 290 },
  { date: "2024-06-20", Sales: 408, NetMargin: 450 },
  { date: "2024-06-21", Sales: 169, NetMargin: 210 },
  { date: "2024-06-22", Sales: 317, NetMargin: 270 },
  { date: "2024-06-23", Sales: 480, NetMargin: 530 },
  { date: "2024-06-24", Sales: 132, NetMargin: 180 },
  { date: "2024-06-25", Sales: 141, NetMargin: 190 },
  { date: "2024-06-26", Sales: 434, NetMargin: 380 },
  { date: "2024-06-27", Sales: 448, NetMargin: 490 },
  { date: "2024-06-28", Sales: 149, NetMargin: 200 },
  { date: "2024-06-29", Sales: 103, NetMargin: 160 },
  { date: "2024-06-30", Sales: 446, NetMargin: 400 },
]

const chartConfig = {
  views: {
    label: "Page Views",
  },
  Sales: {
    label: "Sales",
    color: "hsl(var(--chart-1))",
  },
  NetMargin: {
    label: "NetMargin",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

export function BarVisit() {
  const [activeChart, setActiveChart] =
    React.useState<keyof typeof chartConfig>("Sales")

  const total = React.useMemo(
    () => ({
      Sales: chartData.reduce((acc, curr) => acc + curr.Sales, 0),
      NetMargin: chartData.reduce((acc, curr) => acc + curr.NetMargin, 0),
    }),
    []
  )

  return (
    <Card>
      <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
        <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6">
          <CardTitle>Total Sale And Revenue </CardTitle>
          <CardDescription>
            Showing total sales and MArgin for the last 3 months
          </CardDescription>
        </div>
        <div className="flex">
          {["Sales", "NetMargin"].map((key) => {
            const chart = key as keyof typeof chartConfig
            return (
              <button
                key={chart}
                data-active={activeChart === chart}
                className="relative z-30 flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l data-[active=true]:bg-muted/50 sm:border-l sm:border-t-0 sm:px-8 sm:py-6"
                onClick={() => setActiveChart(chart)}
              >
                <span className="text-xs text-muted-foreground">
                  {chartConfig[chart].label}
                </span>
                <span className="text-lg font-bold leading-none sm:text-3xl">
                  {total[key as keyof typeof total].toLocaleString()}
                </span>
              </button>
            )
          })}
        </div>
      </CardHeader>
      <CardContent className="px-2 sm:p-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <BarChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value)
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })
              }}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className="w-[150px]"
                  nameKey="views"
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })
                  }}
                />
              }
            />
            <Bar dataKey={activeChart} fill={`var(--color-${activeChart})`} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
