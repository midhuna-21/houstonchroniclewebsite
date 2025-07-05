import { getArticleBySlug } from '@/lib/detailFunction';
import ArticleHeader from '@/components/ArticleHeader';
import DetailFirstSection from '@/components/DetailFirstSection';
import { notFound } from 'next/navigation';
import ArticleSecondSection from '@/components/ArticleSecondSection';
import SingleParagraph from '@/components/SingleParagraph';
import ArticleBodyRenderer from '@/components/ArticleBodyRender';
import EditorsPicksSection from '@/components/EditorsPick';
import ArticleWrapper from '@/components/ArticleWrapper';
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
    <div>
      <ArticleHeader
        category={article.category}
        title={article.title}
        author={article.author}
        role={article.role}
        date={article.date}
      />

      {/* ✅ Detail Image/Audio Section */}
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
