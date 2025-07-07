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
          fontSize: '29px',
          fontFamily: "'Rubik', Arial, sans-serif",
          fontWeight: 600
        }}
      >
        {text}
      </h3>
    </ArticleWrapper>
  );
};

export default HeadlineText;
