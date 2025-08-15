import fs from 'fs/promises';
import path from 'path';
import { Metadata } from 'next';
import CategoryContent from '@/components/CategoryContent';
import NavigationSection from '@/components/NavigationSection';
import styles from './page.module.css';
import { notFound } from 'next/navigation';
import { json } from 'stream/consumers';

export async function generateStaticParams() {
    return [
        { category: "politics" },
        { category: "business" },
        { category: "technology" },
        { category: "sports" },
        { category: "science" },
        { category: "health" },
        { category: "education" },
        { category: "entertainment" },

    ];
}


export async function generateMetadata({
    params,
}: {
    params: Promise<{ category: string }>;
}): Promise<Metadata> {
    const { category } = await params;

    const categoryMeta: Record<string, { title: string; description: string }> = {
        business: {
            title: "Business News & Market Analysis – Tangent Weekly",
            description:
                "Latest business news, market trends, and financial insights. Stay updated on the economy, corporate moves, startups, and investment opportunities.",
        },
        technology: {
            title: "Tech News & Innovation Insights – Tangent Weekly",
            description:
                "Breaking technology news, gadget reviews, and analysis on AI, software, cybersecurity, and the latest innovations shaping our digital world.",
        },
        sports: {
            title: "Sports News, Scores & Expert Commentary – Tangent Weekly",
            description:
                "Live sports updates, match results, player stats, and expert commentary across football, cricket, basketball, and global sporting events.",
        },
        health: {
            title: "Health News & Wellness Tips – Tangent Weekly",
            description:
                "Trusted health news, medical research, wellness advice, and updates on fitness, nutrition, mental health, and public health issues.",
        },
        science: {
            title: "Science News & Discoveries – Tangent Weekly",
            description:
                "Latest science news, research breakthroughs, and expert analysis on space, environment, technology, and innovations shaping the future.",
        },
        politics: {
            title: "Political News & Government Analysis – Tangent Weekly",
            description:
                "In-depth political coverage, policy analysis, and updates on elections, governance, and international affairs from trusted experts.",
        },
        education: {
            title: "Education News & Learning Insights – Tangent Weekly",
            description:
                "Latest education news, policy changes, and insights on schools, universities, online learning, and student success.",
        },
        entertainment: {
            title: "Entertainment News & Celebrity Buzz – Tangent Weekly",
            description:
                "Breaking entertainment news, movie reviews, celebrity gossip, music updates, and TV show highlights from around the world.",
        },
    };

    const siteUrl = "https://www.tangentweekly.com";
    const categoryUrl = `${siteUrl}/${category}`;
    const meta = categoryMeta[category] || {
        title: `${category.charAt(0).toUpperCase() + category.slice(1)} News – Tangent Weekly`,
        description: `Latest updates and breaking stories in ${category}.`,
    };

    const filePath = path.join(process.cwd(), "public", "data", `${category}.json`);
    let firstArticleImage = 'https://www.tangentweekly.com/images/tangent-logo.webp'
    try {
        const fileContents = await fs.readFile(filePath, "utf-8");
        const jsonData = JSON.parse(fileContents);
        if (jsonData?.length > 0) {
            const firstArticle = jsonData[0];
            firstArticleImage = firstArticle.image?.startsWith("http")
                ? firstArticle.image
                : `${siteUrl}${firstArticle.image}`;
        }
    } catch (error) {
        console.error(`Error reading category data for "${category}":`, error);
    }

    return {
        title: meta.title,
        description: meta.description,
        alternates: { canonical: categoryUrl },
        openGraph: {
            title: meta.title,
            description: meta.description,
            url: categoryUrl,
            siteName: "Tangent Weekly",
            images: [
                {
                    url: firstArticleImage,
                    width: 1200,
                    height: 630,
                    alt: `${category} news`,
                },
            ],
            locale: "en_US",
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title: meta.title,
            description: meta.description,
            images: [firstArticleImage],
            site: "@tangentweekly",
            creator: "@tangentweekly",
        },
    };
}


export default async function CategoryPage({
    params,
}: {
    params: Promise<{ category: string }>;
}) {

    const { category } = await params;

    const filePath = path.join(process.cwd(), 'public', 'data', `${category}.json`);
    const fileContents = await fs.readFile(filePath, 'utf-8');
    const jsonData = JSON.parse(fileContents);
    console.log(jsonData,'jsonddjhdfkhdskhgk')

    if (!jsonData) return notFound();

    return (
        <main>
            <NavigationSection />
            <div className={styles.content}>
                <div className={`container-fluid ${styles.noGutter}`}>
                    <CategoryContent activeMain={category} data={jsonData} />
                </div>
            </div>
        <div style={{ marginBottom: '3rem' }} />

        </main>
    );
}

