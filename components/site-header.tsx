'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { Menu, Search, X } from 'lucide-react'
import { categories, categoryHref } from '@/lib/content'
import { FunGateLogo } from '@/components/logo'

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-xl">
      <div className="mx-auto flex h-18 max-w-[1400px] items-center gap-6 px-5 lg:px-10">
        <a href="#" className="shrink-0" aria-label="FunGate.cz — domů">
          <FunGateLogo />
        </a>

        <nav aria-label="Hlavní navigace" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {categories.map((c) => (
              <li key={c}>
                <a
                  href={categoryHref(c)}
                  aria-current={pathname === categoryHref(c) ? 'page' : undefined}
                  className={`rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
                    pathname === categoryHref(c)
                      ? 'bg-secondary text-foreground'
                      : 'text-muted-foreground hover:bg-secondary/60 hover:text-foreground'
                  }`}
                >
                  {c}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <label className="relative hidden md:block">
            <span className="sr-only">Hledat na FunGate</span>
            <Search
              aria-hidden="true"
              className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
            />
            <input
              type="search"
              placeholder="Hledat vtipy, videa…"
              className="h-10 w-44 rounded-full border border-border bg-secondary/50 pl-9 pr-4 text-sm outline-none transition-all placeholder:text-muted-foreground focus:w-60 focus:border-primary/60 focus:bg-secondary lg:w-52"
            />
          </label>

          <a
            href="#"
            className="hidden h-10 items-center rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 sm:inline-flex"
          >
            Přidat příspěvek
          </a>

          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label={open ? 'Zavřít menu' : 'Otevřít menu'}
            className="grid size-10 place-items-center rounded-full border border-border text-foreground lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border/70 px-5 py-4 lg:hidden">
          <label className="relative mb-4 block md:hidden">
            <span className="sr-only">Hledat na FunGate</span>
            <Search
              aria-hidden="true"
              className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
            />
            <input
              type="search"
              placeholder="Hledat vtipy, videa…"
              className="h-11 w-full rounded-full border border-border bg-secondary/50 pl-9 pr-4 text-sm outline-none placeholder:text-muted-foreground focus:border-primary/60"
            />
          </label>
          <ul className="grid grid-cols-2 gap-2">
            {categories.map((c) => (
              <li key={c}>
                <a
                  href={categoryHref(c)}
                  className="block rounded-lg bg-secondary/50 px-4 py-3 text-sm font-medium text-foreground"
                >
                  {c}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
