import React from 'react'

export default function Footer() {
  return (
    <footer className="relative w-full bg-slate-950 pb-16 pt-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center justify-between gap-6 border-t border-slate-800/80 pt-8 md:flex-row">
          <p className="text-sm text-slate-400">© {new Date().getFullYear()} CheaterStats. All rights reserved.</p>
          <nav className="flex flex-wrap items-center gap-5 text-sm text-slate-300">
            <a href="#" className="hover:text-cyan-300">Terms of Service</a>
            <a href="#" className="hover:text-cyan-300">Privacy Policy</a>
            <a href="#" className="hover:text-cyan-300">Discord</a>
            <a href="#docs" className="hover:text-cyan-300">Docs</a>
          </nav>
        </div>
      </div>
    </footer>
  )
}
