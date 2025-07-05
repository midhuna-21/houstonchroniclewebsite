'use client';

import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { gameData } from '@/data/homeData';

export default function LetsPlaySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const updateScrollState = () => {
    if (!containerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 1);
  };

  useEffect(() => {
    updateScrollState();
    window.addEventListener('resize', updateScrollState);
    return () => window.removeEventListener('resize', updateScrollState);
  }, []);

  const scroll = (dir: 'left' | 'right') => {
    if (!containerRef.current) return;
    const scrollAmount = containerRef.current.offsetWidth / 1.1;
    containerRef.current.scrollBy({
      left: dir === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
    setTimeout(updateScrollState, 300);
  };

  return (
    <div
      className="w-100 bg-white mt-5 border-top border-2 border-dark"
      style={{ paddingTop: '0.5rem'}}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="w-100">
        <h5 className="fw-bold">Let's Play</h5>

        <div className="position-relative">

  <div
            ref={containerRef}
            onScroll={updateScrollState}
            className="d-flex overflow-auto"
            style={{
              scrollBehavior: 'smooth',
              scrollbarWidth: 'none',
               gap: '14px', // less space between items
            }}
            >
         {gameData.map((game) => (
  <div
    key={game.id}
    className="d-flex align-items-center flex-shrink-0">
    <div
      className="d-flex align-items-center rounded"
      style={{
        width: '60px',
        height: '60px',
        flexShrink: 0,
      }}
    >
      <Image
        src={game.image}
        alt={game.name}
        width={40}
        height={40}
        style={{ objectFit: 'contain' }}
      />
    </div>
    <span
      className="fw-bold"
      style={{
        fontSize: '1.05rem',
        whiteSpace: 'nowrap',
        marginLeft: '12px',
      }}
    >
      {game.name}
    </span>
  </div>
))}
 
          </div>
          {isHovered && canScrollLeft && (
            <button
              onClick={() => scroll('left')}
              className="position-absolute top-50 start-0 translate-middle-y"
              style={{
                border: '1px solid red',
                borderRadius: '50%',
                width: '30px',
                height: '30px',
                backgroundColor: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 2,
              }}
            >
              <FaChevronLeft size={10} color="red" />
            </button>
          )}

          {isHovered && canScrollRight && (
            <button
              onClick={() => scroll('right')}
              className="position-absolute top-50 end-0 translate-middle-y"
              style={{
                border: '1px solid red',
                borderRadius: '50%',
                width: '34px',
                height: '34px',
                backgroundColor: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 2,
              }}
            >
              <FaChevronRight size={10} color="red" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
