import React from "react";
import ArticleWrapper from "./ArticleWrapper";

interface ItalicParagraphProps {
  text: string;
}

const ItalicParagraph: React.FC<ItalicParagraphProps> = ({ text }) => {
  return (
    <ArticleWrapper>
      <p
        style={{
          fontSize: "14px",
          fontStyle: "italic",
          color: "#333",
          margin: 0,
        }}
      >
       {text}
      </p>
    </ArticleWrapper>
  );
};

export default ItalicParagraph;
