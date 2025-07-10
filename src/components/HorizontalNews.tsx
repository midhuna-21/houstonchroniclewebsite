import Link from 'next/link';
import React from 'react';

interface HorizontalNewsProps {
  data: {
    image: string;
    title: string;
   category:string;
   slug:string;
  }[];
}

const HorizontalNews: React.FC<HorizontalNewsProps> = ({ data }) => {
  return (
    <div className='mb-5'>
      <div className="row gx-4 gy-4">
        {data.slice(0, 4).map((item, idx) => (
          <div key={idx} className="col-12 col-sm-6 col-lg-3">
            <Link href={`/details/${item.slug}`} className='text-decoration-none'>

            <div
              className="h-100 text-start pe-3"
              style={{
                borderRight: '0.5px solid rgba(14, 14, 14, 0.15)',
              }}
            >
            <img
  src={item.image}
  alt={item.title}
  className="img-fluid mb-2"
  style={{
    width: '100%',
    height: '160px', 
    objectFit: 'cover', 
    display: 'block',
  }}
/>

              
              <p
  style={{
    fontSize: '14.224px',
    fontWeight: 700,
    color: '#b50021',
    marginBottom: '4px',
    textTransform: 'uppercase',
    fontFamily: "'Rubik', Arial, sans-serif",
  }}
>
  {item.category}
</p>

              <h6
                className="fw-bold mb-0"
                style={{
                  color: '#111111',
                  fontSize: '18px',
                  fontWeight: 700,
                  fontFamily: "'Archivo', Arial, sans-serif",
                }}
              >
                {item.title}
              </h6>
            </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HorizontalNews;
