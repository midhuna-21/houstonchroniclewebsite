'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Navbar, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Header() {
  const [expanded, setExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    typeof document !== 'undefined' &&
      require('bootstrap/dist/js/bootstrap.bundle.min');
  }, []);

  const toggleIcon = (
    <span
      style={{
        backgroundImage:
          "url(\"data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(255, 255, 255, 1)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E\")",
        filter: isHovered ? 'brightness(70%)' : 'brightness(100%)',
        width: '20px',
        height: '20px',
        display: 'inline-block',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: '100%',
        transition: 'filter 0.3s ease',
      }}
    ></span>
  );

  return (
    <Navbar
      expand="lg"
      expanded={expanded}
      style={{ backgroundColor: '#1c2146' }}
      className="text-white py-3"  
    >
      <Container
        fluid
        className="position-relative d-flex justify-content-between align-items-center px-3"
      >
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

        <div className="position-absolute top-50 start-50 translate-middle">
          <Link href="/">
            <Image src="/logo.png" alt="Logo" width={100} height={40} />
          </Link>
        </div>

        <div className="d-flex align-items-center gap-3 ms-auto">
          <div className="bg-danger text-white px-3 py-1 rounded small">
            BEST OFFER! 6 Months for 99¢
          </div>
          <Link href="/signin" className="text-white text-decoration-underline">
            Sign In
          </Link>
        </div>
      </Container>

      <Navbar.Collapse id="basic-navbar-nav" className="bg-black">
      </Navbar.Collapse>
    </Navbar>
  );
}
