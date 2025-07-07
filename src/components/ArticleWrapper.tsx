'use client';
import React, { ReactNode } from 'react';

interface ArticleWrapperProps {
  children: ReactNode;
}

const ArticleWrapper: React.FC<ArticleWrapperProps> = ({ children }) => {
  return (
    <div className="container mt-4 mb-3">
      <div className="row">
        <div className="col-md-9">
          {children}
        </div>

        <div className="col-md-3"></div>
      </div>
    </div>
  );
};

export default ArticleWrapper;
