import fs from 'fs/promises';
import path from 'path';
import CategoryContent from '@/components/CategoryContent';
import NavigationSection from '@/components/NavigationSection';
import styles from './page.module.css';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
    return [
        { category: "politics" },
        { category: "business" },
        { category: "technology" },
        { category: "sports" },
        { category: "science" },
        { category: "health" },
    ];
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

    if (!jsonData) return notFound();

    return (
        <>
            <NavigationSection />
            <main className={styles.content}>
                <div className={`container-fluid ${styles.noGutter}`}>
                    <CategoryContent activeMain={category} data={jsonData} />
                </div>
            </main>
        </>
    );
}

