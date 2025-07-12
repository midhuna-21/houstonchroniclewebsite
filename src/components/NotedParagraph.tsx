import React from "react";
import ArticleWrapper from "./ArticleWrapper";
import { parseRichText } from "@/lib/paresedUnderlineText";

interface NotedParagraphProps {
  text: string;
}

const NotedParagraph: React.FC<NotedParagraphProps> = ({ text }) => {
  return (
    <ArticleWrapper>
      <p

        style={{
          fontSize: "18px",
          fontFamily: "'Mullish', Verdana, sans-serif",
          fontWeight: 400,
          color: "#000000",
          margin: 0,
          textDecoration: "underline",
          textDecorationColor: "red",
          textDecorationThickness: "2px",
          textUnderlineOffset: "3px",
          wordBreak: "break-word",
        }}
      >
         {parseRichText(text)}
      </p>
    </ArticleWrapper>
  );
};

export default NotedParagraph;
