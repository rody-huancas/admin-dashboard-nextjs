import Link from "next/link";
import { ArrowLeft, AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4 py-12">
      <div className="w-full max-w-md text-center space-y-6">
        <div className="mx-auto w-24 h-24 bg-red-50 rounded-full flex items-center justify-center">
          <AlertCircle className="h-12 w-12 text-red-500" />
        </div>

        <h1 className="text-8xl font-bold text-gray-900">404</h1>

        <h2 className="text-2xl font-semibold text-gray-800">
          Página no encontrada
        </h2>

        <p className="text-gray-600 max-w-sm mx-auto">
          Lo sentimos, la página que estás buscando no existe o ha sido movida a
          otra ubicación.
        </p>

        <div className="pt-6 flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Ir al inicio
          </Link>

          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center px-5 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Volver atrás
          </button>
        </div>
      </div>
    </div>
  );
}
