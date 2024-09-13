import Link from 'next/link'
import {  ArrowRight } from 'lucide-react'
export const metadata = {
  title : "Page Not found | Metclan", 
  description: "Oops! This page has wandered off."
}
export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full space-y-8 text-center">
        <h1 className="text-6xl font-bold text-gray-900 animate-fade-in">404</h1>
        <p className="text-xl text-gray-600 mt-2 animate-fade-in animation-delay-150">
          Oops! This page has wandered off.
        </p>
        <Link
          href="/"
          className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-black hover:bg-orange-600 mt-4 animate-fade-in animation-delay-450"
        >
          Go to Homepage
          <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </div>
    </div>
  )
}

// Add these classes to your global CSS or use a plugin for Tailwind
const styles = `
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.animate-fade-in {
  animation: fadeIn 0.5s ease-out forwards;
}

.animation-delay-150 {
  animation-delay: 150ms;
}

.animation-delay-300 {
  animation-delay: 300ms;
}

.animation-delay-450 {
  animation-delay: 450ms;
}
`