'use client';

import NavigationSection from '@/components/NavigationSection';
import FirstHomeSection from '@/components/FirstHomeSection';
import SecondHomeSection from '@/components/SecondHomeSection';
import EditorsPicksSection from '@/components/EditorsPick';
import ThirdHomeSection from '@/components/ThirdHomeSection';
import Signup from '@/components/Signup';
import CarouselSection from '@/components/CarouselSection';
import ContentLayout from '@/components/ContentLayout';
import { dailyPuzzles, newsData, opinionArticles, popularArticles, promoData, trendingData, trendingNavItems } from '@/data/homeData'
import FeatureSection from '@/components/FeatureSection';
import { featureData } from '@/data/homeData'
import TrendingCard from '@/components/TrendingCard';
import TrendingNav from '@/components/TrendingNavigation';
import DailyPuzzles from '@/components/DailyPuzzles';
import MostPopularList from '@/components/MostPopularlist';
import OpinionList from '@/components/OptionList';
import EditorialBoard from '@/components/EditorialBoard';
import NewsText from '@/components/NewsText';
import LottoCard from '@/components/LottoCard';
import LetsPlaySection from '@/components/LetsPlay';
import BusinessData from '../../public/data/business.json';
import HealthData from '../../public/data/health.json';
import ScienceData from '../../public/data/science.json';
import PoliticsData from '../../public/data/politics.json';
import SportsData from '../../public/data/sports.json';
import TechnologyData from '../../public/data/technology.json';
import CategoryFirstSection from '@/components/CategoryFirstSection';


export default function Home() {
  return (
    <div className="bg-white">

      <NavigationSection />
      <div className="d-flex justify-content-center mt-2">
        {/* <TrendingNav items={trendingNavItems} /> */}
      </div>


      <main className="content">
        <div className="mb-5">
          <FirstHomeSection businessData={BusinessData.slice(0, 3)} />
          <hr
            style={{
              border: 'none',
              borderTop: '1px solid #ccc',
              margin: '2rem 0',
            }}
          />
          <FirstHomeSection businessData={HealthData.slice(0, 3)} />
        </div>


        <div className="row">
          <div className="col-md-9">
            <SecondHomeSection data={BusinessData.slice(0, 6)} />

            {/* <div className="mb-5">
                <EditorsPicksSection />
              </div> */}
            <div className="mb-5">
              <ThirdHomeSection businessData={BusinessData.slice(0, 5)} />
            </div>
            {/* <div className="mb-5">
                <Signup />
              </div> */}
          </div>

          {/* <div className="col-md-3">
              <DailyPuzzles puzzles={dailyPuzzles} />
              <MostPopularList articles={popularArticles} />
              <OpinionList title="Opinion" articles={opinionArticles} />
            </div> */}
        </div>


        <div className="row">
          <div className="col-md-9">
            <ContentLayout
              data={{
                main: SportsData[0],
                side: [SportsData[1], SportsData[2]],
                bottomCards: [SportsData[3], SportsData[4], SportsData[5], SportsData[6]],
              }}
            />
          </div>
          {/* <div className="col-md-3">
            <TrendingCard data={trendingData[0]} />
          </div> */}
        </div>



        <div className="row">
          <div className="col-md-9">
            <ContentLayout
              data={{
                main: BusinessData[0],
                side: [BusinessData[1], BusinessData[2]],
                bottomCards: [BusinessData[3], BusinessData[4], BusinessData[5], BusinessData[6]],
              }}
            />

            <div className="mt-4">
              <FeatureSection
                data={{
                  section: 'Science',
                  articles: ScienceData.slice(0, 5)
                }}
              />
            </div>
          </div>
          {/* <div className="col-md-3">
            <TrendingCard data={trendingData[1]} />
          </div> */}
        </div>



        <div className="row">
          <div className="col-md-9">
            <ContentLayout
              data={{
                main: PoliticsData[0],
                side: [PoliticsData[1], PoliticsData[2]],
                bottomCards: [PoliticsData[3], PoliticsData[4], PoliticsData[5], PoliticsData[6]],
              }}
            />
          </div>
          {/* <div className="col-md-3">
            <EditorialBoard />
          </div> */}
        </div>

        <div className="row ">
          <div className="col-md-9">
            <CategoryFirstSection
              data={{
                main: HealthData[0],
                side: [HealthData[1], HealthData[2]],
                bottomCards: [HealthData[3], HealthData[4], HealthData[5], HealthData[6]],
              }}
            />
          </div>
          {/* <div className="col-md-3">
            <TrendingCard data={trendingData[2]} />
          </div> */}
        </div>

        <div className="row">
          <div className="col-md-9">
            {/* <ContentLayout
              data={{
                main: BusinessData[0],
                side: [BusinessData[1], BusinessData[2]],
                bottomCards: [BusinessData[3], BusinessData[4], BusinessData[5], BusinessData[6]],
              }}
            /> */}
            <div className="mt-4">
              <FeatureSection
                data={{
                  section: 'Technology',
                  articles: TechnologyData.slice(0, 5)
                }}
              />
            </div>
          </div>
          {/* <div className="col-md-3">
            <TrendingCard data={trendingData[3]} />
          </div> */}
        </div>


        <div className="row">
          {/* <div className="col-md-9">
            <ContentLayout
              data={{
                main: TechnologyData[0],
                side: [TechnologyData[1], TechnologyData[2]],
                bottomCards: [TechnologyData[3], TechnologyData[4], TechnologyData[5], TechnologyData[6]],
              }}
            />
            <div className="mb-5">
              <FeatureSection
                data={{
                  section: 'Health',
                  articles: HealthData.slice(0, 5)
                }}
              />
            </div>
          </div> */}

          {/* <div className="col-md-3">
            <TrendingCard data={trendingData[4]} />
            <LottoCard />
          </div> */}
        </div>

        <div className="row">
          {/* <div className="col-md-9">
            <ContentLayout
              data={{
                main: PoliticsData[0],
                side: [PoliticsData[1], PoliticsData[2]],
                bottomCards: [PoliticsData[3], PoliticsData[4], PoliticsData[5], PoliticsData[6]],
              }}
            />
          </div> */}
          {/* <div className="col-md-3">
            <NewsText />
          </div> */}
        </div>
        {/* <LetsPlaySection /> */}



      </main>

      <div style={{ marginBottom: '1.5rem' }} />
      <style jsx>{`
          .content {
            padding-left: 0;
            padding-right: 0;
            margin-top:2rem;
          }
          @media (min-width: 992px) {
            .content {
              padding-left: 7rem;
              padding-right: 7rem;
            }
          }
        `}</style>
    </div>


  );
}
