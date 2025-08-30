import React from "react";
import ArticleWrapper from "./ArticleWrapper";

export default function PullQuotes() {
  return (
    <ArticleWrapper>
    <section
      style={{
        fontFamily:
          'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      }}
    >
     
        <h2
          style={{
            fontSize: "1.8rem",
            fontWeight: 700,
            color: "#111827",
            marginBottom: "12px",
            textAlign: "center",
          }}
        >
            Pull-Quotes
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
      

      {/* Quotes Container */}
      <div
        style={{
          margin: "3rem auto",
          position: "relative",
        //   paddingLeft: "50px",
        }}
      >
        {/* Quote 1 */}
        <blockquote
          style={{
            background: "#fff",
            margin: "0 0 32px 0",
            padding: "18px",
            borderRadius: "16px",
            boxShadow:
              "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
            position: "relative",
            borderLeft: "3px solid #475569",
          }}
        >
          {/* <div
            style={{
              position: "absolute",
              top: "-8px",
              left: "24px",
              width: "32px",
              height: "32px",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "linear-gradient(135deg, #475569, #64748b)",
              color: "white",
              fontSize: "1.25rem",
              fontWeight: "bold",
            }}
          >
            “
          </div> */}
          <p
            style={{
              fontSize: "1.125rem",
              lineHeight: "1.7",
              color: "#374151",
              fontStyle: "italic",
              margin: "0 0 16px 0",
              paddingTop: "8px",
            }}
          >
            "There was no bribery here. I didn't take a single cent."
          </p>
          <cite
            style={{
              color: "#6b7280",
              fontSize: "0.875rem",
              fontWeight: "500",
              display: "block",
              textAlign: "right",
              borderTop: "1px solid #e5e7eb",
              paddingTop: "12px",
            }}
          >
            — Wanda Vázquez, Aug 27, 2025
          </cite>
        </blockquote>

        {/* Quote 2 */}
        <blockquote
          style={{
            background: "#fff",
            margin: "0 0 32px 0",
            padding: "18px",
            borderRadius: "16px",
            boxShadow:
              "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
            position: "relative",
            borderLeft: "3px solid #475569",
          }}
        >
          {/* <div
            style={{
              position: "absolute",
              top: "-8px",
              left: "24px",
              width: "32px",
              height: "32px",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "linear-gradient(135deg, #475569, #64748b)",
              color: "white",
              fontSize: "1.25rem",
              fontWeight: "bold",
            }}
          >
            
          </div> */}
          <p
            style={{
              fontSize: "1.125rem",
              lineHeight: "1.7",
              color: "#374151",
              fontStyle: "italic",
              margin: "0 0 16px 0",
              paddingTop: "8px",
            }}
          >
            "They forgot to ask him for his green card. These are situations that happen."
          </p>
          <cite
            style={{
              color: "#6b7280",
              fontSize: "0.875rem",
              fontWeight: "500",
              display: "block",
              textAlign: "right",
              borderTop: "1px solid #e5e7eb",
              paddingTop: "12px",
            }}
          >
            — Vázquez outside court
          </cite>
        </blockquote>

        {/* Quote 3 */}
        <blockquote
          style={{
            background: "#fff",
            margin: "0 0 32px 0",
            padding: "18px",
            borderRadius: "16px",
            boxShadow:
              "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
            position: "relative",
            borderLeft: "3px solid #475569",
          }}
        >
          {/* <div
            style={{
              position: "absolute",
              top: "-8px",
              left: "24px",
              width: "32px",
              height: "32px",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "linear-gradient(135deg, #475569, #64748b)",
              color: "white",
              fontSize: "1.25rem",
              fontWeight: "bold",
            }}
          >
            “
          </div> */}
          <p
            style={{
              fontSize: "1.125rem",
              lineHeight: "1.7",
              color: "#374151",
              fontStyle: "italic",
              margin: "0 0 16px 0",
              paddingTop: "8px",
            }}
          >
            "Leadership means carrying the weight of others' mistakes as if they were your own."
          </p>
          <cite
            style={{
              color: "#6b7280",
              fontSize: "0.875rem",
              fontWeight: "500",
              display: "block",
              textAlign: "right",
              borderTop: "1px solid #e5e7eb",
              paddingTop: "12px",
            }}
          >
            — Conservative analyst, 2025
          </cite>
        </blockquote>
      </div>
    </section>
    </ArticleWrapper>
  );
}
