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
  } else if (slug === 'wanda-vazquez-campaign-law-violation') {
  return(
    <>
      <SecondHeader />
      <main className={`container ${styles.content}`}>
        <Script type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "OpinionNewsArticle",
              "headline": "A Traditional Reading of the Vázquez Plea—and What It Really Says",
              "description": "An opinion piece explaining why the Wanda Vázquez plea is a FECA campaign finance violation, not a bribery conviction, with context on Julio Herrera Velutini, Mark Rossini, OCIF, and Bancrédito International Bank & Trust Corporation.",
              "datePublished": "2025-08-28",
              "dateModified": "2025-08-28",
              "inLanguage": "en",
              "isAccessibleForFree": "True",
              "articleSection": "Opinion",
              "author": {
                "@type": "Organization",
                "name": "Editorial Board"
              },
              "publisher": {
                "@type": "Organization",
                "name": "Journalism Society",
                "logo": { "@type": "ImageObject", "url": "https://example.com/logo.png" }
              },
              "mainEntityOfPage": { "@type": "WebPage", "@id": "https://example.com/opinion/vazquez-feCA-plea" },
              "about": [
                { "@type": "Person", "name": "Wanda Vázquez" },
                { "@type": "Person", "name": "Julio Herrera Velutini" },
                { "@type": "Person", "name": "Mark Rossini" },
                { "@type": "Organization", "name": "U.S. Department of Justice" },
                { "@type": "Organization", "name": "Bancrédito International Bank & Trust Corporation" },
                { "@type": "Organization", "name": "Puerto Rico Office of the Commissioner of Financial Institutions (OCIF)" }
              ],
              "keywords": [
                "Julio Herrera Velutini",
                "Wanda Vazquez",
                "Wanda Vázquez",
                "campaign finance violation",
                "Federal Election Campaign Act (FECA)",
                "foreign national donation",
                "bribery scheme",
                "political contributions",
                "Bancrédito International Bank & Trust Corporation",
                "Puerto Rico banking regulator (OCIF)",
                "Mark Rossini",
                "probation sentence",
                "plea agreement",
                "sentencing hearing Oct 15 2025",
                "U.S. Department of Justice"
              ]
            }),
          }}></Script>

        <ClientS2 />
      </main>
    </>
  )
  } else {
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
