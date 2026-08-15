'use client'

import type { SVGProps } from 'react'

type MarkProps = SVGProps<SVGSVGElement>
type LockupProps = { className?: string; compact?: boolean }

/** 01 — Gateway: čistý architektonický portál, žádný smajlík. */
export function GatewayMark({ className, ...props }: MarkProps) {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" className={className} {...props}>
      <path
        d="M8 56V29C8 15.75 18.75 5 32 5s24 10.75 24 24v27h-9V29c0-8.28-6.72-15-15-15s-15 6.72-15 15v18h21v9H8Z"
        fill="currentColor"
      />
      <rect x="25" y="32" width="9" height="9" rx="2" fill="currentColor" />
    </svg>
  )
}

export function GatewayLogo({ className = '', compact = false }: LockupProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <GatewayMark className="h-12 w-12 shrink-0 text-primary" />
      {!compact && (
        <div className="flex items-baseline font-display font-black leading-none tracking-[-0.055em] text-foreground">
          <span className="text-3xl">FUN</span>
          <span className="text-3xl text-primary">GATE</span>
          <span className="ml-1 text-xs font-bold tracking-normal text-muted-foreground">CZ</span>
        </div>
      )}
    </div>
  )
}

/** 02 — Portal F: vlastní písmeno F kreslené jako architektonický vstup. */
export function PortalFMark({ className, ...props }: MarkProps) {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" className={className} fill="currentColor" {...props}>
      <path d="M8 58V28C8 14.7 18.7 4 32 4h24v10H33c-8.3 0-15 6.7-15 15v29H8Z" />
      <path d="M18 28h30v10H18z" />
      <path d="M18 48h20v10H18z" opacity="0.38" />
    </svg>
  )
}

export function PortalFLogo({ className = '', compact = false }: LockupProps) {
  return (
    <div className={`flex items-center gap-3.5 ${className}`}>
      <PortalFMark className="h-12 w-12 shrink-0 text-primary" />
      {!compact && (
        <div className="flex items-baseline font-display text-[29px] font-black leading-none tracking-[-0.055em]">
          <span className="text-foreground">FUN</span>
          <span className="ml-1 text-primary">GATE</span>
          <span className="ml-1.5 text-[11px] font-bold tracking-normal text-muted-foreground">CZ</span>
        </div>
      )}
    </div>
  )
}

/** 03 — Open Pages: rozevřené stránky vytvářejí vstup do obsahu. */
export function OpenPagesMark({ className, ...props }: MarkProps) {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" className={className} fill="currentColor" {...props}>
      <path d="M5 11c10-2 19 1 27 8v39C24 51 15 48 5 50V11Z" />
      <path d="M59 11c-10-2-19 1-27 8v39c8-7 17-10 27-8V11Z" opacity="0.48" />
      <path d="M29 19h6v39h-6z" opacity="0.24" />
    </svg>
  )
}

export function OpenPagesLogo({ className = '', compact = false }: LockupProps) {
  return (
    <div className={`flex items-center gap-3.5 ${className}`}>
      <OpenPagesMark className="h-11 w-11 shrink-0 text-primary" />
      {!compact && (
        <div className="flex flex-col leading-none">
          <span className="font-display text-[28px] font-black tracking-[-0.055em] text-foreground">
            FunGate
          </span>
          <span className="mt-1.5 text-[8px] font-bold uppercase tracking-[0.3em] text-primary">
            Otevři si zábavu
          </span>
        </div>
      )}
    </div>
  )
}

/** 04 — Keyhole: brána jako klíčová dírka, metafora odemčení obsahu. */
export function KeyholeMark({ className, ...props }: MarkProps) {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" className={className} {...props}>
      <path d="M32 5C18.7 5 8 15.7 8 29v30h48V29C56 15.7 45.3 5 32 5Z" fill="currentColor" />
      <circle cx="32" cy="27" r="7.5" fill="var(--background)" />
      <path d="M28.5 33h7l3 17h-13z" fill="var(--background)" />
    </svg>
  )
}

export function KeyholeLogo({ className = '', compact = false }: LockupProps) {
  return (
    <div className={`flex items-center gap-3.5 ${className}`}>
      <KeyholeMark className="h-12 w-12 shrink-0 text-primary" />
      {!compact && (
        <div className="flex flex-col leading-none">
          <span className="font-display text-[28px] font-black tracking-[-0.05em] text-foreground">
            FUNGATE
          </span>
          <span className="mt-2 flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.26em] text-muted-foreground">
            <span className="h-px w-5 bg-primary" />
            Brána do světa zábavy
          </span>
        </div>
      )}
    </div>
  )
}

/** 05 — Pixel Gate: brána poskládaná z pixelů, odkaz na hry a arkády. */
export function PixelGateMark({ className, ...props }: MarkProps) {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" className={className} fill="currentColor" {...props}>
      <rect x="24" y="8" width="16" height="8" />
      <rect x="16" y="16" width="8" height="8" />
      <rect x="40" y="16" width="8" height="8" />
      <rect x="8" y="24" width="8" height="32" />
      <rect x="48" y="24" width="8" height="32" />
      <rect x="28" y="32" width="8" height="8" />
    </svg>
  )
}

export function PixelGateLogo({ className = '', compact = false }: LockupProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <PixelGateMark className="h-11 w-11 shrink-0 text-primary" />
      {!compact && (
        <div className="flex items-center gap-2">
          <span className="font-display text-[26px] font-black uppercase tracking-[0.02em] text-foreground">
            Fungate
          </span>
          <span className="rounded bg-primary px-1.5 py-1 text-[10px] font-black uppercase leading-none text-primary-foreground">
            cz
          </span>
        </div>
      )}
    </div>
  )
}

/** 06 — Smile Arch: kultivovaná verze původního smajlíku, tenké tahy a vzduch. */
export function SmileArchMark({ className, ...props }: MarkProps) {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" className={className} fill="none" {...props}>
      <path
        d="M11 57V30a21 21 0 0 1 42 0v27"
        stroke="currentColor"
        strokeWidth="7"
        strokeLinecap="round"
      />
      <circle cx="41" cy="28" r="3.75" fill="currentColor" />
      <path
        d="M23 33c2.8 7.4 9.8 10.8 16.4 8"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function SmileArchLogo({ className = '', compact = false }: LockupProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <SmileArchMark className="h-12 w-12 shrink-0 text-primary" />
      {!compact && (
        <div className="flex items-start font-display text-[31px] font-extrabold leading-none tracking-[-0.04em]">
          <span className="text-foreground">Fun</span>
          <span className="text-primary">Gate</span>
          <span className="ml-1 pt-1 text-[10px] font-bold tracking-normal text-muted-foreground">
            .cz
          </span>
        </div>
      )}
    </div>
  )
}

/** 07 — Aperture: čtyři segmenty clony otevírající průchod do středu. */
export function ApertureMark({ className, ...props }: MarkProps) {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" className={className} fill="currentColor" {...props}>
      <path d="M9 9h25L24 29H9V9Z" />
      <path d="M55 9v25L35 24V9h20Z" opacity="0.82" />
      <path d="M55 55H30l10-20h15v20Z" opacity="0.64" />
      <path d="M9 55V30l20 10v15H9Z" opacity="0.46" />
    </svg>
  )
}

export function ApertureLogo({ className = '', compact = false }: LockupProps) {
  return (
    <div className={`flex items-center gap-3.5 ${className}`}>
      <ApertureMark className="h-11 w-11 shrink-0 text-primary" />
      {!compact && (
        <div className="flex flex-col leading-none">
          <span className="font-display text-[28px] font-black uppercase tracking-[-0.045em] text-foreground">
            Fungate
          </span>
          <span className="mt-1.5 text-[8px] font-bold uppercase tracking-[0.34em] text-primary">
            Open the fun
          </span>
        </div>
      )}
    </div>
  )
}

/** 08 — Enter: stavěný oblouk s šipkou dovnitř, jednoznačné „vstup". */
export function EnterGateMark({ className, ...props }: MarkProps) {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" className={className} fill="none" {...props}>
      <path
        d="M8 58V31a24 24 0 0 1 48 0v27"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="square"
      />
      <path
        d="M28 29.5 38.5 40 28 50.5"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function EnterGateLogo({ className = '', compact = false }: LockupProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <EnterGateMark className="h-12 w-12 shrink-0 text-primary" />
      {!compact && (
        <div className="flex items-baseline font-display text-[30px] font-black leading-none tracking-[-0.055em]">
          <span className="text-foreground">FUN</span>
          <span className="text-primary">GATE</span>
        </div>
      )}
    </div>
  )
}

/** 09 — Card Fan: tři rozevřené obsahové karty vytvářejí siluetu brány. */
export function CardFanMark({ className, ...props }: MarkProps) {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" className={className} fill="currentColor" {...props}>
      <rect x="8" y="15" width="21" height="40" rx="3" transform="rotate(-13 18.5 35)" opacity="0.42" />
      <rect x="35" y="15" width="21" height="40" rx="3" transform="rotate(13 45.5 35)" opacity="0.62" />
      <rect x="21" y="7" width="22" height="48" rx="3" />
      <rect x="27" y="14" width="10" height="3" rx="1.5" opacity="0.55" />
    </svg>
  )
}

export function CardFanLogo({ className = '', compact = false }: LockupProps) {
  return (
    <div className={`flex items-center gap-3.5 ${className}`}>
      <CardFanMark className="h-12 w-12 shrink-0 text-primary" />
      {!compact && (
        <div className="flex items-center gap-2.5">
          <span className="font-display text-[28px] font-black leading-none tracking-[-0.055em] text-foreground">
            FunGate
          </span>
          <span className="h-7 w-px bg-border" />
          <span className="text-[9px] font-bold uppercase leading-tight tracking-[0.18em] text-primary">
            Objevuj<br />každý den
          </span>
        </div>
      )}
    </div>
  )
}

/** 10 — Marquee: oblouk poskládaný ze žárovek jako u kolotoče nebo starého kina. */
const marqueeBulbs = [
  [14, 56], [14, 48], [14, 40],
  [14, 32], [15.4, 25.1], [19.3, 19.3], [25.1, 15.4],
  [32, 14],
  [38.9, 15.4], [44.7, 19.3], [48.6, 25.1], [50, 32],
  [50, 40], [50, 48], [50, 56],
] as const

export function MarqueeMark({ className, ...props }: MarkProps) {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" className={className} fill="currentColor" {...props}>
      {marqueeBulbs.map(([cx, cy]) => (
        <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="3.7" />
      ))}
    </svg>
  )
}

export function MarqueeLogo({ className = '', compact = false }: LockupProps) {
  return (
    <div className={`flex items-center gap-3.5 ${className}`}>
      <MarqueeMark className="h-12 w-12 shrink-0 text-primary" />
      {!compact && (
        <div className="flex items-baseline font-display text-[29px] font-black leading-none tracking-[-0.05em]">
          <span className="text-foreground">FUNGATE</span>
          <span className="ml-1.5 text-[15px] font-black tracking-normal text-primary">.CZ</span>
        </div>
      )}
    </div>
  )
}

export const logoConcepts = [
  {
    id: 'gateway',
    number: '01',
    name: 'Gateway',
    idea: 'Značka založená na samotném významu názvu. Čistý portál bez prvoplánové veselosti.',
    Logo: GatewayLogo,
    Mark: GatewayMark,
  },
  {
    id: 'portal-f',
    number: '02',
    name: 'Portal F',
    idea: 'Vlastní písmeno F kreslené jako architektonický vstup. Silné spojení názvu a významu bez potřeby dalšího symbolu.',
    Logo: PortalFLogo,
    Mark: PortalFMark,
  },
  {
    id: 'open-pages',
    number: '03',
    name: 'Open Pages',
    idea: 'Rozevřené stránky vytvářejí vstup do obsahu. Odkazuje na objevování článků, videí, kvízů i příběhů.',
    Logo: OpenPagesLogo,
    Mark: OpenPagesMark,
  },
  {
    id: 'keyhole',
    number: '04',
    name: 'Keyhole',
    idea: 'Brána jako klíčová dírka. Negativní prostor nese celý význam, symbol je čitelný i ve 16 px.',
    Logo: KeyholeLogo,
    Mark: KeyholeMark,
  },
  {
    id: 'pixel-gate',
    number: '05',
    name: 'Pixel Gate',
    idea: 'Nejhravější směr. Pixelová mřížka odkazuje na herní sekci a odlišuje web od zpravodajských portálů.',
    Logo: PixelGateLogo,
    Mark: PixelGateMark,
  },
  {
    id: 'smile-arch',
    number: '06',
    name: 'Smile Arch',
    idea: 'Kultivovaná evoluce původního loga. Zachovává úsměv, ale s tenčími tahy a dostatkem vzduchu.',
    Logo: SmileArchLogo,
    Mark: SmileArchMark,
  },
  {
    id: 'aperture',
    number: '07',
    name: 'Aperture',
    idea: 'Čtyři segmenty clony otevírají průchod do středu. Dynamický symbol pro video, obrázky i hry bez doslovného play tlačítka.',
    Logo: ApertureLogo,
    Mark: ApertureMark,
  },
  {
    id: 'enter-gate',
    number: '08',
    name: 'Enter',
    idea: 'Oblouk se šipkou dovnitř. Nejjasnější sdělení z celé sady — „vstup" pochopí každý okamžitě, geometrie drží i v 16 px.',
    Logo: EnterGateLogo,
    Mark: EnterGateMark,
  },
  {
    id: 'card-fan',
    number: '09',
    name: 'Card Fan',
    idea: 'Tři rozevřené obsahové karty vytvářejí siluetu brány. Přímo odkazuje na různorodý feed obrázků, videí, kvízů a her.',
    Logo: CardFanLogo,
    Mark: CardFanMark,
  },
  {
    id: 'marquee',
    number: '10',
    name: 'Marquee',
    idea: 'Oblouk poskládaný ze žárovek jako u kolotoče nebo starého kina. Nejsilnější odkaz na zábavu a show, žárovky lze rozsvěcet v animaci.',
    Logo: MarqueeLogo,
    Mark: MarqueeMark,
  },
] as const
