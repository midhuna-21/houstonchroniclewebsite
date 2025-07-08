'use client';

import Image from 'next/image';
import { latestHighlightsData } from '@/data/homeData';

export default function LatestHighlightsSection() {
  return (
    <section >
        {latestHighlightsData.map((block, i) => (
          <div key={i}>
            <div className="row g-4 align-items-stretch flex-column flex-md-row">
              <div className="col-md-3 text-start order-1 order-md-0 d-flex flex-column justify-content-between">
                <div>
                  <p
                    style={{
                      color: "#B50021",
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      fontSize: '14.224px',
                      fontFamily: "'Rubik', Arial, sans-serif"
                    }}
                  >
                    {block.category}
                  </p>

                  <h2 style={{
                    color: '#111111',
                    fontSize: '22.784px',
                    fontFamily: "'Archivo', Arial, sans-serif",
                    fontWeight: 700
                  }}>
                    {block.headline}
                  </h2>

                  <p
                    className="text-muted mb-3"
                    style={{
                      color: '#444444',
                      fontSize: '16px',
                      fontFamily: "'Rubik', Arial, sans-serif",
                      fontWeight: 400
                    }}
                  >
                    {block.description}
                  </p>

                  <ul className="list-unstyled ">
                    {block.related.map((text, idx) => (
                      <li key={idx} className="mb-3 d-flex">
                        <span
                          style={{
                            display: 'inline-block',
                            width: '5px',
                            height: '5px',
                            backgroundColor: '#B50021',
                            marginRight: '0.5rem',
                            borderRadius: '1px',
                            position: 'relative',
                            top: '0.4em',
                            flexShrink: 0,
                          }}
                        />

                        <span
                          style={{
                            color: '#111111',
                            fontSize: '16px',
                            fontFamily: "'Archivo', Arial, sans-serif",
                            fontWeight: 600,
                            lineHeight: 1.5,
                          }}
                        >
                          {text}
                        </span>
                      </li>

                    ))}
                  </ul>
                </div>
              </div>

              {block.image && (
                <div className="col-md-6 order-0 order-md-1 d-flex align-items-stretch border-end">
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
                        marginLeft: 0,
                        marginRight: 'auto',
                        display: 'block',
                          width: '100%',
                          height: 'auto',
                          objectFit: 'cover',
                      }}
                    />

                    {/* <div
                      style={{
                        position: 'absolute',
                        top: 0,
                        height: '100%',
                        width: '0.2px',
                        backgroundColor: '#ccc',
                         right: '-130px',
                      }}
                    /> */}
                  </div>
                </div>
              )}

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
                      color: "#B50021",
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      fontSize: '14.224px',
                      fontFamily: "'Rubik', Arial, sans-serif"
                    }}
                    >
                      {item.subcategory}
                    </p>

                    <p className="fw-bold text-black mb-1" style={{
                    color: '#111111',
                    fontSize: '22.784px',
                    fontFamily: "'Archivo', Arial, sans-serif",
                    fontWeight: 700
                    }}>
                      {item.title}
                    </p>

                    {item.related && item.related.length > 0 && (
                      <ul className="list-unstyled mt-1">
                        {item.related.map((pt, pIdx) => (
                          <li key={idx} className="mb-2 d-flex">
                        <span
                          style={{
                            display: 'inline-block',
                            width: '5px',
                            height: '5px',
                            backgroundColor: '#B50021',
                            marginRight: '0.5rem',
                            borderRadius: '1px',
                            position: 'relative',
                            top: '0.4em',
                            flexShrink: 0,
                          }}
                        />

                        <span
                          style={{
                            color: '#111111',
                            fontSize: '16px',
                            fontFamily: "'Archivo', Arial, sans-serif",
                            fontWeight: 600,
                            lineHeight: 1.5,
                          }}
                        >
                          {pt}
                        </span>
                      </li>
                        ))}
                      </ul>
                    )}

                    {block.extra && idx < block.extra.length - 1 && <hr className="mt-3" />}
                  </div>
                ))}
              </div>
            </div>

            {i < latestHighlightsData.length - 1 && (
              <hr style={{
                borderTop: '1px solid #000',
                marginBottom: '4rem',
              }} />
            )}
          </div>
        ))}
    </section>
  );
}
