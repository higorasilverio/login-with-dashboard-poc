"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { LayoutDashboard, Calendar, Users, ClipboardList, User, LogOut, Menu } from "lucide-react"
import { cn } from "@/lib/utils"
import { useMobile } from "@/hooks/use-mobile"

interface DashboardLayoutProps {
  children: React.ReactNode
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const isMobile = useMobile()
  const [sidebarOpen, setSidebarOpen] = useState(!isMobile)

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen)
  }

  return (
    <div className="flex h-screen bg-background">
      {/* Mobile menu button */}
      {isMobile && (
        <Button variant="ghost" size="icon" className="fixed top-4 left-4 z-50" onClick={toggleSidebar}>
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      )}

      {/* Sidebar */}
      <div
        className={cn(
          "fixed inset-y-0 left-0 z-40 w-64 transform bg-gray-50 transition-transform duration-300 ease-in-out",
          sidebarOpen ? "translate-x-0" : "-translate-x-full",
          isMobile ? "shadow-lg" : "",
        )}
      >
        <div className="flex h-full flex-col">
          {/* Logo */}
          <div className="flex h-16 items-center border-b px-6">
            <Link href="/" className="flex items-center space-x-2">
              <div className="text-orange-600 font-bold text-xl">
                <span className="text-orange-700">THORN</span> <span className="text-orange-500">DIGITAL</span>
              </div>
            </Link>
          </div>

          {/* Navigation */}
          <div className="flex-1 overflow-auto py-4">
            <p className="px-6 text-xs font-semibold uppercase tracking-wider text-gray-400">MENU</p>
            <nav className="mt-2 px-3 space-y-1">
              <Link
                href="/dashboard"
                className="flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
              >
                <LayoutDashboard className="mr-3 h-5 w-5 text-gray-500" />
                Dashboard
              </Link>
              <Link
                href="/eventos"
                className="flex items-center rounded-md px-3 py-2 text-sm font-medium text-white bg-orange-600 hover:bg-orange-700"
              >
                <Calendar className="mr-3 h-5 w-5 text-white" />
                Eventos
              </Link>
              <Link
                href="/equipes"
                className="flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
              >
                <Users className="mr-3 h-5 w-5 text-gray-500" />
                Equipes
              </Link>
              <Link
                href="/inscricoes"
                className="flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
              >
                <ClipboardList className="mr-3 h-5 w-5 text-gray-500" />
                Inscrições
              </Link>
            </nav>
          </div>

          {/* User profile */}
          <div className="border-t p-4">
            <div className="flex items-center">
              <Avatar className="h-10 w-10 border">
                <AvatarImage src="/placeholder-user.jpg" alt="Romário" />
                <AvatarFallback>RM</AvatarFallback>
              </Avatar>
              <div className="ml-3">
                <p className="text-sm font-medium">Romário</p>
                <p className="text-xs text-gray-500">Administrador</p>
              </div>
            </div>
            <div className="mt-4 space-y-2">
              <Button variant="ghost" size="sm" className="w-full justify-start">
                <User className="mr-2 h-4 w-4" />
                Alterar dados
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50"
                asChild
              >
                <Link href="/login">
                  <LogOut className="mr-2 h-4 w-4" />
                  Sair
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div
        className={cn(
          "flex-1 overflow-auto transition-all duration-300 ease-in-out",
          sidebarOpen ? (isMobile ? "ml-0" : "ml-64") : "ml-0",
        )}
      >
        {children}
      </div>
    </div>
  )
}
