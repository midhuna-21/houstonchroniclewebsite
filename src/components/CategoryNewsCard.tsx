import React from 'react';
import SectionWrapper from './SectionWrapper';
import Link from 'next/link';
import { BiCalendar } from 'react-icons/bi';

interface CategoryNewsCardProps {
  data: {
    title: string;
    description: string;
    shortdescription: string;
    image: string;
    author?: string;
    slug: string;
    date: string;
    category: string;
  };
}

const CategoryNewsCard: React.FC<CategoryNewsCardProps> = ({ data }) => {
  const { title, description, shortdescription, image, author, slug, date, category } = data;

  return (

    <div className="border-bottom mb-4 ">
      <Link href={`/${category}/${slug}`} className='text-decoration-none'>

        <div className="row align-items-start">
          <div className="col-12 col-md-9">
            <h4
              style={{
                fontSize: '22.784px',
                fontWeight: 700,
                fontFamily: "'Archivo', Arial, sans-serif",
                marginBottom: '0.5rem',
                color: '#111',
              }}
            >
              {title}
            </h4>
            <p
              style={{
                fontSize: '16px',
                fontFamily: "'Rubik', Arial, sans-serif",
                fontWeight: 400,
                color: '#444',
                marginBottom: '0.5rem',
              }}
            >
              {shortdescription}
            </p>
            {author && (
              <p
                style={{
                  fontWeight: 700,
                  fontSize: '14px',
                  fontFamily: "'Rubik', Arial, sans-serif",
                  color: '#666',
                  textTransform: 'uppercase',
                }}
              >
                BY {author}
              </p>
            )}
          </div>

          <div className="col-12 col-md-3">
            <img
              src={image}
              alt={title}
              className="img-fluid"
              style={{
                width: '100%',
                height: '150px',
                objectFit: 'cover',
              }}
            />
          </div>
          <div
            className="d-flex align-items-center mt-1"
            style={{
              fontSize: '10px',
              fontWeight: 200,
              fontFamily: "'Rubik', Arial, sans-serif",
            }}
          >
            <BiCalendar size={10} style={{ marginRight: '4px', color: '#000' }} />
            <span style={{ color: '#000', opacity: 0.6 }}>Published on</span>
            <span style={{ color: '#aaa', marginLeft: '4px' }}>{date}</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CategoryNewsCard;
