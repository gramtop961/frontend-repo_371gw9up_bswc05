import React from 'react'
import Hero from './components/Hero'
import Features from './components/Features'
import DocsPreview from './components/DocsPreview'
import Integrations from './components/Integrations'
import StatusCommunity from './components/StatusCommunity'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Top nav */}
      <header className="sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-slate-950/60">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-cyan-500 to-violet-500 shadow-[0_0_30px_rgba(34,211,238,0.3)]" />
            <span className="font-semibold tracking-tight">CheaterStats</span>
          </div>
          <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
            <a href="#features" className="hover:text-cyan-300">Features</a>
            <a href="#docs" className="hover:text-cyan-300">Docs</a>
            <a href="#" className="hover:text-cyan-300">Status</a>
            <a href="#" className="rounded-lg border border-slate-700/70 bg-white/5 px-3 py-1.5 font-medium text-slate-200 transition hover:border-cyan-400/40 hover:bg-cyan-400/10">Get API Key</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <div id="features">
          <Features />
        </div>
        <DocsPreview />
        <Integrations />
        <StatusCommunity />
      </main>

      <Footer />
    </div>
  )
}

export default App
