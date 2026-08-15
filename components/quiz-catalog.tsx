'use client'

import { useMemo, useState } from 'react'
import { HelpCircle, Users } from 'lucide-react'
import { img, quizzes, type Quiz } from '@/lib/content'

const sorts = ['Nejnovější', 'Nejhranější', 'Nejtěžší'] as const

const difficultyTone: Record<Quiz['difficulty'], string> = {
  Lehká: 'border-border text-muted-foreground',
  Střední: 'border-primary/40 text-primary',
  Těžká: 'border-foreground/35 text-foreground',
}

function QuizCard({ quiz }: { quiz: Quiz }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-colors hover:border-primary/40">
      <a href="#" className="relative block aspect-[16/10] overflow-hidden bg-secondary">
        <img
          src={img(quiz.image, 800, 500) || '/placeholder.svg'}
          alt={quiz.title}
          className="size-full object-cover opacity-80 mix-blend-luminosity transition-transform duration-500 group-hover:scale-105"
        />
        <span className="pointer-events-none absolute inset-0 bg-background/25" />
        <span className="absolute left-3 top-3 rounded-md bg-background/85 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-foreground backdrop-blur-sm">
          {quiz.topic}
        </span>
        <span className="absolute bottom-3 right-3 rounded-md bg-background/85 px-2 py-1 font-display text-xs font-extrabold text-foreground backdrop-blur-sm">
          {quiz.questions} otázek
        </span>
      </a>

      <div className="flex flex-1 flex-col p-4">
        <h3 className="font-display text-base font-bold leading-snug tracking-tight text-edge">
          <a href="#" className="transition-colors hover:text-primary">
            {quiz.title}
          </a>
        </h3>

        <div className="mt-3 flex items-center gap-2">
          <span
            className={`rounded-full border px-2 py-0.5 text-[11px] font-semibold ${difficultyTone[quiz.difficulty]}`}
          >
            {quiz.difficulty}
          </span>
          <span className="text-xs text-muted-foreground">{quiz.time}</span>
        </div>

        <div className="mt-4">
          <div className="mb-1.5 flex items-baseline justify-between text-[11px] font-medium">
            <span className="text-muted-foreground">Úspěšnost hráčů</span>
            <span className="font-display text-sm font-extrabold text-foreground">
              {quiz.successRate} %
            </span>
          </div>
          <div
            role="img"
            aria-label={`Úspěšnost ${quiz.successRate} procent`}
            className="h-1 overflow-hidden rounded-full bg-secondary"
          >
            <span
              className="block h-full rounded-full bg-primary"
              style={{ width: `${quiz.successRate}%` }}
            />
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between border-t border-border pt-3">
          <span className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
            <Users className="size-3.5" aria-hidden="true" />
            {quiz.plays}
          </span>
          <a
            href="#"
            className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3.5 py-1.5 text-xs font-semibold text-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground"
          >
            <HelpCircle className="size-3.5" aria-hidden="true" />
            Hrát
          </a>
        </div>
      </div>
    </article>
  )
}

export function QuizCatalog({ topics }: { topics: string[] }) {
  const [topic, setTopic] = useState(topics[0])
  const [sort, setSort] = useState<(typeof sorts)[number]>('Nejnovější')

  const visible = useMemo(() => {
    const list =
      topic === topics[0] ? [...quizzes] : quizzes.filter((q) => q.topic === topic)

    if (sort === 'Nejhranější') {
      return list.sort((a, b) => Number.parseInt(b.plays) - Number.parseInt(a.plays))
    }
    if (sort === 'Nejtěžší') {
      return list.sort((a, b) => a.successRate - b.successRate)
    }
    return list
  }, [topic, sort, topics])

  return (
    <div className="min-w-0">
      <div className="mb-7 flex flex-col gap-5 border-b border-border pb-5 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="font-display text-2xl font-extrabold tracking-tight lg:text-3xl">
            Katalog kvízů
          </h2>
          <p className="mt-1.5 text-sm text-muted-foreground">
            {visible.length} kvízů v tématu {topic.toLowerCase()}
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
          {visible.map((q) => (
            <QuizCard key={q.id} quiz={q} />
          ))}
        </div>
      ) : (
        <p className="rounded-xl border border-border bg-card p-10 text-center text-sm text-muted-foreground">
          V tomhle tématu zatím žádný kvíz nemáme. Zkus jiné.
        </p>
      )}

      <div className="mt-8 flex justify-center">
        <button
          type="button"
          className="rounded-full border border-border px-7 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
        >
          Načíst další kvízy
        </button>
      </div>
    </div>
  )
}
