// ContentLayout.tsx
import React from "react";
import SectionWrapper from "./SectionWrapper";

interface NewsItem {
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
<SectionWrapper title={main.category || ""}>
      {/* Top section with equal width columns */}
      <div className="row">
        {/* Left: Main Card (50% width) */}
        <div className="col-md-6">
          <div>
            <img
              src={main.image}
              alt={main.title}
              className="img-fluid mb-2"
              style={{ 
                objectFit: "cover", 
                width: "100%", 
                height: "300px" // Fixed height for consistency
              }}
            />
            <h4 className="fw-bold mb-2">{main.title}</h4>
            <p className="text-muted small">{main.description}</p>
          </div>
        </div>

        {/* Right: Side content (50% width) */}
        <div className="col-md-6">
          {/* First trending (text only) */}
          {side?.[0] && (
            <div className="mb-3">
              <h5 className="fw-bold mb-2">{side[0].title}</h5>
              <p className="text-muted small">{side[0].description}</p>
              <hr />
            </div>
          )}

          {/* Second trending (image + text) */}
          {side?.[1] && (
            <div>
              <img
                src={side[1].image}
                alt={side[1].title}
                className="img-fluid mb-2"
                style={{ 
                  objectFit: "cover", 
                  width: "100%", 
                  height: "300px" // Smaller fixed height
                }}
              />
              <h5 className="fw-bold mb-2">{side[1].title}</h5>
            </div>
          )}
        </div>
      </div>

      {/* Divider */}
      <hr className="my-4" />

      {/* Bottom section - 2x2 Grid with proper alignment */}
 <div className="row">
  {/* Left column - 2 items stacked */}
  <div className="col-md-6 border-end pe-md-4"> {/* Right padding */}
    <div className="row">
      {bottomCards?.slice(0, 2).map((item, index) => (
        <div className="col-12 py-3 px-2" key={index}>
          <div className="row g-2 align-items-center">
            <div className="col-9">
             <p className="fw-bold mb-1" style={{ fontSize: "1.2rem" }}>
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

          {/* Horizontal line (not full width) */}
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

  {/* Right column - 2 items stacked */}
  <div className="col-md-6 ps-md-4"> {/* Left padding */}
    <div className="row">
      {bottomCards?.slice(2, 4).map((item, index) => (
        <div className="col-12 py-3 px-2" key={index + 2}>
          <div className="row g-2 align-items-center">
            <div className="col-9">
           <p className="fw-bold mb-1" style={{ fontSize: "1.2rem" }}>
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

          {/* Horizontal line (not full width) */}
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
  );
};

export default ContentLayout;