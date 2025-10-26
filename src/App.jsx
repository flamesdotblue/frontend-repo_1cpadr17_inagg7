import Sidebar from './components/Sidebar'
import Topbar from './components/Topbar'
import StatsOverview from './components/StatsOverview'
import ActivityFeed from './components/ActivityFeed'

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <div className="flex">
        <Sidebar />
        <div className="flex-1 min-w-0">
          <Topbar />
          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
            <div>
              <h1 className="text-2xl font-semibold tracking-tight">Dashboard</h1>
              <p className="mt-1 text-sm text-gray-600">Overview of today’s activity across your school.</p>
            </div>
            <StatsOverview />
            <ActivityFeed />
          </main>
          <footer className="border-t border-gray-200 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-sm text-gray-600 flex flex-col sm:flex-row items-center justify-between gap-3">
              <p>&copy; {new Date().getFullYear()} School Portal. All rights reserved.</p>
              <div className="flex items-center gap-4">
                <a href="#privacy" className="hover:text-gray-900">Privacy</a>
                <a href="#terms" className="hover:text-gray-900">Terms</a>
                <a href="#contact" className="hover:text-gray-900">Contact</a>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  )
}

export default App
