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
          <div className="col-12 col-lg-6" style={{ marginBottom: '1rem' }}>
            <Link href={`/${main.category}/${main.slug}`} className='text-decoration-none' title={`${main.slug}`}>
              <div>
                {/* <Image
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
                /> */}
                   <>
                                  <Image
                                    src={main.image || ""}
                                    alt={main.image || ""}
                                    title={main.title || ""}
                                    width={800}
                                    height={500}
                                    className="img-fluid mb-2 d-xl-none"
                                    style={{
                                      width: '100%',
                                      height: '400px',
                                      objectFit: 'cover',
                                    }}
                                  />
                
                                  <Image
                                    src={main.image || ""}
                                    alt={main.image || ""}
                                    title={main.title || ""}
                                    width={800}
                                    height={500}
                                    className="img-fluid mb-2 d-none d-xl-block"
                                    style={{
                                      width: '100%',
                                      height: '300px',
                                      objectFit: 'cover',
                                    }}
                                  />
                                </>
                <h2 className=" mb-2"
                  style={{
                    color: '#111111',
                    fontSize: '22.784px',
                    fontFamily: "'Archivo', Arial, sans-serif",
                    fontWeight: 700,
                    lineHeight: 1.2,

                  }}
                >{main.title}</h2>
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
                  <span style={{ color: '#555', marginLeft: '4px' }}>{main.date}</span>
                </div>
              </div>
            </Link>
          </div>

          <div className="col-12 col-lg-6">
            {side?.[0] && (
              <Link href={`/${side[0].category}/${side[0].slug}`} className='text-decoration-none' title={`${side[0].slug}`}>
                <div className="mb-3">
                  <h2 className="fw-bold mb-2"
                    style={{
                      color: '#111111',
                      fontSize: '22.784px',
                      fontFamily: "'Archivo', Arial, sans-serif",
                      fontWeight: 700,
                      lineHeight: 1.2,

                    }}
                  >{side[0].title}</h2>
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
                    <span style={{ color: '#555', marginLeft: '4px' }}>{side[0].date}</span>
                  </div>
                  <hr />
                </div>
              </Link>
            )}

            {side?.[1] && (
              <Link href={`/${side[1].category}/${side[1].slug}`} className='text-decoration-none' title={`${side[1].slug}`}>
                <div>
                  {/* <Image
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
                  /> */}
                      <>
                                  <Image
                                    src={side[1].image || ""}
                                    alt={side[1].image || ""}
                                    title={side[1].title || ""}
                                    width={800}
                                    height={500}
                                    className="img-fluid mb-2 d-xl-none"
                                    style={{
                                      width: '100%',
                                      height: '400px',
                                      objectFit: 'cover',
                                    }}
                                  />
                
                                  <Image
                                    src={side[1].image || ""}
                                    alt={side[1].image || ""}
                                    title={side[1].title || ""}
                                    width={800}
                                    height={500}
                                    className="img-fluid mb-2 d-none d-xl-block"
                                    style={{
                                      width: '100%',
                                      height: '300px',
                                      objectFit: 'cover',
                                    }}
                                  />
                                </>
                  <h2 className="mb-2 fw-bold"
                    style={{
                      color: '#111111',
                      fontSize: '22.784px',
                      fontFamily: "'Archivo', Arial, sans-serif",
                      fontWeight: 700,
                      lineHeight: 1.2,

                    }}
                  >{side[1].title}</h2>
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
                    <span style={{ color: '#555', marginLeft: '4px' }}>{side[1].date}</span>
                  </div>
                </div>
              </Link>
            )}
          </div>
        </div>

        <hr className="my-4" />
        <div className="row">
          <div className="col-12 col-lg-6 border-end d-none d-lg-flex pe-lg-4">
            <div className="row">
              {bottomCards?.slice(0, 2).map((item, index) => (
                <div className="col-12 py-3 px-2" key={index}>
                  <Link href={`/${item.category}/${item.slug}`} className='text-decoration-none' title={`${item.slug}`}>
                    <div className="row g-2 align-items-center">

                      <div className="col-9">
                        <h2 className="fw-bold mb-1" style={{
                          fontSize: '18px',
                          fontFamily: "'Archivo', Arial, sans-serif",
                          fontWeight: 700,
                          color: '#111111',
                          lineHeight: 1.2,

                        }}
                        >
                          {item.title}
                        </h2>
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
                          <span style={{ color: '#555', marginLeft: '4px' }}>{item.date}</span>
                        </div>
                      </div>

                      <div className="col-3">
                        {item.image && (
                          <Image
                            src={item.image || ""}
                            alt={item.title}
                            title={item.title}
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

            <div className="col-12 col-lg-6 d-flex d-lg-none pe-lg-4">
            <div className="row">
              {bottomCards?.slice(0, 2).map((item, index) => (
                <div className="col-12 py-3 px-2" key={index}>
                  <Link href={`/${item.category}/${item.slug}`} className='text-decoration-none' title={`${item.slug}`}>
                    <div className="row g-2 align-items-center">

                      <div className="col-9">
                        <h2 className="fw-bold mb-1" style={{
                          fontSize: '18px',
                          fontFamily: "'Archivo', Arial, sans-serif",
                          fontWeight: 700,
                          color: '#111111',
                          lineHeight: 1.2,

                        }}
                        >
                          {item.title}
                        </h2>
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
                          <span style={{ color: '#555', marginLeft: '4px' }}>{item.date}</span>
                        </div>
                      </div>

                      <div className="col-3">
                        {item.image && (
                          <Image
                            src={item.image || ""}
                            alt={item.title}
                            title={item.title}
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

          <div className="col-12 col-lg-6 ps-lg-4">
            <div className="row">
              {bottomCards?.slice(2, 4).map((item, index) => (
                <div className="col-12 py-3 px-2" key={index + 2}>
                  <Link href={`/${item.category}/${item.slug}`} className='text-decoration-none' title={`${item.slug}`}>
                    <div className="row g-2 align-items-center">

                      <div className="col-9">
                        <h2 className="fw-bold mb-1" style={{
                          fontSize: '18px',
                          color: '#111111',
                          fontFamily: "'Archivo', Arial, sans-serif",
                          fontWeight: 700,
                          lineHeight: 1.2,

                        }}
                        >
                          {item.title}
                        </h2>

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
                          <span style={{ color: '#555', marginLeft: '4px' }}>{item.date}</span>
                        </div>
                      </div>

                      <div className="col-3">
                        {item.image && (
                          <Image
                            src={item.image || ""}
                            alt={item.title}
                            title={item.title}
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