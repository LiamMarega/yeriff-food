'use client'

import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'

const data = [
  { month: 'Jan', sales: 200 },
  { month: 'Feb', sales: 300 },
  { month: 'Mar', sales: 500 },
  { month: 'Apr', sales: 342 },
  { month: 'May', sales: 400 },
  { month: 'Jun', sales: 300 },
]

export default function SalesChart() {
  return (
    <div className="h-full w-full">
      <div className="flex justify-between items-center mb-4">
        <span className="text-sm font-medium">Track Sales</span>
        <span className="text-sm text-gray-400">342 items</span>
      </div>
      <div className="h-[200px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis 
              dataKey="month" 
              stroke="#666"
              tickLine={false}
              axisLine={false}
            />
            <YAxis 
              stroke="#666"
              tickLine={false}
              axisLine={false}
              ticks={[0, 200, 400, 600]}
            />
            <Tooltip 
              contentStyle={{ 
                background: '#1E1E1E',
                border: 'none',
                borderRadius: '8px',
                padding: '8px'
              }}
            />
            <Line 
              type="monotone" 
              dataKey="sales" 
              stroke="#FFD700"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}