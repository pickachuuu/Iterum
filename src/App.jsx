function App() {
  return (
    <main className="min-h-screen bg-stone-50 text-zinc-950">
      <section className="mx-auto flex min-h-screen w-full max-w-6xl flex-col justify-center px-6 py-16 sm:px-10">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">
            React + Tailwind CSS
          </p>
          <h1 className="text-5xl font-semibold tracking-tight text-balance sm:text-7xl">
            Iterum is ready to build.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600">
            A fresh Vite app running React 19 with Tailwind CSS wired through
            the official Vite plugin.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {[
            ['Framework', 'React 19'],
            ['Bundler', 'Vite'],
            ['Styling', 'Tailwind CSS 4'],
          ].map(([label, value]) => (
            <div
              key={label}
              className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm"
            >
              <p className="text-sm font-medium text-zinc-500">{label}</p>
              <p className="mt-2 text-2xl font-semibold text-zinc-950">
                {value}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

export default App
