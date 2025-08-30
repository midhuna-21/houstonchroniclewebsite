import React from "react";

const formatText = (text: string): React.ReactNode[] => {
  // Split first by bold (**text**)
  const boldSplit = text.split(/(\*\*[^*]+\*\*)/g);

  return boldSplit
    .map((part, i) => {
      if (/^\*\*(.*?)\*\*$/.test(part)) {
        return (
          <strong key={`bold-${i}`} style={{ fontWeight: 700 }}>
            {part.slice(2, -2)}
          </strong>
        );
      }

      const combinedSplit = part.split(/(\[\[.*?\]\]|__.*?__|\^\^.*?\^\^)/g);

      return combinedSplit.map((subpart, j) => {
        if (/^\[\[(.*?)\]\]$/.test(subpart)) {
          // Standard underline
          return (
            <span
              key={`ul-${i}-${j}`}
              style={{
                textDecoration: 'underline',
                textDecorationColor: '#B50021',
              }}
            >
              {subpart.slice(2, -2)}
            </span>
          );
        }

        if (/^__(.*?)__$/.test(subpart)) {
          // Red underline 
          return (
            <span
              key={`redul-${i}-${j}`}
              style={{
                textDecoration: 'underline',
                textDecorationColor: '#B50021',
                textDecorationThickness: '1.5px',
                textUnderlineOffset: '2.5px',
              }}
            >
              {subpart.slice(2, -2)}
            </span>
          );
        }

        if (/^\^\^(.*?)\^\^$/.test(subpart)) {
          return (
            <em
              key={`italic-${i}-${j}`}
              style={{
                fontStyle: 'italic',
                color: '#535252ff',
                fontWeight: 400,
              }}
            >
              {subpart.slice(2, -2)}
            </em>
          );
        }

        return <span key={`plain-${i}-${j}`}>{subpart}</span>;
      });
    })
    .flat();
};

/**
 * Splits text into paragraphs using "c".
 */
export function parseRichText(text?: string): React.ReactNode[] {
  if (!text) return [];

  const paragraphs = text
    .split(/\n\n|@@/)
    .map(p => p.trim())
    .filter(Boolean);

  return paragraphs.map((para, index) => (
    <p
      key={index}
      style={{
        color: "#2D2D2D",
        fontWeight: 400,
        marginBottom: '0rem',
      }}
    >
      {formatText(para)}
    </p>
  ));
}
