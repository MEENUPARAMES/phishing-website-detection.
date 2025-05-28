"use client"

import type React from "react"

import { useState } from "react"
import { AlertTriangle, CheckCircle, Loader2, Shield, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { checkUrl } from "@/lib/actions"

export function UrlCheckForm() {
  const [url, setUrl] = useState("")
  const [result, setResult] = useState<null | {
    isPhishing: boolean
    confidence: number
    features: Record<string, any>
  }>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      // Validate URL format
      if (!url.match(/^(http|https):\/\/[a-zA-Z0-9-_.]+\.[a-zA-Z]{2,}(\/.*)?$/)) {
        throw new Error("Please enter a valid URL (e.g., https://example.com)")
      }

      const checkResult = await checkUrl(url)
      setResult(checkResult)
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred while checking the URL")
    } finally {
      setLoading(false)
    }
  }

  const clearResult = () => {
    setResult(null)
    setError(null)
    setUrl("")
  }

  return (
    <div className="space-y-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex w-full items-center space-x-2">
          <Input
            type="text"
            placeholder="Enter URL (e.g., https://example.com)"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="flex-1 border-gray-200 focus:border-emerald-500 focus:ring-emerald-500"
          />
          <Button
            type="submit"
            disabled={loading}
            className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-6"
          >
            {loading ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin mr-2" />
                Scanning...
              </>
            ) : (
              <>
                <Shield className="h-4 w-4 mr-2" />
                Check URL
              </>
            )}
          </Button>
        </div>
      </form>

      {error && (
        <Alert className="border-red-200 bg-red-50">
          <X className="h-5 w-5 text-red-500" />
          <AlertTitle className="text-red-800">Error</AlertTitle>
          <AlertDescription className="text-red-700">{error}</AlertDescription>
        </Alert>
      )}

      {result && (
        <div className="space-y-4">
          {result.isPhishing ? (
            <Alert className="border-red-200 bg-gradient-to-r from-red-50 to-orange-50 shadow-lg">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-500 shadow-lg">
                  <AlertTriangle className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <AlertTitle className="text-red-800 text-lg font-bold flex items-center gap-2">
                    🚨 PHISHING THREAT DETECTED!
                    <Badge className="bg-red-500 text-white">DANGEROUS</Badge>
                  </AlertTitle>
                  <AlertDescription className="text-red-700 mt-2">
                    <div className="space-y-3">
                      <p className="font-medium">
                        ⚠️ This URL shows characteristics of a phishing website. DO NOT visit this site or enter any
                        personal information!
                      </p>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold">Threat Confidence:</span>
                        <Badge className="bg-red-600 text-white text-sm">
                          {(result.confidence * 100).toFixed(1)}% CERTAIN
                        </Badge>
                      </div>

                      <div className="bg-red-100 p-4 rounded-lg border border-red-200">
                        <p className="font-semibold text-red-800 mb-2">🔍 Suspicious Features Detected:</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {result.features.hasIpAddress && (
                            <Badge variant="destructive" className="justify-start">
                              🌐 Uses IP address in URL
                            </Badge>
                          )}
                          {result.features.longUrl && (
                            <Badge variant="destructive" className="justify-start">
                              📏 Unusually long URL
                            </Badge>
                          )}
                          {result.features.shorteningService && (
                            <Badge variant="destructive" className="justify-start">
                              🔗 URL shortening service
                            </Badge>
                          )}
                          {result.features.hasAtSymbol && (
                            <Badge variant="destructive" className="justify-start">
                              @ Contains @ symbol
                            </Badge>
                          )}
                          {result.features.doubleSlashRedirect && (
                            <Badge variant="destructive" className="justify-start">
                              ↗️ Double slash redirect
                            </Badge>
                          )}
                          {result.features.prefixSuffix && (
                            <Badge variant="destructive" className="justify-start">
                              ➖ Suspicious hyphens
                            </Badge>
                          )}
                          {result.features.noHttps && (
                            <Badge variant="destructive" className="justify-start">
                              🔓 No HTTPS/SSL
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>
                  </AlertDescription>
                </div>
              </div>
            </Alert>
          ) : (
            <Alert className="border-emerald-200 bg-gradient-to-r from-emerald-50 to-green-50 shadow-lg">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500 shadow-lg">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <AlertTitle className="text-emerald-800 text-lg font-bold flex items-center gap-2">
                    ✅ WEBSITE IS SAFE!
                    <Badge className="bg-emerald-500 text-white">LEGITIMATE</Badge>
                  </AlertTitle>
                  <AlertDescription className="text-emerald-700 mt-2">
                    <div className="space-y-3">
                      <p className="font-medium">🛡️ This URL appears to be legitimate and safe to visit.</p>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold">Safety Confidence:</span>
                        <Badge className="bg-emerald-600 text-white text-sm">
                          {(result.confidence * 100).toFixed(1)}% SAFE
                        </Badge>
                      </div>
                      <div className="bg-emerald-100 p-4 rounded-lg border border-emerald-200">
                        <p className="text-emerald-800">
                          <span className="font-semibold">🔒 Security Check Passed:</span> No phishing indicators
                          detected.
                        </p>
                      </div>
                    </div>
                  </AlertDescription>
                </div>
              </div>
            </Alert>
          )}

          <div className="flex justify-center">
            <Button onClick={clearResult} variant="outline" className="border-gray-300 text-gray-600 hover:bg-gray-50">
              Check Another URL
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
