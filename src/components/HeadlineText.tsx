import React from "react";
import ArticleWrapper from "./ArticleWrapper";

interface HeadlineTextProps {
  text: string;
}

const HeadlineText: React.FC<HeadlineTextProps> = ({ text }) => {
  return (
    <ArticleWrapper>
      <h3
        style={{
          fontWeight: "bold",
          fontSize: "20px",
          color: "#000",
          margin: 0,
        }}
      >
        {text}
      </h3>
    </ArticleWrapper>
  );
};

export default HeadlineText;
