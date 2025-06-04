import Link from "next/link"
import { ChevronLeft } from "lucide-react"

export function EventsPage() {
  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-gray-600 mb-4">
          Bem vindo de volta, <span className="font-medium text-gray-800">Kaique Steck</span>
        </h1>
        <Link href="/dashboard" className="inline-flex items-center text-orange-500 hover:text-orange-600">
          <ChevronLeft className="h-5 w-5 mr-1" />
          <span className="text-lg font-medium">Eventos</span>
        </Link>
      </div>

      {/* Content area - empty in the screenshot */}
      <div className="bg-white rounded-lg shadow-sm p-6 min-h-[500px]">
        {/* This area was empty in the screenshot */}
        {/* You can add event listing or other content here */}
      </div>
    </div>
  )
}
