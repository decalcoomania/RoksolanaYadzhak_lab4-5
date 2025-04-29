// src/components/StepsChart.jsx
"use client"

import React from "react"
import { BarChart, Bar, XAxis, CartesianGrid, LabelList, Tooltip } from "recharts"

const data = [
  { month: "1", steps: 8200 },
  { month: "2", steps: 9120 },
  { month: "3", steps: 10010 },
  { month: "4", steps: 9320 },
  { month: "5", steps: 10450 },
  { month: "6", steps: 19158 },
  { month: "7", steps: 7558 },
  { month: "8", steps: 3158 },
  { month: "9", steps: 12258 },
  { month: "10", steps: 9158 },
]

const StepsChart = () => {
  return (
    <div className="chart-card">
      <h3>Кроки за квітень</h3>
      <BarChart width={500} height={380} data={data}>
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
