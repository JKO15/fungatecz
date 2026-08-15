import { Flame, MessageCircle, Play, Eye } from 'lucide-react'
import { featured, img, secondary } from '@/lib/content'

export function Hero() {
  return (
    <section className="mx-auto max-w-[1400px] px-5 pt-8 pb-4 lg:px-10 lg:pt-12">
      <div className="mb-6 flex items-center gap-3">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/12 px-3 py-1.5 text-xs font-bold uppercase tracking-widest text-primary">
          <Flame className="size-3.5" aria-hidden="true" />
          Právě letí
        </span>
        <span className="h-px flex-1 bg-border" />
      </div>

      <div className="grid gap-4 lg:grid-cols-[1.65fr_1fr] lg:gap-5">
        {/* Hlavní článek */}
        <a
          href="#"
          className="group relative flex min-h-[380px] flex-col justify-end overflow-hidden rounded-2xl border border-border bg-secondary lg:min-h-[520px]"
        >
          <img
            src={img(featured.image, 1400, 900) || '/placeholder.svg'}
            alt={featured.title}
            className="absolute inset-0 size-full object-cover opacity-70 mix-blend-luminosity transition-transform duration-700 group-hover:scale-[1.04]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/75 to-background/25" />
          <div className="relative p-6 lg:p-9">
            <span className="mb-4 inline-block rounded-full bg-primary px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-primary-foreground">
              {featured.category}
            </span>
            <h2 className="max-w-2xl font-display text-3xl font-extrabold leading-[1.05] tracking-tight text-edge lg:text-5xl">
              {featured.title}
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground lg:text-base">
              {featured.excerpt}
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-medium text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <Eye className="size-4" aria-hidden="true" />
                {featured.views}
              </span>
              <span className="flex items-center gap-1.5">
                <MessageCircle className="size-4" aria-hidden="true" />
                {featured.comments}
              </span>
              <span>{featured.time}</span>
            </div>
          </div>
        </a>

        {/* Dva vedlejší */}
        <div className="grid gap-4 lg:gap-5">
          {secondary.map((post) => (
            <a
              key={post.id}
              href="#"
              className="group relative flex min-h-[220px] flex-col justify-end overflow-hidden rounded-2xl border border-border bg-secondary lg:min-h-0"
            >
              <img
                src={img(post.image, 800, 600) || '/placeholder.svg'}
                alt={post.title}
                className="absolute inset-0 size-full object-cover opacity-70 mix-blend-luminosity transition-transform duration-700 group-hover:scale-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/20" />

              {post.isVideo && (
                <span className="absolute left-5 top-5 grid size-11 place-items-center rounded-full bg-primary/95 text-primary-foreground shadow-lg transition-transform group-hover:scale-110">
                  <Play className="size-4 fill-current" aria-hidden="true" />
                  <span className="sr-only">Přehrát video</span>
                </span>
              )}

              <div className="relative p-5 lg:p-6">
                <span className="mb-2.5 inline-block text-[11px] font-bold uppercase tracking-widest text-accent">
                  {post.category}
                </span>
                <h3 className="font-display text-lg font-bold leading-tight tracking-tight text-edge lg:text-xl">
                  {post.title}
                </h3>
                <div className="mt-3 flex items-center gap-4 text-xs font-medium text-muted-foreground">
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
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
