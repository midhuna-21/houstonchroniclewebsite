import React from 'react';

type TrendingNavProps = {
  items: string[];
};

const TrendingNav: React.FC<TrendingNavProps> = ({ items }) => {
  if (!items || items.length === 0) return null;

  return (
    <nav
      className="d-flex align-items-center px-3 py-2"
      style={{
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
      }}
    >
      <strong className="me-2 flex-shrink-0 " style={{
        color: '#000000', fontSize: '16px',
        fontFamily: "'Rubik', Arial, sans-serif", fontWeight: 600
      }}>Trending:</strong>
      <div className="d-flex align-items-center gap-3" style={{ overflow: 'hidden' }}>
        {items.map((item, index) => (
          <span
            key={index}
            className="d-flex align-items-center flex-shrink-0"
          >
            <span style={{
              color: '#000000', fontSize: '16px',
              fontFamily: "'Rubik', Arial, sans-serif", fontWeight: 400
            }}
            >{item}</span>
            {index < items.length - 1 && (
              <span className="mx-2 text-muted">|</span>
            )}
          </span>
        ))}
      </div>
    </nav>
  );
};

export default TrendingNav;
