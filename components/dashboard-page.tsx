"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, Plus, MoreVertical, ChevronLeft, ChevronRight } from "lucide-react"

const eventsData = [
  {
    id: 1,
    name: "Clube do Laço Coração Pantaneiro",
    totalTeams: 10,
    status: "Ativo",
    date: "09 a 11 de Junho",
  },
  {
    id: 2,
    name: "Clube do Laço Coração Pantaneiro",
    totalTeams: 10,
    status: "Ativo",
    date: "09 a 11 de Junho",
  },
]

export function DashboardPage() {
  const [searchTerm, setSearchTerm] = useState("")

  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-gray-600 mb-6">
          Bem vindo de volta, <span className="font-medium text-gray-800">Kaique Steck</span>
        </h1>

        {/* Events Section Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-orange-600">Todos eventos</h2>
          <Button className="bg-orange-600 hover:bg-orange-700 text-white">
            <Plus className="h-4 w-4 mr-2" />
            Inserir novo
          </Button>
        </div>

        {/* Search Bar */}
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Buscar eventos"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 h-10 border-gray-200 focus:border-orange-500 focus:ring-orange-500"
          />
        </div>
      </div>

      {/* Events Table */}
      <div className="bg-white rounded-lg shadow-sm border">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="border-b bg-gray-50">
              <tr>
                <th className="text-left p-4 font-medium text-gray-600">Nome do evento</th>
                <th className="text-left p-4 font-medium text-gray-600">Total de equipes</th>
                <th className="text-left p-4 font-medium text-gray-600">Status</th>
                <th className="text-left p-4 font-medium text-gray-600">Data</th>
                <th className="w-12 p-4"></th>
              </tr>
            </thead>
            <tbody>
              {eventsData.map((event) => (
                <tr key={event.id} className="border-b hover:bg-gray-50">
                  <td className="p-4 text-gray-800">{event.name}</td>
                  <td className="p-4 text-gray-600">{event.totalTeams}</td>
                  <td className="p-4">
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                      {event.status}
                    </Badge>
                  </td>
                  <td className="p-4 text-gray-600">{event.date}</td>
                  <td className="p-4">
                    <Button variant="ghost" size="sm">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-end p-4 border-t">
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm" className="text-gray-600">
              <ChevronLeft className="h-4 w-4 mr-1" />
              Anterior
            </Button>
            <Button size="sm" className="bg-orange-600 hover:bg-orange-700 text-white">
              1
            </Button>
            <Button variant="outline" size="sm" className="text-gray-600">
              2
            </Button>
            <Button variant="outline" size="sm" className="text-gray-600">
              3
            </Button>
            <Button variant="outline" size="sm" className="text-gray-600">
              Próxima
              <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
