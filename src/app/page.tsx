'use client';

import NavigationSection from '@/components/NavigationSection';
import LatestHighlightsSection from '@/components/HighlightsSection';
import TopNewsSection from '@/components/TopNewsSection';
import EditorsPicksSection from '@/components/EditorsPick';
import LatestSection from '@/components/LatestSection';
import Signup from '@/components/Signup';
import CarouselSection from '@/components/CarouselSection';
import NewsSection from '@/components/NewsSections';
import ContentLayout from '@/components/ContentLayout';
import  {dailyPuzzles, newsData, opinionArticles, popularArticles, trendingData, trendingNavItems} from '@/data/homeData'
import FeatureSection from '@/components/FeatureSection';
import {featureData} from '@/data/homeData'
import TrendingCard from '@/components/TrendingCard';
import TrendingNav from '@/components/TrendingNavigation';
import DailyPuzzles from '@/components/DailyPuzzles';
import MostPopularList from '@/components/MostPopularlist';
import OpinionList from '@/components/OptionList';

export default function Home() {
  return (
    <div className="bg-white">
      <NavigationSection />
      <div className="d-flex justify-content-center mt-2">
  <TrendingNav items={trendingNavItems} />
</div>

      <div style={{ marginTop: '2.5cm' }} />
      <main className="px-3 px-md-4">
        <div className="mb-5">
          <LatestHighlightsSection />
        </div>

<div className="row">
  {/* LEFT COLUMN */}
  <div className="col-md-9">
    <TopNewsSection />

    {/* These sections will appear right below TopNewsSection, inside the left column */}
    <div className="mb-5">
      <EditorsPicksSection />
    </div>
    <div className="mb-5">
      <LatestSection />
    </div>
    <div className="mb-5">
      <Signup />
    </div>
  </div>

  {/* RIGHT COLUMN */}
  <div className="col-md-3">
    <DailyPuzzles puzzles={dailyPuzzles} />
    <MostPopularList articles={popularArticles} />
    <OpinionList title="Opinion" articles={opinionArticles} />
  </div>
</div>

         <div className="mb-5">
          <CarouselSection />

        </div>



        {/* content layout */}
   <div className="row">
  <div className="col-md-9">
    <ContentLayout data={newsData[0]} />
  </div>
  <div className="col-md-3">
    <TrendingCard data={trendingData[0]} /> 
  </div>
</div>



       

     <div className="row ">
  <div className="col-md-9">
    <ContentLayout data={newsData[1]} />
  </div>
  <div className="col-md-3">
    <TrendingCard data={trendingData[1]} /> 
  </div>
</div>


         <div className="mb-5">

        <FeatureSection data={featureData[0]} />

        </div>


         <div className="mb-5">
       <ContentLayout data={newsData[2]} />
        </div> 
        
       <div className="row ">
  <div className="col-md-9">
    <ContentLayout data={newsData[3]} />
  </div>
  <div className="col-md-3">
    <TrendingCard data={trendingData[2]} /> 
  </div>
</div>
          
           <div className="row ">
  <div className="col-md-9">
    <ContentLayout data={newsData[4]} />
  </div>
  <div className="col-md-3">
    <TrendingCard data={trendingData[3]} /> 
  </div>
</div>
           
           <div className="mb-5">
        <FeatureSection data={featureData[1]} />
        </div>

       <div className="row ">
  <div className="col-md-9">
    <ContentLayout data={newsData[5]} />
  </div>
  <div className="col-md-3">
    <TrendingCard data={trendingData[4]} /> 
  </div>
</div>
         
         <div className="mb-5">
        <FeatureSection data={featureData[2]} />
        </div>

        <div className="mb-5">
       <ContentLayout data={newsData[6]} />
        </div> 

      </main>
      <div style={{ marginBottom: '5rem' }} />
    </div>
  );
}
