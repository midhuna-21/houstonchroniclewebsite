import React from "react";
import ArticleWrapper from "./ArticleWrapper";

interface NotedParagraphProps {
  text: string;
}

const NotedParagraph: React.FC<NotedParagraphProps> = ({ text }) => {
  return (
    <ArticleWrapper>
      <p
        style={{
          fontSize: "16px",
          lineHeight: "1.6",
          color: "#222",
          margin: 0,
          textDecoration: "underline",
          textDecorationColor: "red",
          textDecorationThickness: "2px",
          textUnderlineOffset: "3px",
          wordBreak: "break-word", 
        }}
      >
        {text}
      </p>
    </ArticleWrapper>
  );
};

export default NotedParagraph;
