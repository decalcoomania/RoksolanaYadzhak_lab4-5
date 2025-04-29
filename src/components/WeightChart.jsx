"use client"

import React from "react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, LabelList } from "recharts"

const data = [
  { month: "1", weight: 90 },
  { month: "2", weight: 89 },
  { month: "3", weight: 89 },
  { month: "4", weight: 88 },
  { month: "5", weight: 87 },
  { month: "6", weight: 87.3 },
  { month: "7", weight: 86.9 },
  { month: "8", weight: 85.1 },
  { month: "9", weight: 85 },
  { month: "10", weight: 84.9 },
]

const WeightChart = () => {
  return (
    <div className="chart-card">
      <h3>Зміна ваги (кг)</h3>
      <LineChart width={700} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey="month" />
        <YAxis domain={['auto', 'auto']} />
        <Tooltip />
        <Line type="monotone" dataKey="weight" stroke="#f97316" strokeWidth={3} dot={{ r: 6 }} activeDot={{ r: 8 }}>
          <LabelList dataKey="weight" position="top" fill="#fff" fontSize={12} />
        </Line>
      </LineChart>
    </div>
  )
}

export default WeightChart
