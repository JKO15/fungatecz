'use client'

import { useState } from 'react'
import { Bookmark, Check, Heart, Link2, Send, Share2 } from 'lucide-react'

export function PostReactions({ reactions }: { reactions: string }) {
  const [liked, setLiked] = useState(false)
  const [saved, setSaved] = useState(false)
  const [copied, setCopied] = useState(false)

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(window.location.href)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      setCopied(false)
    }
  }

  return (
    <div className="mt-10 flex flex-wrap items-center justify-between gap-4 rounded-xl border border-border bg-card p-4 lg:p-5">
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={() => setLiked(!liked)}
          aria-pressed={liked}
          className={`flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold transition-colors ${
            liked
              ? 'bg-primary text-primary-foreground'
              : 'bg-secondary text-foreground hover:bg-secondary/70'
          }`}
        >
          <Heart className={`size-4 ${liked ? 'fill-current' : ''}`} aria-hidden="true" />
          {liked ? '3,8 tis. + ty' : reactions}
        </button>

        <button
          type="button"
          onClick={() => setSaved(!saved)}
          aria-pressed={saved}
          className={`flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold transition-colors ${
            saved
              ? 'bg-primary/15 text-primary'
              : 'text-muted-foreground hover:bg-secondary hover:text-foreground'
          }`}
        >
          <Bookmark className={`size-4 ${saved ? 'fill-current' : ''}`} aria-hidden="true" />
          {saved ? 'Uloženo' : 'Uložit'}
        </button>
      </div>

      <div className="flex items-center gap-1.5">
        <span className="mr-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          Sdílet
        </span>
        <a
          href="https://www.facebook.com/sharer/sharer.php"
          className="grid size-9 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
        >
          <Share2 className="size-4" aria-hidden="true" />
          <span className="sr-only">Sdílet na Facebooku</span>
        </a>
        <a
          href="https://twitter.com/intent/tweet"
          className="grid size-9 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
        >
          <Send className="size-4" aria-hidden="true" />
          <span className="sr-only">Sdílet na X</span>
        </a>
        <button
          type="button"
          onClick={copyLink}
          className="grid size-9 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
        >
          {copied ? (
            <Check className="size-4 text-primary" aria-hidden="true" />
          ) : (
            <Link2 className="size-4" aria-hidden="true" />
          )}
          <span className="sr-only">
            {copied ? 'Odkaz zkopírován' : 'Zkopírovat odkaz'}
          </span>
        </button>
      </div>
    </div>
  )
}
