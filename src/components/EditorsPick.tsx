import { editorsPicksData } from '@/data/homeData';

export default function EditorsPicksSection() {
  return (
    <div
      className="container"
      style={{ borderTop: '2px solid black', paddingTop: '1.5rem', marginTop: '2rem' }}
    >
      <h5
        className="fw-bold mb-3"
        style={{
          color: "#000000",
          fontWeight: 700,
          fontSize: '18  px',
          fontFamily: "'Rubik', Arial, sans-serif"
        }}
      >
        Editor’s Pick
      </h5>

      <div className="row gx-4 gy-4">
        {editorsPicksData.map((item, idx) => (
          <div key={idx} className="col-12 col-sm-6 col-lg-3">
            <div
              className="h-100 text-start pe-3"
              style={{
                borderRight: '0.5px solid rgba(14, 14, 14, 0.15)',
              }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="img-fluid mb-2"
                style={{
                  width: '100%',
                  objectFit: 'cover',
                  maxHeight: '160px',
                }}
              />
              <h6
                className="fw-bold mb-0"
                style={{
                  color: '#111111',
                  fontSize: '18px',
                  fontWeight: 700,
                  fontFamily: "'Archivo', Arial, sans-serif",
                }}
              >
                {item.title}
              </h6>
            </div>
          </div>
        ))}
      </div>
    </div>

  );
}


