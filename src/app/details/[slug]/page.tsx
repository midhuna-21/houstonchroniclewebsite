import { getArticleBySlug } from '@/lib/detailFunction';
import ArticleHeader from '@/components/ArticleHeader';
import DetailFirstSection from '@/components/DetailFirstSection';
import { notFound } from 'next/navigation';
import ArticleBodyRenderer from '@/components/ArticleBodyRender';
import EditorsPicksSection from '@/components/EditorsPick';
import LetsPlaySection from '@/components/LetsPlay';
import MostPopularList from '@/components/MostPopularlist';
import { popularArticles, trendingData } from '@/data/homeData';
import TrendingCard from '@/components/TrendingCard';
import EditorialBoard from '@/components/EditorialBoard';
import LatestNewsCard from '@/components/LastestNewsCard';
import AuthorInfo from '@/components/AuthorInfo';

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
    <div className="mt-5 container-fluid ">
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
      <div className="row mt-4 ">
        <div className="col-md-9">
          <ArticleBodyRenderer body={article.body} />
           <AuthorInfo
  date="July 2, 2025"
  name="John Wayne Ferguson"
  role="Reporter"
  avatarUrl="/images/aman.webp" 
  bio="John Wayne Ferguson is a general assignment and breaking news reporter for the Houston Chronicle. A graduate of the University of New Hampshire, John joined the Chronicle in 2022. He was previously a reporter at The Galveston County Daily News. Follow him on Twitter at @johnwferguson."
/>
        </div>

        <div className="col-md-3">
          <MostPopularList articles={popularArticles} />
            <LatestNewsCard />

        </div>
      </div>
     

      <EditorsPicksSection />
      <LetsPlaySection />
    </div>
  );
}
