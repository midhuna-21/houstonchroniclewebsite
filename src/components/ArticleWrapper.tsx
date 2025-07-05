'use client';
import React, { ReactNode } from 'react';

interface ArticleWrapperProps {
  children: ReactNode;
}

const ArticleWrapper: React.FC<ArticleWrapperProps> = ({ children }) => {
  return (
    <div className="container mt-4 mb-5">
      <div className="row">
        {/* Article main content */}
        <div className="col-md-9">
          {children}
        </div>

        {/* Sidebar placeholder (right side) */}
        <div className="col-md-3"></div>
      </div>
    </div>
  );
};

export default ArticleWrapper;
