import { ChevronRight, Clock, Eye, MessageCircle } from 'lucide-react'
import { img, type Article } from '@/lib/content'

export function PostHeader({ article }: { article: Article }) {
  const { post } = article

  return (
    <header className="mx-auto max-w-[1400px] px-5 pt-6 lg:px-10 lg:pt-10">
      <nav aria-label="Drobečková navigace">
        <ol className="flex flex-wrap items-center gap-1.5 text-xs font-medium text-muted-foreground">
          <li>
            <a href="/" className="transition-colors hover:text-primary">
              Domů
            </a>
          </li>
          <ChevronRight className="size-3.5 shrink-0" aria-hidden="true" />
          <li>
            <a href="/" className="transition-colors hover:text-primary">
              {post.category}
            </a>
          </li>
          <ChevronRight className="size-3.5 shrink-0" aria-hidden="true" />
          <li aria-current="page" className="truncate text-foreground/70">
            15 hlášek z české hospody
          </li>
        </ol>
      </nav>

      <div className="mt-7 max-w-4xl">
        <span className="inline-block rounded-full bg-primary px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-primary-foreground">
          {post.category}
        </span>
        <h1 className="mt-5 font-display text-3xl font-extrabold leading-[1.06] tracking-tight text-edge sm:text-5xl lg:text-6xl">
          {post.title}
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground lg:text-lg">
          {article.dek}
        </p>

        <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-border pt-5">
          <div className="flex items-center gap-3">
            <span
              aria-hidden="true"
              className="grid size-10 place-items-center rounded-full bg-primary/15 font-display text-sm font-extrabold text-primary"
            >
              {article.author.initials}
            </span>
            <div className="leading-tight">
              <p className="text-sm font-semibold text-foreground">{article.author.name}</p>
              <p className="text-xs text-muted-foreground">{article.author.role}</p>
            </div>
          </div>

          <span className="hidden h-8 w-px bg-border sm:block" />

          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-medium text-muted-foreground">
            <span>{article.published}</span>
            <span className="flex items-center gap-1.5">
              <Clock className="size-3.5" aria-hidden="true" />
              {article.readTime}
            </span>
            <span className="flex items-center gap-1.5">
              <Eye className="size-3.5" aria-hidden="true" />
              {post.views}
            </span>
            <span className="flex items-center gap-1.5">
              <MessageCircle className="size-3.5" aria-hidden="true" />
              {post.comments}
            </span>
          </div>
        </div>
      </div>

      <figure className="mt-8 lg:mt-10">
        <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-border bg-secondary lg:aspect-[21/9]">
          <img
            src={img(post.image, 1600, 900) || '/placeholder.svg'}
            alt="Interiér tradiční české hospody s pípou a pivními sklenicemi"
            className="size-full object-cover opacity-80 mix-blend-luminosity"
          />
        </div>
        <figcaption className="mt-2.5 text-xs text-muted-foreground">
          Místo, kde se rodí nejlepší věty. Ilustrační foto.
        </figcaption>
      </figure>
    </header>
  )
}
