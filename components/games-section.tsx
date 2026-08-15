import { ArrowRight, Gamepad2, Users } from 'lucide-react'
import { games, img } from '@/lib/content'

export function GamesSection() {
  return (
    <section className="border-y border-border bg-card/40 grain">
      <div className="mx-auto max-w-[1400px] px-5 py-12 lg:px-10 lg:py-16">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <span className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-accent/15 px-3 py-1.5 text-xs font-bold uppercase tracking-widest text-accent">
              <Gamepad2 className="size-3.5" aria-hidden="true" />
              Hrej zdarma
            </span>
            <h2 className="font-display text-2xl font-extrabold tracking-tight lg:text-3xl">
              Online hry, u kterých ztratíš pojem o čase
            </h2>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-opacity hover:opacity-75"
          >
            Všech 240 her
            <ArrowRight className="size-4" aria-hidden="true" />
          </a>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {games.map((game) => (
            <a
              key={game.id}
              href="#"
              className="group relative flex aspect-[4/5] flex-col justify-end overflow-hidden rounded-xl border border-border bg-secondary"
            >
              <img
                src={img(game.image, 600, 750) || '/placeholder.svg'}
                alt={game.title}
                className="absolute inset-0 size-full object-cover opacity-70 mix-blend-luminosity transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/65 to-background/20" />
              <div className="relative p-4">
                <span className="text-[10px] font-bold uppercase tracking-widest text-accent">
                  {game.tag}
                </span>
                <h3 className="mt-1 font-display text-lg font-bold tracking-tight">
                  {game.title}
                </h3>
                <p className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
                  <Users className="size-3.5" aria-hidden="true" />
                  {game.plays} hráčů
                </p>
                <span className="mt-3 inline-flex h-9 items-center rounded-full bg-primary px-4 text-xs font-bold uppercase tracking-wider text-primary-foreground opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Hrát
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
