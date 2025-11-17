import React from 'react'
import { Gamepad2, Bot, LayoutDashboard } from 'lucide-react'

export default function Integrations() {
  return (
    <section className="relative w-full bg-slate-950 py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.12),transparent_45%),radial-gradient(circle_at_bottom_right,rgba(34,211,238,0.12),transparent_45%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Integrations</h2>
          <p className="mt-3 text-slate-300">Plug CheaterStats into your stack in minutes.</p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="relative overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-900/40 p-6">
            <div className="mb-4 inline-flex rounded-xl border border-slate-700/60 bg-white/5 p-3 text-cyan-300">
              <Gamepad2 className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold text-white">FiveM</h3>
            <p className="mt-2 text-slate-300">Use our endpoints from server resources to validate players before they join.</p>
          </div>
          <div className="relative overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-900/40 p-6">
            <div className="mb-4 inline-flex rounded-xl border border-slate-700/60 bg-white/5 p-3 text-cyan-300">
              <Bot className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold text-white">Discord Bots</h3>
            <p className="mt-2 text-slate-300">Automate checks on join and moderate suspicious messages with scoring.</p>
          </div>
          <div className="relative overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-900/40 p-6">
            <div className="mb-4 inline-flex rounded-xl border border-slate-700/60 bg-white/5 p-3 text-cyan-300">
              <LayoutDashboard className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold text-white">Server Dashboards</h3>
            <p className="mt-2 text-slate-300">Embed risk summaries and audit logs directly into your admin panels.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
