"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Chart } from "@/components/ui/chart"
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell,
} from "recharts"
import { TrendingUp, Target, Zap, Shield } from "lucide-react"

export function ModelMetrics() {
  const metricsData = [
    { name: "Accuracy", value: 96.97, color: "#10b981" },
    { name: "Precision", value: 97.0, color: "#3b82f6" },
    { name: "Recall", value: 97.0, color: "#8b5cf6" },
    { name: "F1-Score", value: 97.0, color: "#f59e0b" },
  ]

  const classificationData = [
    { class: "Legitimate (-1)", precision: 0.97, recall: 0.96, f1Score: 0.97, support: 979 },
    { class: "Phishing (1)", precision: 0.97, recall: 0.98, f1Score: 0.97, support: 1232 },
  ]

  const confusionMatrix = [
    { name: "True Negative", value: 940, color: "#10b981" },
    { name: "False Positive", value: 39, color: "#f59e0b" },
    { name: "False Negative", value: 25, color: "#ef4444" },
    { name: "True Positive", value: 1207, color: "#3b82f6" },
  ]

  const pieData = [
    { name: "Correct Predictions", value: 2147, color: "#10b981" },
    { name: "Incorrect Predictions", value: 64, color: "#ef4444" },
  ]

  return (
    <div className="space-y-8">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {metricsData.map((metric, index) => {
          const icons = [TrendingUp, Target, Zap, Shield]
          const Icon = icons[index]
          return (
            <Card key={metric.name} className="border-0 shadow-lg bg-gradient-to-br from-white to-gray-50">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">{metric.name}</CardTitle>
                <Icon className="h-5 w-5" style={{ color: metric.color }} />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold" style={{ color: metric.color }}>
                  {metric.value}%
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                  <div
                    className="h-2 rounded-full transition-all duration-1000"
                    style={{
                      width: `${metric.value}%`,
                      backgroundColor: metric.color,
                    }}
                  ></div>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="text-emerald-700">Overall Model Performance</CardTitle>
            <CardDescription>Distribution of correct vs incorrect predictions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <Chart>
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={pieData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={100}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value, name) => [`${value} predictions`, name]} />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </Chart>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="text-blue-700">Performance Metrics</CardTitle>
            <CardDescription>Key performance indicators</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <Chart>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={metricsData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                    <YAxis domain={[90, 100]} tick={{ fontSize: 12 }} />
                    <Tooltip
                      formatter={(value) => [`${value}%`, "Score"]}
                      contentStyle={{
                        backgroundColor: "#f8fafc",
                        border: "1px solid #e2e8f0",
                        borderRadius: "8px",
                      }}
                    />
                    <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                      {metricsData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </Chart>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-purple-700">Detailed Classification Report</CardTitle>
          <CardDescription>Performance metrics for each class</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow className="bg-gray-50">
                <TableHead className="font-semibold">Class</TableHead>
                <TableHead className="font-semibold">Precision</TableHead>
                <TableHead className="font-semibold">Recall</TableHead>
                <TableHead className="font-semibold">F1-Score</TableHead>
                <TableHead className="font-semibold">Support</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {classificationData.map((row, index) => (
                <TableRow key={row.class} className={index % 2 === 0 ? "bg-emerald-50" : "bg-blue-50"}>
                  <TableCell className="font-medium">{row.class}</TableCell>
                  <TableCell className="text-emerald-700 font-semibold">{row.precision}</TableCell>
                  <TableCell className="text-blue-700 font-semibold">{row.recall}</TableCell>
                  <TableCell className="text-purple-700 font-semibold">{row.f1Score}</TableCell>
                  <TableCell className="text-gray-700 font-semibold">{row.support}</TableCell>
                </TableRow>
              ))}
              <TableRow className="bg-gray-100 font-bold">
                <TableCell className="font-bold">Total Average</TableCell>
                <TableCell className="text-emerald-700 font-bold">0.97</TableCell>
                <TableCell className="text-blue-700 font-bold">0.97</TableCell>
                <TableCell className="text-purple-700 font-bold">0.97</TableCell>
                <TableCell className="text-gray-700 font-bold">2211</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-orange-700">Confusion Matrix Analysis</CardTitle>
          <CardDescription>Breakdown of prediction accuracy</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[350px]">
            <Chart>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={confusionMatrix} layout="horizontal">
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis type="number" tick={{ fontSize: 12 }} />
                  <YAxis type="category" dataKey="name" tick={{ fontSize: 12 }} width={120} />
                  <Tooltip
                    formatter={(value, name) => [`${value} cases`, name]}
                    contentStyle={{
                      backgroundColor: "#f8fafc",
                      border: "1px solid #e2e8f0",
                      borderRadius: "8px",
                    }}
                  />
                  <Bar dataKey="value" radius={[0, 4, 4, 0]}>
                    {confusionMatrix.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </Chart>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
