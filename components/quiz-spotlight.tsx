import { ArrowRight, HelpCircle, Users } from 'lucide-react'
import { img, type Quiz } from '@/lib/content'

export function QuizSpotlight({ quiz }: { quiz: Quiz }) {
  return (
    <section className="mx-auto max-w-[1400px] px-5 pt-10 lg:px-10 lg:pt-12">
      <article className="group grid overflow-hidden rounded-2xl border border-border bg-card lg:grid-cols-[1.15fr_1fr]">
        <a
          href="#"
          className="relative block aspect-[16/10] overflow-hidden bg-secondary lg:aspect-auto"
        >
          <img
            src={img(quiz.image, 900, 620) || '/placeholder.svg'}
            alt={quiz.title}
            className="size-full object-cover opacity-80 mix-blend-luminosity transition-transform duration-700 group-hover:scale-105"
          />
          <span className="pointer-events-none absolute inset-0 bg-background/25" />
          {quiz.badge && (
            <span className="absolute left-4 top-4 rounded-md bg-primary px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-primary-foreground">
              {quiz.badge}
            </span>
          )}
        </a>

        <div className="flex flex-col justify-center gap-6 p-6 lg:p-10">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-primary">
              {quiz.topic}
            </p>
            <h2 className="mt-3 font-display text-2xl font-black leading-tight tracking-[-0.04em] text-edge lg:text-4xl">
              <a href="#" className="transition-colors hover:text-primary">
                {quiz.title}
              </a>
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground lg:text-base">
              Patnáct hlášek, u kterých se pozná, kdo české filmy skutečně viděl a kdo
              je zná jen z vyprávění. Výsledek dostaneš ihned.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-medium text-muted-foreground">
            <span className="flex items-center gap-2">
              <HelpCircle className="size-4 text-primary" aria-hidden="true" />
              {quiz.questions} otázek
            </span>
            <span className="flex items-center gap-2">
              <Users className="size-4 text-primary" aria-hidden="true" />
              {quiz.plays} hráčů
            </span>
            <span className="rounded-full border border-border px-2.5 py-1 text-xs">
              {quiz.difficulty}
            </span>
          </div>

          <div>
            <div className="mb-2 flex items-baseline justify-between text-xs font-medium">
              <span className="text-muted-foreground">Průměrná úspěšnost</span>
              <span className="font-display text-base font-extrabold text-foreground">
                {quiz.successRate} %
              </span>
            </div>
            <div
              role="img"
              aria-label={`Průměrná úspěšnost ${quiz.successRate} procent`}
              className="h-1.5 overflow-hidden rounded-full bg-secondary"
            >
              <span
                className="block h-full rounded-full bg-primary"
                style={{ width: `${quiz.successRate}%` }}
              />
            </div>
          </div>

          <a
            href="#"
            className="inline-flex h-12 w-fit items-center gap-2 rounded-full bg-primary px-7 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Spustit kvíz
            <ArrowRight className="size-4" aria-hidden="true" />
          </a>
        </div>
      </article>
    </section>
  )
}
