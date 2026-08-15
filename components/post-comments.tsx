'use client'

import { useState } from 'react'
import { ArrowBigUp, MessageCircle } from 'lucide-react'
import { comments as seedComments } from '@/lib/content'

export function PostComments() {
  const [items, setItems] = useState(seedComments)
  const [voted, setVoted] = useState<Record<string, boolean>>({})
  const [draft, setDraft] = useState('')

  function toggleVote(id: string) {
    setVoted((prev) => ({ ...prev, [id]: !prev[id] }))
    setItems((prev) =>
      prev.map((c) =>
        c.id === id ? { ...c, likes: c.likes + (voted[id] ? -1 : 1) } : c,
      ),
    )
  }

  function submit(e: React.FormEvent) {
    e.preventDefault()
    const text = draft.trim()
    if (!text) return
    setItems((prev) => [
      {
        id: `local-${Date.now()}`,
        author: 'Ty',
        initials: 'T',
        time: 'právě teď',
        likes: 0,
        text,
      },
      ...prev,
    ])
    setDraft('')
  }

  return (
    <section aria-labelledby="komentare" className="mt-12 border-t border-border pt-9">
      <h2
        id="komentare"
        className="flex items-center gap-2.5 font-display text-xl font-extrabold tracking-tight lg:text-2xl"
      >
        <MessageCircle className="size-5 text-primary" aria-hidden="true" />
        Komentáře
        <span className="text-muted-foreground">({items.length})</span>
      </h2>

      <form onSubmit={submit} className="mt-6 rounded-xl border border-border bg-card p-4 lg:p-5">
        <label htmlFor="comment" className="sr-only">
          Napsat komentář
        </label>
        <textarea
          id="comment"
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          onKeyDown={(e) => {
            if (
              e.key === 'Enter' &&
              (e.metaKey || e.ctrlKey) &&
              !e.nativeEvent.isComposing &&
              e.keyCode !== 229
            ) {
              submit(e)
            }
          }}
          rows={3}
          placeholder="Jakou hlášku slýcháš ty? Napiš ji sem…"
          className="w-full resize-none rounded-lg border border-border bg-background p-3.5 text-sm leading-relaxed outline-none placeholder:text-muted-foreground focus:border-primary"
        />
        <div className="mt-3 flex items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground">Buď slušný. Zbytek je na tobě.</p>
          <button
            type="submit"
            disabled={!draft.trim()}
            className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
          >
            Odeslat
          </button>
        </div>
      </form>

      <ul className="mt-6 flex flex-col gap-3">
        {items.map((c) => (
          <li key={c.id} className="flex gap-3.5 rounded-xl border border-border bg-card p-4">
            <span
              aria-hidden="true"
              className="grid size-9 shrink-0 place-items-center rounded-full bg-secondary font-display text-sm font-bold text-foreground"
            >
              {c.initials}
            </span>
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1">
                <span className="text-sm font-semibold text-foreground">{c.author}</span>
                <span className="text-xs text-muted-foreground">{c.time}</span>
              </div>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{c.text}</p>
              <button
                type="button"
                onClick={() => toggleVote(c.id)}
                aria-pressed={!!voted[c.id]}
                className={`mt-2.5 flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold transition-colors ${
                  voted[c.id]
                    ? 'bg-primary/15 text-primary'
                    : 'text-muted-foreground hover:bg-secondary hover:text-foreground'
                }`}
              >
                <ArrowBigUp
                  className={`size-4 ${voted[c.id] ? 'fill-current' : ''}`}
                  aria-hidden="true"
                />
                {c.likes}
              </button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
