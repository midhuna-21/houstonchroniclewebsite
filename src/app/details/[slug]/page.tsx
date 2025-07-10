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


interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function DetailPage({ params }: PageProps) {
  const article = getArticleBySlug(decodeURIComponent((await params).slug));

  if (!article) return notFound();

  return (
    <main className={styles.content}>
      <div className={`container-fluid ${styles.noGutter}`}>
        <ArticleHeader
          category={article.category}
          title={article.title}
          // author={article.author}
          // role={article.role}
          // date={article.date}
        />

        <DetailFirstSection
        category={article.category}
          image={article.image}
          shortdescription={article.shortdescription}
          description={article.description}
          // credits={article.credits}
          // audioTitle={article.audioTitle}
        />

        <div className="row mt-4">
          <div className="col-md-8  ">
            {/* <ArticleBodyRenderer body={article.body} /> */}
            <SingleParagraph text={article.description} />
              <AuthorInfo
  date={AuthorData[0].date}
  name={AuthorData[0].name}
  role={AuthorData[0].role}
  bio={AuthorData[0].bio}
  image={AuthorData[0].image}
/>
          </div>

          <div className="col-md-4">
            <MostPopularList data={MostpopularData} />
            <LatestNewsCard data={MostpopularData}/>
          </div> 
        </div>
<EditorsPicksSection data={EditorsData} />
        <LetsPlaySection />
      </div>
    </main>
  );
}
