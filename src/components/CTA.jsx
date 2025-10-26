function CTA() {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold tracking-tight">Ready to modernize your school?</h2>
        <p className="mt-3 text-white/80 max-w-2xl mx-auto">
          Get a clean starting point for a full School Management System. This UI is set up with role-based sections, ready for backend integration.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a href="#" className="inline-flex items-center justify-center rounded-md bg-white px-5 py-3 text-sm font-semibold text-gray-900 hover:bg-white/90 shadow">
            Start Free
          </a>
          <a href="#features" className="inline-flex items-center justify-center rounded-md border border-white/20 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10">
            See Features
          </a>
        </div>
        <p className="mt-6 text-xs text-white/60">Vite + React + Tailwind • Accessible • Responsive</p>
      </div>
    </section>
  )
}

export default CTA
