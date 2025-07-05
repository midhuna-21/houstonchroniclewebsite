import React from "react";
import ArticleWrapper from "./ArticleWrapper";

interface VideoCardProps {
  src: string;
  title: string;
  caption: string;
  credit: string;
}

const VideoCard: React.FC<VideoCardProps> = ({ src, title, caption, credit }) => {
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
        {/* Image/Video Thumbnail */}
        <img
          src={src}
          alt={title}
          style={{
            width: "100%",
            height: "auto",
            display: "block",
          }}
        />

        {/* Overlay content */}
        <div
          style={{
            position: "absolute",
            bottom: "0",
            left: "0",
            width: "100%",
            background:
              "linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0,0,0,0.2))",
            color: "#fff",
            padding: "16px",
            display: "flex",
            alignItems: "center",
          }}
        >
          {/* Play Icon */}
          <div
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              backgroundColor: "rgba(255,255,255,0.2)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginRight: "10px",
            }}
          >
            <div
              style={{
                width: "0",
                height: "0",
                borderTop: "8px solid transparent",
                borderBottom: "8px solid transparent",
                borderLeft: "12px solid white",
                marginLeft: "4px",
              }}
            />
          </div>

          {/* Caption */}
          <h5 style={{ margin: 0, fontWeight: "bold" }}>{title}</h5>
        </div>
      </div>

      {/* Photo description */}
      <p className="mt-2" style={{ fontSize: "14px", color: "#444" }}>
        {caption} 
      </p>

      {/* Byline */}
      <p style={{ fontSize: "13px", color: "#666" }}>{credit}</p>
    </ArticleWrapper>
  );
};

export default VideoCard;
