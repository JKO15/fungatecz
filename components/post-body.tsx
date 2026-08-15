import type { Article } from '@/lib/content'

export function PostBody({ article }: { article: Article }) {
  return (
    <div>
      <p className="font-display text-lg leading-relaxed text-foreground lg:text-xl">
        {article.intro}
      </p>

      <ol className="mt-10 flex flex-col gap-3">
        {article.items.map((item, i) => (
          <li
            key={item.quote}
            className="flex gap-4 rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/40 lg:gap-6 lg:p-6"
          >
            <span
              aria-hidden="true"
              className="font-display text-3xl font-black leading-none tracking-tight text-primary/35 lg:text-4xl"
            >
              {String(i + 1).padStart(2, '0')}
            </span>
            <div className="min-w-0">
              <p className="font-display text-lg font-bold leading-snug tracking-tight text-edge lg:text-2xl">
                {'\u201E'}
                {item.quote}
                {'\u201C'}
              </p>
              <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground lg:text-base">
                {item.note}
              </p>
            </div>
          </li>
        ))}
      </ol>

      <p className="mt-10 text-base leading-relaxed text-muted-foreground lg:text-lg">
        {article.outro}
      </p>

      <div className="mt-8 flex flex-wrap gap-2">
        {article.tags.map((tag) => (
          <a
            key={tag}
            href="/"
            className="rounded-full border border-border px-3.5 py-1.5 text-xs font-semibold text-muted-foreground transition-colors hover:border-primary hover:text-primary"
          >
            #{tag}
          </a>
        ))}
      </div>
    </div>
  )
}
