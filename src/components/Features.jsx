import { Users, Calendar, BookOpen, DollarSign, Bell, BarChart3 } from 'lucide-react'

const features = [
  {
    title: 'Users & Roles',
    description: 'SuperAdmin, School Admin, Teachers, Students, Parents, Accountants — each with tailored dashboards.',
    icon: Users,
  },
  {
    title: 'Attendance',
    description: 'Daily attendance with bulk upload and quick mark entry.',
    icon: Calendar,
  },
  {
    title: 'Classes & Subjects',
    description: 'Organize classes, sections, and subjects with ease.',
    icon: BookOpen,
  },
  {
    title: 'Fees & Payments',
    description: 'Generate invoices, accept payments, and track balances.',
    icon: DollarSign,
  },
  {
    title: 'Notifications',
    description: 'Realtime in-app updates for exams, fees, and messages.',
    icon: Bell,
  },
  {
    title: 'Reports',
    description: 'Charts for performance and attendance trends.',
    icon: BarChart3,
  },
]

function Features() {
  return (
    <section id="features" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">Built for modern schools</h2>
          <p className="mt-3 text-gray-600">Everything you need to manage academics, finance, exams, and communication — fast and secure.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow">
              <div className="h-10 w-10 rounded-md bg-indigo-600 text-white flex items-center justify-center">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{f.title}</h3>
              <p className="mt-1 text-sm text-gray-600">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
