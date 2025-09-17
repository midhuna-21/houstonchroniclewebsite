import ArticleWrapper from "./ArticleWrapper";

export default function Timeline() {
  const events = [
    {
      year: "2019",
      detail: "Becomes Governor of Puerto Rico after Ricardo Rosselló’s resignation.",
    },
    {
      year: "2020",
      detail: "Faces reelection bid amid pandemic and fiscal stress.",
    },
    {
      year: "2022",
      detail: "Arrested in connection with alleged bribery scheme; pleads not guilty.",
    },
    {
      year: "2023–2024",
      detail: "Legal proceedings drag on, casting shadow over her political legacy.",
    },
    {
      year: "Aug 27, 2025",
      detail: "Pleads guilty to campaign finance violation, stresses no money received.",
    },
    {
      year: "Oct 15, 2025",
      detail: "Sentencing date set.",
    },
  ];

  return (
    <ArticleWrapper>

    <section
      style={{
        paddingTop:'40px',
        paddingBottom:'20px',

        fontFamily:
          'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      }}
    >
      {/* Header */}
      <div style={{ margin: "0 auto 20px" }}>
        <h2
          style={{
            fontSize: "1.8rem",
            fontWeight: 700,
            color: "#111827",
            marginBottom: "12px",
            textAlign: "center",
          }}
        >
          Timeline of Key Events
        </h2>
        <div
          style={{
            width: "60px",
            height: "3px",
            margin: "0 auto",
            background: "linear-gradient(to right, #475569, #1e3a8a)",
            borderRadius: "3px",
          }}
        ></div>
      </div>

      {/* Timeline */}
      <div
        style={{
          margin: "0 auto",
          position: "relative",
          // paddingLeft: "50px",
        }}
      >
        {/* Vertical line */}
        <div
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            // left: "28px",
            width: "2px",
            // background: "#475569",
          }}
        ></div>

        {events.map((event, idx) => (
          <div key={idx} style={{ position: "relative", marginBottom: "30px" }}>
            {/* Dot */}
            <div
              style={{
                position: "absolute",
                left: "20px",
                width: "14px",
                height: "14px",
                background: "linear-gradient(to bottom right, #334155, #1e3a8a)",
                border: "3px solid #fff",
                borderRadius: "50%",
                boxShadow: "0 1px 4px rgba(0,0,0,0.2)",
              }}
            ></div>

            {/* Content */}
            <div style={{ marginLeft: "32px" }}>
              {/* Year Badge */}
              <div style={{ marginBottom: "12px" }}>
                <span
                  style={{
                    display: "inline-block",
                    padding: "6px 14px",
                    background: "linear-gradient(to right, #1e293b, #1e3a8a)",
                    color: "white",
                    borderRadius: "9999px",
                    fontWeight: 600,
                    fontSize: "0.8rem",
                    boxShadow: "0 2px 4px rgba(0,0,0,0.15)",
                  }}
                >
                  {event.year}
                </span>
              </div>

              {/* Card */}
              <div
                style={{
                  background: "white",
                  border: "1px solid #f3f4f6",
                  borderRadius: "10px",
                  padding: "18px",
                  position: "relative",
                  boxShadow: "0 3px 8px rgba(0,0,0,0.05)",
                  transition: "all 0.3s ease",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "2px",
                    background: "linear-gradient(to right, #475569, #1e40af)",
                    borderTopLeftRadius: "10px",
                    borderTopRightRadius: "10px",
                    opacity: 0.6,
                  }}
                ></div>

                <p
                  style={{
                    color: "#374151",
                    lineHeight: "1.5",
                    fontSize: "0.95rem",
                    fontWeight: 500,
                  }}
                >
                  {event.detail}
                </p>

                <div
                  style={{
                    marginTop: "12px",
                    paddingTop: "10px",
                    borderTop: "1px solid #f3f4f6",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    fontSize: "0.7rem",
                    color: "#9ca3af",
                  }}
                >
                 
                
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
    </ArticleWrapper>
  );
}
