// app/not-found-client.tsx
"use client"

import { Suspense } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"

function DynamicNotFoundContent() {
  const searchParams = useSearchParams()
  const error = searchParams.get("error")
  
  return (
    <div className="...">
      {/* Your dynamic 404 content */}
      {error && <p>Error: {error}</p>}
      <Link href="/">Home</Link>
    </div>
  )
}

export default function NotFoundClient() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DynamicNotFoundContent />
    </Suspense>
  )
}
