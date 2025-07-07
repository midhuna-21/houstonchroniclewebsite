'use client';

import React from 'react';
import SingleParagraph from './SingleParagraph';
import ImportantParagraph from './ImportantParagraph';
import VideoCard from './VideoCard';
import { ArticleSection } from '@/data/detailData'; // Update with correct type
import HeadlineText from './HeadlineText';
import NotedParagraph from './NotedParagraph';
import ItalicParagraph from './ItalicParagraph';
import ImageCard from './ImageCard';

interface Props {
  body: ArticleSection[]; 
}

const ArticleBodyRenderer: React.FC<Props> = ({ body }) => {
  return (
    <>
      {body.map((section, sectionIndex) => (
        <div key={sectionIndex} className="mb-4">

         
     {section.heading && <HeadlineText text={section.heading} />}

          {section.blocks.map((block, index) => {
            switch (block.type) {
              case 'paragraph':
                return <SingleParagraph key={index} text={block.text} />;
              case 'italicParagraph':
                return <ItalicParagraph key={index} text={block.text} />;
              case 'important':
                return (
                  <ImportantParagraph
                    key={index}
                    label={block.label}
                    description={block.description}
                  />
                );
              case 'video':
                return (
                  <VideoCard
                    key={index}
                    src={block.src}
                    title={block.title}
                    caption={block.caption}
                    credit={block.credit}
                  />
                );
                 case 'image':
                return (
                  <ImageCard
                    key={index}
                    src={block.src}
                    title={block.title}
                    caption={block.caption}
                    credit={block.credit}
                  />
                );
              default:
                return null;
            }
          })}
        </div>
      ))}
    </>
  );
};

export default ArticleBodyRenderer;
