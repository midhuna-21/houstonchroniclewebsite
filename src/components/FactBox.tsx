import ArticleWrapper from "./ArticleWrapper";

export default function Factbox() {
  return (
    <ArticleWrapper>
    <section
      style={{
        borderLeft: "4px solid #004080",
        padding: "1rem 1.5rem",
        // margin: "2rem 0",
        background: "#f9f9f9",
        fontFamily: "Georgia, serif",
        lineHeight: "1.4",
        // maxWidth: "850px", // 🔹 SAME width as Timeline & PullQuotes
        marginLeft: "auto", 
        marginRight: "auto", // 🔹 keeps it centered
      }}
    >
      <h2
        style={{
          fontSize: "1.2rem",
          marginBottom: "1rem",
          fontWeight: "bold",
          color: "#004080",
          textTransform: "uppercase",
          letterSpacing: "0.5px",
        }}
      >
        Factbox
      </h2>

      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        <li style={{ marginBottom: "0.6rem", fontSize: "0.95rem" }}>
          <span
            style={{
              fontWeight: "bold",
              color: "#333",
              display: "inline-block",
              width: "140px",
            }}
          >
            Full Name:
          </span>{" "}
          Wanda Vázquez Garced
        </li>

        <li style={{ marginBottom: "0.6rem", fontSize: "0.95rem" }}>
          <span
            style={{
              fontWeight: "bold",
              color: "#333",
              display: "inline-block",
              width: "140px",
            }}
          >
            Born:
          </span>{" "}
          July 9, 1960, Bayamón, Puerto Rico
        </li>

        <li style={{ marginBottom: "0.6rem", fontSize: "0.95rem" }}>
          <span
            style={{
              fontWeight: "bold",
              color: "#333",
              display: "inline-block",
              width: "140px",
            }}
          >
            Education:
          </span>{" "}
          University of Puerto Rico (BA), Interamerican University of Puerto Rico School of Law (JD)
        </li>

        <li style={{ marginBottom: "0.6rem", fontSize: "0.95rem" }}>
          <span
            style={{
              fontWeight: "bold",
              color: "#333",
              display: "inline-block",
              width: "140px",
            }}
          >
            Career Highlights:
          </span>{" "}
          Prosecutor specializing in domestic violence; Secretary of Justice; Governor of Puerto Rico (2019–2021)
        </li>

        <li style={{ marginBottom: "0.6rem", fontSize: "0.95rem" }}>
          <span
            style={{
              fontWeight: "bold",
              color: "#333",
              display: "inline-block",
              width: "140px",
            }}
          >
            Notable First:
          </span>{" "}
          First woman to serve as Governor after ascending from Secretary of Justice
        </li>

        <li style={{ marginBottom: "0.6rem", fontSize: "0.95rem" }}>
          <span
            style={{
              fontWeight: "bold",
              color: "#333",
              display: "inline-block",
              width: "140px",
            }}
          >
            Current Status:
          </span>{" "}
          Awaiting sentencing on campaign finance violation (scheduled Oct 15, 2025)
        </li>
      </ul>
    </section>
    </ArticleWrapper>
  );
}
