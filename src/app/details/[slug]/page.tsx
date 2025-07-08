import { getArticleBySlug } from '@/lib/detailFunction';
import ArticleHeader from '@/components/ArticleHeader';
import DetailFirstSection from '@/components/DetailFirstSection';
import { notFound } from 'next/navigation';
import ArticleBodyRenderer from '@/components/ArticleBodyRender';
import EditorsPicksSection from '@/components/EditorsPick';
import LetsPlaySection from '@/components/LetsPlay';

interface PageProps {
  params: { slug: string };
}


function getSlugSafe(slug: string) {
  try {
    return decodeURIComponent(slug);
  } catch {
    return slug;
  }
}

export default async function DetailPage({ params }: PageProps) {
  const slug = getSlugSafe(params.slug);
  const article = getArticleBySlug(slug);

  if (!article) return notFound();


  return (
    <div className="mt-5 container-fluid">
      <ArticleHeader
        category={article.category}
        title={article.title}
        author={article.author}
        role={article.role}
        date={article.date}
      />

      <DetailFirstSection
        images={article.images}
        captions={article.captions}
        credits={article.credits}
        audioTitle={article.audioTitle}
      />
      <ArticleBodyRenderer body={article.body} />
      <EditorsPicksSection />
      <LetsPlaySection />
    </div>
  );
}
