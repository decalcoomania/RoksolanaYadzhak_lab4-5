"use client"

import React from "react"
import { BarChart, Bar, XAxis, CartesianGrid, LabelList, Tooltip } from "recharts"

const data = [
  { month: "Січ", water: 2.5 },  // 2.5 л води
  { month: "Лют", water: 3.0 },
  { month: "Бер", water: 2.8 },
  { month: "Кві", water: 3.2 },
  { month: "Тра", water: 3.5 },
  { month: "Чер", water: 3.0 },
]

const WaterChart = () => {
  return (
    <div className="chart-card">
      <h3>Вода (останні 6 місяців)</h3>
      <BarChart width={420} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey="month" />
        <Tooltip />
        <Bar dataKey="water" fill="#400b58" radius={[8, 8, 0, 0]}>
          <LabelList dataKey="water" position="top" fill="#fff" fontSize={12} />
        </Bar>
      </BarChart>
    </div>
  )
}

export default WaterChart
