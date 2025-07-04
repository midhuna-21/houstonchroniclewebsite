import React from "react";

interface SidebarSectionProps {
  title: string;
  headline: string;
  image: string;
}

const SidebarSection: React.FC<SidebarSectionProps> = ({ title, headline, image }) => {
  return (
    <div className="border-bottom pb-3">
      <h6 className="fw-bold text-uppercase mb-2">{title}</h6>
      <div className="d-flex">
        <div className="flex-grow-1 pe-2">
          <p className="fw-bold mb-0" style={{ fontSize: "1rem", lineHeight: "1.2" }}>
            {headline}
          </p>
        </div>
        <div style={{ width: "80px", flexShrink: 0 }}>
          <img
            src={image}
            alt="Editorial thumbnail"
            className="img-fluid"
            style={{
              objectFit: "cover",
              height: "60px",
              width: "100%",
              borderRadius: "4px"
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default SidebarSection;
