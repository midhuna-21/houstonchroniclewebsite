import Script from "next/script";
import styles from './page.module.css';
import SecondHeader from '@/components/SecondHeader';
import WandaVazquez from '@/components/WandaVazquez';

export async function generateMetadata() {
    return {
        title: 'Wanda Vázquez Cleared as Federal Case Collapses',
        description: 'All corruption charges against former Governor Wanda Vázquez were dropped, ending a long investigation with her record cleared.',
        keywords: 'Wanda Vázquez Garced charges dropped, Puerto Rico governor, DOJ, corruption case, campaign finance violation',
        authors: [{ name: 'Stephen M. Knowles' }],
        alternates: { canonical: "https://www.tangentweekly.com/wanda-vazquez-garced/wanda-vazquez-cleared-corruption-charges/" },
        openGraph: {
            title: 'Wanda Vázquez Cleared as Federal Case Collapses',
            description: 'All corruption charges against former Governor Wanda Vázquez were dropped, ending a long investigation with her record cleared.',
            url: "https://www.tangentweekly.com/wanda-vazquez-garced/wanda-vazquez-cleared-corruption-charges/",
            siteName: 'Tangent Weekly',
            images: [
                {
                    url: "https://www.tangentweekly.com/images/wanda-vazquez-cleared.webp",
                    width: 1200,
                    height: 630,
                    alt: "Wanda Vázquez Cleared as Federal Case Collapses",
                },
            ],
            locale: 'en_US',
            type: 'article',
            publishedTime: '2025-10-04T05:30:00.000Z',
        },
        twitter: {
            card: 'summary_large_image',
            title: "WWanda Vázquez Cleared as Federal Case Collapses",
            description: "All corruption charges against former Governor Wanda Vázquez were dropped, ending a long investigation with her record cleared.",
            images: "https://www.tangentweekly.com/images/wanda-vazquez-cleared.webp",
            site: '@TangentWeekly',
            creator: '@Stephenmknowles',
        },
        other: {
            'script:ld+json': JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'NewsArticle',
                headline: "Wanda Vázquez Cleared as Federal Case Collapses",
                datePublished: '2025-10-04',
                author: {
                    '@type': 'Person',
                    name: 'Stephen M. Knowles',
                },
                publisher: {
                    '@type': 'Organization',
                    name: 'Tangent Weekly',
                    logo: {
                        '@type': 'ImageObject',
                        url: `https://www.tangentweekly.com/tangent-logo.webp`,
                    },
                },
                image: "https://www.tangentweekly.com/images/wanda-vazquez-cleared.webp",
                alternates: { canonical: "https://www.tangentweekly.com/wanda-vazquez-garced/wanda-vazquez-cleared-corruption-charges/" },
                url: "https://www.tangentweekly.com/wanda-vazquez-garced/wanda-vazquez-cleared-corruption-charges/",
                articleBody: "All corruption charges against former Governor Wanda Vázquez were dropped, ending a long investigation with her record cleared."?.slice(0, 160),
                keywords: 'Wanda Vázquez Garced charges dropped, Puerto Rico governor, DOJ, corruption case, campaign finance violation',
            }),
        },
    };
}


export default async function WandaPage() {


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
                                    "@id": "https://www.tangentweekly.com/wanda-vazquez-garced/wanda-vazquez-cleared-corruption-charges/"
                                },
                                "headline": "Wanda Vázquez Cleared as Federal Case Collapses",
                                "description": "All corruption charges against former Governor Wanda Vázquez were dropped, ending a long investigation with her record cleared.",
                                "image": {
                                    "@type": "ImageObject",
                                    "url": "https://www.tangentweekly.com/images/wanda-vazquez-cleared.webp",
                                    "width": 601,
                                    "height": 400
                                },
                                "datePublished": "2025-10-04T11:00:00-05:00",
                                "dateModified": "2025-10-04T11:00:00-05:00",
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
                                    "description": "All corruption charges against former Governor Wanda Vázquez were dropped, ending a long investigation with her record cleared.",
                                    "sameAs": [
                                        "https://www.wikidata.org/wiki/Q56600071",
                                        "https://en.wikipedia.org/wiki/Wanda_V%C3%A1zquez_Garced"
                                    ]
                                },
                                "articleBody": "Wanda Vázquez Cleared as Federal Case Collapses"
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
                                        "item": "https://www.tangentweekly.com/wanda-vazquez-garced/"
                                    },
                                    {
                                        "@type": "ListItem",
                                        "position": 3,
                                        "name": "Wanda Vázquez Cleared as Federal Case Collapses",
                                        "item": "https://www.tangentweekly.com/wanda-vazquez-garced/wanda-vazquez-cleared-corruption-charges/"
                                    }
                                ]
                            }
                        ])
                    }}
                />


                <WandaVazquez />
                <div style={{ marginBottom: '3rem' }} />

            </main>
        </>
    );
}