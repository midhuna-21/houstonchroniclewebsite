'use client';

import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const data = [
  { id: 1, name: 'Chess', image: '/icons/chess.png' },
  { id: 2, name: 'Soccer', image: '/icons/soccer.png' },
  { id: 3, name: 'Tennis', image: '/icons/tennis.png' },
  { id: 4, name: 'Basketball', image: '/icons/basketball.png' },
  { id: 5, name: 'Poker', image: '/icons/poker.png' },
  { id: 6, name: 'Baseball', image: '/icons/baseball.png' },
  { id: 7, name: 'Golf', image: '/icons/golf.png' },
];

export default function LetsPlaySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [showArrows, setShowArrows] = useState(false);

  const scroll = (dir: 'left' | 'right') => {
    if (!containerRef.current) return;
    const scrollAmount = 150;
    containerRef.current.scrollBy({
      left: dir === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const checkScroll = () => {
      if (!containerRef.current) return;
      const { scrollWidth, clientWidth } = containerRef.current;
      setShowArrows(scrollWidth > clientWidth);
    };
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  return (
    <div
      className="w-100 bg-white py-4 border-top border-5 border-dark"
      style={{ marginLeft: 0, marginRight: 0, paddingLeft: 0, paddingRight: 0 }}
    >
      <div className="w-100 px-4">
      <h5 className="mb-4 fw-bold">Let'sPlay</h5>

        <div
          className="position-relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div
            ref={containerRef}
            className="d-flex overflow-auto gap-3 pb-2"
            style={{ scrollBehavior: 'smooth', scrollbarWidth: 'none' }}
          >
            {data.map((item) => (
              <div
                key={item.id}
                className="d-flex align-items-center border rounded px-2 py-1"
                style={{
                  whiteSpace: 'nowrap',
                  backgroundColor: '#f9f9f9',
                }}
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  width={30}
                  height={30}
                  style={{ objectFit: 'contain', marginRight: '8px' }}
                />
                <span className="small">{item.name}</span>
              </div>
            ))}
          </div>

          {showArrows && isHovered && (
            <button
              onClick={() => scroll('left')}
              className="position-absolute top-50 start-0 translate-middle-y"
              style={{
                border: '1px solid red',
                borderRadius: '50%',
                width: '30px',
                height: '30px',
                backgroundColor: 'transparent',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <FaChevronLeft size={14} color="red" />
            </button>
          )}

          {showArrows && isHovered && (
            <button
              onClick={() => scroll('right')}
              className="position-absolute top-50 end-0 translate-middle-y"
              style={{
                border: '1px solid red',
                borderRadius: '50%',
                width: '30px',
                height: '30px',
                backgroundColor: 'transparent',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <FaChevronRight size={14} color="red" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
