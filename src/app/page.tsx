'use client';

import NavigationSection from '@/components/NavigationSection';
import FirstHomeSection from '@/components/FirstHomeSection';
import SecondHomeSection from '@/components/SecondHomeSection';
import EditorsPicksSection from '@/components/EditorsPick';
import ThirdHomeSection from '@/components/ThirdHomeSection';
import Signup from '@/components/Signup';
import CarouselSection from '@/components/CarouselSection';
import ContentLayout from '@/components/ContentLayout';
import { newsData, popularArticles, promoData, trendingData, trendingNavItems } from '@/data/homeData'
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
import MostpopularData from '../../public/data/mostpopular.json';
import DailyPuzzlesData from '../../public/data/puzzles.json';
import OpinionData from '../../public/data/opinion.json'
import ColumnsFromPastData from '../../public/data/columnsfrompast.json'


export default function Home() {
  return (
    <div className="bg-white ">

      <NavigationSection />
      <div className="d-flex justify-content-center mt-2">
        {/* <TrendingNav items={trendingNavItems} /> */}
      </div>


      <main className="container px-3 px-lg-5 mt-4 content">
        <div className="mb-5">
          {/* <FirstHomeSection businessData={BusinessData.slice(0, 3)} /> */}
          <FirstHomeSection data={[BusinessData[0], HealthData[0], SportsData[0]]} />

          <hr
            style={{
              border: 'none',
              borderTop: '1px solid #ccc',
              margin: '2rem 0',
            }}
          />
          <FirstHomeSection data={[ScienceData[0], PoliticsData[0], TechnologyData[0]]} />

        </div>


        <div className="row">
          <div className="col-md-9">
            <SecondHomeSection data={[ScienceData[1], PoliticsData[1], TechnologyData[1], BusinessData[1], HealthData[1], SportsData[1]]} />

            <div className="mb-5">
              <EditorsPicksSection data={[ScienceData[2], PoliticsData[2], TechnologyData[2], BusinessData[2]]} />
            </div>
            <div className="mb-5">
              <ThirdHomeSection data={[HealthData[2], SportsData[2], ScienceData[3], PoliticsData[3], TechnologyData[3]]} />

            </div>
            {/* <div className="mb-5">
                <Signup />
              </div> */}
          </div>

          <div className="col-md-3">
            <DailyPuzzles data={DailyPuzzlesData} />
            <MostPopularList data={[PoliticsData[4], TechnologyData[4], HealthData[3], SportsData[3], ScienceData[4]]} />


            {/* add another any data */}
            {/* <OpinionList title="Opinion" articles={OpinionData} /> */}
          </div>
        </div>

        <div>
          <CarouselSection data={[ScienceData[5], TechnologyData[5], HealthData[4]]} />
        </div>

        <div className="row">
          <div className="col-md-9">
            <ContentLayout
              data={{
                main: SportsData[4],
                side: [SportsData[5], SportsData[6]],
                bottomCards: [SportsData[7], SportsData[8], SportsData[9], SportsData[10]],
              }}
            />
          </div>
          <div className="col-md-3">
            <TrendingCard
              data={{
                section: "",
                items: [SportsData[11], SportsData[12], SportsData[13], SportsData[14]].map(article => ({
                  image: article.image,
                  title: article.title,
                  description: article.shortdescription,
                  slug: article.slug,
                  date:article.date
                })),
              }}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-9">
            <ContentLayout
              data={{
                main: BusinessData[3],
                side: [BusinessData[4], BusinessData[5]],
                bottomCards: [BusinessData[6], BusinessData[7], BusinessData[8], BusinessData[9]],
              }}
            />

            <div className="mt-4">
              <FeatureSection
                data={{
                  section: 'Science',
                  articles: [ScienceData[6], ScienceData[7], ScienceData[8], ScienceData[9], ScienceData[10]]
                }}
              />
            </div>
          </div>
          <div className="col-md-3">
            <TrendingCard
              data={{
                section: "",
                items: [BusinessData[10], BusinessData[11], BusinessData[12], BusinessData[13]].map(article => ({
                  image: article.image,
                  title: article.title,
                  description: article.shortdescription,
                  slug: article.slug,
                  date:article.date
                })),
              }}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-9">
            <ContentLayout
              data={{
                main: PoliticsData[4],
                side: [PoliticsData[5], PoliticsData[6]],
                bottomCards: [PoliticsData[7], PoliticsData[8], PoliticsData[9], PoliticsData[10]],
              }}
            />
          </div>
          <div className="col-md-3">
            <EditorialBoard
              sectionTitle={''}
              data={[PoliticsData[11], PoliticsData[12], PoliticsData[13], PoliticsData[14]]}
            />
          </div>
        </div>


        <div className="row">
          <div className="col-md-9">
            <ContentLayout
              data={{
                main: HealthData[4],
                side: [HealthData[5], HealthData[6]],
                bottomCards: [HealthData[7], HealthData[8], HealthData[9], HealthData[10]],
              }}
            />
            <div className="mt-4">
              <FeatureSection
                data={{
                  section: 'Technology',
                  articles: TechnologyData.slice(0, 5)
                }}
              />
            </div>
          </div>
          <div className="col-md-3">
            <NewsText data={ColumnsFromPastData} />
            <LottoCard data={ColumnsFromPastData[0]} />
          </div>
          <div className="col-md-3">

          </div>
        </div>


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
