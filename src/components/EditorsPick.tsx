// 'use client';

// import React from 'react';
// import { editorsPicksData } from '@/data/homeData';

// export default function EditorsPicksSection() {
//   return (
//     <section className="bg-white px-3 py-5 border-top border-2 border-black">
//       <div className="container-fluid px-0">
//         <h4 className="fw-bold mb-4 text-start">Editor&apos;s Picks</h4>
//         <div className="row gx-4 gy-4">
//           {editorsPicksData.map((item, idx) => (
//             <div key={idx} className="col-12 col-sm-6 col-lg-3">
//               <div className="h-100 text-start border-end border-light pe-3">
//                 <img
//                   src={item.image}
//                   alt={item.title}
//                   className="img-fluid mb-2"
//                   style={{ width: '100%', objectFit: 'cover', maxHeight: '160px' }}
//                 />
//                 <h6 className="fw-bold mb-0" style={{ fontSize: '1rem' }}>
//                   {item.title}
//                 </h6>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


import SectionWrapper from '@/components/SectionWrapper';
import { editorsPicksData } from '@/data/homeData';

export default function EditorsPicksSection() {
  return (
    <SectionWrapper title="Editor's Picks">
      <div className="row gx-4 gy-4">
        {editorsPicksData.map((item, idx) => (
          <div key={idx} className="col-12 col-sm-6 col-lg-3">
     <div
  className="h-100 text-start pe-3"
  style={{ borderRight: '0.5px solid rgba(14, 14, 14, 0.15)' }}>

              <img
                src={item.image}
                alt={item.title}
                className="img-fluid mb-2"
                style={{ width: '100%', objectFit: 'cover', maxHeight: '160px' }}
              />
              <h6 className="fw-bold mb-0" style={{ fontSize: '1rem' }}>
                {item.title}
              </h6>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}


