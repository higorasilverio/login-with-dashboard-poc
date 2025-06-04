import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="text-center">
        <div className="text-orange-600 font-bold text-3xl mb-4">
          <span className="text-orange-700">THORN</span> <span className="text-orange-500">DIGITAL</span>
        </div>
        <p className="text-gray-600 mb-8">Plataforma de gerenciamento de eventos</p>
        <Button asChild className="bg-orange-600 hover:bg-orange-700">
          <Link href="/login">Fazer Login</Link>
        </Button>
      </div>
    </div>
  )
}
