import React from 'react';

const InteractiveCard = () => {
  return (
    <div
      className="border my-md-0 my-4"
      style={{
        maxWidth: '400px',
        margin: 'auto',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#fff',
      }}
    >
      <div style={{ position: 'relative' }}>
        <img
          src="/images/interactiveimage.webp" 
          alt="Interactive Maps"
          style={{ width: '100%', height: 'auto', display: 'block' }}
        />

        <div
          style={{
            position: 'absolute',
            bottom: '-15px',
            left: '50%',
            transform: 'translateX(-50%)',
            backgroundColor: '#000',
            color: '#fff',
            padding: '6px 18px',
            fontSize: '0.75rem',
            fontWeight: 'bold',
            letterSpacing: '2px',
            textTransform: 'uppercase',
          }}
        >
          INTERACTIVES
        </div>
      </div>

      <div style={{ padding: '2rem 1rem 1rem', textAlign: 'center' }}>
        <h5 style={{ fontWeight: 'bold', marginBottom: '1rem' }}>Trackers & Live Maps</h5>
        <hr style={{ width: '40px', margin: '0 auto 1rem', borderTop: '2px solid #ccc' }} />
        <p style={{ fontSize: '0.95rem', color: '#333' }}>
          Explore the Chronicle's full list of the live maps and interactive trackers to stay
          current on the most important and timely data affecting your area.
        </p>
      </div>
    </div>
  );
};

export default InteractiveCard;
