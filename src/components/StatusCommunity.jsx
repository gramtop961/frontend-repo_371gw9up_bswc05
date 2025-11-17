import React from 'react'

export default function StatusCommunity() {
  return (
    <section className="relative w-full bg-slate-950 py-20">
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center justify-between gap-6 rounded-2xl border border-slate-800/80 bg-slate-900/40 p-8 md:flex-row">
          <div className="flex items-center gap-3">
            <span className="relative flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500"></span>
            </span>
            <div>
              <p className="text-sm text-slate-400">API Status</p>
              <p className="-mt-0.5 font-semibold text-white">Online • 99.99% uptime</p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a href="#" className="rounded-xl border border-slate-700/70 bg-white/5 px-5 py-2 text-sm font-medium text-slate-200 transition hover:border-cyan-400/40 hover:bg-cyan-400/10">Status Page</a>
            <a href="#" className="rounded-xl bg-gradient-to-r from-cyan-500 to-violet-500 px-5 py-2 text-sm font-semibold text-slate-900 shadow-[0_10px_30px_-10px_rgba(99,102,241,0.7)]">Join our Discord</a>
          </div>
        </div>
      </div>
    </section>
  )
}
