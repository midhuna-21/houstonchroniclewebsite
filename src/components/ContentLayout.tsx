import React from "react";
import SectionWrapper from "./SectionWrapper";
import Link from "next/link";

interface NewsItem {
  slug: string;
  category?: string;
  title: string;
  image?: string;
  description?: string;
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

          <div>
            <Link href={`/details/${main.slug}`}>
              <img
                src={main.image}
                alt={main.title}
                className="img-fluid mb-2"
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "300px" 
                }}
              />
            </Link>
            <h4 className=" mb-2"
              style={{
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
            >{main.description}</p>
          </div>
        </div>

        <div className="col-md-6">
          {side?.[0] && (
            <div className="mb-3">
              <h5 className="fw-bold mb-2"
                style={{
                  fontSize: '18px',
                  fontFamily: "'Archivo', Arial, sans-serif",
                  fontWeight: 700
                }}
              >{side[0].title}</h5>
              <p className="text-muted small"
                style={{
                  fontSize: '16px',
                  fontFamily: "'Rubik', Arial, sans-serif",
                }}
              >{side[0].description}</p>
              <hr />
            </div>
          )}

          {side?.[1] && (
            <div>
              <img
                src={side[1].image}
                alt={side[1].title}
                className="img-fluid mb-2"
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "300px"
                }}
              />
              <h5 className="mb-2 fw-bold"
                style={{
                  fontSize: '22.784px',
                  fontFamily: "'Archivo', Arial, sans-serif",
                  fontWeight: 700
                }}
              >{side[1].title}</h5>
            </div>
          )}
        </div>
      </div>
      <hr className="my-4" />
      <div className="row">
        <div className="col-md-6 border-end pe-md-4"> 
          <div className="row">
            {bottomCards?.slice(0, 2).map((item, index) => (
              <div className="col-12 py-3 px-2" key={index}>
                <div className="row g-2 align-items-center">
                  <div className="col-9">
                    <p className="fw-bold mb-1" style={{
                      fontSize: '18px',
                      fontFamily: "'Archivo', Arial, sans-serif",
                      fontWeight: 700
                    }}
                    >
                      {item.title}
                    </p>
                  </div>
                  <div className="col-3">
                    {item.image && (
                      <img
                        src={item.image}
                        alt={item.title}
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
                <div className="row g-2 align-items-center">
                  <div className="col-9">
                    <p className="fw-bold mb-1" style={{
                      fontSize: '18px',
                      fontFamily: "'Archivo', Arial, sans-serif",
                      fontWeight: 700
                    }}
                    >
                      {item.title}
                    </p>

                  </div>
                  <div className="col-3">
                    {item.image && (
                      <img
                        src={item.image}
                        alt={item.title}
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