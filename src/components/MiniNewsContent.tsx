import React from 'react';

interface MiniNewsCardProps {
  category: string;
  title: string;
  image: string;
}

const MiniNewsCard: React.FC<MiniNewsCardProps> = ({ category, title, image }) => {
  return (
    <div className=" mb-4 section-new">
      <div style={{ flex: 1 }}>
        <p className="text-danger fw-bold text-uppercase mb-1">{category}</p>
        <h6 className="fw-bold mb-0">{title}</h6>
      </div>
      <div className="">
             <img
        src={image}
        alt={title}
        className=" section-new-image"
        
      />
      </div>
     
    </div>
  );
};

export default MiniNewsCard;
