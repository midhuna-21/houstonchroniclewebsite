import React from 'react';
import LeadNewsCard from './LeadNewsCard';
import NewsWithoutImage from './NewsWithoutImage';
import TrendingCard from './TrendingCard';
import HorizontalNewsCard from './HorizontalNewsCard';
import leadNews from '../../public/data/leadNewsData.json';
import featureData from '../../public/data/featuresNewsData.json';
import FeatureSection from './FeatureSection';

type NewsItem = {
  title: string;
  description: string;
  image: string;
};

export default function NewsSection() {
  const firstItem: NewsItem = leadNews[0];

  return (
    <div>
      <div className="d-flex flex-wrap">
        {/* LEFT SIDE: Main Section + Horizontal Grid (75%) */}
        <div style={{ flex: '0 0 75%', minWidth: '300px' }}>
          {/* Top News Content */}
          <div className="row">
            {/* Left Column */}
            <div className="col-md-6">
              <LeadNewsCard
                title={firstItem.title}
                description={firstItem.description}
                image={firstItem.image}
              />
            </div>

            {/* Divider */}
            <div
              className="d-none d-md-block"
              style={{
                width: '1px',
                backgroundColor: '#ccc',
                margin: '0 10px',
                padding: 0,
              }}
            ></div>

            {/* Right Column (inside main layout) */}
            <div className="col-md-5">
              <NewsWithoutImage
                title={firstItem.title}
                description={firstItem.description}
                image={firstItem.image}
              />
              <LeadNewsCard
                title={firstItem.title}
                description={firstItem.description}
                image={firstItem.image}
              />
            </div>
          </div>

          {/* Separator */}
          <hr style={{ borderTop: '1px solid #ccc', margin: '2rem 0' }} />

          {/* Horizontal News Cards (2x2 Grid) */}
          <div className="row">
            {[1, 2, 3, 4].map((item, index) => (
              <div key={index} className="col-md-6 mb-3">
                <HorizontalNewsCard
                  title="Astros say Yordan Alvarez's setback due to inflammation, not hand fracture"
                  image="/images/astroscoach.webp"
                />
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE: Trending Cards (25%)
        <div style={{ flex: '0 0 25%', paddingLeft: '10px', minWidth: '200px' }}>
          <TrendingCard
            heading="Trending In Sports"
            author="Matt Young"
            role="Trending Sports Reporter"
            image="/images/person.webp"
            title="Former Texans linebacker Bryan Braman battling rare form of cancer"
            description="Bryan Braman was a Houston Texans fan favorite for his wild style of play, including once losing his helmet and using his head to tackle a Titans punt returner."
          />
          <TrendingCard
            heading="Trending In Sports"
            author="Matt Young"
            role="Trending Sports Reporter"
            image="/images/person.webp"
            title="Former Texans linebacker Bryan Braman battling rare form of cancer"
            description="Bryan Braman was a Houston Texans fan favorite for his wild style of play, including once losing his helmet and using his head to tackle a Titans punt returner."
          />
        </div> */}
      </div>
    </div>
  );
}
