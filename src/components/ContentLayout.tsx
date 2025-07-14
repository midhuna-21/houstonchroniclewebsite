import React from "react";
import SectionWrapper from "./SectionWrapper";
import Link from "next/link";
import { BiCalendar } from "react-icons/bi";
import Image from "next/image";

interface NewsItem {
  slug: string;
  category?: string;
  title: string;
  image?: string;
  shortdescription: string;
  date: string;
}

interface ContentLayoutProps {
  data: {
    main: NewsItem;
    side: NewsItem[];
    bottomCards: NewsItem[];
  };
}

const ContentLayout: React.FC<ContentLayoutProps> = ({ data }) => {
  const { main, side, bottomCards } = data;

  return (
    <div style={{ marginBottom: '3rem' }}>
      <SectionWrapper title={main.category || ""}>
        <div className="row">
          <div className="col-md-6">
            <Link href={`/${main.category}/${main.slug}`} className='text-decoration-none'>

              <div>

                <Image
                  src={main.image || ""}
                  alt={main.title}
                  width={800}
                  height={300}
                  className="img-fluid mb-2"
                  style={{
                    objectFit: "cover",
                    width: "100%",
                    height: "300px",
                  }}
                />
                <h4 className=" mb-2"
                  style={{
                    color: '#111111',
                    fontSize: '22.784px',
                    fontFamily: "'Archivo', Arial, sans-serif",
                    fontWeight: 700
                  }}
                >{main.title}</h4>
                <p className="text-muted small"
                  style={{
                    color: "#444444",
                    fontSize: '16px',
                    fontFamily: "'Rubik', Arial, sans-serif",
                    fontWeight: 400
                  }}
                >{main.shortdescription}</p>
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
                  <span style={{ color: '#aaa', marginLeft: '4px' }}>{main.date}</span>
                </div>
              </div>
            </Link>
          </div>

          <div className="col-md-6">
            {side?.[0] && (
              <Link href={`/${side[0].category}/${side[0].slug}`} className='text-decoration-none'>

                <div className="mb-3">
                  <h5 className="fw-bold mb-2"
                    style={{
                      color: '#111111',
                      fontSize: '22.784px',
                      fontFamily: "'Archivo', Arial, sans-serif",
                      fontWeight: 700
                    }}
                  >{side[0].title}</h5>
                  <p className="text-muted small"
                    style={{
                      color: "#444444",
                      fontWeight: 400,
                      fontSize: '16px',
                      fontFamily: "'Rubik', Arial, sans-serif",
                    }}
                  >{side[0].shortdescription}</p>
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
                    <span style={{ color: '#aaa', marginLeft: '4px' }}>{side[0].date}</span>
                  </div>
                  <hr />
                </div>
              </Link>
            )}

            {side?.[1] && (
              <Link href={`/${side[1].category}/${side[1].slug}`} className='text-decoration-none'>

                <div>
                  <Image
                    src={side[1]?.image || ""}
                    alt={side[1]?.title}
                    width={800}
                    height={300}
                    className="img-fluid mb-2"
                    style={{
                      objectFit: "cover",
                      width: "100%",
                      height: "300px",
                    }}
                  />
                  <h5 className="mb-2 fw-bold"
                    style={{
                      color: '#111111',
                      fontSize: '22.784px',
                      fontFamily: "'Archivo', Arial, sans-serif",
                      fontWeight: 700
                    }}
                  >{side[1].title}</h5>
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
                    <span style={{ color: '#aaa', marginLeft: '4px' }}>{side[1].date}</span>
                  </div>
                </div>
              </Link>
            )}
          </div>
        </div>
        <hr className="my-4" />
        <div className="row">
          <div className="col-md-6 border-end pe-md-4">
            <div className="row">
              {bottomCards?.slice(0, 2).map((item, index) => (
                <div className="col-12 py-3 px-2" key={index}>
                  <Link href={`/${item.category}/${item.slug}`} className='text-decoration-none'>
                    <div className="row g-2 align-items-center">

                      <div className="col-9">
                        <p className="fw-bold mb-1" style={{
                          fontSize: '18px',
                          fontFamily: "'Archivo', Arial, sans-serif",
                          fontWeight: 700,
                          color: '#111111',
                        }}
                        >
                          {item.title}
                        </p>
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
                          <span style={{ color: '#aaa', marginLeft: '4px' }}>{item.date}</span>
                        </div>
                      </div>

                      <div className="col-3">
                        {item.image && (
                          <Image
                            src={item.image || ""}
                            alt={item.title}
                            width={400}
                            height={70}
                            className="img-fluid"
                            style={{
                              width: "100%",
                              height: "70px",
                              objectFit: "cover",
                              borderRadius: "0px",
                            }}
                          />
                        )}

                      </div>
                    </div>
                  </Link>

                  {index === 0 && (
                    <hr
                      style={{
                        marginTop: "16px",
                        marginBottom: "0px",
                        width: "90%",
                        marginLeft: "auto",
                        marginRight: "auto",
                        borderTop: "1px solid #666",
                      }}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="col-md-6 ps-md-4">
            <div className="row">
              {bottomCards?.slice(2, 4).map((item, index) => (
                <div className="col-12 py-3 px-2" key={index + 2}>
                  <Link href={`/${item.category}/${item.slug}`} className='text-decoration-none'>
                    <div className="row g-2 align-items-center">

                      <div className="col-9">
                        <p className="fw-bold mb-1" style={{
                          fontSize: '18px',
                          color: '#111111',
                          fontFamily: "'Archivo', Arial, sans-serif",
                          fontWeight: 700
                        }}
                        >
                          {item.title}
                        </p>

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
                          <span style={{ color: '#aaa', marginLeft: '4px' }}>{item.date}</span>
                        </div>
                      </div>

                      <div className="col-3">
                        {item.image && (
                          <Image
                            src={item.image || ""}
                            alt={item.title}
                            width={400}
                            height={70}
                            className="img-fluid"
                            style={{
                              width: "100%",
                              height: "70px",
                              objectFit: "cover",
                              borderRadius: "0px",
                            }}
                          />
                        )}
                      </div>
                    </div>
                  </Link>

                  {index === 0 && (
                    <hr
                      style={{
                        marginTop: "12px",
                        marginBottom: "0px",
                        width: "90%",
                        marginLeft: "auto",
                        marginRight: "auto",
                        borderTop: "1px solid #666",
                      }}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default ContentLayout;