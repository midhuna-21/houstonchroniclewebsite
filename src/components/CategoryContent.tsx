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

interface Props {
  activeMain: NavKey;
}

export default function CategoryContent({ activeMain,  }: Props) {
  const sub = navData[activeMain];

  return (
<div className="w-100">
  <div className="px-4 py-3">
    <h1 className="text-black mb-2 " style={{ fontSize: '50px',fontWeight:'bolder'}}>
      {sub.subheading}
    </h1>

    {sub.items.length > 0 ? (
      <div className="d-flex gap-3 flex-wrap mb-4">
        {sub.items.map((item) => (
          <Link
            key={item}
            href="#"
            className="text-dark text-decoration-none small"
            style={{ fontWeight: 500 }}
          >
            {item}
          </Link>
        ))}
      </div>
    ) : (
      <h5 className="fw-bold">{activeMain}</h5>
    )}

    <hr style={{ borderTop: '2px solid #000' }} />
  </div>



        <div className="row">
          {/* LEFT COLUMN */}
          <div className="col-md-9">
                <ContentLayout data={newsData[0]} />

      
            {/* These sections will appear right below TopNewsSection, inside the left column */}
            <div className="mb-5">
            <FeatureSection data={featureData[1]} />

            </div>
            <div className="mb-5">
                <ContentLayout data={newsData[1]} />

            </div>  
          </div>
      
          {/* RIGHT COLUMN */}
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
