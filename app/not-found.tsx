// app/not-found.tsx
import Link from "next/link"

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-4">
      <h1 className="text-6xl font-bold mb-4 text-blue-500">404</h1>
      <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
      <Link href="/" className="px-6 py-3 bg-blue-600 text-white rounded-full">
        Return Home
      </Link>
    </div>
  )
}
