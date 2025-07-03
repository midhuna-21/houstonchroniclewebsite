'use client';

import Image from 'next/image';
import Link from 'next/link';
import { NavKey, navData } from '../data/navData';
import MoreFromSection from './MoreFromSection';
import RightSectionTop from './RightSectionTop';

interface Props {
  activeMain: NavKey;
}

export default function CategoryContent({ activeMain,  }: Props) {
  const sub = navData[activeMain];

  return (
<div className="w-100">
  <div className="px-4 py-3">
    <h1 className="text-black mb-2 " style={{ fontSize: '50px',fontWeight:'bolder'}}>
      {sub.subheading}
    </h1>

    {sub.items.length > 0 ? (
      <div className="d-flex gap-3 flex-wrap mb-4">
        {sub.items.map((item) => (
          <Link
            key={item}
            href="#"
            className="text-dark text-decoration-none small"
            style={{ fontWeight: 500 }}
          >
            {item}
          </Link>
        ))}
      </div>
    ) : (
      <h5 className="fw-bold">{activeMain}</h5>
    )}

    <hr style={{ borderTop: '2px solid #000' }} />
  </div>

  <div className="d-flex px-4 gap-4">
        <div className="flex-grow-1" style={{ minWidth: 0 }}>
          <div className="row pt-4">
            <div className="col-md-5 mb-4 pe-md-4 border-end border-secondary">
              <div className="position-relative mb-3">
                <Image
                  src={sub.mainContent.image}
                  alt="Main"
                  width={600}
                  height={350}
                  className="img-fluid w-100"
                />
                <div
                  className="position-absolute bottom-0 start-0 bg-dark text-white px-2 py-1 small"
                  style={{ opacity: 0.8 }}
                >
                  {sub.mainContent.title}
                </div>
              </div>
              <h2 className="fw-bold">{sub.mainContent.heading}</h2>
              <hr
                style={{ width: '50px', borderTop: '2px solid #000', margin: '10px 0' }}
              />
              <p className="text-muted">{sub.mainContent.description}</p>
            </div>

            <div className="col-md-5 ps-md-4 pe-md-4">
              <div className="row">
                {sub.sideContent.map((item, index) => (
                  <div key={index} className="col-12 col-sm-6 mb-4">
                    <div className="d-flex flex-column h-100">
                      <Image
                        src={item.image}
                        alt={item.subheading}
                        width={300}
                        height={180}
                        className="img-fluid mb-2"
                      />
                      <div className="text-danger fw-bold small mb-1">{item.subheading}</div>
                      <div className="fw-semibold">{item.heading}</div>
                      <hr
                        style={{
                          width: '40px',
                          borderTop: '1px solid #ccc',
                          marginTop: '6px',
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-md-2 ps-md-4"></div>
          </div>
          <MoreFromSection activeMain={activeMain} />
        </div>

        <div style={{ width: '300px', flexShrink: 0 }}>
          <div className="mt-4 bg-light p-3 border" style={{ minHeight: '300px' }}>
            <h1 className="h5">helloo</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
