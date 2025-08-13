'use client';
import DailyPuzzles from './DailyPuzzles';
import TrendingCard from './TrendingCard';
import InteractiveCard from './InteractiveCard';
import NewsGrid from './NewsGridCategory';
import CategoryNewsCard from './CategoryNewsCard';
import CategoryFirstSection from './CategoryFirstSection';
import SectionWrapper from './SectionWrapper';
import DailyPuzzlesData from '../../public/data/puzzles.json';
import HorizontalNews from './HorizontalNews';

interface Props {
  activeMain: string;
  data: any[];
}

export default function CategoryContent({ activeMain, data }: Props) {
  function capitalizeFirstLetterOnly(text: string) {
    if (!text) return '';
    return text.charAt(0).toUpperCase() + text.slice(1);
  }


  return (
    <div className="w-100 container">
      <div>
        <h1
          className="text-black mb-2"
          style={{
            fontSize: '36.496px',
            fontFamily: "'Archivo', Arial, sans-serif",
            fontWeight: 900
          }}
        >
          {capitalizeFirstLetterOnly(activeMain)}
        </h1>
        <hr style={{ borderTop: '1px solid #4444' }} />

      </div>
      <div className="row">
        <div className="col-md-9">
          <NewsGrid data={[data[0], data[1], data[2], data[3], data[4]]} />
        </div>
        <div className="col-md-3">
          <InteractiveCard data={data[5]} />
        </div>
      </div>

      <div className="row">
        <div className="col-md-9">
          <CategoryFirstSection
            data={{
              main: data[6],
              side: [data[7], data[8]],
              bottomCards: [data[9], data[10], data[11], data[12]],
            }}
          />
          <HorizontalNews data={[data[13], data[14], data[15], data[16]]} />

        </div>
        <div className="col-md-3">
          <DailyPuzzles data={DailyPuzzlesData} />
          <TrendingCard
            data={{
              section: data[0].category,
              items: [data[17], data[18], data[19], data[20]].map(article => ({
                image: article.image,
                title: article.title,
                description: article.shortdescription,
                slug: article.slug,
                date: article.date,
                category: article.category
              })),
            }}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-md-9">
          <SectionWrapper title={`More ${data[0]?.category || ''}`}>
            {data.slice(21).map((item, index) => (
              <CategoryNewsCard key={index + 17} data={item} />
            ))}
          </SectionWrapper>
        </div>
        <div className="col-md-3">
        </div>
      </div>
    </div>

  );
}
