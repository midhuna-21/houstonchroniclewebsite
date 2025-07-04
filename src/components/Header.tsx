'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Navbar, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Header() {
  const [expanded, setExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (typeof document !== 'undefined') {
      require('bootstrap/dist/js/bootstrap.bundle.min');
    }
  }, []);

  const toggleIcon = (
    <span
      style={{
        backgroundImage:
          "url(\"data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(255, 255, 255, 1)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E\")",
        filter: isHovered ? 'brightness(70%)' : 'brightness(100%)',
        width: '18px',
        height: '18px',
        display: 'inline-block',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: '100%',
        transition: 'filter 0.3s ease',
      }}
    />
  );

  return (
    <>
      <Navbar
        expand="lg"
        expanded={expanded}
        style={{
          backgroundColor: '#1c2146',
          minHeight: '78px',
          padding: '0.5rem 1.5rem',
        }}
        className="text-white"
      >
        <Container fluid className="p-0 d-flex justify-content-between align-items-center position-relative">
          {/* Toggle always visible */}
          <div className="d-flex align-items-center gap-3">
            <button
              onClick={() => setExpanded(!expanded)}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              style={{
                background: 'none',
                border: 'none',
                padding: 0,
                outline: 'none',
              }}
              aria-label="Toggle navigation"
              aria-controls="basic-navbar-nav"
              aria-expanded={expanded}
              type="button"
            >
              {toggleIcon}
            </button>

            {/* Logo for mobile view only */}
            <div className="d-lg-none">
              <Link href="/" className="text-decoration-none">
                <h1
                  className="m-0 fw-bold text-white"
                  style={{ fontFamily: 'monospace', fontSize: '1.1rem' }}
                >
                  HOUSTON CHRONICLE
                </h1>
              </Link>
            </div>
          </div>

          {/* Center logo for large screens only */}
          <div className="d-none d-lg-block position-absolute top-50 start-50 translate-middle">
            <Link href="/" className="text-decoration-none">
              <h1
                className="m-0 fw-bold text-white"
                style={{ fontFamily: 'monospace', fontSize: '1.1rem' }}
              >
                HOUSTON CHRONICLE
              </h1>
            </Link>
          </div>

          {/* Right Side */}
          <div className="d-flex align-items-center gap-3 ms-auto">
            {/* Desktop offer */}
            <div className="d-none d-lg-block bg-danger text-white px-3 py-2"
              style={{
                fontSize: '1rem',
                fontWeight: 600,
                borderRadius: '3px',
                whiteSpace: 'nowrap',
              }}
            >
              BEST OFFER! 6 Months for 99¢
            </div>

            <Link
              href="/signin"
              className="text-white text-decoration-underline fw-bold"
              style={{ fontSize: '0.95rem' }}
            >
              Sign In
            </Link>
          </div>
        </Container>
      </Navbar>

      {/* Mobile offer below header */}
      <div className="d-lg-none bg-danger text-white px-3 py-2 text-center fw-semibold" style={{
        fontSize: '0.95rem',
        borderRadius: '3px',
      }}>
        BEST OFFER! 6 Months for 99¢
      </div>
    </>
  );
}
