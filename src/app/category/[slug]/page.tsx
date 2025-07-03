import { navData, slugToKeyMap } from '@/data/navData';
import CategoryContent from '@/components/CategoryContent';
import NavigationSection from '@/components/NavigationSection';
import { notFound } from 'next/navigation';

type Props = {
  params: {
    slug: string;
  };
};

export default function CategoryPage({ params }: Props) {
  const { slug } = params;

  const navKey = slugToKeyMap[slug]; 

  if (!navKey || !navData[navKey]) return notFound();

  return (
    <>
      <NavigationSection />
      <CategoryContent activeMain={navKey}/>
    </>
  );
}
