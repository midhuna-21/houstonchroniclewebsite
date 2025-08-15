'use client';

import React from "react";
import ArticleWrapper from "./ArticleWrapper";
import { parseRichText } from "@/lib/paresedUnderlineText";

interface StaticParagraphProps {
  data: {
    subheading?: string;
    description: string;
  };
}

const StaticParagraph: React.FC<StaticParagraphProps> = ({ data }) => {
  return (
    <ArticleWrapper>
      {data?.subheading && (
        <h2
          style={{
            fontSize: '24px',
            fontWeight: 700,
            fontFamily: "'Georgia', serif",
            marginBottom: '12px',
            color: '#222',
            borderLeft: '4px solid #B50021',
            paddingLeft: '12px',
          }}
        >
          {data.subheading}
        </h2>
      )}
      <div
        style={{
          textAlign: 'justify',
          fontFamily: "'Merriweather', serif",
          fontSize: '18px',
          color: '#2D2D2D',
        }}
      >
        {parseRichText(data?.description)}
      </div>
    </ArticleWrapper>
  );
};

export default StaticParagraph;
