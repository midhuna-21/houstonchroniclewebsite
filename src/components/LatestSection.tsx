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
    fontWeight: 700,
    textTransform: 'uppercase',
    color: '#b50021',
    fontSize: '14.224px',
    fontFamily: "'Rubik', Arial, sans-serif"
  };

  const titleStyle: React.CSSProperties = {
    fontSize: '18px',
    fontFamily: "'Archivo', Arial, sans-serif",
    fontWeight: 700,
    color: '#111111',
    marginBottom: '0.5rem',
  };

  const descriptionStyle: React.CSSProperties = {
    fontSize: '16px',
    color: '#444444',
    fontWeight: 400,
    fontFamily: "'Rubik', Arial, sans-serif"
  };

  return (
    <SectionWrapper title="Latest">
      <div className="row">
        
        <div className="col-12 col-md-8 order-1 order-md-2 mb-4 ">
          
          <div className="row ">
            
            <div className="col-md-5 mb-3 mb-md-0">
              <Image
                src={main.image || ''}
                alt={main.title}
                width={300}
                height={200}
                className="img-fluid w-100"
              />
            </div>
            <div className="col-md-7 ">
              <div style={categoryStyle}>{main.category}</div>
              <h3 style={titleStyle}>{main.title}</h3>
              <p style={descriptionStyle}>{main.description}</p>
            </div>
          </div>
          
        </div>

        <div className="col-12 col-md-4 order-2 order-md-1 mb-4 border-end">
          {side.map((item, index) => (
            <div key={index} className="mb-4">
              <div style={categoryStyle}>{item.category}</div>
              <h5 style={titleStyle}>{item.title}</h5>
               {index < side.length - 1 && (
          <hr style={{ borderTop: '1px solid #ccc', margin: '1rem 0' }} />
        )}
            </div>
          ))}
        </div>

       <div className="col-12 order-3 border-top pt-3">
  <div className="row">
    <div className="col-md-6 mb-3 border-end pe-md-4">
      <div style={categoryStyle}>{bottom.category}</div>
      <h5 style={titleStyle}>{bottom.title}</h5>
    </div>

    <div className="col-md-6 mb-3 ps-md-4">
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
