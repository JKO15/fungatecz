import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { categoryPages, quizzes } from '@/lib/content'
import { CategoryAside } from '@/components/category-aside'
import { CategoryHero } from '@/components/category-hero'
import { CategoryPosts } from '@/components/category-posts'
import { QuizCatalog } from '@/components/quiz-catalog'
import { QuizSpotlight } from '@/components/quiz-spotlight'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'

export function generateStaticParams() {
  return categoryPages.map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const category = categoryPages.find((c) => c.slug === slug)
  if (!category) return { title: 'Kategorie nenalezena — FunGate' }

  return {
    title: `${category.name} — ${category.tagline} | FunGate`,
    description: category.description,
  }
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const category = categoryPages.find((c) => c.slug === slug)
  if (!category) notFound()

  const isQuiz = category.name === 'Kvízy'

  return (
    <>
      <SiteHeader />
      <main>
        <CategoryHero category={category} />

        {isQuiz && <QuizSpotlight quiz={quizzes[0]} />}

        <section className="mx-auto grid max-w-[1400px] gap-10 px-5 py-10 lg:grid-cols-[minmax(0,1fr)_300px] lg:gap-14 lg:px-10 lg:py-14">
          {isQuiz ? (
            <QuizCatalog topics={category.topics} />
          ) : (
            <CategoryPosts category={category.name} topics={category.topics} />
          )}
          <CategoryAside showLeaderboard={isQuiz} />
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
