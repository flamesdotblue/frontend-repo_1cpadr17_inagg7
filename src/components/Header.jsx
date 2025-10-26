import { School, User, Settings } from 'lucide-react'

function Header() {
  return (
    <header className="sticky top-0 z-20 bg-white/70 backdrop-blur border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-md bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center text-white">
              <School className="h-5 w-5" />
            </div>
            <span className="text-lg font-semibold text-gray-900">School Portal</span>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm text-gray-700">
            <a href="#features" className="hover:text-gray-900">Features</a>
            <a href="#modules" className="hover:text-gray-900">Modules</a>
            <a href="#pricing" className="hover:text-gray-900">Pricing</a>
            <a href="#faq" className="hover:text-gray-900">FAQ</a>
          </nav>

          <div className="flex items-center gap-2">
            <button className="inline-flex items-center gap-2 rounded-md border border-gray-200 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
              <User className="h-4 w-4" />
              Sign in
            </button>
            <button className="inline-flex items-center gap-2 rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white hover:bg-gray-800">
              <Settings className="h-4 w-4" />
              Get Started
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
