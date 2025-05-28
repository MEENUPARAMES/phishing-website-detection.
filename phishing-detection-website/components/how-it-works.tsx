import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Database, FileText, AlertTriangle, Cpu, Zap } from "lucide-react"

export function HowItWorks() {
  const steps = [
    {
      icon: <FileText className="h-8 w-8 text-white" />,
      title: "URL Analysis",
      description:
        "The system extracts features from the URL such as length, presence of special characters, domain age, and more.",
      bgColor: "bg-gradient-to-br from-blue-500 to-blue-600",
      borderColor: "border-blue-200",
      bgLight: "bg-blue-50",
    },
    {
      icon: <Database className="h-8 w-8 text-white" />,
      title: "Feature Extraction",
      description:
        "Over 30 different features are extracted and normalized to be used as input for the machine learning model.",
      bgColor: "bg-gradient-to-br from-emerald-500 to-emerald-600",
      borderColor: "border-emerald-200",
      bgLight: "bg-emerald-50",
    },
    {
      icon: <Cpu className="h-8 w-8 text-white" />,
      title: "AI Processing",
      description:
        "Our trained machine learning model processes the features to determine if the website is legitimate or phishing.",
      bgColor: "bg-gradient-to-br from-purple-500 to-purple-600",
      borderColor: "border-purple-200",
      bgLight: "bg-purple-50",
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-white" />,
      title: "Classification",
      description: "The model classifies the URL as either legitimate or phishing with a confidence score.",
      bgColor: "bg-gradient-to-br from-orange-500 to-orange-600",
      borderColor: "border-orange-200",
      bgLight: "bg-orange-50",
    },
    {
      icon: <AlertTriangle className="h-8 w-8 text-white" />,
      title: "User Alert",
      description:
        "Users are alerted if a potential phishing site is detected, with details about the suspicious features.",
      bgColor: "bg-gradient-to-br from-red-500 to-red-600",
      borderColor: "border-red-200",
      bgLight: "bg-red-50",
    },
    {
      icon: <Zap className="h-8 w-8 text-white" />,
      title: "Real-time Protection",
      description: "Instant results help users make informed decisions about website safety before visiting.",
      bgColor: "bg-gradient-to-br from-indigo-500 to-indigo-600",
      borderColor: "border-indigo-200",
      bgLight: "bg-indigo-50",
    },
  ]

  return (
    <div className="space-y-8">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {steps.map((step, index) => (
          <Card
            key={index}
            className={`border-0 shadow-lg hover:shadow-xl transition-all duration-300 ${step.bgLight}`}
          >
            <CardHeader className="flex flex-row items-center gap-4">
              <div className={`flex h-14 w-14 items-center justify-center rounded-full shadow-lg ${step.bgColor}`}>
                {step.icon}
              </div>
              <div>
                <CardTitle className="text-gray-800">Step {index + 1}</CardTitle>
                <CardDescription className="font-semibold text-gray-700">{step.title}</CardDescription>
              </div>
            </CardHeader>
            <CardContent className="flex-1">
              <p className="text-gray-600 leading-relaxed">{step.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="border-0 shadow-xl bg-gradient-to-br from-gray-50 to-blue-50">
        <CardHeader className="bg-gradient-to-r from-gray-700 to-blue-700 text-white rounded-t-lg">
          <CardTitle className="flex items-center gap-2">
            <Cpu className="h-6 w-6" />
            Technical Implementation
          </CardTitle>
          <CardDescription className="text-gray-100">
            How the machine learning model works behind the scenes
          </CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          <div className="space-y-6">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-4">
                <h4 className="font-bold text-lg text-gray-800">🎯 Model Training</h4>
                <p className="text-gray-600 leading-relaxed">
                  The phishing detection system uses a machine learning model trained on a dataset of over 2,000
                  websites, with features extracted from both legitimate and phishing URLs.
                </p>
              </div>
              <div className="space-y-4">
                <h4 className="font-bold text-lg text-gray-800">🚀 Performance</h4>
                <p className="text-gray-600 leading-relaxed">
                  The model achieves 96.97% accuracy by analyzing patterns in URL structure, domain information, HTML
                  and JavaScript content, and other web security indicators.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <h4 className="font-bold text-lg text-gray-800 mb-4">🛠️ Technology Stack</h4>
              <div className="grid gap-3 md:grid-cols-2">
                <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-blue-800 font-medium">Python for ML model training</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-emerald-50 rounded-lg">
                  <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                  <span className="text-emerald-800 font-medium">Scikit-learn algorithms</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <span className="text-purple-800 font-medium">Next.js frontend</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-orange-50 rounded-lg">
                  <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                  <span className="text-orange-800 font-medium">Real-time API endpoints</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
