import React from 'react';
import SectionWrapper from './SectionWrapper';

interface FeatureArticle {
  id: number;
  title: string;
  description?: string;
  image?: string;
}

interface FeatureItem {
  section: string;
  articles: FeatureArticle[];
}

interface FeatureSectionProps {
  data: FeatureItem;
}

const FeatureSection: React.FC<FeatureSectionProps> = ({ data }) => {
  const { section, articles } = data;

  const leftItems = articles.slice(0, 2);
  const mainItem = articles[2];
  const bottomItems = articles.slice(3, 5);

  if (!mainItem) return null; // safeguard if data is too short

  return (
    <SectionWrapper title={section}>
      {/* Top section */}
      <div className="row border-bottom pb-4">
        {/* Left */}
        <div className="col-md-3">
          <h5 style={{ fontWeight: 'bold' }}>{section}</h5>
          {leftItems.map(item => (
            <div key={item.id} className="border-bottom pb-3 mb-3">
              <h6 style={{ fontWeight: 'bold' }}>{item.title}</h6>
            </div>
          ))}
        </div>

        {/* Middle */}
        <div className="col-md-4 text-center">
          {mainItem.image && (
            <img
              src={mainItem.image}
              alt={mainItem.title}
              className="img-fluid mb-2"
              style={{ objectFit: 'cover', maxHeight: '200px', width: '100%' }}
            />
          )}
        </div>

        {/* Right */}
        <div className="col-md-5">
          <h4 style={{ fontWeight: 'bold' }}>{mainItem.title}</h4>
          {mainItem.description && <p>{mainItem.description}</p>}
        </div>
      </div>

      {/* Bottom 2x1 grid */}
      <div className="row pt-3">
        {bottomItems.map((item, idx) => (
          <div
            key={item.id}
            className={`col-md-6 ${idx === 0 ? 'border-end' : ''}`}
          >
            <h6 style={{ fontWeight: 'bold' }}>{item.title}</h6>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default FeatureSection;
