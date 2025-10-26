import { MessageSquare, CheckCircle2, UserPlus } from 'lucide-react'

const activities = [
  {
    id: 1,
    title: 'New post in Campus Connect',
    desc: 'Ms. Rivera shared a field trip announcement in Grade 6 group.',
    icon: MessageSquare,
    color: 'text-indigo-600 bg-indigo-50',
    time: '5m ago',
  },
  {
    id: 2,
    title: 'Attendance completed',
    desc: 'Class 8A attendance has been marked by Mr. Gupta.',
    icon: CheckCircle2,
    color: 'text-emerald-600 bg-emerald-50',
    time: '22m ago',
  },
  {
    id: 3,
    title: 'New student enrolled',
    desc: 'Aarav Sharma enrolled into Grade 5 for 2025 session.',
    icon: UserPlus,
    color: 'text-purple-600 bg-purple-50',
    time: '1h ago',
  },
]

export default function ActivityFeed() {
  return (
    <section className="grid grid-cols-1 xl:grid-cols-3 gap-4">
      <div className="xl:col-span-2 rounded-xl border border-gray-200 bg-white p-4">
        <h3 className="font-medium text-gray-900">Recent activity</h3>
        <ul className="mt-4 divide-y divide-gray-100">
          {activities.map(({ id, title, desc, icon: Icon, color, time }) => (
            <li key={id} className="py-3 flex items-start gap-3">
              <div className={`h-9 w-9 rounded-md flex items-center justify-center ${color}`}>
                <Icon className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">{title}</p>
                <p className="text-sm text-gray-600">{desc}</p>
              </div>
              <span className="text-xs text-gray-500 whitespace-nowrap">{time}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="rounded-xl border border-gray-200 bg-white p-4">
        <h3 className="font-medium text-gray-900">Quick actions</h3>
        <div className="mt-4 grid grid-cols-2 gap-3">
          {[
            'Add student',
            'Create class',
            'Mark attendance',
            'Post update',
            'Send notice',
            'Collect fees',
          ].map((label) => (
            <button
              key={label}
              className="px-3 py-2 text-sm rounded-md border border-gray-200 hover:border-gray-300 hover:bg-gray-50 text-gray-700"
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
