"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Eye, EyeOff } from "lucide-react"

export function LoginForm() {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate login process
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // For demo purposes, accept any email/password
    if (email && password) {
      router.push("/") // Navigate to dashboard (main page)
    }

    setIsLoading(false)
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Left side - Login Form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          {/* Logo */}
          <div className="mb-8">
            <div className="text-orange-600 font-bold text-2xl mb-4">
              <span className="text-orange-700">THORN</span> <span className="text-orange-500">DIGITAL</span>
            </div>
            <h1 className="text-2xl font-bold text-gray-800 mb-2">Bem-vindo de volta</h1>
            <p className="text-gray-600">Entre com sua conta para acessar o painel</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Input */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium text-orange-600">
                E-mail
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="seunome@seuservidor.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12 border-gray-200 focus:border-orange-500 focus:ring-orange-500"
                required
              />
            </div>

            {/* Password Input */}
            <div className="space-y-2">
              <Label htmlFor="password" className="text-sm font-medium text-orange-600">
                Senha
              </Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Digite aqui"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="h-12 pr-10 border-gray-200 focus:border-orange-500 focus:ring-orange-500"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full h-12 bg-orange-600 hover:bg-orange-700 text-white font-medium rounded-lg"
            >
              {isLoading ? "Entrando..." : "Enviar"}
            </Button>
          </form>
        </div>
      </div>

      {/* Right side - Illustration */}
      <div className="flex-1 bg-orange-500 flex items-center justify-center p-8">
        <div className="w-full max-w-lg">
          {/* Placeholder for illustration - you can replace this with the actual image */}
          <div className="bg-orange-400 rounded-2xl p-8 h-96 flex items-center justify-center">
            <div className="text-center text-white">
              <div className="w-32 h-32 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                <div className="w-16 h-16 bg-white/30 rounded-full"></div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Gerencie seus eventos</h3>
              <p className="text-orange-100">Plataforma completa para organização de eventos esportivos</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
