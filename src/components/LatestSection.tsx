'use client';
import React from 'react';
import newsData from '../../public/data/newData.json';
import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.min.css';
import SectionWrapper from './SectionWrapper';

interface NewsItem {
  category: string;
  title: string;
  description?: string;
  image?: string;
}

interface NewsData {
  main: NewsItem;
  side: NewsItem[];
  bottom: NewsItem;
  bottomTrending: NewsItem;
}

const LatestSection: React.FC = () => {
  const { main, side, bottom, bottomTrending } = newsData as NewsData;

  const categoryStyle: React.CSSProperties = {
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: '#b10032',
    fontSize: '0.9rem',
    marginBottom: '0.25rem',
  };

  const titleStyle: React.CSSProperties = {
    fontWeight: 'bold',
    fontSize: '1.2rem',
    marginBottom: '0.5rem',
  };

  const descriptionStyle: React.CSSProperties = {
    fontSize: '1rem',
    color: '#555',
  };

  return (
    <SectionWrapper title="Latest">
      <div className="row">
        {/* Main Section (image + content) */}
        <div className="col-12 col-md-8 order-1 order-md-2 mb-4">
          <div className="row">
            <div className="col-md-5 mb-3 mb-md-0">
              <Image
                src={main.image || ''}
                alt={main.title}
                width={300}
                height={200}
                className="img-fluid w-100"
              />
            </div>
            <div className="col-md-7">
              <div style={categoryStyle}>{main.category}</div>
              <h3 style={titleStyle}>{main.title}</h3>
              <p style={descriptionStyle}>{main.description}</p>
            </div>
          </div>
        </div>

        {/* Side Section */}
        <div className="col-12 col-md-4 order-2 order-md-1 mb-4">
          {side.map((item, index) => (
            <div key={index} className="mb-4">
              <div style={categoryStyle}>{item.category}</div>
              <h5 style={titleStyle}>{item.title}</h5>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="col-12 order-3">
          <div className="row">
            <div className="col-md-6 mb-3">
              <div style={categoryStyle}>{bottom.category}</div>
              <h5 style={titleStyle}>{bottom.title}</h5>
            </div>
            <div className="col-md-6 mb-3">
              <div style={categoryStyle}>{bottomTrending.category}</div>
              <h5 style={titleStyle}>{bottomTrending.title}</h5>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default LatestSection;
