import { Eye, TrendingUp } from 'lucide-react'
import { img, postHref, posts, trending } from '@/lib/content'

export function PostAside({ currentId }: { currentId: string }) {
  const more = posts.filter((p) => p.id !== currentId).slice(0, 4)

  return (
    <aside className="flex flex-col gap-8 lg:sticky lg:top-24 lg:self-start">
      <div className="rounded-xl border border-border bg-card p-5">
        <h2 className="mb-4 flex items-center gap-2 font-display text-sm font-bold uppercase tracking-widest">
          <TrendingUp className="size-4 text-primary" aria-hidden="true" />
          Nejčtenější dnes
        </h2>
        <ol className="flex flex-col gap-1">
          {trending.map((t, i) => (
            <li key={t}>
              <a
                href="/"
                className="flex items-start gap-3 rounded-lg px-2 py-2.5 transition-colors hover:bg-secondary/60"
              >
                <span className="font-display text-xl font-extrabold leading-none text-primary/45">
                  {i + 1}
                </span>
                <span className="text-sm font-medium leading-snug text-edge">{t}</span>
              </a>
            </li>
          ))}
        </ol>
      </div>

      <div className="rounded-xl border border-border bg-card p-5">
        <h2 className="mb-4 font-display text-sm font-bold uppercase tracking-widest">
          Čti dál
        </h2>
        <ul className="flex flex-col gap-4">
          {more.map((p) => (
            <li key={p.id}>
              <a href={postHref(p)} className="group flex gap-3">
                <span className="relative size-16 shrink-0 overflow-hidden rounded-lg bg-secondary">
                  <img
                    src={img(p.image, 200, 200) || '/placeholder.svg'}
                    alt={p.title}
                    className="size-full object-cover opacity-80 mix-blend-luminosity transition-transform duration-500 group-hover:scale-110"
                  />
                </span>
                <span className="min-w-0">
                  <span className="block text-sm font-semibold leading-snug text-edge transition-colors group-hover:text-primary">
                    {p.title}
                  </span>
                  <span className="mt-1.5 flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Eye className="size-3.5" aria-hidden="true" />
                    {p.views}
                  </span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-xl border border-primary/25 bg-primary/8 p-5">
        <h2 className="font-display text-lg font-extrabold leading-tight tracking-tight">
          Denní dávka do mailu
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          Jeden e-mail denně. To nejlepší z FunGate, nic víc.
        </p>
        <form className="mt-4 flex flex-col gap-2">
          <label htmlFor="aside-email" className="sr-only">
            E-mailová adresa
          </label>
          <input
            id="aside-email"
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
  )
}
