'use client'

import { useMemo, useState } from 'react'
import { Eye, MessageCircle, Play } from 'lucide-react'
import { img, postHref, posts, type Category } from '@/lib/content'

const sorts = ['Nejnovější', 'Nejčtenější', 'Nejvíc reakcí'] as const

function toNumber(value: string) {
  const n = Number.parseFloat(value.replace(',', '.'))
  return value.includes('mil.') ? n * 1000 : n
}

export function CategoryPosts({
  category,
  topics,
}: {
  category: Category
  topics: string[]
}) {
  const [topic, setTopic] = useState(topics[0])
  const [sort, setSort] = useState<(typeof sorts)[number]>('Nejnovější')

  const visible = useMemo(() => {
    const list = posts.filter((p) => p.category === category)
    if (sort === 'Nejčtenější') {
      return [...list].sort((a, b) => toNumber(b.views) - toNumber(a.views))
    }
    if (sort === 'Nejvíc reakcí') {
      return [...list].sort((a, b) => toNumber(b.reactions) - toNumber(a.reactions))
    }
    return list
  }, [category, sort])

  return (
    <div className="min-w-0">
      <div className="mb-7 flex flex-col gap-5 border-b border-border pb-5 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="font-display text-2xl font-extrabold tracking-tight lg:text-3xl">
            Vše z rubriky
          </h2>
          <p className="mt-1.5 text-sm text-muted-foreground">
            {visible.length} příspěvků, nejnovější nahoře
          </p>
        </div>

        <label className="flex items-center gap-2 text-sm">
          <span className="text-muted-foreground">Řadit</span>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as (typeof sorts)[number])}
            className="h-10 rounded-full border border-border bg-secondary/50 px-4 text-sm font-medium text-foreground outline-none transition-colors focus:border-primary"
          >
            {sorts.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="-mx-1 mb-7 flex gap-2 overflow-x-auto px-1 pb-1 hide-scrollbar">
        {topics.map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => setTopic(t)}
            aria-pressed={topic === t}
            className={`shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
              topic === t
                ? 'border-primary bg-primary text-primary-foreground'
                : 'border-border text-muted-foreground hover:border-foreground/30 hover:text-foreground'
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {visible.length > 0 ? (
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {visible.map((post) => (
            <article
              key={post.id}
              className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-colors hover:border-primary/40"
            >
              <a
                href={postHref(post)}
                className="relative block aspect-[16/10] overflow-hidden bg-secondary"
              >
                <img
                  src={img(post.image, 800, 500) || '/placeholder.svg'}
                  alt={post.title}
                  className="size-full object-cover opacity-80 mix-blend-luminosity transition-transform duration-500 group-hover:scale-105"
                />
                <span className="pointer-events-none absolute inset-0 bg-background/25" />
                {post.isVideo && (
                  <span className="absolute inset-0 grid place-items-center">
                    <span className="grid size-12 place-items-center rounded-full bg-primary/90 text-primary-foreground transition-transform group-hover:scale-110">
                      <Play className="size-4 fill-current" aria-hidden="true" />
                      <span className="sr-only">Přehrát video</span>
                    </span>
                  </span>
                )}
              </a>

              <div className="flex flex-1 flex-col p-4">
                <h3 className="font-display text-base font-bold leading-snug tracking-tight text-edge">
                  <a href={postHref(post)} className="transition-colors hover:text-primary">
                    {post.title}
                  </a>
                </h3>
                {post.excerpt && (
                  <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                    {post.excerpt}
                  </p>
                )}
                <div className="mt-4 flex items-center justify-between border-t border-border pt-3 text-xs font-medium text-muted-foreground">
                  <span className="flex items-center gap-3.5">
                    <span className="flex items-center gap-1.5">
                      <Eye className="size-3.5" aria-hidden="true" />
                      {post.views}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MessageCircle className="size-3.5" aria-hidden="true" />
                      {post.comments}
                    </span>
                  </span>
                  <span>{post.time}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <p className="rounded-xl border border-border bg-card p-10 text-center text-sm text-muted-foreground">
          Tady to zatím zeje prázdnotou. Zkus jinou rubriku.
        </p>
      )}

      <div className="mt-8 flex justify-center">
        <button
          type="button"
          className="rounded-full border border-border px-7 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
        >
          Načíst další příspěvky
        </button>
      </div>
    </div>
  )
}
