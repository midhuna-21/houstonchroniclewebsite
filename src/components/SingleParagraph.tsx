import React from "react";
import ArticleWrapper from "./ArticleWrapper";
import { parseRichText } from "@/lib/paresedUnderlineText";

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
    const paragraph = sentences.slice(i, i + 3).join(' ').trim();
    if (paragraph.length > 0) {
      grouped.push(paragraph);
    }
  }

  return (
    <ArticleWrapper>
      {grouped.map((paragraph, index) => (
        <div
          key={index}
          style={{
            textAlign: 'justify',
            color: "#1C1C1C",
            fontSize: '18px',
            fontFamily: "'Merriweather', serif",
            fontWeight: 400,
            marginBottom: '1.5rem',
            padding: index === 2 ? '12px 16px' : '0',
            borderLeft: index === 2 ? '4px solid #4C6375' : undefined, 
            backgroundColor: index === 2 ? '#F1F4F7' : undefined, 
            borderRadius: index === 2 ? '6px' : undefined,
          }}
        >
          {parseRichText(paragraph)}
        </div>
      ))}
    </ArticleWrapper>
  );
};

export default SingleParagraph;
