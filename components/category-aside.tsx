import { Trophy, TrendingUp } from 'lucide-react'
import { quizLeaders, trending } from '@/lib/content'

export function CategoryAside({ showLeaderboard = false }: { showLeaderboard?: boolean }) {
  return (
    <aside className="flex flex-col gap-8 lg:sticky lg:top-24 lg:self-start">
      {showLeaderboard && (
        <div className="rounded-xl border border-border bg-card p-5">
          <h2 className="mb-4 flex items-center gap-2 font-display text-sm font-bold uppercase tracking-widest">
            <Trophy className="size-4 text-primary" aria-hidden="true" />
            Nejlepší hráči týdne
          </h2>
          <ol className="flex flex-col gap-1">
            {quizLeaders.map((l) => (
              <li
                key={l.rank}
                className="flex items-center gap-3 rounded-lg px-2 py-2.5 transition-colors hover:bg-secondary/60"
              >
                <span className="w-5 shrink-0 font-display text-lg font-extrabold leading-none text-primary/45">
                  {l.rank}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block truncate text-sm font-semibold text-foreground">
                    {l.name}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {l.quizzes} kvízů
                  </span>
                </span>
                <span className="shrink-0 font-display text-sm font-extrabold text-foreground">
                  {l.score}
                </span>
              </li>
            ))}
          </ol>
          <a
            href="#"
            className="mt-4 block rounded-lg border border-border py-2.5 text-center text-xs font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            Celý žebříček
          </a>
        </div>
      )}

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

      <div className="rounded-xl border border-primary/25 bg-primary/8 p-5">
        <h2 className="font-display text-lg font-extrabold leading-tight tracking-tight">
          {showLeaderboard ? 'Kvíz každé ráno' : 'Denní dávka do mailu'}
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {showLeaderboard
            ? 'Jeden kvíz denně do mailu. Trvá dvě minuty, probere lépe než káva.'
            : 'Jeden e-mail denně. To nejlepší z FunGate, nic víc.'}
        </p>
        <form className="mt-4 flex flex-col gap-2">
          <label htmlFor="cat-email" className="sr-only">
            E-mailová adresa
          </label>
          <input
            id="cat-email"
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
