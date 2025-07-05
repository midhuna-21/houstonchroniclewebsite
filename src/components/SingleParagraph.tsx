import React from "react";
import ArticleWrapper from "./ArticleWrapper";

interface SingleParagraphProps {
  text: string;
}

const SingleParagraph: React.FC<SingleParagraphProps> = ({ text }) => {
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
        {text}
      </p>
    </ArticleWrapper>
  );
};

export default SingleParagraph;
