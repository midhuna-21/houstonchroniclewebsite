import React from "react";
import ArticleWrapper from "./ArticleWrapper";
import { parseUnderlinedText } from "@/lib/paresedUnderlineText";

interface SingleParagraphProps {
  text: string;
}

const SingleParagraph: React.FC<SingleParagraphProps> = ({ text }) => {
  const sentences = text
    .split('.')
    .map(sentence => sentence.trim())
    .filter(sentence => sentence.length > 0)
    .map(sentence => sentence + '.');

  const grouped: string[] = [];
  for (let i = 0; i < sentences.length; i += 3) {
    grouped.push(sentences.slice(i, i + 3).join(' '));
  }

  return (
    <ArticleWrapper>
      {grouped.map((paragraph, index) => (
        <p
          key={index}
          style={{
            color: "#000000",
            fontSize: '18px',
            fontFamily: "'Mullish', Verdana, sans-serif",
            fontWeight: 400,
            marginBottom: '1cm',
            padding: index === 2 ? '12px 16px' : '0', 
            borderLeft: index === 2 ? '4px solid #B50021' : undefined,
            backgroundColor: index === 2 ? '#fdf1f2' : undefined,
            borderRadius: index === 2 ? '6px' : undefined,
          }}
        >
          {parseUnderlinedText(paragraph)}
        </p>
      ))}
    </ArticleWrapper>
  );
};

export default SingleParagraph;
