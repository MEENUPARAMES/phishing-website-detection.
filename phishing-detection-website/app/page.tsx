import { Shield, ExternalLink, Zap, Target, Lock } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { UrlCheckForm } from "@/components/url-check-form"
import { ModelMetrics } from "@/components/model-metrics"
import { FeatureImportance } from "@/components/feature-importance"
import { HowItWorks } from "@/components/how-it-works"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md supports-[backdrop-filter]:bg-white/60 shadow-sm">
        <div className="container flex h-16 items-center">
          <div className="mr-4 flex">
            <Link href="/" className="flex items-center space-x-2">
              <div className="relative">
                <Shield className="h-8 w-8 text-emerald-500" />
                <div className="absolute -top-1 -right-1 h-3 w-3 bg-orange-400 rounded-full animate-pulse"></div>
              </div>
              <span className="font-bold text-xl bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                PhishGuard
              </span>
            </Link>
          </div>
          <nav className="flex flex-1 items-center justify-end space-x-6">
            <Link
              href="#features"
              className="text-sm font-medium text-gray-700 hover:text-emerald-600 transition-colors"
            >
              Features
            </Link>
            <Link
              href="#how-it-works"
              className="text-sm font-medium text-gray-700 hover:text-emerald-600 transition-colors"
            >
              How It Works
            </Link>
            <Link href="#about" className="text-sm font-medium text-gray-700 hover:text-emerald-600 transition-colors">
              About
            </Link>
            <Button className="bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 text-white shadow-lg">
              <Link href="https://github.com/MEENUPARAMES" className="flex items-center gap-1">
                <span>GitHub</span>
                <ExternalLink className="h-4 w-4" />
              </Link>
            </Button>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/10 via-blue-400/10 to-purple-400/10"></div>
          <div className="container px-4 md:px-6 relative">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-6">
                <div className="space-y-4">
                  <div className="inline-flex items-center rounded-full bg-emerald-100 px-4 py-2 text-sm font-medium text-emerald-700">
                    <Zap className="mr-2 h-4 w-4" />
                    96.97% Accuracy Rate
                  </div>
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl xl:text-7xl bg-gradient-to-r from-gray-900 via-emerald-700 to-blue-700 bg-clip-text text-transparent">
                    Stop Phishing Attacks Before They Start
                  </h1>
                  <p className="max-w-[600px] text-gray-600 text-lg md:text-xl leading-relaxed">
                    Our AI-powered detection system identifies malicious websites instantly. Protect yourself and others
                    with cutting-edge machine learning technology.
                  </p>
                </div>
                <div className="flex flex-col gap-3 min-[400px]:flex-row">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white shadow-lg px-8"
                  >
                    <Link href="#check-url" className="flex items-center gap-2">
                      <Shield className="h-5 w-5" />
                      Check URL Now
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-emerald-200 text-emerald-700 hover:bg-emerald-50"
                  >
                    <Link href="#how-it-works">Learn More</Link>
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Card className="w-full shadow-2xl border-0 bg-white/90 backdrop-blur-sm">
                  <CardHeader className="bg-gradient-to-r from-emerald-500 to-blue-500 text-white rounded-t-lg">
                    <CardTitle className="flex items-center gap-2">
                      <Target className="h-5 w-5" />
                      URL Security Scanner
                    </CardTitle>
                    <CardDescription className="text-emerald-50">
                      Enter any URL to check for phishing threats
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-6">
                    <UrlCheckForm />
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="w-full py-16 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                  Powerful Protection Features
                </h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl">
                  Advanced AI technology meets user-friendly design for maximum security
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-3">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-emerald-50 to-emerald-100">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 shadow-lg">
                    <Shield className="h-7 w-7 text-white" />
                  </div>
                  <CardTitle className="text-emerald-800">Ultra-High Accuracy</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-emerald-700">
                    Our model achieves 96.97% accuracy in detecting phishing websites using advanced machine learning
                    algorithms.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-blue-50 to-blue-100">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-500 shadow-lg">
                    <Zap className="h-7 w-7 text-white" />
                  </div>
                  <CardTitle className="text-blue-800">Lightning Fast</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-blue-700">
                    Get instant results with real-time analysis and immediate threat detection for any URL.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-purple-50 to-purple-100">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-purple-500 shadow-lg">
                    <Target className="h-7 w-7 text-white" />
                  </div>
                  <CardTitle className="text-purple-800">Smart Analysis</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-purple-700">
                    Comprehensive analysis of URL structure, domain information, SSL certificates, and content patterns.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl bg-gradient-to-r from-gray-900 to-blue-700 bg-clip-text text-transparent">
                  How Our AI Works
                </h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl">
                  Advanced machine learning algorithms analyze multiple factors to protect you from threats
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-5xl py-12">
              <HowItWorks />
            </div>
          </div>
        </section>

        <section id="model-performance" className="w-full py-16 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl bg-gradient-to-r from-gray-900 to-purple-700 bg-clip-text text-transparent">
                  Proven Performance
                </h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl">
                  Our model has been rigorously tested on thousands of websites
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-5xl py-12">
              <Tabs defaultValue="metrics" className="w-full">
                <TabsList className="grid w-full grid-cols-2 bg-gray-100">
                  <TabsTrigger
                    value="metrics"
                    className="data-[state=active]:bg-emerald-500 data-[state=active]:text-white"
                  >
                    Performance Metrics
                  </TabsTrigger>
                  <TabsTrigger
                    value="features"
                    className="data-[state=active]:bg-blue-500 data-[state=active]:text-white"
                  >
                    Feature Analysis
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="metrics" className="p-4">
                  <ModelMetrics />
                </TabsContent>
                <TabsContent value="features" className="p-4">
                  <FeatureImportance />
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        <section
          id="about"
          className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-br from-emerald-50 via-blue-50 to-purple-50"
        >
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl bg-gradient-to-r from-emerald-700 to-blue-700 bg-clip-text text-transparent">
                  About This Project
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p className="text-lg leading-relaxed">
                    This phishing website detection system was developed as part of my B.Tech in Artificial Intelligence
                    and Data Science. The project uses cutting-edge machine learning techniques to analyze URLs, website
                    content, and behavioral indicators.
                  </p>
                  <p className="text-lg leading-relaxed">
                    The model can be seamlessly integrated into web browsers or security tools to enhance user
                    protection, delivering exceptional accuracy in identifying and preventing access to malicious
                    websites.
                  </p>
                </div>
              </div>
              <div className="space-y-6">
                <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
                  <CardHeader className="bg-gradient-to-r from-emerald-500 to-blue-500 text-white rounded-t-lg">
                    <CardTitle className="flex items-center gap-2">
                      <Lock className="h-5 w-5" />
                      Developer Profile
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <h4 className="font-bold text-xl text-gray-900">Meenu Parames P</h4>
                      <p className="text-gray-600 leading-relaxed">
                        B.Tech in Artificial Intelligence and Data Science from SNS College of Engineering, Coimbatore.
                        Specialized in Python, Machine Learning, Deep Learning, and Data Analysis with a passion for
                        cybersecurity.
                      </p>
                      <div className="flex gap-3">
                        <Button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white">
                          <Link href="https://linkedin.com/in/meenuparames" className="flex items-center gap-1">
                            <span>LinkedIn</span>
                            <ExternalLink className="h-4 w-4" />
                          </Link>
                        </Button>
                        <Button className="bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-800 hover:to-gray-900 text-white">
                          <Link href="https://github.com/MEENUPARAMES" className="flex items-center gap-1">
                            <span>GitHub</span>
                            <ExternalLink className="h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full border-t bg-white py-8">
        <div className="container flex flex-col items-center justify-center gap-4 md:flex-row md:gap-8">
          <p className="text-center text-sm text-gray-600 md:text-left">
            © 2025 PhishGuard. Protecting the web, one URL at a time.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-sm text-gray-500 hover:text-emerald-600 transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="text-sm text-gray-500 hover:text-emerald-600 transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
