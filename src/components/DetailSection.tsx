import { getArticleBySlug } from '@/lib/detailFunction';
import ArticleHeader from '@/components/ArticleHeader';
import { notFound } from 'next/navigation';

interface PageProps {
  params: { slug: string };
}

export default function DetailPage({ params }: PageProps) {
  const article = getArticleBySlug(params.slug);

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

      <div className="container py-4">
        <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>{article.content}</p>
      </div>
    </div>
  );
}
