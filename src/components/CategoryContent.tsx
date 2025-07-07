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

  interface Props {
    activeMain: NavKey;
  }

  export default function CategoryContent({ activeMain, }: Props) {
    const sub = navData[activeMain];

    return (
      <div className="w-100 mt-5">
  <div>
  <h1
    className="text-black mb-2"
    style={{
      fontSize: '36.496px',
      fontFamily: "'Archivo', Arial, sans-serif",
      fontWeight: 900
    }}
  >
    {sub.subheading}
  </h1>

  <hr style={{ borderTop: '1px solid #4444' }} />

  {sub.items.length > 0 ? (
    <>
      <div className="d-flex gap-3 flex-wrap mb-4">
        {sub.items.map((item) => (
          <Link
            key={item}
            href="#"
            className="text-dark text-decoration-none small"
            style={{
              fontSize: '18px',
              fontFamily: "'Archivo', Arial, sans-serif",
              fontWeight: 700
            }}
          >
            {item}
          </Link>
        ))}
      </div>

      <hr
        style={{
          height: '2px',
          backgroundColor: 'black',
          border: 'none',
          marginBottom: '1.5rem',
        }}
      />
    </>
  ) : (
    <>
      <h5 className="fw-bold">{activeMain}</h5>

      <hr
        style={{
          height: '2px',
          backgroundColor: '#000',
          border: 'none',
          marginBottom: '1.5rem',
        }}
      />
    </>
  )}
</div>


    <div className="row">
          <div className="col-md-9">

  <NewsGrid data={newsCategoryData} />
          </div>

          <div className="col-md-3">
  <InteractiveCard/>
            </div>
          </div>

        <div className="row">
          <div className="col-md-9">
            <ContentLayout data={newsData[0]} />

            <div className="mb-5">
              <FeatureSection data={featureData[1]} />

            </div>
            <div className="mb-5">
              <ContentLayout data={newsData[1]} />

            </div>
          </div>
          <div className="col-md-3">
            <DailyPuzzles puzzles={dailyPuzzles} />
            <TrendingCard data={trendingData[2]} />
          </div>
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
        </div>
        <div className="col-md-9">
          <ContentLayout data={newsData[4]} />
        </div>
        <div className="col-md-9">
          <FeatureSection data={featureData[2]} />
        </div>
        <LetsPlaySection />

      </div>

    );
  }
