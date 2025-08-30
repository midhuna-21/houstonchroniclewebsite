'use client';
import React, { ReactNode } from 'react';

interface ArticleWrapperProps {
  children: ReactNode;
}

const ArticleWrapper: React.FC<ArticleWrapperProps> = ({ children }) => {
  return (
    <div className="container-fluid mb-3">
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        {children}
      </div>
    </div>
  );
};

export default ArticleWrapper;
