```tsx
export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-white text-gray-900 p-10">
      <h1 className="text-5xl font-bold mb-6 tracking-tight">Orbixum</h1>
      <p className="text-lg mb-8 text-center max-w-2xl">
        The global hub for artificial intelligence — news, regulation, and markets.
        Orbixum provides clarity in a fast-changing AI landscape.
      </p>
      <nav className="flex gap-6 text-lg font-medium">
        <a href="/dispatch" className="hover:underline">
          Dispatch
        </a>
        <a href="/tracker" className="hover:underline">
          Regulation Tracker
        </a>
        <a href="/index" className="hover:underline">
          Global AI Index
        </a>
      </nav>
    </main>
  )
}
```
