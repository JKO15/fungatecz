import type { SVGProps } from 'react'

/**
 * Značka FunGate — brána (portál) se smajlíkem uvnitř.
 * Kreslí se v currentColor, takže dědí barvu z rodiče (text-primary).
 */
export function FunGateMark({
  className,
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 42 64"
      fill="none"
      stroke="currentColor"
      strokeWidth={5.2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
      {...props}
    >
      {/* Oblouk brány: levé křídlo, klenba, horní část pravého křídla */}
      <path d="M8 58V24a13 13 0 0 1 26 0v6.5" />
      {/* Dolní část pravého křídla + prah (mezera, kterou prochází úsměv) */}
      <path d="M34 40v18H8" />
      {/* Úsměv */}
      <path d="M14 33.5c1.7 8.8 11 10.8 18.5 3.6" strokeWidth={4.6} />
      {/* Oko */}
      <circle cx="23.4" cy="26.4" r="3" fill="currentColor" stroke="none" />
    </svg>
  )
}

/**
 * Kompletní logo: značka + wordmark. Volitelně s claimem.
 */
export function FunGateLogo({
  withTagline = false,
  className,
}: {
  withTagline?: boolean
  className?: string
}) {
  return (
    <span className={`flex items-center gap-2.5 ${className ?? ''}`}>
      <FunGateMark className="h-11 w-auto shrink-0 text-primary" />
      <span className="flex flex-col leading-none">
        <span className="font-display text-xl font-extrabold tracking-tight text-foreground">
          FUN<span className="text-primary">GATE</span>
          <span className="text-muted-foreground">.cz</span>
        </span>
        {withTagline && (
          <span className="mt-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            Brána do světa zábavy
          </span>
        )}
      </span>
    </span>
  )
}
