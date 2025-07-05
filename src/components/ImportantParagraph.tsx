import React from "react";
import ArticleWrapper from "./ArticleWrapper";

interface ImportantParagraphProps {
  label: string;
  description: string;
}

const ImportantParagraph: React.FC<ImportantParagraphProps> = ({ label, description }) => {
  return (
    <ArticleWrapper>
     <p
        style={{
          fontSize: "16px",
          lineHeight: "1.6",
          color: "#222",
          margin: 0,
        }}
      >
        <strong>{label}:</strong>{" "}
        <span
          style={{
            textDecoration: "underline",
            textDecorationColor: "red",
            textDecorationThickness: "1px",
            textUnderlineOffset: "2px",
            color: "#222",
          }}
        >
          {description}
        </span>
      </p>
    </ArticleWrapper>
  );
};

export default ImportantParagraph;
