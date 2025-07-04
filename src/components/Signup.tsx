'use client';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Signup: React.FC = () => {
  const borderColor = '#d0021b';

  const containerStyle: React.CSSProperties = {
    border: `1.5px solid ${borderColor}`,
    padding: '1.5rem 1rem',
    marginTop: '1.5rem',
    position: 'relative',
    fontSize: '0.9rem',
  };

  const logoStyle: React.CSSProperties = {
    width: '40px',
    height: '40px',
    backgroundColor: borderColor,
    borderRadius: '50%',
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: '16px',
    lineHeight: '40px',
    position: 'absolute',
    top: '-20px',
    left: '50%',
    transform: 'translateX(-50%)',
  };

  const hrStyle: React.CSSProperties = {
    borderTop: `1px solid ${borderColor}`,
    margin: '1rem 0',
  };

  const linkStyle: React.CSSProperties = {
    color: borderColor,
    textDecoration: 'underline',
    cursor: 'pointer',
  };

  const inputStyle: React.CSSProperties = {
    height: '40px',
    padding: '0.3rem 0.75rem',
    border: '1px solid #ccc',
    borderRadius: '4px 0 0 4px',
    width: '100%',
    maxWidth: '250px',
    flex: '1',
    backgroundColor: 'white', // Remove black autofill color
    color: '#000',
  };

  const buttonStyle: React.CSSProperties = {
    height: '40px',
    backgroundColor: borderColor,
    color: 'white',
    border: 'none',
    padding: '0 16px',
    borderRadius: '0 4px 4px 0',
    fontWeight: 'bold',
    whiteSpace: 'nowrap',
    fontSize: '0.85rem',
  };

  return (
    <div className="container">
      <div style={containerStyle} className="text-center text-md-start">
        <div style={logoStyle}>HC</div>

        <div className="row align-items-center mt-4">
          <div className="col-md-6 mb-4 mb-md-0">
            <h6 style={{ fontWeight: 'bold', fontSize: '1rem' }}>Sign up for The 713</h6>
            <p style={{ marginBottom: 0 }}>
              Never miss a Houston story with news briefings throughout the day.
            </p>
          </div>
          <div className="col-md-6 d-flex flex-column flex-md-row align-items-stretch justify-content-md-end">
            <label htmlFor="email" className="visually-hidden">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              style={inputStyle}
            />
            <button style={buttonStyle}>Sign Up</button>
          </div>
        </div>

        <hr style={hrStyle} />

        <p style={{ fontSize: '0.75rem', marginBottom: 0 }}>
          By signing up, you agree to our{' '}
          <span style={linkStyle}>Terms Of Use</span> and acknowledge that your
          information will be used as described in our{' '}
          <span style={linkStyle}>Privacy Policy</span>.
        </p>
      </div>
    </div>
  );
};

export default Signup;
