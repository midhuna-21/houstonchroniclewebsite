import politicsData from '../../../../public/data/politics.json';
import businessData from '../../../../public/data/business.json';
import technologyData from '../../../../public/data/technology.json';
import sportsData from '../../../../public/data/sports.json';
import scienceData from '../../../../public/data/science.json';
import healthData from '../../../../public/data/health.json';
import educationData from '../../../../public/data/education.json';
import entertainmentData from '../../../../public/data/entertainment.json';
import ArticleHeader from '@/components/ArticleHeader';
import DetailFirstSection from '@/components/DetailFirstSection';
import MostPopularList from '@/components/MostPopularlist';
import LatestNewsCard from '@/components/LastestNewsCard';
import SingleParagraph from '@/components/SingleParagraph';
import EditorsPicksSection from '@/components/EditorsPick';
import StaticComponent from '@/components/StaticContent';

import styles from './page.module.css';
import { Metadata } from 'next';

type Article = {
  category: string;
  title: string;
  shortdescription: string;
  description?: string;
  image: string;
  slug: string;
  date: string;
};


interface PageProps {
  params: Promise<{ category: string, slug: string }>;
}


export async function generateStaticParams() {
  const allData = [
    { category: 'politics', articles: politicsData },
    { category: 'business', articles: businessData },
    { category: 'technology', articles: technologyData },
    { category: 'sports', articles: sportsData },
    { category: 'science', articles: scienceData },
    { category: 'health', articles: healthData },
    { category: 'education', articles: healthData },
    { category: 'entertainment', articles: healthData },

  ];

  return allData.flatMap(({ category, articles }) =>
    articles.map((article) => ({
      category,
      slug: article.slug,
    }))
  );
}


export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category, slug } = await params;

  const allDataMap: Record<string, Article[]> = {
    politics: politicsData,
    business: businessData,
    technology: technologyData,
    sports: sportsData,
    science: scienceData,
    health: healthData,
    eduction: educationData,
    entertainment: entertainmentData,
  };

  const articles = allDataMap[category] || [];
  const article = articles.find((a) => a.slug === slug);

  const siteUrl = 'https://www.tangentweekly.com/';
  const currentUrl = `${siteUrl}/${category}/${slug}`;
  const imageUrl = article?.image?.startsWith('http') ? article.image : `${siteUrl}${article?.image}`;

  if (!article) {
    return {
      title: 'Article Not Found',
      description: 'The requested article could not be found.',
    };
  }


  if (slug === 'wanda-vazquez-charges-dropped') {
    return {
      title: 'Charges Dropped for Wanda Vázquez Amid Claims of Political Targeting',
      description: 'Federal charges against former Puerto Rico Governor Wanda Vázquez are dropped. Learn the details of the dismissed bribery case and what this surprising reversal means for claims of political targeting.',
      keywords: 'Wanda Vázquez Garced charges dropped, Puerto Rico governor, DOJ, corruption case, campaign finance violation',
      authors: [{ name: 'Cameron Ellis' }],
      alternates: { canonical: `${siteUrl}/politics/charges-dropped-wanda-vazquez-political-targeting/` },
      openGraph: {
        title: 'Charges Dropped for Wanda Vázquez Amid Claims of Political Targeting',
        description: 'Federal charges against former Puerto Rico Governor Wanda Vázquez are dropped. Learn the details of the dismissed bribery case and what this surprising reversal means for claims of political targeting.',
        url: currentUrl,
        siteName: 'Tangent Weekly',
        images: [
          {
            url: imageUrl,
            width: 1200,
            height: 630,
            alt: article.title,
          },
        ],
        locale: 'en_US',
        type: 'article',
        publishedTime: '2025-06-18T00:00:00.000Z',
      },
      twitter: {
        card: 'summary_large_image',
        title: article.title,
        description: article.shortdescription,
        images: [imageUrl],
        site: '@tangentweekly',
        creator: '@tangentweekly',
      },
      other: {
        'script:ld+json': JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'NewsArticle',
          headline: article.title,
          datePublished: '2025-06-18',
          author: {
            '@type': 'Person',
            name: 'Cameron Ellis',
          },
          publisher: {
            '@type': 'Organization',
            name: 'Tangent Weekly',
            logo: {
              '@type': 'ImageObject',
              url: `${siteUrl}/tangent-weekly-logo.webp`,
            },
          },
          image: imageUrl,
          alternates: { canonical: `${siteUrl}/politics/charges-dropped-wanda-vazquez-political-targeting/` },
          url: currentUrl,
          articleBody: article.description?.slice(0, 160),
          keywords: 'Wanda Vázquez Garced, Puerto Rico, DOJ',
        }),
      },
    };
  }

  return {
    title: article.title,
    description: article.shortdescription,
    keywords: `${article.category}, news, ${article.title}`,
    authors: [{ name: 'Staff Writer' }],
    openGraph: {
      title: article.title,
      description: article.shortdescription,
      url: currentUrl,
      siteName: 'Tangent Weekly',
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
      locale: 'en_US',
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.shortdescription,
      images: [imageUrl],
      site: '@tangentweekly',
      creator: '@tangentweekly',
    },
    other: {
      'script:ld+json': JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'NewsArticle',
        headline: article.title,
        datePublished: article.date,
        author: {
          '@type': 'Person',
          name: 'Staff Writer',
        },
        publisher: {
          '@type': 'Organization',
          name: 'Tangent Weekly',
          logo: {
            '@type': 'ImageObject',
            url: `${siteUrl}/tangent-weekly-logo.webp`,
          },
        },
        image: imageUrl,
        url: currentUrl,
        articleBody: article.description?.slice(0, 160),
        keywords: `${article.category}, news`,
      }),
    },
  };
}

export default async function DetailPage({ params }: PageProps) {
  const { category, slug } = await params;

  const allDataMap: Record<string, Article[]> = {
    politics: politicsData,
    business: businessData,
    technology: technologyData,
    sports: sportsData,
    science: scienceData,
    health: healthData,
  };

  const articles = allDataMap[category] || [];
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    return <div className="p-4">No article found for slug: {slug}</div>;
  }

  if (slug === 'wanda-vazquez-charges-dropped') {
    return (
      <main className={`container ${styles.content}`}>
        <StaticComponent />
      </main>
    );
  }

  return (
    <main className={`container ${styles.content}`}>
      <div className={`container-fluid ${styles.noGutter}`}>
        <ArticleHeader
          category={article.category}
          title={article.title}
          date={article.date}
        />
        <DetailFirstSection
          category={article.category}
          image={article.image}
          shortdescription={article.shortdescription}
        />
        <div className="row mt-4">
          <div className="col-md-8">
            <SingleParagraph text={article.description ?? ''} />
          </div>
          <div className="col-md-4">
            <MostPopularList data={educationData} />
            <LatestNewsCard data={educationData} />
          </div>
        </div>

        <EditorsPicksSection data={educationData} />
      </div>
    </main>
  );
}
