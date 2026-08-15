'use client'

import { useState } from 'react'
import { ArrowLeft, Check, Menu, Search } from 'lucide-react'
import { logoConcepts } from '@/components/logo-variants'

export default function LogoDemoPage() {
  const [selected, setSelected] = useState('gateway')
  const active = logoConcepts.find((concept) => concept.id === selected) ?? logoConcepts[0]
  const ActiveLogo = active.Logo

  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border">
        <div className="mx-auto flex min-h-20 max-w-[1400px] items-center justify-between gap-6 px-5 lg:px-10">
          <a href="/" className="flex items-center gap-2 text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground">
            <ArrowLeft className="size-4" />
            Zpět na web
          </a>
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-primary">FunGate / logo concepts</p>
        </div>
      </header>

      <section className="mx-auto max-w-[1400px] px-5 pb-14 pt-16 lg:px-10 lg:pt-24">
        <p className="mb-5 text-xs font-bold uppercase tracking-[0.25em] text-primary">Nový návrh značky</p>
        <h1 className="max-w-4xl font-display text-5xl font-black leading-[0.92] tracking-[-0.055em] sm:text-7xl lg:text-8xl">
          Deset směrů.<br />Žádné klišé.
        </h1>
        <p className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground">
          Každý koncept používá oranžovou #fa7000, funguje v malém měřítku a má vlastní systém pro web, favicon i sociální sítě.
        </p>
      </section>

      <section className="mx-auto grid max-w-[1400px] gap-5 px-5 pb-20 lg:grid-cols-3 lg:px-10">
        {logoConcepts.map((concept) => {
          const Logo = concept.Logo
          const Mark = concept.Mark
          const isSelected = selected === concept.id

          return (
            <button
              key={concept.id}
              type="button"
              onClick={() => setSelected(concept.id)}
              aria-pressed={isSelected}
              className={`group overflow-hidden rounded-2xl border text-left transition-colors ${
                isSelected ? 'border-primary bg-card' : 'border-border bg-card/50 hover:border-muted-foreground/40'
              }`}
            >
              <div className="flex min-h-72 items-center justify-center border-b border-border bg-secondary/40 px-8">
                <Logo />
              </div>
              <div className="p-6">
                <div className="mb-5 flex items-center justify-between gap-3">
                  <span className="font-mono text-xs text-primary">{concept.number}</span>
                  {isSelected && <span className="grid size-6 place-items-center rounded-full bg-primary text-primary-foreground"><Check className="size-3.5" /></span>}
                </div>
                <h2 className="font-display text-2xl font-extrabold tracking-tight">{concept.name}</h2>
                <p className="mt-2 min-h-16 text-sm leading-relaxed text-muted-foreground">{concept.idea}</p>
                <div className="mt-6 flex items-end gap-5 border-t border-border pt-5">
                  {[24, 40, 64].map((size) => (
                    <div key={size} className="flex flex-col items-center gap-2">
                      <Mark className="text-primary" style={{ width: size, height: size }} />
                      <span className="font-mono text-[9px] text-muted-foreground">{size}</span>
                    </div>
                  ))}
                </div>
              </div>
            </button>
          )
        })}
      </section>

      <section className="border-y border-border bg-card/40">
        <div className="mx-auto max-w-[1400px] px-5 py-16 lg:px-10 lg:py-24">
          <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary">Živý kontext</p>
              <h2 className="mt-3 font-display text-4xl font-black tracking-tight">{active.name} v headeru</h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">Vyberte koncept nahoře. Náhled se okamžitě přepne do reálné hlavičky webu.</p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-border bg-background shadow-2xl shadow-black/20">
            <div className="flex h-[76px] items-center gap-7 border-b border-border px-5 lg:px-8">
              <ActiveLogo />
              <nav className="ml-auto hidden items-center gap-7 text-sm font-semibold text-muted-foreground lg:flex">
                <span className="text-foreground">Nejnovější</span>
                <span>Videa</span>
                <span>Vtipy</span>
                <span>Hry</span>
                <span>Kvízy</span>
              </nav>
              <button type="button" aria-label="Hledat" className="ml-auto grid size-10 place-items-center rounded-full border border-border text-muted-foreground lg:ml-0">
                <Search className="size-4" />
              </button>
              <button type="button" aria-label="Menu" className="grid size-10 place-items-center text-muted-foreground lg:hidden">
                <Menu className="size-5" />
              </button>
            </div>
            <div className="grid min-h-72 place-items-center px-6 text-center grain">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary">Dnes na FunGate</p>
                <p className="mt-4 font-display text-4xl font-black tracking-tight sm:text-6xl">Obsah, který stojí<br />za otevření.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-5 py-16 lg:px-10 lg:py-24">
        <div className="grid overflow-hidden rounded-2xl border border-border lg:grid-cols-2">
          <div className="flex min-h-80 flex-col justify-between bg-[#fa7000] p-8 text-[#191713] lg:p-12">
            <p className="text-xs font-bold uppercase tracking-[0.24em]">Oranžová varianta</p>
            <ActiveLogo className="[&_span]:bg-transparent [&_span]:text-[#191713] [&_svg]:text-[#191713]" />
          </div>
          <div className="flex min-h-80 flex-col justify-between bg-[#f3efe7] p-8 text-[#191713] lg:p-12">
            <p className="text-xs font-bold uppercase tracking-[0.24em]">Světlá varianta</p>
            <ActiveLogo className="[&_span]:text-[#191713] [&_svg]:text-[#fa7000]" />
          </div>
        </div>
      </section>
    </main>
  )
}
