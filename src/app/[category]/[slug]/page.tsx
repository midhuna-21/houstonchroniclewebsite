import { notFound } from 'next/navigation';
import { getArticleBySlug, getAllSlugs } from '@/lib/detailFunction';
import ArticleHeader from '@/components/ArticleHeader';
import DetailFirstSection from '@/components/DetailFirstSection';
import MostPopularList from '@/components/MostPopularlist';
import LatestNewsCard from '@/components/LastestNewsCard';
import styles from './page.module.css';
import SingleParagraph from '@/components/SingleParagraph';
import EditorsPicksSection from '@/components/EditorsPick';
import EditorsData from '../../../../public/data/editorspick.json';
import MostpopularData from '../../../../public/data/mostpopular.json';
import AuthorData from '../../../../public/data/authour.json';
import StaticComponent from '@/components/StaticContent';


interface PageProps {
  params: Promise<{ slug: string }>;
}



export default async function DetailPage({ params }: PageProps) {
  const article = getArticleBySlug(decodeURIComponent((await params).slug));



  if ((await params).slug == 'wanda-vazquez-charges-dropped') {
    return (
      <main className={`container ${styles.content}`}>
        <StaticComponent />
      </main>
    );
  }


  if (!article) return notFound();
  return (
    <main className={`container ${styles.content}`}>

      <div className={`container-fluid ${styles.noGutter}`}>
        <ArticleHeader
          category={article.category}
          title={article.title}
          date={article.date}
          image={AuthorData.image}
        />

        <DetailFirstSection
          category={article.category}
          image={article.image}
          shortdescription={article.shortdescription}
        />

        <div className="row mt-4">
          <div className="col-md-8  ">
            <SingleParagraph text={article.description ?? ""} />
          </div>

          <div className="col-md-4">
            <MostPopularList data={MostpopularData} />
            <LatestNewsCard data={MostpopularData} />
          </div>
        </div>
        <EditorsPicksSection data={EditorsData} />
      </div>
    </main>
  );
}


export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({
    slug: slug.slug,
    category: slug.category
  }));
}
