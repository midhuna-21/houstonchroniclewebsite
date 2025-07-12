import React from "react";
import ArticleWrapper from "./ArticleWrapper";
import { parseRichText } from "@/lib/paresedUnderlineText";

interface ImportantParagraphProps {
  label: string;
  description: string;
}

const ImportantParagraph: React.FC<ImportantParagraphProps> = ({ label, description }) => {
  return (
    <ArticleWrapper>
      <p
        style={{
          fontSize: "18px",
          color: "#000000",
          margin: 0,
          fontFamily: "'Mullish', Verdana, sans-serif",
          fontWeight: 400
        }}
      >
        <strong>{label}:</strong>{" "}
        <span
           style={{
          fontSize: "18px",
          color: "#000000",
          margin: 0,
          fontFamily: "'Mullish', Verdana, sans-serif",
          fontWeight: 400
          }}
        >
           {parseRichText(description)}
        </span>
      </p>
    </ArticleWrapper>
  );
};

export default ImportantParagraph;
