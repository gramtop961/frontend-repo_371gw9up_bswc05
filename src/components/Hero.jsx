import React from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden bg-slate-950">
      {/* Background gradients */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/2 h-[700px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.25),transparent_60%)] blur-2xl" />
        <div className="absolute -bottom-48 right-0 h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.25),transparent_60%)] blur-2xl" />
      </div>

      {/* Grid overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.08)_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* Content */}
      <div className="relative mx-auto flex max-w-7xl flex-col-reverse items-center gap-10 px-6 py-20 md:flex-row md:gap-12 md:py-28">
        {/* Copy */}
        <div className="z-10 max-w-2xl text-center md:text-left">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/5 px-3 py-1 text-xs font-medium uppercase tracking-wider text-cyan-200/90 shadow-[0_0_20px_rgba(34,211,238,0.25)]">
              Secure • Real-time • Scalable
            </span>
            <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight text-white drop-shadow-[0_0_20px_rgba(34,211,238,0.15)] sm:text-5xl md:text-6xl">
              Advanced Cheater Detection API
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-slate-300 md:text-xl">
              Analyze users, identifiers, and messages with real-time and historical data. Built for gaming communities, FiveM servers, and developers who demand accuracy and trust.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row md:justify-start">
              <a href="#get-key" className="group relative inline-flex items-center justify-center rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-slate-900 shadow-[0_10px_30px_-10px_rgba(34,211,238,0.7)] ring-1 ring-cyan-300/50 transition hover:scale-[1.02] hover:shadow-[0_10px_40px_-10px_rgba(34,211,238,0.9)]">
                <span className="relative z-10">Get API Key</span>
                <span className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-400/40 to-emerald-400/40 opacity-0 blur transition group-hover:opacity-100" />
              </a>
              <a href="#docs" className="inline-flex items-center justify-center rounded-xl border border-slate-700/70 bg-white/5 px-6 py-3 font-semibold text-slate-200 backdrop-blur-md transition hover:border-cyan-400/40 hover:bg-cyan-400/10">
                Documentation
              </a>
            </div>
          </motion.div>
        </div>

        {/* 3D Visual */}
        <div className="relative z-0 h-[360px] w-full max-w-3xl flex-1 md:h-[520px]">
          <div className="absolute inset-0 rounded-3xl border border-slate-700/60 bg-gradient-to-b from-slate-900/40 to-slate-900/10 shadow-[inset_0_0_0_1px_rgba(148,163,184,0.15)] backdrop-blur-sm" />
          <Spline scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
      </div>
    </section>
  )
}
