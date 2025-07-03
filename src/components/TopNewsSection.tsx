// 'use client';

// import React from 'react';
// import { topNewsData } from '@/data/homeData';

// export default function TopNewsSection() {
//   const midIndex = Math.ceil(topNewsData.length / 2);
//   const leftColumn = topNewsData.slice(0, midIndex);
//   const rightColumn = topNewsData.slice(midIndex);

//   return (
//     <section className="bg-white px-0">
//       <div className="d-flex flex-column flex-md-row w-100 px-0">
//         {/* LEFT COLUMN */}
//         <div
//           className="flex-grow-1"
//           style={{ flexBasis: '75%', maxWidth: '950px' }}
//         >
//           <h3
//             className="fw-bold border-top border-2 border-black pt-3 mb-4 text-start"
//             style={{ fontSize: '1.3rem' }}
//           >
//             Top News
//           </h3>

//           <div className="row g-0 position-relative">
//             {/* LEFT column content */}
//             <div className="col-12 col-md-6">
//               {leftColumn.map((item, idx) => (
//                 <div
//                   key={idx}
//                   className="px-3 py-4"
//                   style={{
//                     borderBottom: '1px solid #eee',
//                     marginRight: '15px',
//                   }}
//                 >
//                   <NewsCard item={item} />
//                 </div>
//               ))}
//             </div>

//             {/* Vertical Divider */}
//             <div
//               className="d-none d-md-block"
//               style={{
//                 position: 'absolute',
//                 top: 0,
//                 bottom: 0,
//                 left: '50%',
//                 width: '1px',
//                 backgroundColor: '#ccc',
//               }}
//             />

//             {/* RIGHT column content */}
//             <div className="col-12 col-md-6">
//               {rightColumn.map((item, idx) => (
//                 <div
//                   key={idx}
//                   className="px-3 py-4"
//                   style={{
//                     borderBottom: '1px solid #eee',
//                     marginLeft: '15px',
//                   }}
//                 >
//                   <NewsCard item={item} />
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* RIGHT SIDEBAR (empty for now) */}
//         <aside
//           className="d-none d-lg-block ps-4"
//           style={{ width: '250px', minHeight: '100px' }}
//         />
//       </div>
//     </section>
//   );
// }

// function NewsCard({ item }) {
//   return (
//     <div className="d-flex flex-column h-100 text-start">
//       {item.image && item.image.trim() !== '/' && (
//         <img
//           src={item.image}
//           alt=""
//           className="img-fluid mb-2"
//           style={{
//             objectFit: 'cover',
//             width: '100%',
//             maxHeight: '240px',
//           }}
//         />
//       )}
//       <p
//         className="fw-bold mb-1"
//         style={{
//           color: '#B10024',
//           textTransform: 'uppercase',
//           fontSize: '0.75rem',
//         }}
//       >
//         {item.subcategory}
//       </p>
//       <h5
//         className="fw-bold text-black mb-2"
//         style={{ fontSize: '1.05rem' }}
//       >
//         {item.title}
//       </h5>
//       {item.description && (
//         <p
//           className="text-muted mb-0"
//           style={{ fontSize: '0.9rem', lineHeight: '1.4' }}
//         >
//           {item.description}
//         </p>
//       )}
//     </div>
//   );
// }


'use client';

import React from 'react';
import { topNewsData } from '@/data/homeData';
import NewsCard from './NewsCard';
import SectionWrapper from './SectionWrapper';

export default function TopNewsSection() {
  const midIndex = Math.ceil(topNewsData.length / 2);
  const leftColumn = topNewsData.slice(0, midIndex);
  const rightColumn = topNewsData.slice(midIndex);

  return (
  <SectionWrapper title="Top News">
      <div className="d-flex flex-column flex-md-row w-100">
          <div className="row g-0 position-relative">
            <div className="col-12 col-md-6">
              {leftColumn.map((item, idx) => (
                <div
                  key={idx}
                  className="px-3 py-4"
                  style={{
                    borderBottom: '1px solid #eee',
                    paddingRight: '20px',
                  }}
                >
                  <NewsCard item={item} />
                </div>
              ))}
            </div>

            <div
              className="d-none d-md-block"
              style={{
                position: 'absolute',
                top: 0,
                bottom: 0,
                left: '50%',
                width: '1px',
                backgroundColor: '#ccc',
              }}
            />
            <div className="col-12 col-md-6">
              {rightColumn.map((item, idx) => (
                <div
                  key={idx}
                  className="px-3 py-4"
                  style={{
                    borderBottom: '1px solid #eee',
                    paddingLeft: '20px',
                  }}
                >
                  <NewsCard item={item} />
                </div>
              ))}
            </div>
          </div>
        
        <aside
          className="d-none d-lg-block ps-4"
          style={{ width: '250px', minHeight: '100px' }}
        />
      </div>
    </SectionWrapper>
  );
}

