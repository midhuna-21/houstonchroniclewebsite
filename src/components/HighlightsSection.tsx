'use client';

import Image from 'next/image';
import { latestHighlightsData } from '@/data/homeData';

export default function LatestHighlightsSection() {
  return (
    <section> 
      {latestHighlightsData.map((block, i) => (
        <div key={i}>
          <div className="row g-4 align-items-stretch mb-4 flex-column flex-md-row">
            {/* TEXT BLOCK */}
            <div className="col-md-3 text-start order-1 order-md-0 d-flex flex-column justify-content-between">
              <div>
                <p
                  className="mb-1"
                  style={{
                    fontWeight: 'bold',
                    textTransform: 'uppercase',
                    color: '#B10024',
                    fontSize: '0.85rem',
                  }}
                >
                  {block.category}
                </p>

                <h2 className="fw-bold text-black mb-2" style={{ fontSize: '1.6rem' }}>
                  {block.headline}
                </h2>

                <p
                  className="text-muted mb-3"
                  style={{ fontSize: '1rem', lineHeight: '1.5' }}
                >
                  {block.description}
                </p>

                <ul className="list-unstyled mt-2">
                  {block.related.map((text, idx) => (
                    <li key={idx} className="mb-2 d-flex">
                      <span
                        style={{
                          color: '#B10024',
                          fontSize: '1rem',
                          marginRight: '0.5rem',
                          lineHeight: '1',
                        }}
                      >
                        ■
                      </span>
                      <span className="fw-bold text-black small">{text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* IMAGE BLOCK */}
            {block.image && (
              <div className="col-md-6 order-0 order-md-1 d-flex align-items-stretch">
                <div
                  style={{
                    width: '100%',
                    height: '100%',
                    overflow: 'hidden',
                    position: 'relative',
                  }}
                >
                  <Image
                    src={block.image}
                    alt=""
                    width={1000}
                    height={400}
                    className="img-fluid"
                    style={{
                      objectFit: 'cover',
                      width: '93%',
                      height: '92%',
                      marginLeft: 0,
                      marginRight: 'auto',
                      display: 'block',
                    }}
                  />

                  {/* VERTICAL DIVIDER */}
                  <div
                    style={{
                      position: 'absolute',
                      top: 0,
                      right: 0,
                      height: '100%',
                      width: '0.2px',
                      backgroundColor: '#ccc',
                    }}
                  />
                </div>
              </div>
            )}

            {/* RIGHT SIDEBAR */}
            <div className="col-md-3 ps-3 text-start order-2">
              {block.extra?.map((item, idx) => (
                <div key={idx} className="mb-4">
                  {item.image && item.image.trim() !== '/' && (
                    <img
                      src={item.image}
                      alt=""
                      className="img-fluid mb-2"
                      style={{
                        width: '100%',
                        height: 'auto',
                        objectFit: 'cover',
                      }}
                    />
                  )}

                  <p
                    className="fw-bold mb-1"
                    style={{
                      color: '#B10024',
                      textTransform: 'uppercase',
                      fontSize: '0.8rem',
                    }}
                  >
                    {item.subcategory}
                  </p>

                  <p className="fw-bold text-black mb-1" style={{ fontSize: '1rem' }}>
                    {item.title}
                  </p>

                  {item.related && item.related.length > 0 && (
                    <ul className="list-unstyled mt-1">
                      {item.related.map((pt, pIdx) => (
                        <li key={pIdx} className="mb-2 d-flex">
                          <span
                            style={{
                              color: '#B10024',
                              fontSize: '1rem',
                              marginRight: '0.5rem',
                            }}
                          >
                            ■
                          </span>
                          <span className="fw-bold text-black small">{pt}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Divider between sidebar items */}
                  {block.extra && idx < block.extra.length - 1 && <hr className="mt-3" />}
                </div>
              ))}
            </div>
          </div>

          {/* UNDERLINE BETWEEN BLOCKS */}
          {i < latestHighlightsData.length - 1 && (
            <hr style={{
      borderTop: '1px solid #000',
      marginTop: '2rem',
      marginBottom: '4rem',
    }} />
          )}
        </div>
      ))}
    </section>
  );
}
