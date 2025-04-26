"use client"

import React from "react"
import { RadialBarChart, RadialBar, PolarRadiusAxis, Label, Tooltip } from "recharts"

const data = [
  { name: "День", calories: 1800 },  // Наприклад, спожиті калорії за день
]

const DailyCaloriesChart = () => {
  const totalCalories = data[0].calories // Кількість калорій за день

  return (
    <div className="chart-card">
      <h3>Спожиті калорії за день</h3>
      <RadialBarChart
        width={520}
        height={360}  // Висота для напівкруглого вигляду
        innerRadius="80%"
        outerRadius="50%"
        data={data}
        startAngle={180}  // Починаємо з лівого боку, щоб створити напівкруг
        endAngle={0}      // Завершуємо на правому боці
      >
        <PolarRadiusAxis tick={false} />
        <RadialBar
          dataKey="calories"
          cornerRadius={10}
          fill="#f97316"
          stroke="#fff"
          strokeWidth={2}
        />
        <Tooltip />
        <Label
          content={({ viewBox }) => {
            if (viewBox && "cx" in viewBox && "cy" in viewBox) {
              return (
                <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle">
                  <tspan
                    x={viewBox.cx}
                    y={(viewBox.cy || 0) - 16}
                    className="fill-foreground text-2xl font-bold"
                  >
                    {totalCalories.toLocaleString()}
                  </tspan>
                  <tspan
                    x={viewBox.cx}
                    y={(viewBox.cy || 0) + 4}
                    className="fill-muted-foreground"
                  >
                    Калорії
                  </tspan>
                </text>
              )
            }
          }}
        />
      </RadialBarChart>
    </div>
  )
}

export default DailyCaloriesChart
