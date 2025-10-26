import { Users, UserCheck, Calendar, Wallet } from 'lucide-react'

const cards = [
  {
    name: 'Total Students',
    value: '1,240',
    change: '+32 this month',
    icon: Users,
    color: 'from-indigo-500 to-sky-500',
  },
  {
    name: 'Present Today',
    value: '1,118',
    change: '90.2% attendance',
    icon: UserCheck,
    color: 'from-emerald-500 to-teal-500',
  },
  {
    name: 'Classes Running',
    value: '42',
    change: 'Across 6 grades',
    icon: Calendar,
    color: 'from-amber-500 to-orange-500',
  },
  {
    name: 'Fees Collected',
    value: '$82,340',
    change: 'This quarter',
    icon: Wallet,
    color: 'from-fuchsia-500 to-purple-500',
  },
]

export default function StatsOverview() {
  return (
    <section>
      <h2 className="sr-only">Key stats</h2>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {cards.map(({ name, value, change, icon: Icon, color }) => (
          <div key={name} className="rounded-xl border border-gray-200 bg-white overflow-hidden">
            <div className={`h-1.5 w-full bg-gradient-to-r ${color}`}></div>
            <div className="p-4">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-gray-600">{name}</p>
                  <p className="mt-1 text-2xl font-semibold text-gray-900">{value}</p>
                </div>
                <div className="h-10 w-10 rounded-md bg-gray-50 flex items-center justify-center">
                  <Icon className="h-5 w-5 text-gray-600" />
                </div>
              </div>
              <p className="mt-2 text-xs text-gray-500">{change}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
