import React, { useState } from 'react'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@radix-ui/react-tabs'

const requests = {
  'User Check': {
    req: `GET /v1/users/discord/:id\nAuthorization: Bearer <API_KEY>\n\nResponse 200:\n{\n  "id": "1234567890",\n  "risk": 0.82,\n  "flags": ["alt-account", "spam"],\n  "lastSeen": "2025-01-01T12:00:00Z"\n}`,
  },
  'Identifier Check': {
    req: `POST /v1/identifiers/check\nAuthorization: Bearer <API_KEY>\nContent-Type: application/json\n\n{ "steamId": "110000112345678" }\n\nResponse 200:\n{\n  "steamId": "110000112345678",\n  "linked": true,\n  "risk": 0.41,\n  "notes": ["matches known cheater subnet"]\n}`,
  },
  'Message Analysis': {
    req: `POST /v1/analyze/message\nAuthorization: Bearer <API_KEY>\nContent-Type: application/json\n\n{ "text": "get free mod menu here" }\n\nResponse 200:\n{\n  "toxicity": 0.12,\n  "spam": 0.90,\n  "exploit": 0.76,\n  "overallRisk": 0.83\n}`,
  },
}

function CodeBlock({ children }) {
  return (
    <pre className="relative overflow-x-auto rounded-xl border border-slate-800/80 bg-slate-900/60 p-4 font-mono text-[13px] leading-relaxed text-slate-200 shadow-inner">
      <code>{children}</code>
    </pre>
  )
}

export default function DocsPreview() {
  const [tab, setTab] = useState('User Check')
  const tabs = Object.keys(requests)

  return (
    <section id="docs" className="relative w-full bg-slate-950 py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.08),transparent_55%)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">API documentation preview</h2>
          <p className="mt-3 text-slate-300">Clean and minimal examples for quick integration.</p>
        </div>

        <div className="mx-auto max-w-3xl">
          <div className="mb-4 flex flex-wrap items-center justify-center gap-2">
            {tabs.map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`rounded-full border px-4 py-2 text-sm transition ${
                  tab === t
                    ? 'border-cyan-400/50 bg-cyan-400/10 text-cyan-200'
                    : 'border-slate-800/80 bg-slate-900/40 text-slate-300 hover:border-cyan-400/30 hover:text-cyan-200'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
          <CodeBlock>{requests[tab].req}</CodeBlock>
        </div>
      </div>
    </section>
  )
}
