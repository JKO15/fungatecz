'use client'

import { useMemo, useState } from 'react'
import { Eye, Heart, MessageCircle, Play, TrendingUp } from 'lucide-react'
import { categories, img, postHref, posts, trending, type Post } from '@/lib/content'

const filters = ['Vše', ...categories] as const

function PostCard({ post }: { post: Post }) {
  const [liked, setLiked] = useState(false)

  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-colors hover:border-primary/40">
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
        <span className="absolute left-3 top-3 rounded-md bg-background/85 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-foreground backdrop-blur-sm">
          {post.category}
        </span>
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

        <div className="mt-4 flex items-center justify-between border-t border-border pt-3">
          <div className="flex items-center gap-3.5 text-xs font-medium text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Eye className="size-3.5" aria-hidden="true" />
              {post.views}
            </span>
            <span className="flex items-center gap-1.5">
              <MessageCircle className="size-3.5" aria-hidden="true" />
              {post.comments}
            </span>
          </div>
          <button
            type="button"
            onClick={() => setLiked(!liked)}
            aria-pressed={liked}
            className={`flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold transition-colors ${
              liked
                ? 'bg-primary/15 text-primary'
                : 'text-muted-foreground hover:bg-secondary hover:text-foreground'
            }`}
          >
            <Heart
              className={`size-3.5 ${liked ? 'fill-current' : ''}`}
              aria-hidden="true"
            />
            {post.reactions}
          </button>
        </div>
      </div>
    </article>
  )
}

export function ContentFeed() {
  const [active, setActive] = useState<string>('Vše')

  const visible = useMemo(
    () => (active === 'Vše' ? posts : posts.filter((p) => p.category === active)),
    [active],
  )

  return (
    <section className="mx-auto max-w-[1400px] px-5 py-10 lg:px-10 lg:py-14">
      <div className="mb-7 flex flex-col gap-5 border-b border-border pb-5 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="font-display text-2xl font-extrabold tracking-tight lg:text-3xl">
            Novinky
          </h2>
          <p className="mt-1.5 text-sm text-muted-foreground">
            Nejnovější porce zábavy, čerstvě vybraná redakcí
          </p>
        </div>

        <div className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-1 hide-scrollbar">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setActive(f)}
              aria-pressed={active === f}
              className={`shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                active === f
                  ? 'border-primary bg-primary text-primary-foreground'
                  : 'border-border text-muted-foreground hover:border-foreground/30 hover:text-foreground'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1fr_300px] lg:gap-10">
        <div>
          {visible.length > 0 ? (
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {visible.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <p className="rounded-xl border border-border bg-card p-10 text-center text-sm text-muted-foreground">
              V této kategorii tu zatím nic není. Zkus jinou.
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

        {/* Sidebar */}
        <aside className="space-y-8 lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-xl border border-border bg-card p-5">
            <h3 className="mb-4 flex items-center gap-2 font-display text-sm font-bold uppercase tracking-widest">
              <TrendingUp className="size-4 text-primary" aria-hidden="true" />
              Nejčtenější dnes
            </h3>
            <ol className="space-y-1">
              {trending.map((t, i) => (
                <li key={t}>
                  <a
                    href="#"
                    className="flex items-start gap-3 rounded-lg px-2 py-2.5 transition-colors hover:bg-secondary/60"
                  >
                    <span className="font-display text-xl font-extrabold leading-none text-primary/45">
                      {i + 1}
                    </span>
                    <span className="text-sm font-medium leading-snug text-edge">
                      {t}
                    </span>
                  </a>
                </li>
              ))}
            </ol>
          </div>

          <div className="rounded-xl border border-primary/25 bg-primary/8 p-5">
            <h3 className="font-display text-lg font-extrabold leading-tight tracking-tight">
              Denní dávka do mailu
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Jeden e-mail denně. To nejlepší z FunGate, nic víc.
            </p>
            <form className="mt-4 space-y-2">
              <label htmlFor="nl-email" className="sr-only">
                E-mailová adresa
              </label>
              <input
                id="nl-email"
                type="email"
                required
                placeholder="tvuj@email.cz"
                className="h-11 w-full rounded-lg border border-border bg-background px-3.5 text-sm outline-none placeholder:text-muted-foreground focus:border-primary"
              />
              <button
                type="submit"
                className="h-11 w-full rounded-lg bg-primary text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              >
                Odebírat
              </button>
            </form>
          </div>
        </aside>
      </div>
    </section>
  )
}
