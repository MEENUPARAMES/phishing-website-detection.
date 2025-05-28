"use server"

// This is a mock implementation of the URL checking functionality
// In a real application, this would connect to your Python model

export async function checkUrl(url: string) {
  // Simulate processing time
  await new Promise((resolve) => setTimeout(resolve, 1500))

  // For demo purposes, we'll use some simple heuristics to classify URLs
  // In a real implementation, you would call your actual ML model here

  const isPhishing = determineIfPhishing(url)
  const confidence = isPhishing ? 0.92 + Math.random() * 0.08 : 0.85 + Math.random() * 0.15

  // Extract features that might indicate phishing
  const features = {
    hasIpAddress: /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/.test(url),
    longUrl: url.length > 75,
    shorteningService: /bit\.ly|goo\.gl|tinyurl\.com|t\.co|is\.gd/.test(url),
    hasAtSymbol: url.includes("@"),
    doubleSlashRedirect: url.indexOf("//") > 7,
    prefixSuffix: url.includes("-"),
    noHttps: !url.startsWith("https://"),
  }

  return {
    isPhishing,
    confidence,
    features,
  }
}

function determineIfPhishing(url: string) {
  // This is a simplified version for demo purposes
  // Your actual model would be much more sophisticated

  // Some simple heuristics for demo
  if (
    (url.includes("secure") && url.includes("login")) ||
    (url.includes("account") && url.includes("verify")) ||
    (url.includes("paypal") && !url.includes("paypal.com")) ||
    (url.includes("banking") && !url.includes("bank.com")) ||
    url.match(/\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/) ||
    url.includes("@") ||
    /bit\.ly|goo\.gl|tinyurl\.com|t\.co|is\.gd/.test(url)
  ) {
    return Math.random() > 0.2 // 80% chance to be classified as phishing if it matches any rule
  }

  // For demonstration, randomly classify some URLs as phishing
  return Math.random() < 0.2 // 20% chance to be classified as phishing otherwise
}
