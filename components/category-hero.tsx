import { ChevronRight } from 'lucide-react'
import { categoryPages, type CategoryEntry } from '@/lib/content'

export function CategoryHero({ category }: { category: CategoryEntry }) {
  return (
    <section className="border-b border-border bg-secondary/25">
      <div className="mx-auto max-w-[1400px] px-5 pb-10 pt-7 lg:px-10 lg:pb-12 lg:pt-9">
        <nav aria-label="Drobečková navigace">
          <ol className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
            <li>
              <a href="/" className="transition-colors hover:text-primary">
                FunGate
              </a>
            </li>
            <ChevronRight className="size-3.5" aria-hidden="true" />
            <li aria-current="page" className="text-foreground">
              {category.name}
            </li>
          </ol>
        </nav>

        <div className="mt-6 grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end lg:gap-14">
          <div className="max-w-2xl">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary">
              {category.tagline}
            </p>
            <h1 className="mt-3 font-display text-5xl font-black leading-[0.92] tracking-[-0.055em] text-edge sm:text-6xl lg:text-7xl">
              {category.name}
            </h1>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              {category.description}
            </p>
          </div>

          <dl className="grid grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-4 lg:gap-x-10">
            {category.stats.map((s) => (
              <div key={s.label} className="border-l border-border pl-4">
                <dt className="text-[10px] font-bold uppercase tracking-[0.16em] text-muted-foreground">
                  {s.label}
                </dt>
                <dd className="mt-1.5 font-display text-2xl font-extrabold tracking-tight text-foreground lg:text-[28px]">
                  {s.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <nav aria-label="Další kategorie" className="mt-9">
          <ul className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-1 hide-scrollbar">
            {categoryPages.map((c) => (
              <li key={c.slug}>
                <a
                  href={`/kategorie/${c.slug}`}
                  aria-current={c.slug === category.slug ? 'page' : undefined}
                  className={`inline-flex shrink-0 items-center rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                    c.slug === category.slug
                      ? 'border-primary bg-primary text-primary-foreground'
                      : 'border-border text-muted-foreground hover:border-foreground/30 hover:text-foreground'
                  }`}
                >
                  {c.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  )
}
