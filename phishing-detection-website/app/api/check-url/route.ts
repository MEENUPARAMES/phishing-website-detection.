import { type NextRequest, NextResponse } from "next/server"
import { checkUrl } from "@/lib/actions"

export async function POST(request: NextRequest) {
  try {
    const { url } = await request.json()

    if (!url) {
      return NextResponse.json({ error: "URL is required" }, { status: 400 })
    }

    const result = await checkUrl(url)

    return NextResponse.json(result)
  } catch (error) {
    console.error("Error checking URL:", error)
    return NextResponse.json({ error: "Failed to check URL" }, { status: 500 })
  }
}
