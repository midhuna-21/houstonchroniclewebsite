"use client";
import { useEffect, useState } from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import Link from 'next/link';
import { slugify } from '../utils/slugify';
import Image from 'next/image';

import { FaChevronUp } from 'react-icons/fa';

const socialLinks = [
  // {
  //   icon: FaFacebookF,
  //   url: '#',
  //   label: 'Visit our Facebook page',
  // },
  {
    icon: FaTwitter,
    url: 'https://x.com/TangentWeekly',
    label: 'Visit our Twitter page',
  },
  {
    icon: FaInstagram,
    url: 'https://www.instagram.com/tangentweekly/',
    label: 'Visit our Instagram page',
  },
];

export default function Footer() {
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  const toggleAccordion = () => {
    setIsAboutOpen(prev => !prev);
  };


  return (
    <footer
      className="text-white footer-fixed d-flex align-items-center justify-content-center"
      style={{
        backgroundColor: '#1c2146',
        padding: '0',
        margin: '0',
        fontSize: '0.65rem',
        lineHeight: '1.2',
        position: 'relative',
      }}
    >
      <div className="container-fluid px-4 pt-3 pt-md-4">
        <div className="row pt-2 pb-2 align-items-stretch gx-2">
          <div className="col-md-2 mb-2 d-flex flex-column align-items-start px-2">
            <Link href="/" className="text-decoration-none" title='index'>
              <Image
                src="/images/tangent-weekly-logo.webp"
                alt="Tangent Weekly Logo"
                width={150}
                height={28}
                priority
              />
            </Link>
            <div className="d-flex gap-2 mt-2">
              <div className="d-flex gap-2 mt-2">
                {socialLinks.map(({ icon: Icon, url, label }, i) => (
                  <a
                    key={i}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    style={{ textDecoration: 'none' }}
                  >
                    <div
                      style={{
                        border: '1px solid white',
                        borderRadius: '50%',
                        width: '28px',
                        height: '28px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Icon size={14} color="#ffffff" />
                    </div>
                  </a>
                ))}
              </div>

            </div>
          </div>

          <div className="col-md-8 mb-2 px-2 d-none d-md-block">
            <div className="d-flex align-items-start gap-4">
              <div className="d-flex flex-column pe-3 ps-4 ">
                {['Business', 'Health', 'Science', 'Technology', 'Sports'].map((title, i) => (
                  <div key={title} style={{ marginBottom: '0.75rem' }}>
                    <Link
                      title={`${title}`}
                      href={`/${slugify(title)}`}
                      className="text-dark text-decoration-none"
                      style={{
                        whiteSpace: 'nowrap',
                        flex: '0 0 auto',
                      }}
                    >
                      <span
                        className="fw-bold text-white"
                        style={{
                          fontSize: '14.224px',
                          fontFamily: "'Rubik', Arial, sans-serif",
                          fontWeight: 700
                        }}
                      >
                        {title}
                      </span>
                    </Link>
                  </div>

                ))}
              </div>
              <div
                className="vr"
                style={{
                  height: '100%',
                  backgroundColor: '#ffffff50',
                  width: '1px',
                  minHeight: '150px'
                }}
              ></div>

              <div className="ps-3">
                <span
                  className="fw-bold text-white"
                  style={{
                    fontSize: '14.224px',
                    fontFamily: "'Rubik', Arial, sans-serif",
                    fontWeight: 700,
                    marginBottom: '0.5rem',
                    display: 'inline-block'
                  }}
                >
                  About
                </span>
                <ul className="list-unstyled mb-0" style={{ marginTop: '0.5rem' }}>

                  {[
                    { label: 'Our Company', href: '/about' },
                    { label: 'Contact', href: '/contact' },
                    { label: 'Our Team', href: '/team' },
                    { label: 'Editorial Policy', href: '/editorial-policy' },
                    { label: 'Correction Policy', href: '/correction-policy' },
                  ].map((link, idx) => (
                    <li key={idx} style={{ marginBottom: '0.8rem' }}>
                      <Link
                        title={link.label}
                        href={link.href}
                        className="text-white text-decoration-none"
                        style={{
                          fontSize: '14.224px',
                          whiteSpace: 'nowrap',
                          maxWidth: '100%',
                          fontFamily: "'Rubik', Arial, sans-serif",
                          fontWeight: 400,
                        }}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}

                </ul>
              </div>
            </div>
          </div>

          {/* Mobile Specific*/}
          <div className="d-block d-md-none px-2">
            <div className="accordion" id="footerAccordion">
              {['Business', 'Technology', 'Sports', 'Health', 'Science', 'Politics'].map((title, index) => (
                <div className="bg-transparent border-0" key={index}
                  style={{
                    marginTop: index === 0 ? '0.75rem' : '0'
                  }}
                >
                  <Link
                    title={`${title}`}
                    key={title}
                    href={`/${slugify(title)}`}
                    className="text-dark text-decoration-none"
                    style={{
                      whiteSpace: 'nowrap',
                      flex: '0 0 auto',
                    }}
                  >
                    <h3
                      className="text-white fw-bold mb-2"
                      style={{
                        fontSize: '0.85rem',
                        fontFamily: "'Rubik', Arial, sans-serif",
                      }}
                    >
                      {title}
                    </h3>
                  </Link>
                  <hr
                    className="border-white d-block d-md-none"
                    style={{
                      opacity: 1,
                      marginTop: '1%',
                      marginBottom: '0.5rem'
                    }}
                  />
                </div>
              ))}

              <div className="bg-transparent border-0">
                <h3 className="mb-1">
                  <button
                    className={`accordion-button bg-transparent px-0 d-flex align-items-center justify-content-between w-100 ${isAboutOpen ? '' : 'collapsed'}`}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseAbout"
                    aria-expanded={isAboutOpen ? 'true' : 'false'}
                    aria-controls="collapseAbout"
                    style={{
                      color: 'white',
                      fontSize: '0.85rem',
                      fontWeight: 'bold',
                      backgroundColor: 'transparent',
                      boxShadow: 'none',
                      padding: 0,
                    }}
                    onClick={toggleAccordion}
                  >
                    About

                  </button>
                </h3>

                <div id="collapseAbout" className={`accordion-collapse collapse ${isAboutOpen ? 'show' : ''}`}>
                  <div className="accordion-body px-0 pt-1 pb-1" style={{ marginBottom: '1%' }}>
                    <ul className="list-unstyled small mb-1">
                      {[
                        { label: 'Our Company', href: '/about' },
                        { label: 'Contact', href: '/contact' },
                        { label: 'Our Team', href: '/team' },
                        { label: 'Editorial Policy', href: '/editorial-policy' },
                        { label: 'Correction Policy', href: '/correction-policy' },
                      ].map((item, i) => (
                        <li className="mb-2" key={i}>
                          <Link href={item.href} className="text-white text-decoration-none" title={item.label}>
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>


                <hr
                  className="border-white d-block d-md-none"
                  style={{
                    opacity: 1,
                    marginTop: '1%',
                    marginBottom: '0.5rem'
                  }}
                />
              </div>


            </div>
          </div>
        </div>

        <hr className="border-white my-2 d-none d-md-block" />

        <div
          className="d-flex flex-column flex-md-row align-items-center justify-content-center text-center gap-2 py-2 px-3"
          style={{
            fontSize: 'clamp(0.55rem, 1.2vw, 0.95rem)',
          }}
        >
          <div
            className="d-flex flex-column flex-md-row align-items-center justify-content-center text-center gap-2 py-2 px-3"
            style={{
              fontSize: 'clamp(0.55rem, 1.2vw, 0.95rem)',
            }}
          >
            <div className="d-flex flex-column flex-md-row align-items-center justify-content-center w-100">

              <div className="d-flex flex-nowrap flex-wrap align-items-center justify-content-center gap-2 gap-md-4">
                <span className="text-nowrap">© Copyright 2025 , tangent weekly</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="position-absolute d-flex align-items-center"
        style={{
          top: '0.5rem',
          right: '1rem',
          zIndex: 10,
        }}
      >
        <button
          className="btn text-white fw-bold d-flex align-items-center"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{
            backgroundColor: 'transparent',
            border: 'none',
            fontSize: '1rem',
            cursor: 'pointer',
            padding: 0,
          }}
        >
          Return To Top&nbsp;
          <span style={{ fontSize: '1.2rem' }}>↑</span>
        </button>
      </div>
    </footer>

  );
}
