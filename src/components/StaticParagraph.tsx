'use client';

import React from "react";
import { motion } from "framer-motion";
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
            lineHeight: '1.4',
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
          lineHeight: '1.75',
          color: '#2D2D2D',
        }}
      >
        {parseRichText(data?.description)}
      </div>
      </ArticleWrapper>
  );
};

export default StaticParagraph;
