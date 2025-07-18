'use client';

import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Navbar, Container } from 'react-bootstrap';
import { slugify } from '../utils/slugify';
import Image from "next/image";

const NavItems = [
  { label: 'Business', slug: 'business' },
  { label: 'Technology', slug: 'technology' },
  { label: 'Sports', slug: 'sports' },
  { label: 'Health', slug: 'health' },
  { label: 'Science', slug: 'science' },
  { label: 'Politics', slug: 'politics' },
];

export default function Header() {
  const [expanded, setExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    if (typeof document !== 'undefined') {
      require('bootstrap/dist/js/bootstrap.bundle.min');
    }

    const handleScroll = () => {
      setIsFixed(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleIcon = expanded ? (
    <span
      style={{
        fontSize: '24px',
        color: '#fff',
        fontWeight: 'bold',
        display: 'inline-block',
        lineHeight: 1,
        transition: 'transform 0.3s ease',
      }}
    >
      ×
    </span>
  ) : (
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
          position: isFixed ? 'fixed' : 'sticky',
          top: 0,
          left: 0,
          right: 0,
          width: '100%',
          zIndex: 1050,
        }}
        className="text-white"
      >
        <Container fluid className="p-0 d-flex justify-content-between align-items-center position-relative">
          <div className="d-flex align-items-center" style={{ gap: '0.4rem' }}>
            <button
              onClick={() => setExpanded(!expanded)}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              style={{
                background: 'none',
                border: 'none',
                padding: 0,
                margin: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '32px',
                height: '32px',
              }}
              aria-label="Toggle navigation"
              aria-expanded={expanded}
              type="button"
            >
              {toggleIcon}
            </button>

            {/* Mobile Logo */}
            <div className="d-lg-none d-flex align-items-center" style={{ height: '100%' }}>
              <Link href="/" className="text-decoration-none d-inline-block" style={{ height: '100%' }} title='index'>
                <Image
                  src="/images/tangent-weekly-logo.webp"
                  alt="Tangent Weekly Logo"
                  width={0}
                  height={0}
                  sizes="auto"
                  style={{
                    height: '100%',
                    width: 'auto',
                    maxHeight: '28px',
                    objectFit: 'contain',
                    display: 'block',
                  }}
                />
              </Link>
            </div>
          </div>

          <div className="d-none d-lg-block position-absolute top-50 start-50 translate-middle">
            <Link href="/" className="text-decoration-none d-inline-block" title='index'>
              <Image
                src="/images/tangent-weekly-logo.webp"
                alt="Tangent Weekly Logo"
                height={0}
                width={0}
                style={{
                  width: 'auto',
                  height: '40px'
                }}
              />
            </Link>
          </div>
        </Container>
      </Navbar>

      {expanded && (
        <div
          className="position-fixed top-0 start-0 h-100"
          style={{
            width: '100%',
            backgroundColor: '#0a1544',
            zIndex: 1049,
            overflowY: 'auto',
          }}
        >
          <div className="p-4 text-white h-100">
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Search"
                style={{
                  backgroundColor: 'transparent',
                  color: 'white',
                  border: '1px solid #ccc',
                }}
              />
            </div>
            <ul className="list-unstyled">
              {NavItems.map((item) => (
                <li
                  key={item.slug}
                  className="py-2 border-bottom d-flex justify-content-between align-items-center"
                  style={{
                    cursor: 'pointer',
                    transition: 'background-color 0.2s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#2f345fff')}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                >
                  <Link
                    title={`${item.slug}`}
                    href={`/${slugify(item.slug)}`}
                    className="text-white text-decoration-none fw-bold w-100"
                    onClick={() => setExpanded(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 👇 Desktop-specific */}
          <style jsx>{`
      @media (min-width: 992px) {
        div.position-fixed {
          width: 25% !important;
        }
      }
    `}</style>
        </div>
      )}

    </>
  );
}
