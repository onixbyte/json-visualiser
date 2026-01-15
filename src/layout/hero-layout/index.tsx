import { Outlet, Link } from "react-router-dom"
import { useMemo } from "react"
import dayjs from "dayjs"

/**
 * Main application component that serves as the root layout.
 * Uses React Router's Outlet to render child routes.
 */
export default function HeroLayout() {
  const today = useMemo(() => dayjs(), [])

  return (
    <div className="h-screen bg-gray-50 flex flex-col overflow-hidden">
      {/* Navigation Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-semibold text-gray-900">
                JSON Visualiser
              </h1>
            </div>
            <nav className="flex space-x-8">
              <Link
                to="/"
                className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
              >
                About
              </Link>
              <Link
                to="/contact"
                className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
              >
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 p-4 overflow-hidden min-h-0">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-white border-t shrink-0">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-gray-500">
            © 2024-{today.year()} OnixByte. Built with React & TypeScript.
          </p>
        </div>
      </footer>
    </div>
  )
}
