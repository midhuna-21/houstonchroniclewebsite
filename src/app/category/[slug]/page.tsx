import { notFound } from 'next/navigation';
import { navData, slugToKeyMap } from '@/data/navData';
import CategoryContent from '@/components/CategoryContent';
import NavigationSection from '@/components/NavigationSection';

export default async function CategoryPage({
  params, 
}: {
  params: { slug: string };
}) {
  const { slug } = params;

  const navKey = slugToKeyMap[slug];
  if (!navKey || !navData[navKey]) return notFound();

  return (
    <>
      <NavigationSection />
      <div className="container-fluid">
        <CategoryContent activeMain={navKey} />
      </div>
    </>
  );
}

export async function generateStaticParams() {
  return Object.keys(slugToKeyMap).map((slug) => ({
    slug,
  }));
}
