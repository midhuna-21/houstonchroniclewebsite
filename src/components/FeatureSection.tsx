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

  if (!mainItem) return null;

  return (
    <SectionWrapper title={section}>
      <div className="row border-bottom pb-4">
        <div className="col-md-3 border-end">

          {leftItems.map((item, index) => (
            <div
              key={item.id}
              className={`pb-3 mb-3 ${index !== leftItems.length - 1 ? 'border-bottom' : ''}`}
            >
              <h6
                style={{
                  fontSize: '18px',
                  fontFamily: "'Archivo', Arial, sans-serif",
                  fontWeight: 700,
                }}
              >
                {item.title}
              </h6>
            </div>
          ))}

        </div>

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

        <div className="col-md-5">
          <h4 style={{
            fontSize: '18px',
            fontFamily: "'Archivo', Arial, sans-serif",
            fontWeight: 700
          }}
          >{mainItem.title}</h4>
          {mainItem.description && <p style={{
            fontSize: '16px',
            fontFamily: "'Rubik', Arial, sans-serif", fontWeight: 400
          }}

          >{mainItem.description}</p>}
        </div>
      </div>

      <div className="row pt-3">
        {bottomItems.map((item, idx) => (
          <div
            key={item.id}
            className={`col-md-6 ${idx === 0 ? 'border-end' : ''}`}
          >
            <h6 style={{
              color: "#111111",
              fontSize: '18px',
              fontFamily: "'Archivo', Arial, sans-serif",
              fontWeight: 700
            }}
            >{item.title}</h6>
          </div>
        ))}
      </div>
      <div className="mt-4" />
    </SectionWrapper>
  );
};

export default FeatureSection;
