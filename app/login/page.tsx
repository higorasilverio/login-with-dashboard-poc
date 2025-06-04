import { LoginForm } from "@/components/login-form"

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="text-orange-600 font-bold text-2xl mb-2">
            <span className="text-orange-700">THORN</span> <span className="text-orange-500">DIGITAL</span>
          </div>
          <p className="text-gray-600">Faça login para acessar sua conta</p>
        </div>
        <LoginForm />
      </div>
    </div>
  )
}
