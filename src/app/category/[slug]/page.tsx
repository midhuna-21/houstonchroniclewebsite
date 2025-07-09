import fs from 'fs/promises';
import path from 'path';
import {slugToKeyMap } from '@/data/navData';
import CategoryContent from '@/components/CategoryContent';
import NavigationSection from '@/components/NavigationSection';
import styles from './page.module.css';

export default async function CategoryPage({
  params,
}: {
  params:Promise< { slug: string }>;
}) {
  const { slug } =await params;

  const filePath = path.join(process.cwd(), 'public', 'data', `${slug}.json`);
    const fileContents = await fs.readFile(filePath, 'utf-8');
    const jsonData = JSON.parse(fileContents);

  return (
    <>
             <NavigationSection />
        <main className={styles.content}>
          <div className={`container-fluid ${styles.noGutter}`}>
            <CategoryContent activeMain={slug} data={jsonData} />
          </div>
        </main>

    </>
  );
}

// export async function generateStaticParams(): Promise<
//   { slug: string }[]
// > {
//   return Object.keys(slugToKeyMap).map((slug) => ({
//     slug,
//   }));
// }

export async function generateStaticParams() {
  const categories = ['business', 'health', 'politics', 'science', 'technology'];
  return categories.map((slug) => ({ slug }));
}

