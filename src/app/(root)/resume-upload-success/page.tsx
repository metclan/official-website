import { CheckCircle } from "lucide-react"
import Link from "next/link"

export default function Component() {
  return (
    <div className="flex items-center justify-center my-28">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full">
        <div className="flex flex-col items-center text-center">
          <CheckCircle className="w-16 h-16 text-orange-500 mb-4" />
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Success!</h2>
          <p className="text-gray-600 mb-6">
            Your resume was successfully uploaded. You can expect feedback from the company soon.
          </p>
          <Link  href="/" className="bg-black text-white hover:bg-orange-600 transition-all duration-300 px-4 py-2 rounded-sm">
            Take me home
          </Link>
        </div>
      </div>
    </div>
  )
}