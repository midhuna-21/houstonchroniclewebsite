import ArticleWrapper from "./ArticleWrapper";

export default function KeyTakeaways() {
  return (
    <ArticleWrapper>

    <section
      style={{
      marginTop: "40px", 
        overflow: "hidden",
      }}
    >
      {/* Heading */}
      <div
        style={{
          textAlign: "center",
          padding: "1.5rem 1rem 1rem 0rem",
        }}
      >
        <h2
          style={{
            fontSize: "1.6rem",
            fontWeight: 700,
            color: "#111827",
            margin: 0,
          }}
        >
          Key Takeaways
        </h2>
        <div
          style={{
            width: "60px",
            height: "3px",
            background: "linear-gradient(90deg, #1e40af 0%, #3b82f6 100%)",
            margin: "0.5rem auto 0 auto",
            borderRadius: "2px",
          }}
        />
      </div>

      {/* Content */}
      <div >
        <ul
          style={{
            margin: 0,
            padding: 0,
            listStyle: "none",
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
          }}
        >
          <li
            style={{
              position: "relative",
              paddingLeft: "2rem",
              fontSize: "1rem",
              lineHeight: 1.7,
              color: "#374151",
            }}
          >
            <span
              style={{
                position: "absolute",
                left: 0,
                top: "0.5rem",
                width: "12px",
                height: "12px",
                backgroundColor: "#716e6eff",
                borderRadius: "50%",
                display: "inline-block",
              }}
            />
            Wanda Vázquez's career is a testament to resilience and public
            service, even as her legal case complicates her legacy.
          </li>

          <li
            style={{
              position: "relative",
              paddingLeft: "2rem",
              fontSize: "1rem",
              lineHeight: 1.7,
              color: "#374151",
            }}
          >
            <span
              style={{
                position: "absolute",
                left: 0,
                top: "0.5rem",
                width: "12px",
                height: "12px",
                backgroundColor: "#716e6eff",
                borderRadius: "50%",
                display: "inline-block",
              }}
            />
            Her guilty plea reflects oversight rather than intentional corruption,
            underscoring the importance of compliance culture.
          </li>

          <li
            style={{
              position: "relative",
              paddingLeft: "2rem",
              fontSize: "1rem",
              lineHeight: 1.7,
              color: "#374151",
            }}
          >
            <span
              style={{
                position: "absolute",
                left: 0,
                top: "0.5rem",
                width: "12px",
                height: "12px",
                backgroundColor: "#716e6eff",
                borderRadius: "50%",
                display: "inline-block",
              }}
            />
            For conservative business leaders, her story offers enduring lessons
            on trust, accountability, and reputational management.
          </li>
        </ul>
      </div>
    </section>
    </ArticleWrapper>
  );
}
