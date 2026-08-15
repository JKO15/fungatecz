import { ContentFeed } from '@/components/content-feed'
import { GamesSection } from '@/components/games-section'
import { Hero } from '@/components/hero'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <ContentFeed />
        <GamesSection />
      </main>
      <SiteFooter />
    </>
  )
}
