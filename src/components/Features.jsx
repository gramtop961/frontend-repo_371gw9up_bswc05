import React from 'react'
import { Shield, Activity, Database, Users, MessageSquare, Fingerprint } from 'lucide-react'

const features = [
  {
    title: 'User Checking (Discord)',
    desc: 'Validate Discord users against behavioral signals, bans, and cross-community trust metrics.',
    icon: Users,
    glow: 'from-cyan-500/30 to-blue-500/30'
  },
  {
    title: 'Identifier Checking',
    desc: 'Analyze Steam IDs and in-game identifiers to detect spoofing and suspicious patterns.',
    icon: Fingerprint,
    glow: 'from-violet-500/30 to-fuchsia-500/30'
  },
  {
    title: 'Message Analysis',
    desc: 'NLP-powered message scoring to flag toxic, bot-like, or exploit-sharing content.',
    icon: MessageSquare,
    glow: 'from-emerald-500/30 to-cyan-500/30'
  },
  {
    title: 'Real-time Tracking',
    desc: 'Stream risk events and webhooks to react instantly to live threats.',
    icon: Activity,
    glow: 'from-cyan-500/30 to-emerald-500/30'
  },
  {
    title: 'Historical Database',
    desc: 'Query deep historical records with privacy-respecting retention policies.',
    icon: Database,
    glow: 'from-blue-500/30 to-violet-500/30'
  },
  {
    title: 'Community Reports',
    desc: 'Share and consume crowd-sourced reports with reputation-weighted scoring.',
    icon: Shield,
    glow: 'from-fuchsia-500/30 to-violet-500/30'
  }
]

export default function Features() {
  return (
    <section className="relative w-full bg-slate-950 py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.12),transparent_40%),radial-gradient(circle_at_bottom_left,rgba(168,85,247,0.12),transparent_45%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Core Capabilities</h2>
          <p className="mt-3 text-slate-300">Everything you need to keep your community fair, secure, and fun.</p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <div key={i} className="group relative overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-900/40 p-6 shadow-[0_0_0_1px_rgba(148,163,184,0.15)] transition hover:border-cyan-400/30 hover:shadow-[0_0_30px_-10px_rgba(34,211,238,0.35)]">
              <div className={`pointer-events-none absolute -inset-px opacity-0 blur-2xl transition group-hover:opacity-100 bg-gradient-to-br ${f.glow}`} />
              <div className="relative z-10">
                <div className="mb-4 inline-flex rounded-xl border border-slate-700/60 bg-white/5 p-3 text-cyan-300 shadow-inner">
                  <f.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-white">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
