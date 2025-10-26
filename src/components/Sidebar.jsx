import { Home, Users, Calendar, Book, Bell, Settings, LogOut } from 'lucide-react'

const navItems = [
  { label: 'Overview', icon: Home },
  { label: 'Students', icon: Users },
  { label: 'Teachers', icon: Book },
  { label: 'Classes', icon: Calendar },
  { label: 'Notifications', icon: Bell },
  { label: 'Settings', icon: Settings },
]

export default function Sidebar() {
  return (
    <aside className="hidden md:flex md:flex-col w-64 shrink-0 border-r border-gray-200 bg-white min-h-screen sticky top-0">
      <div className="h-16 flex items-center px-6 border-b border-gray-200">
        <div className="font-semibold text-lg">School Admin</div>
      </div>
      <nav className="flex-1 py-4">
        <ul className="px-2 space-y-1">
          {navItems.map(({ label, icon: Icon }) => (
            <li key={label}>
              <button className="w-full flex items-center gap-3 px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition">
                <Icon className="h-5 w-5" />
                <span className="text-sm font-medium">{label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
      <div className="p-4 border-t border-gray-200">
        <button className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-md text-gray-600 hover:bg-gray-100">
          <LogOut className="h-4 w-4" />
          <span className="text-sm">Sign out</span>
        </button>
      </div>
    </aside>
  )
}
