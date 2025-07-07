import React from "react";
import ArticleWrapper from "./ArticleWrapper";
import { parseUnderlinedText } from "@/lib/paresedUnderlineText";

interface SingleParagraphProps {
  text: string;
}

const SingleParagraph: React.FC<SingleParagraphProps> = ({ text }) => {
  return (
   <ArticleWrapper>
    <p
      style={{
        color: "#000000",
        fontSize: '18px',
        fontFamily: "'Mullish', Verdana, sans-serif",
        fontWeight: 400
      }}
    >
      {parseUnderlinedText(text)}
    </p>
    </ArticleWrapper>
  );
};

export default SingleParagraph;
