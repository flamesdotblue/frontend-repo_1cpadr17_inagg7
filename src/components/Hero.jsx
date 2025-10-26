import { Rocket, Shield, BarChart } from 'lucide-react'

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700">
              <Shield className="h-3.5 w-3.5" /> Secure, multi-tenant by design
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight text-gray-900">
              Core School Management System
            </h1>
            <p className="mt-4 text-lg leading-8 text-gray-700">
              A modern dashboard for schools with roles for Admins, Teachers, Students, Parents, and Accountants. Fast, accessible, and ready for real-time notifications and exams.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#features" className="inline-flex items-center justify-center gap-2 rounded-md bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500">
                <Rocket className="h-4 w-4" />
                Explore Features
              </a>
              <a href="#demo" className="inline-flex items-center justify-center rounded-md border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50">
                View Demo Data
              </a>
            </div>

            <dl className="mt-10 grid grid-cols-3 gap-6">
              <div>
                <dt className="text-sm text-gray-600">Attendance</dt>
                <dd className="text-2xl font-semibold text-gray-900">Daily</dd>
              </div>
              <div>
                <dt className="text-sm text-gray-600">Exams</dt>
                <dd className="text-2xl font-semibold text-gray-900">CBT-ready</dd>
              </div>
              <div>
                <dt className="text-sm text-gray-600">Reports</dt>
                <dd className="text-2xl font-semibold text-gray-900 inline-flex items-center gap-1"><BarChart className="h-5 w-5 text-indigo-600" /> Visual</dd>
              </div>
            </dl>
          </div>

          <div className="relative">
            <div className="rounded-xl border border-gray-200 bg-white shadow-sm p-4">
              <div className="aspect-video w-full rounded-md bg-gradient-to-br from-indigo-500/10 to-purple-500/10 flex items-center justify-center">
                <div className="text-center p-6">
                  <div className="mx-auto h-12 w-12 rounded-full bg-indigo-600 text-white flex items-center justify-center">
                    <Rocket className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-gray-900">Beautiful dashboards</h3>
                  <p className="mt-2 text-sm text-gray-600">Clean, minimal UI with Tailwind. Optimized for speed and clarity.</p>
                </div>
              </div>
              <div className="mt-4 grid grid-cols-3 gap-3 text-center">
                <div className="rounded-md border border-gray-200 p-3">
                  <p className="text-xs text-gray-500">Latency</p>
                  <p className="text-sm font-semibold">~30ms</p>
                </div>
                <div className="rounded-md border border-gray-200 p-3">
                  <p className="text-xs text-gray-500">Uptime</p>
                  <p className="text-sm font-semibold">99.9%</p>
                </div>
                <div className="rounded-md border border-gray-200 p-3">
                  <p className="text-xs text-gray-500">RLS</p>
                  <p className="text-sm font-semibold">Enabled</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
