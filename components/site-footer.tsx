import { categories, categoryHref, type Category } from '@/lib/content'
import { FunGateLogo } from '@/components/logo'

const columns = [
  {
    title: 'Obsah',
    links: categories,
  },
  {
    title: 'FunGate',
    links: ['O nás', 'Redakce', 'Inzerce', 'Kariéra', 'Kontakt'],
  },
  {
    title: 'Právní',
    links: ['Podmínky použití', 'Ochrana údajů', 'Cookies', 'Autorská práva'],
  },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-[1400px] px-5 py-12 lg:px-10 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div>
            <FunGateLogo withTagline />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Denní dávka zábavy z českého internetu. Obrázky, videa, vtipy, hry
              a kvízy na jednom místě od roku 2011.
            </p>
          </div>

          {columns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h3 className="mb-4 font-display text-xs font-bold uppercase tracking-widest text-foreground">
                {col.title}
              </h3>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href={
                        col.title === 'Obsah'
                          ? categoryHref(link as Category)
                          : '#'
                      }
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} FunGate.cz — všechna práva vyhrazena
          </p>
          <p className="text-xs text-muted-foreground">
            Vyrobeno s nadsázkou v Česku
          </p>
        </div>
      </div>
    </footer>
  )
}
