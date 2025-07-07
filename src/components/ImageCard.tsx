import React from "react";
import ArticleWrapper from "./ArticleWrapper";

interface ImageCardProps {
  src: string;
  title: string;
  caption: string;
  credit: string;
}

const ImageCard: React.FC<ImageCardProps> = ({ src, title, caption, credit }) => {
  return (
    <ArticleWrapper>
      <div
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "100%",
          overflow: "hidden",
        }}
      >
        <img
          src={src}
          alt={title}
          style={{
            width: "100%",
            height: "auto",
            display: "block",
          }}
        />
      </div>

      <em className="mt-2" style={{ color: "#3E3E3E" , fontSize: '14px',
                  fontFamily: "'Rubik', Arial, sans-serif",}}>
        {caption}
      </em>

      <p style={{ color: "#909090" , fontSize: '12px',
                  fontFamily: "'Rubik', Arial, sans-serif",}}
                  >
        <strong>{title}</strong>: {credit}
      </p>
    </ArticleWrapper>
  );
};

export default ImageCard;
