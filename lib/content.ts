export type Category =
  | 'Obrázky'
  | 'Videa'
  | 'Vtipy'
  | 'Hry'
  | 'Kvízy'
  | 'Zajímavosti'

export type Post = {
  id: string
  title: string
  excerpt?: string
  category: Category
  image: string
  views: string
  comments: number
  reactions: string
  time: string
  isVideo?: boolean
  slug?: string
}

export function postHref(post: Post) {
  return post.slug ? `/prispevek/${post.slug}` : '#'
}

export function img(query: string, width = 1200, height = 800) {
  return `/placeholder.svg?height=${height}&width=${width}&query=${encodeURIComponent(query)}`
}

export const categories: Category[] = [
  'Obrázky',
  'Videa',
  'Vtipy',
  'Hry',
  'Kvízy',
  'Zajímavosti',
]

export const featured: Post = {
  id: 'f1',
  title: 'Nejvtipnější fotky zvířat, které letos rozesmály celý internet',
  excerpt:
    'Kočka, která si myslí, že je chleba. Pes, který prohrál boj s vlastním odrazem. Vybrali jsme 42 momentů, u kterých neudržíte vážnou tvář.',
  category: 'Obrázky',
  image: 'playful cat loaf funny animal photo',
  views: '184 tis.',
  comments: 312,
  reactions: '9,4 tis.',
  time: 'před 2 hodinami',
}

export const secondary: Post[] = [
  {
    id: 's1',
    title: 'Ten moment, kdy si uvědomíš, že kamera běží už deset minut',
    category: 'Videa',
    image: 'person surprised at webcam recording',
    views: '96 tis.',
    comments: 148,
    reactions: '5,1 tis.',
    time: 'před 4 hodinami',
    isVideo: true,
  },
  {
    id: 's2',
    title: 'Kvíz: Poznáš český film jen podle jedné hlášky?',
    category: 'Kvízy',
    image: 'retro czech cinema film strip',
    views: '71 tis.',
    comments: 203,
    reactions: '4,2 tis.',
    time: 'před 6 hodinami',
  },
]

export const posts: Post[] = [
  {
    id: 'p1',
    title: '15 hlášek z české hospody, které si zaslouží pamětní desku',
    excerpt: 'Sbírka lidové mluvy, na kterou by byl Hrabal pyšný.',
    category: 'Vtipy',
    image: 'cozy czech pub interior beer',
    views: '58 tis.',
    comments: 187,
    reactions: '3,8 tis.',
    time: 'před 8 hodinami',
    slug: 'hlasky-z-ceske-hospody',
  },
  {
    id: 'p2',
    title: 'Proč mají tučňáci kolena? Osm faktů, které vám nikdo neřekl',
    category: 'Zajímavosti',
    image: 'penguins on ice antarctica',
    views: '42 tis.',
    comments: 94,
    reactions: '2,6 tis.',
    time: 'před 10 hodinami',
  },
  {
    id: 'p3',
    title: 'Tahle optická iluze rozdělila internet na dva tábory',
    category: 'Obrázky',
    image: 'black and white optical illusion spiral',
    views: '133 tis.',
    comments: 421,
    reactions: '7,7 tis.',
    time: 'včera',
  },
  {
    id: 'p4',
    title: 'Skákej přes překážky a nezastavuj — nová hra na jedno kliknutí',
    category: 'Hry',
    image: 'retro arcade runner game pixel art',
    views: '29 tis.',
    comments: 61,
    reactions: '1,9 tis.',
    time: 'včera',
  },
  {
    id: 'p5',
    title: 'Když se pes poprvé podívá do zrcadla (a nezvládne to)',
    category: 'Videa',
    image: 'dog looking at mirror reflection',
    views: '211 tis.',
    comments: 356,
    reactions: '11 tis.',
    time: 'včera',
    isVideo: true,
  },
  {
    id: 'p6',
    title: 'Kvíz: Kolik z těchto 20 českých měst poznáš z ptačí perspektivy?',
    category: 'Kvízy',
    image: 'aerial view czech town red roofs',
    views: '64 tis.',
    comments: 129,
    reactions: '3,1 tis.',
    time: 'před 2 dny',
  },
  {
    id: 'p7',
    title: 'Nejlepší cedule, které jste kdy viděli na českých silnicích',
    category: 'Obrázky',
    image: 'funny road sign countryside',
    views: '77 tis.',
    comments: 165,
    reactions: '4,5 tis.',
    time: 'před 2 dny',
  },
  {
    id: 'p8',
    title: 'Tenhle vtip o programátorech chápe jen každý desátý',
    category: 'Vtipy',
    image: 'programmer at desk late night coding',
    views: '38 tis.',
    comments: 88,
    reactions: '2,2 tis.',
    time: 'před 3 dny',
  },
  {
    id: 'p9',
    title: 'Deset věcí, které jste roky používali úplně špatně',
    category: 'Zajímavosti',
    image: 'everyday objects flat lay kitchen tools',
    views: '92 tis.',
    comments: 240,
    reactions: '5,6 tis.',
    time: 'před 3 dny',
  },
]

export const games = [
  {
    id: 'g1',
    title: 'Pixel Runner',
    plays: '1,2 mil.',
    image: 'pixel art endless runner game',
    tag: 'Arkáda',
  },
  {
    id: 'g2',
    title: 'Slovní Mistr',
    plays: '840 tis.',
    image: 'word puzzle letter tiles game',
    tag: 'Hádanka',
  },
  {
    id: 'g3',
    title: 'Bubliny 3000',
    plays: '612 tis.',
    image: 'colorful bubble shooter game',
    tag: 'Logická',
  },
  {
    id: 'g4',
    title: 'Kulečník Pro',
    plays: '505 tis.',
    image: 'billiards pool table green felt',
    tag: 'Sport',
  },
]

export type Article = {
  slug: string
  post: Post
  dek: string
  intro: string
  outro: string
  author: { name: string; role: string; initials: string }
  published: string
  readTime: string
  items: { quote: string; note: string }[]
  tags: string[]
}

export const article: Article = {
  slug: 'hlasky-z-ceske-hospody',
  post: posts[0],
  dek: 'Sbírka lidové mluvy, na kterou by byl Hrabal pyšný. Patnáct větiček, které v hospodě zazní tak často, že by si zasloužily vlastní pamětní desku nad výčepem.',
  intro:
    'Česká hospoda je poslední místo, kde se ještě mluví bez filtru. Nikdo tam nic nepředstírá, nikdo se nesnaží vypadat lépe, než je — a přesně proto tam vzniká jazyk, který se v žádné učebnici nenajde. Poslouchali jsme, zapisovali a vybrali patnáct hlášek, které slyšel každý, kdo si někdy sedl k pípě.',
  outro:
    'A to nejlepší? Za pět let to bude úplně stejné. Hospoda se možná vymaluje, pivo zdraží, ale tyhle věty přežijí všechno. Máte doma vlastní klasiku, která nám tu chybí? Napište ji do komentářů, nejlepší přidáme do druhého dílu.',
  author: {
    name: 'Tomáš Kubát',
    role: 'Redaktor rubriky Vtipy',
    initials: 'TK',
  },
  published: '9. srpna 2026',
  readTime: '4 min čtení',
  items: [
    {
      quote: 'Já si dám jenom jedno a jdu.',
      note: 'Statisticky nejméně pravdivá věta české kotliny. Průměrná realita: čtyři a půl piva a debata o stavu silnic.',
    },
    {
      quote: 'Tohle platím já, nehádej se.',
      note: 'Následuje třicetisekundové přetahování o účet, ve kterém oba předstírají, že mají v peněžence víc než dvě stovky.',
    },
    {
      quote: 'Za mě to bylo lepší.',
      note: 'Funguje na cokoliv: pivo, hokej, hudbu, počasí i tvar rohlíků. Univerzální nástroj, který nelze vyvrátit.',
    },
    {
      quote: 'Ještě jedno a pak už fakt musím domů.',
      note: 'Pokročilá verze hlášky číslo jedna. Slovo „fakt" tady plní funkci uklidnění, ne informace.',
    },
    {
      quote: 'Ten jejich Radegast není, co býval.',
      note: 'Vyslovuje se se zavřenýma očima a po prvním loku. Pravdivostní hodnota se nikdy neověřuje.',
    },
    {
      quote: 'Kdybych to já dělal, tak by to fungovalo.',
      note: 'Platí pro vládu, národní tým i zapadlé dveře na záchodě. Vždy bez konkrétního plánu.',
    },
    {
      quote: 'Pepo, dej mi to na účet, zítra to vyrovnám.',
      note: 'Nejstarší funkční platební systém v Česku. Běží na důvěře, papírku pod kasou a dobré vůli výčepního.',
    },
    {
      quote: 'To si musíš dát, to je z tanku.',
      note: 'Argument, proti kterému neexistuje obrana. Ani u lidí, kteří pivo nepijí.',
    },
    {
      quote: 'Já do politiky nechci, ale...',
      note: 'Za tímhle „ale" následuje čtyřicet minut politiky. Pokaždé.',
    },
    {
      quote: 'Voni si tam nahoře dělají, co chtějí.',
      note: 'Neurčitá množina „oni" zahrnuje politiky, banky, energetiky a někdy i sousedy z paneláku.',
    },
    {
      quote: 'To si dáme na stojáka, ať to netrvá.',
      note: 'Trvá to hodinu a půl. Nikdo si nesedne, protože by to bylo přiznání.',
    },
    {
      quote: 'Já rikám, kluci, to nemůže vyjít.',
      note: 'Věta pronesená před, během i po zápase. Vždycky někdo, kdo to říkal první.',
    },
    {
      quote: 'Zavolej ženě, že máme poradu.',
      note: 'Slovo „porada" tady prošlo tak zásadním posunem významu, že už mu rozumí i manželky.',
    },
    {
      quote: 'Naposledy, ale doopravdy naposledy.',
      note: 'Superlativ, který v hospodě neznamená konec, ale spíš předehru k dalšímu kolu.',
    },
    {
      quote: 'Tak zítra ve stejnou dobu?',
      note: 'Nejkrásnější věta z celého seznamu. Není to otázka, je to jistota.',
    },
  ],
  tags: ['Česká hospoda', 'Hlášky', 'Lidová mluva', 'Pivo', 'Nostalgie'],
}

export const comments = [
  {
    id: 'c1',
    author: 'Jarda_1974',
    initials: 'J',
    time: 'před 2 hodinami',
    likes: 214,
    text: 'U nás v Krčmě říká výčepní na každé pivo „tohle je poslední, zavíráme" a pak tam sedíme do dvou. Tohle mi v seznamu chybí.',
  },
  {
    id: 'c2',
    author: 'Petra Novotná',
    initials: 'P',
    time: 'před 3 hodinami',
    likes: 168,
    text: 'Číslo 13 mě dostalo. Můj manžel má „poradu" každý čtvrtek už jedenáct let. Firmu přitom nikdy neměl.',
  },
  {
    id: 'c3',
    author: 'HonzaZBrna',
    initials: 'H',
    time: 'před 5 hodinami',
    likes: 97,
    text: 'Chybí tam klasika: „Dneska nepiju, jsem autem." A pak si dá dvě nealko a stejně odchází pěšky.',
  },
  {
    id: 'c4',
    author: 'Ludmila K.',
    initials: 'L',
    time: 'před 6 hodinami',
    likes: 63,
    text: 'Můj dědeček říkal „pivo se nepije, pivo se ctí". Nejlepší hláška, jakou jsem kdy v hospodě slyšela.',
  },
]

export type CategoryEntry = {
  slug: string
  name: Category
  tagline: string
  description: string
  stats: { label: string; value: string }[]
  topics: string[]
}

export const categoryPages: CategoryEntry[] = [
  {
    slug: 'kvizy',
    name: 'Kvízy',
    tagline: 'Otestuj, co v tobě je',
    description:
      'Filmy, zeměpis, devadesátky i obecné vědomosti. Každý kvíz má okamžité vyhodnocení a srovnání s ostatními — bez registrace, bez čekání.',
    stats: [
      { label: 'Kvízů v katalogu', value: '218' },
      { label: 'Odehraných partií', value: '3,4 mil.' },
      { label: 'Průměrná úspěšnost', value: '61 %' },
      { label: 'Nových týdně', value: '12' },
    ],
    topics: [
      'Nejnovější',
      'Filmy a serialy',
      'Zeměpis',
      'Devadesátky',
      'Hudba',
      'Sport',
      'Pro chytráky',
    ],
  },
  {
    slug: 'obrazky',
    name: 'Obrázky',
    tagline: 'Jedna fotka vydá za tisíc slov',
    description:
      'Galerie, které se prohlížejí samy. Vtipné momenty, optické iluze a fotky, u kterých budeš dvakrát kontrolovat, jestli jsou pravé.',
    stats: [
      { label: 'Galerií', value: '1 340' },
      { label: 'Zhlédnutí měsíčně', value: '8,1 mil.' },
      { label: 'Nových denně', value: '24' },
      { label: 'Průměrně fotek', value: '31' },
    ],
    topics: ['Nejnovější', 'Zvířata', 'Iluze', 'Fail momenty', 'Retro', 'Cedule'],
  },
  {
    slug: 'videa',
    name: 'Videa',
    tagline: 'Krátká videa, dlouhé smíchy',
    description:
      'Sestřihy do dvou minut, které se vyplatí pustit i bez zvuku. Vybíráme jen to, co dá smysl hned od první sekundy.',
    stats: [
      { label: 'Videí', value: '2 105' },
      { label: 'Přehrání měsíčně', value: '12 mil.' },
      { label: 'Průměrná délka', value: '1:24' },
      { label: 'Nových denně', value: '18' },
    ],
    topics: ['Nejnovější', 'Zvířata', 'Nehody', 'Sport', 'Talenty', 'Reklamy'],
  },
  {
    slug: 'vtipy',
    name: 'Vtipy',
    tagline: 'Humor, který v Česku funguje',
    description:
      'Hlášky, historky a vtipy, které se předávají v hospodách i na rodinných obědech. Bez nucené originality.',
    stats: [
      { label: 'Vtipů', value: '4 890' },
      { label: 'Sdílení měsíčně', value: '640 tis.' },
      { label: 'Nových denně', value: '31' },
      { label: 'Nejlepší hodnocení', value: '4,7/5' },
    ],
    topics: ['Nejnovější', 'Hospodské', 'Pracovní', 'Manželské', 'Suchary', 'IT'],
  },
  {
    slug: 'hry',
    name: 'Hry',
    tagline: 'Zahraj si hned v prohlížeči',
    description:
      'Žádné instalace, žádné účty. Klikneš a hraješ — arkády, hádanky a logické hry na pět minut i na celý večer.',
    stats: [
      { label: 'Her', value: '96' },
      { label: 'Odehraných partií', value: '5,2 mil.' },
      { label: 'Průměrná délka', value: '7 min' },
      { label: 'Nových měsíčně', value: '4' },
    ],
    topics: ['Nejnovější', 'Arkády', 'Hádanky', 'Logické', 'Sport', 'Pro dva'],
  },
  {
    slug: 'zajimavosti',
    name: 'Zajímavosti',
    tagline: 'Fakta, která si budeš pamatovat',
    description:
      'Věci, o kterých se nedozvíš ve škole, ale budeš je vyprávět celý týden. Vždy s ověřeným zdrojem.',
    stats: [
      { label: 'Článků', value: '1 762' },
      { label: 'Zhlédnutí měsíčně', value: '4,6 mil.' },
      { label: 'Průměrné čtení', value: '4 min' },
      { label: 'Nových denně', value: '9' },
    ],
    topics: ['Nejnovější', 'Věda', 'Historie', 'Příroda', 'Vesmír', 'Technika'],
  },
]

export function categoryHref(name: Category) {
  const entry = categoryPages.find((c) => c.name === name)
  return entry ? `/kategorie/${entry.slug}` : '/'
}

export type Quiz = {
  id: string
  title: string
  image: string
  questions: number
  difficulty: 'Lehká' | 'Střední' | 'Těžká'
  successRate: number
  plays: string
  topic: string
  time: string
  badge?: string
}

export const quizzes: Quiz[] = [
  {
    id: 'q1',
    title: 'Poznáš český film jen podle jedné hlášky?',
    image: 'retro czech cinema film strip',
    questions: 15,
    difficulty: 'Střední',
    successRate: 58,
    plays: '71 tis.',
    topic: 'Filmy a serialy',
    time: 'před 6 hodinami',
    badge: 'Kvíz týdne',
  },
  {
    id: 'q2',
    title: 'Kolik z těchto 20 českých měst poznáš z ptačí perspektivy?',
    image: 'aerial view czech town red roofs',
    questions: 20,
    difficulty: 'Těžká',
    successRate: 34,
    plays: '64 tis.',
    topic: 'Zeměpis',
    time: 'před 2 dny',
  },
  {
    id: 'q3',
    title: 'Devadesátky test: pamatuješ si tyhle reklamy?',
    image: 'nineties television retro living room',
    questions: 12,
    difficulty: 'Lehká',
    successRate: 74,
    plays: '128 tis.',
    topic: 'Devadesátky',
    time: 'včera',
  },
  {
    id: 'q4',
    title: 'Vlajky států, které si pletou úplně všichni',
    image: 'world flags collection colorful',
    questions: 18,
    difficulty: 'Těžká',
    successRate: 29,
    plays: '52 tis.',
    topic: 'Zeměpis',
    time: 'před 3 dny',
  },
  {
    id: 'q5',
    title: 'Uhádneš písničku podle prvních tří slov?',
    image: 'vinyl records music collection',
    questions: 15,
    difficulty: 'Střední',
    successRate: 62,
    plays: '96 tis.',
    topic: 'Hudba',
    time: 'před 3 dny',
  },
  {
    id: 'q6',
    title: 'Test pravopisu, u kterého propadá i polovina učitelů',
    image: 'czech grammar book notebook pen',
    questions: 25,
    difficulty: 'Těžká',
    successRate: 41,
    plays: '204 tis.',
    topic: 'Pro chytráky',
    time: 'před 4 dny',
  },
  {
    id: 'q7',
    title: 'Poznáš hokejistu podle staré fotky?',
    image: 'vintage ice hockey player photo',
    questions: 14,
    difficulty: 'Střední',
    successRate: 55,
    plays: '43 tis.',
    topic: 'Sport',
    time: 'před 5 dny',
  },
  {
    id: 'q8',
    title: 'Seriálové finále: víš, jak skončily tyhle série?',
    image: 'television series watching couch night',
    questions: 16,
    difficulty: 'Lehká',
    successRate: 69,
    plays: '87 tis.',
    topic: 'Filmy a serialy',
    time: 'před 6 dny',
  },
  {
    id: 'q9',
    title: 'Hlavní města, na kterých si vyláme zuby každý',
    image: 'world map with pins capitals',
    questions: 22,
    difficulty: 'Těžká',
    successRate: 31,
    plays: '61 tis.',
    topic: 'Zeměpis',
    time: 'před týdnem',
  },
]

export const quizLeaders = [
  { rank: 1, name: 'MartinaP', score: '19 850', quizzes: 214 },
  { rank: 2, name: 'kvizmastr_cz', score: '18 402', quizzes: 198 },
  { rank: 3, name: 'Jirka1987', score: '17 960', quizzes: 187 },
  { rank: 4, name: 'Lucie.K', score: '16 315', quizzes: 173 },
  { rank: 5, name: 'PepaZDepa', score: '15 780', quizzes: 165 },
]

export const trending = [
  'Poznáš zvíře podle ocasu?',
  'Nejhorší reklamy 90. let',
  'Fotky, které nedávají smysl',
  'Kvíz o českých hradech',
  'Když AI kreslí jídlo',
]
