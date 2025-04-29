"use client"

import React from "react"
import { BarChart, Bar, XAxis, CartesianGrid, LabelList, Tooltip } from "recharts"

const data = [
  { month: "1", water: 2.5 },  // 2.5 л води
  { month: "2", water: 3.0 },
  { month: "3", water: 2.8 },
  { month: "4", water: 3.2 },
  { month: "5", water: 2.5 },
  { month: "6", water: 1.7 },
  { month: "7", water: 1.9 },
  { month: "8", water: 2.0 },
  { month: "9", water: 2.1 },
  { month: "10", water: 1.8 },
]

const WaterChart = () => {
  return (
    <div className="chart-card">
      <h3>Кількість випитої води</h3>
      <BarChart width={500} height={380} data={data}>
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
