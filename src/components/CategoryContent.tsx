  'use client';

  import Image from 'next/image';
  import Link from 'next/link';
  import { NavKey, navData } from '../data/navData';
  import MoreFromSection from './MoreFromSection';
  import RightSectionTop from './RightSectionTop';
  import ContentLayout from './ContentLayout';
  import DailyPuzzles from './DailyPuzzles';
  import { dailyPuzzles, featureData, newsData, trendingData } from '@/data/homeData';
  import TrendingCard from './TrendingCard';
  import FeatureSection from './FeatureSection';
  import LetsPlaySection from './LetsPlay';
  import InteractiveCard from './InteractiveCard';
  import NewsGrid from './NewsGridCategory';
  import { newsCategoryData } from '@/data/Category';
import CategoryNewsCard from './CategoryNewsCard';
import BusinessData from '../../public/data/business.json';
import CategoryFirstSection from './CategoryFirstSection';
import TechnologyData from '../../public/data/technology.json';
import ScienceData from '../../public/data/science.json';
import EditorsPicksSection from './EditorsPick';
import SectionWrapper from './SectionWrapper';
import CarouselSection from './CarouselSection';
import NewsCard from './NewsCard';

  interface Props { 
    activeMain: string;
      data: any[]; 
  }

  export default function CategoryContent({ activeMain,data }: Props) { 
    return (
      <div className="w-100">
  <div>
  <h1
    className="text-black mb-2"
    style={{
      fontSize: '36.496px',
      fontFamily: "'Archivo', Arial, sans-serif",
      fontWeight: 900
    }}
  >
       {activeMain}
  </h1>

  <hr style={{ borderTop: '1px solid #4444' }} />


</div>
<div className="row"> 
     <div className="col-md-9">
 <NewsGrid data={data.slice(0, 5)} />
 </div>
</div>



    <div className="row">
          <div className="col-md-9">

{/* 
 <CategoryFirstSection
              data={{
                main: data[0],
                side: [data[1], data[2]],
                bottomCards: [data[3], data[4], data[5], data[6]],
              }}
            /> */}
           

              {/* <FeatureSection
                data={{
                  section: 'Technology',
                  articles: TechnologyData.slice(0, 5)
                }}
              /> */}
                   <EditorsPicksSection data={data} />
                

  {/* <NewsGrid data={newsCategoryData} /> */}
          </div>

          {/* <div className="col-md-3">
  <InteractiveCard/>
            </div> */}
          </div>

        <div className="row">
          <div className="col-md-9">
     <SectionWrapper title={`More ${data[0]?.category || ''}`}>

        {data.map((item, index) => (
  <CategoryNewsCard key={index} data={item} />
))}
            </SectionWrapper>


           
          </div>
          {/* <div className="col-md-3">
            <DailyPuzzles puzzles={dailyPuzzles} />
            <TrendingCard data={trendingData[2]} />
          </div> */}
        </div>
{/* 
        <div className="col-md-9">
          <FeatureSection data={featureData[2]} />
        </div>
        <div className="col-md-9">
          <ContentLayout data={newsData[4]} />
        </div>
        <div className="col-md-9">
          <FeatureSection data={featureData[2]} />
        </div>
        <div className="col-md-9">
          <ContentLayout data={newsData[4]} />
        </div>
        <div className="col-md-9">
          <FeatureSection data={featureData[2]} />
        </div>
        <div className="col-md-9">
          <ContentLayout data={newsData[4]} />
        </div>
        <div className="col-md-9">
          <FeatureSection data={featureData[2]} />
        </div>*/}
         <LetsPlaySection /> 

      </div>

    );
  }
