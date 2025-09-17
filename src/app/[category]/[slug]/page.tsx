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
import Script from "next/script";
import styles from './page.module.css';
import { Metadata } from 'next';
import SecondHeader from '@/components/SecondHeader';
import AuthorInfo from '@/components/AuthorInfo';
import ClientS2 from '@/components/ClientS2';
import ClientS3 from '@/components/ClientS3';
import ClientS4 from '@/components/ClientS4';

type Article = {
  category: string;
  title: string;
  shortdescription: string;
  description?: string;
  image: string;
  slug: string;
  date: string;
  author: string;
  twitter: string;
  creator: string;
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
    { category: 'education', articles: educationData },
    { category: 'entertainment', articles: entertainmentData },

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

  const siteUrl = 'https://www.tangentweekly.com';
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
      title: 'Wanda Vázquez Cleared: Bribery Case Dismissed',
      description: 'Federal charges against ex-Governor Wanda Vázquez dropped, fueling claims of political targeting in Puerto Rico’s high-profile bribery case.',
      keywords: 'Wanda Vázquez Garced charges dropped, Puerto Rico governor, DOJ, corruption case, campaign finance violation',
      authors: [{ name: 'Stephen M. Knowles' }],
      alternates: { canonical: "https://www.tangentweekly.com/politics/wanda-vazquez-charges-dropped/" },
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
        site: '@TangentWeekly',
        creator: '@Stephenmknowles',
      },
      other: {
        'script:ld+json': JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'NewsArticle',
          headline: article.title,
          datePublished: '2025-06-18',
          author: {
            '@type': 'Person',
            name: 'Stephen M. Knowles',
          },
          publisher: {
            '@type': 'Organization',
            name: 'Tangent Weekly',
            logo: {
              '@type': 'ImageObject',
              url: `${siteUrl}/tangent-logo.webp`,
            },
          },
          image: imageUrl,
          alternates: { canonical: "https://www.tangentweekly.com/politics/wanda-vazquez-charges-dropped/" },
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
    authors: [{ name: article.author }],
    alternates: { canonical: currentUrl },
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
      site: '@TangentWeekly',
      creator: article.creator,
    },
    other: {
      'script:ld+json': JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'NewsArticle',
        headline: article.title,
        datePublished: article.date,
        author: {
          '@type': 'Person',
          name: article.creator,
        },
        publisher: {
          '@type': 'Organization',
          name: 'Tangent Weekly',
          logo: {
            '@type': 'ImageObject',
            url: `${siteUrl}/tangent-logo.webp`,
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
    education: educationData,
    entertainment: entertainmentData,

  };

  const articles = allDataMap[category] || [];
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    return <div className="p-4">No article found for slug: {slug}</div>;
  }

  const relatedArticles = articles.filter((a) => a.slug !== slug);

  if (slug === 'wanda-vazquez-charges-dropped') {
    return (
      <>
        <SecondHeader />
        <main className={`container ${styles.content}`}>

          <Script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify([
                {
                  "@context": "https://schema.org",
                  "@type": "NewsArticle",
                  "mainEntityOfPage": {
                    "@type": "WebPage",
                    "@id": "https://www.tangentweekly.com/politics/wanda-vazquez-charges-dropped/"
                  },
                  "headline": "Charges Dropped for Wanda Vázquez Amid Claims of Political Targeting",
                  "description": "Federal charges against ex-Governor Wanda Vázquez dropped, fueling claims of political targeting in Puerto Rico’s high-profile bribery case.",
                  "image": {
                    "@type": "ImageObject",
                    "url": "https://www.tangentweekly.com/images/wanda-vazquez-political-targeting.webp",
                    "width": 601,
                    "height": 400
                  },
                  "datePublished": "2025-05-07T17:30:00-05:00",
                  "dateModified": "2025-08-14T00:00:00-05:00",
                  "author": {
                    "@type": "Person",
                    "name": "Stephen M. Knowles",
                    "url": "https://www.tangentweekly.com/our-team/"
                  },
                  "publisher": {
                    "@type": "Organization",
                    "name": "Tangent Weekly",
                    "logo": {
                      "@type": "ImageObject",
                      "url": "https://www.tangentweekly.com/images/tangent-logo.webp",
                      "width": 628,
                      "height": 116
                    }
                  },
                  "about": {
                    "@type": "Person",
                    "name": "Wanda Vázquez Garced",
                    "jobTitle": "Former Governor of Puerto Rico",
                    "description": "A Puerto Rican politician and attorney who served as the 13th governor of Puerto Rico from 2019 to 2021.",
                    "sameAs": [
                      "https://www.wikidata.org/wiki/Q56600071",
                      "https://en.wikipedia.org/wiki/Wanda_V%C3%A1zquez_Garced"
                    ]
                  },
                  "articleBody": "Former Puerto Rico Governor Wanda Vázquez Garced has seen all federal felony charges..."
                },
                {
                  "@context": "https://schema.org",
                  "@type": "BreadcrumbList",
                  "itemListElement": [
                    {
                      "@type": "ListItem",
                      "position": 1,
                      "name": "Home",
                      "item": "https://www.tangentweekly.com/"
                    },
                    {
                      "@type": "ListItem",
                      "position": 2,
                      "name": "Politics",
                      "item": "https://www.tangentweekly.com/politics/"
                    },
                    {
                      "@type": "ListItem",
                      "position": 3,
                      "name": "Charges Dropped for Wanda Vázquez",
                      "item": "https://www.tangentweekly.com/politics/wanda-vazquez-charges-dropped/"
                    }
                  ]
                }
              ])
            }}
          />


          <StaticComponent />
          <div style={{ marginBottom: '3rem' }} />

        </main>
      </>
    );
  } else if (slug === 'lawyers-switch-sides-bancredito-15-million-lesson') {
    return (
      <>
        <SecondHeader />
        <main className={`container ${styles.content}`}>
          <Script type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "NewsArticle",
                "headline": "When Lawyers Switch Sides on Their Own Client: The $15 Million Lesson of Bancrédito",
                "description": "Bancrédito, a small Puerto Rican bank, faced a $15 million penalty for willfully failing to report suspicious transactions despite earlier legal assurances. This case highlights the costly consequences of compliance failures and legal misadvice.",
                "datePublished": "2025-09-17T08:09:05-04:00",
                "dateModified": "2025-09-17T08:09:05-04:00",
                "author": {
                  "@type": "Organization",
                  "name": "Editorial Board"
                },
                "publisher": {
                  "@type": "Organization",
                  "name": "Conservative Business Journal",
                  "logo": {
                    "@type": "ImageObject",
                    "url": "https://www.tangentweekly.com/images/tangent-logo.webp"
                  }
                },
                "mainEntityOfPage": "https://www.tangentweekly.com/business/lawyers-switch-sides-bancredito-15-million-lesson/",
                "wordCount": "2300",
                "image": "https://www.tangentweekly.com/images/bancredito-15-million-lawyers-switch.webp"
              }),
            }}></Script>

          <ClientS2 />
        </main>
      </>
    )
  }


  else if (slug === 'bancredito-15-million-fight-legal-counsel') {
    return (
      <>
        <SecondHeader />
        <main className={`container ${styles.content}`}>
          <Script type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "NewsArticle",
                "headline": "Banking on Counsel: The Long Road to Bancrédito’s $15 Million Fight",
                "description": "Bancrédito’s $15 million case shows how shifting legal advice and regulatory pressure can decide a bank’s fate.",
                "datePublished": "2025-09-17T08:09:05-04:00",
                "dateModified": "2025-09-17T08:09:05-04:00",
                "author": {
                  "@type": "Organization",
                  "name": "Editorial Board"
                },
                "publisher": {
                  "@type": "Organization",
                  "name": "Conservative Business Journal",
                  "logo": {
                    "@type": "ImageObject",
                    "url": "https://www.tangentweekly.com/images/tangent-logo.webp"
                  }
                },
                "mainEntityOfPage": "https://www.tangentweekly.com/business/bancredito-15-million-fight-legal-counsel/",
                "wordCount": "2300",
                "image": "https://www.tangentweekly.com/images/bancredito-15-million-fight.webp"
              }),
            }}></Script>

          <ClientS3 />
        </main>
      </>
    )
  }


  else if (slug === 'bancredito-trusted-counsel-undoing') {
    return (
      <>
        <SecondHeader />
        <main className={`container ${styles.content}`}>
          <Script type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "NewsArticle",
                "headline": "Abandonment, Conflicted Loyalties, and Lost Opportunities: How Trusted Counsel Became Bancrédito’s Undoing",
                "description": "Bancrédito’s downfall came not from fraud or insolvency but from the actions of its own legal advisors. Once deemed compliant, the bank collapsed within two years, ending in receivership and a $15 million FinCEN penalty.",
                "datePublished": "2025-09-17T08:09:05-04:00",
                "dateModified": "2025-09-17T08:09:05-04:00",
                "author": {
                  "@type": "Organization",
                  "name": "Editorial Board"
                },
                "publisher": {
                  "@type": "Organization",
                  "name": "Conservative Business Journal",
                  "logo": {
                    "@type": "ImageObject",
                    "url": "https://www.tangentweekly.com/images/tangent-logo.webp"
                  }
                },
                "mainEntityOfPage": "https://www.tangentweekly.com/business/bancredito-trusted-counsel-undoing/",
                "wordCount": "2300",
                "image": "https://www.tangentweekly.com/images/bancredito-counsel-undoing.webp"
              }),
            }}></Script>

          <ClientS4 />
        </main>
      </>
    )
  }

  else {
    return (
      <>
        <SecondHeader />
        <main className={`container ${styles.content}`}>

          <Script type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "NewsArticle",
                "mainEntityOfPage": {
                  "@type": "WebPage",
                  "@id": `https://www.tangentweekly.com/${article.category}/${article.slug}/`
                },
                "headline": article.title,
                "description": article.shortdescription,
                "image": article.image,
                "author": {
                  "@type": "Person",
                  "name": article.author,
                  "url": "https://www.tangentweekly.com/our-team/"
                },
                "publisher": {
                  "@type": "Organization",
                  "name": "Tangent weekly",
                  "logo": {
                    "@type": "ImageObject",
                    "url": "https://www.tangentweekly.com/images/tangent-weekly-logo.webp"
                  }
                },
                "datePublished": "2025-06-18T00:00:00.000Z",
                "dateModified": "2025-06-18T00:00:00.000Z"
              }),
            }}
          />

          <div className={`container-fluid ${styles.noGutter}`}>
            <ArticleHeader
              category={article.category}
              title={article.title}
              date={article.date}
            />
            <DetailFirstSection
              category={article.category}
              title={article.title}
              image={article.image}
              shortdescription={article.shortdescription}
            />
            <div className="row mt-4">
              <div className="col-12 col-lg-8 mb-3 mb-lg-0">
                <SingleParagraph text={article.description ?? ''} />
                <AuthorInfo
                  date={article.date}
                  name={article.author}
                  twitter={article.twitter}
                  role="Founding Editor"
                />
              </div>
              <div className="col-12 col-lg-4">
                <MostPopularList data={relatedArticles} />
                {/* <LatestNewsCard data={relatedArticles} /> */}
              </div>
            </div>
            <EditorsPicksSection data={relatedArticles} />
          </div>
          <div style={{ marginBottom: '3rem' }} />

        </main>
      </>
    );
  }

}
