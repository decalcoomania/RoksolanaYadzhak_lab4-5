// src/components/StepsChart.jsx
"use client"

import React from "react"
import { BarChart, Bar, XAxis, CartesianGrid, LabelList, Tooltip } from "recharts"

const data = [
  { month: "Січ", steps: 8200 },
  { month: "Лют", steps: 9120 },
  { month: "Бер", steps: 10010 },
  { month: "Кві", steps: 9320 },
  { month: "Тра", steps: 10450 },
  { month: "Чер", steps: 9158 },
]

const StepsChart = () => {
  return (
    <div className="chart-card">
      <h3>Кроки (останні 6 місяців)</h3>
      <BarChart width={420} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey="month" />
        <Tooltip />
        <Bar dataKey="steps" fill="#f97316" radius={[8, 8, 0, 0]}>
          <LabelList dataKey="steps" position="top" fill="#fff" fontSize={12} />
        </Bar>
      </BarChart>
    </div>
  )
}

export default StepsChart
