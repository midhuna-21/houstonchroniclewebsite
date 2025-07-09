import React from 'react';
import SectionWrapper from './SectionWrapper';

interface CategoryNewsCardProps {
  data: {
    title: string;
    description: string;
    shortdescription:string;
    image: string;
    author?: string;
  };
}

const CategoryNewsCard: React.FC<CategoryNewsCardProps> = ({ data }) => {
  const { title, description,shortdescription, image, author } = data;

  return (

    <div className="border-bottom mb-4 ">

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
              height: 'auto',
              objectFit: 'cover',
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default CategoryNewsCard;
