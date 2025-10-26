import { Bell, Search, User } from 'lucide-react'

export default function Topbar() {
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-gray-200">
      <div className="h-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <div className="flex items-center gap-3 md:hidden">
          <div className="font-semibold">School Admin</div>
        </div>
        <div className="flex-1 max-w-xl hidden md:flex">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search students, classes, teachers..."
              className="w-full pl-9 pr-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm"
            />
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="relative rounded-full p-2 hover:bg-gray-100">
            <Bell className="h-5 w-5 text-gray-600" />
            <span className="absolute -top-0.5 -right-0.5 inline-flex h-2.5 w-2.5 rounded-full bg-indigo-600"></span>
          </button>
          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 text-white flex items-center justify-center">
            <User className="h-4 w-4" />
          </div>
        </div>
      </div>
    </header>
  )
}
