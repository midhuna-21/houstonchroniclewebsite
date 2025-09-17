'use client';
import DailyPuzzles from './DailyPuzzles';
import TrendingCard from './TrendingCard';
import InteractiveCard from './InteractiveCard';
import NewsGrid from './NewsGridCategory';
import CategoryNewsCard from './CategoryNewsCard';
import CategoryFirstSection from './CategoryFirstSection';
import SectionWrapper from './SectionWrapper';
import EducationData from '../../public/data/education.json';
import HorizontalNews from './HorizontalNews';
import EditorsPicksSection from './EditorsPick';

interface Props {
  activeMain: string;
  data: any[];
}

export default function CategoryContent({ activeMain, data }: Props) {
  const excludeSlugs = [
    "lawyers-switch-sides-bancredito-15-million-lesson",
  ];

  const filteredData = data.filter(item => !excludeSlugs.includes(item.slug));

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
        {/* Left Column */}
        <div className="col-lg-9 col-12 mb-3">
          <NewsGrid data={[filteredData[0], filteredData[2], filteredData[3], filteredData[4], filteredData[5]]} />
        </div>

        {/* Right Column */}
        <div className="col-lg-3 col-12 mb-md-3">
          <InteractiveCard data={filteredData[18]} />
        </div>
      </div>


      <div className="row mt-md-4 mt-3">
        <div className="col-lg-9 col-12">
          <CategoryFirstSection
            data={{
              main: filteredData[6],
              side: [filteredData[7], filteredData[8]],
              bottomCards: [filteredData[9], filteredData[10], filteredData[11], filteredData[12]],
            }}
          />

          <div className='mb-4'>
            <SectionWrapper title=" " >
              <EditorsPicksSection data={filteredData} />
            </SectionWrapper>
          </div>
        </div>

        <div className="col-lg-3 col-12">
          <TrendingCard
            data={{
              section: filteredData[0].category,
              items: [filteredData[17], filteredData[5], filteredData[19], filteredData[20]].map(article => ({
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

      <div className="row ">
        <div className="col-lg-9 col-md-12 col-sm-12 mt-5 ">
          <SectionWrapper title={`More ${filteredData[0]?.category || ''}`}>
            {filteredData.slice(21).map((item, index) => (
              <CategoryNewsCard key={index + 17} data={item} />
            ))}
          </SectionWrapper>
        </div>

        <div className="col-lg-3 col-md-12 col-sm-12 d-none d-lg-block"></div>
      </div>

    </div>

  );
}
