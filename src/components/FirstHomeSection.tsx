import Image from 'next/image';
import Link from 'next/link';
import { BiCalendar } from 'react-icons/bi';

interface Article {
  category: string;
  title: string;
  shortdescription: string;
  image: string;
  slug: string;
  date: string;
}

interface LatestHomeSectionProps {
  data: Article[];
}

export default function  FirstHomeSection({ data }: LatestHomeSectionProps) {
  const main = data[0];
  const right1 = data[1];
  const right2 = data[2];

  return (
    <div>
      <div className="row g-4 align-items-stretch flex-column flex-lg-row">
        {/* Left Column */}
        <div className="col-lg-3 text-start order-1 order-lg-0 d-flex flex-column justify-content-between">
          <Link href={`/${main.category}/${main.slug}`} className="text-decoration-none" title={main.slug}>
            <div> 
              <p
                style={{
                  color: "#B50021",
                  fontWeight: 900,
                  textTransform: 'uppercase',
                  fontSize: '14.224px',
                  fontFamily: "'Rubik', Arial, sans-serif",
                  marginBottom: '4px'
                }}
              >
                {main.category}
              </p>

              <h2
                style={{
                  color: '#111111',
                  fontSize: '22.784px',
                  fontFamily: "'Archivo', Arial, sans-serif",
                  fontWeight: 700,
                  lineHeight: '1.3 !important',
                  display: 'inline-block',
                }}
              >
                {main.title}
              </h2>

              <p
                className="text-muted mb-3"
                style={{
                  color: '#444444',
                  fontSize: '16px',
                  fontFamily: "'Rubik', Arial, sans-serif",
                  fontWeight: 400
                }}
              >
                {main.shortdescription}
              </p>

              <div
                className="d-flex align-items-center mt-1"
                style={{
                  fontSize: '10px',
                  fontWeight: 200,
                  fontFamily: "'Rubik', Arial, sans-serif",
                }}
              >
                <BiCalendar size={10} style={{ marginRight: '4px', color: '#000' }} />
                <span style={{ color: '#000', opacity: 0.6 }}>Published on</span>
                <span style={{ color: '#555', marginLeft: '4px' }}>{main.date}</span>
              </div>
            </div>
          </Link>
        </div>

        {/* Middle Column - Main Image */}
        {main.image && (
          <>
            <div className="d-none d-lg-flex col-lg-6 order-lg-1 align-items-stretch border-end">
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  overflow: 'hidden',
                  position: 'relative',
                }}
              >
                <Link href={`/${main.category}/${main.slug}`} className="text-decoration-none" title={main.slug}>
                  <Image
                    src={main.image}
                    alt={main.category}
                    title={main.title}
                    width={1000}
                    height={400}
                    className="img-fluid"
                    style={{
                      width: '100%',
                      height: '400px',
                      objectFit: 'cover',
                    }}
                    priority
                    fetchPriority="high"
                  />
                </Link>
              </div>
            </div>

            <div className="d-flex d-lg-none col-12 align-items-stretch">
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  overflow: 'hidden',
                  position: 'relative',
                }}
              >
                <Link href={`/${main.category}/${main.slug}`} className="text-decoration-none" title={main.slug}>
                  <Image
                    src={main.image}
                    alt={main.category}
                    title={main.title}
                    width={1000}
                    height={400}
                    className="img-fluid"
                    style={{
                      width: '100%',
                      height: '400px',
                      objectFit: 'cover',
                    }}
                    priority
                    fetchPriority="high"
                  />
                </Link>
              </div>
            </div>
          </>
        )}

        {/* Right Column */}
        <div className="col-lg-3 ps-lg-3 text-start order-2">
          {/* Right Item 1 */}
          <Link href={`/${right1.category}/${right1.slug}`} className="text-decoration-none" title={right1.slug}>
            <div style={{ marginBottom: '14px' }}>
              {right1.image && (
                <>
                  <Image
                    src={right1.image || ""}
                    alt={right1.image}
                    title={right1.title}
                    width={800}
                    height={500}
                    className="img-fluid mb-2 d-xl-none"
                    style={{
                      width: '100%',
                      height: '400px',
                      objectFit: 'cover',
                    }}
                  />

                  <Image
                    src={right1.image || ""}
                    alt={right1.image}
                    title={right1.title}
                    width={800}
                    height={500}
                    className="img-fluid mb-2 d-none d-xl-block"
                    style={{
                      width: '100%',
                      height: '200px',
                      objectFit: 'cover',
                    }}
                  />
                </>
              )}

              <p
                className=" mb-1"
                style={{
                  color: "#B50021",
                  textTransform: 'uppercase',
                  fontSize: '14.224px',
                  fontFamily: "'Rubik', Arial, sans-serif",
                  lineHeight: '1.2',
                  fontWeight: 900
                }}
              >
                {right1.category}
              </p>

              <h2
                className="fw-bold text-black mb-1"
                style={{
                  color: '#111111',
                  fontSize: '19px',
                  fontFamily: "'Archivo', Arial, sans-serif",
                  fontWeight: 700,
                  lineHeight: '1.2',
                }}
              >
                {right1.title}
              </h2>

              <div
                className="d-flex align-items-center mt-1"
                style={{
                  fontSize: '10px',
                  fontWeight: 200,
                  fontFamily: "'Rubik', Arial, sans-serif",
                }}
              >
                <BiCalendar size={10} style={{ marginRight: '4px', color: '#000' }} />
                <span style={{ color: '#000', opacity: 0.6 }}>Published on</span>
                <span style={{ color: '#555', marginLeft: '4px' }}>{right1.date}</span>
              </div>
            </div>
          </Link>

          {/* Right Item 2 */}
          <Link href={`/${right2.category}/${right2.slug}`} className="text-decoration-none" title={right2.slug}>
            <div>
              <p
                className="mb-1"
                style={{
                  color: "#B50021",
                  textTransform: 'uppercase',
                  fontSize: '14.224px',
                  fontFamily: "'Rubik', Arial, sans-serif",
                  lineHeight: '1.2',
                  fontWeight: 900
                }}
              >
                {right2.category}
              </p>

              <h2
                className="fw-bold text-black mb-1"
                style={{
                  color: '#111111',
                  fontSize: '20px',
                  fontFamily: "'Archivo', Arial, sans-serif",
                  fontWeight: 700,
                  lineHeight: '1.2',
                }}
              >
                {right2.title}
              </h2>
              <div
                className="d-flex align-items-center mt-1"
                style={{
                  fontSize: '10px',
                  fontWeight: 200,
                  fontFamily: "'Rubik', Arial, sans-serif",
                }}
              >
                <BiCalendar size={10} style={{ marginRight: '4px', color: '#000' }} />
                <span style={{ color: '#000', opacity: 0.6 }}>Published on</span>
                <span style={{ color: '#555', marginLeft: '4px' }}>{right2.date}</span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
