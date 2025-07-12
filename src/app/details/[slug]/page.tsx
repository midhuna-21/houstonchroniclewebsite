import { notFound } from 'next/navigation';
import { getArticleBySlug, getAllSlugs } from '@/lib/detailFunction';
import ArticleHeader from '@/components/ArticleHeader';
import DetailFirstSection from '@/components/DetailFirstSection';
import ArticleBodyRenderer from '@/components/ArticleBodyRender';
import AuthorInfo from '@/components/AuthorInfo';
import MostPopularList from '@/components/MostPopularlist';
import LatestNewsCard from '@/components/LastestNewsCard';
import LetsPlaySection from '@/components/LetsPlay';
import styles from './page.module.css';
import { popularArticles } from '@/data/homeData';
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

  console.log((await params).slug)

  if ((await params).slug == 'wanda-vazquez-charges-dropped') {
    console.log((await params).slug)
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

            {/* <AuthorInfo
              date={AuthorData.date}
              name={AuthorData.name}
              role={AuthorData.role}
              bio={AuthorData.bio}
              image={AuthorData.image}
            /> */}
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
