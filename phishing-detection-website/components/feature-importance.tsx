"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Chart } from "@/components/ui/chart"
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
} from "recharts"

export function FeatureImportance() {
  const featureImportanceData = [
    { name: "URL Length", importance: 0.092, color: "#ef4444" },
    { name: "Has IP Address", importance: 0.087, color: "#f97316" },
    { name: "Domain Age", importance: 0.085, color: "#f59e0b" },
    { name: "SSL Certificate", importance: 0.082, color: "#eab308" },
    { name: "Subdomain Count", importance: 0.078, color: "#84cc16" },
    { name: "Has @ Symbol", importance: 0.075, color: "#22c55e" },
    { name: "Redirect Count", importance: 0.072, color: "#10b981" },
    { name: "URL Shortening", importance: 0.068, color: "#06b6d4" },
    { name: "Has Hyphen", importance: 0.065, color: "#3b82f6" },
    { name: "Double Slash", importance: 0.062, color: "#6366f1" },
  ].sort((a, b) => b.importance - a.importance)

  const radarData = featureImportanceData.slice(0, 6).map((item) => ({
    feature: item.name.split(" ")[0], // Shortened names for radar chart
    importance: item.importance * 100,
  }))

  return (
    <div className="space-y-8">
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-emerald-700">Feature Importance Analysis</CardTitle>
          <CardDescription>
            The relative importance of each feature in the model's decision-making process
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[500px]">
            <Chart>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={featureImportanceData}
                  layout="vertical"
                  margin={{ top: 5, right: 30, left: 120, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis
                    type="number"
                    domain={[0, Math.max(...featureImportanceData.map((d) => d.importance)) * 1.1]}
                    tick={{ fontSize: 12 }}
                  />
                  <YAxis type="category" dataKey="name" tick={{ fontSize: 12 }} width={120} />
                  <Tooltip
                    formatter={(value) => [(Number(value) * 100).toFixed(2) + "%", "Importance"]}
                    contentStyle={{
                      backgroundColor: "#f8fafc",
                      border: "1px solid #e2e8f0",
                      borderRadius: "8px",
                    }}
                  />
                  <Bar dataKey="importance" radius={[0, 4, 4, 0]}>
                    {featureImportanceData.map((entry, index) => (
                      <Bar key={`bar-${index}`} dataKey="importance" fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </Chart>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="text-blue-700">Top Features Radar</CardTitle>
            <CardDescription>Visual representation of the most important features</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[350px]">
              <Chart>
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart data={radarData}>
                    <PolarGrid stroke="#e2e8f0" />
                    <PolarAngleAxis tick={{ fontSize: 12 }} />
                    <PolarRadiusAxis
                      angle={90}
                      domain={[0, Math.max(...radarData.map((d) => d.importance)) * 1.1]}
                      tick={{ fontSize: 10 }}
                    />
                    <Radar
                      name="Importance"
                      dataKey="importance"
                      stroke="#3b82f6"
                      fill="#3b82f6"
                      fillOpacity={0.3}
                      strokeWidth={2}
                    />
                    <Tooltip
                      formatter={(value) => [`${Number(value).toFixed(2)}%`, "Importance"]}
                      contentStyle={{
                        backgroundColor: "#f8fafc",
                        border: "1px solid #e2e8f0",
                        borderRadius: "8px",
                      }}
                    />
                  </RadarChart>
                </ResponsiveContainer>
              </Chart>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="text-purple-700">Feature Categories</CardTitle>
            <CardDescription>Understanding what each feature detects</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-red-50 rounded-lg border border-red-200">
                  <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                  <div>
                    <p className="font-semibold text-red-800">URL Structure</p>
                    <p className="text-sm text-red-600">Length, special characters, format</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-orange-50 rounded-lg border border-orange-200">
                  <div className="w-4 h-4 bg-orange-500 rounded-full"></div>
                  <div>
                    <p className="font-semibold text-orange-800">Domain Analysis</p>
                    <p className="text-sm text-orange-600">Age, subdomains, IP addresses</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-emerald-50 rounded-lg border border-emerald-200">
                  <div className="w-4 h-4 bg-emerald-500 rounded-full"></div>
                  <div>
                    <p className="font-semibold text-emerald-800">Security Features</p>
                    <p className="text-sm text-emerald-600">SSL certificates, HTTPS usage</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                  <div>
                    <p className="font-semibold text-blue-800">Behavioral Patterns</p>
                    <p className="text-sm text-blue-600">Redirects, shortening services</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
