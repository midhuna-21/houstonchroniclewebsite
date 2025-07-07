import React from 'react';

export const parseUnderlinedText = (text: string): React.ReactNode[] => {
  const parts = text.split(/(\[\[.*?\]\])/g); 
  
  return parts.map((part, i) => {
    const match = part.match(/\[\[(.*?)\]\]/); 

    if (match) {
      return (
        <span
          key={i}
          style={{
            textDecoration: 'underline',
            textDecorationColor: '#B50021'
          }}
        >
          {match[1]}
        </span>
      );
    }

    return <span key={i}>{part}</span>;
  });
};
