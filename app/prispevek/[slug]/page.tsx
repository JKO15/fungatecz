import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { article } from '@/lib/content'
import { PostAside } from '@/components/post-aside'
import { PostBody } from '@/components/post-body'
import { PostComments } from '@/components/post-comments'
import { PostHeader } from '@/components/post-header'
import { PostReactions } from '@/components/post-reactions'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'

export const metadata: Metadata = {
  title: `${article.post.title} — FunGate`,
  description: article.dek,
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  if (slug !== article.slug) notFound()

  return (
    <>
      <SiteHeader />
      <main>
        <article>
          <PostHeader article={article} />

          <div className="mx-auto grid max-w-[1400px] gap-10 px-5 pb-14 pt-10 lg:grid-cols-[minmax(0,1fr)_300px] lg:gap-14 lg:px-10">
            <div className="min-w-0">
              <PostBody article={article} />
              <PostReactions reactions={article.post.reactions} />
              <PostComments />
            </div>
            <PostAside currentId={article.post.id} />
          </div>
        </article>
      </main>
      <SiteFooter />
    </>
  )
}
