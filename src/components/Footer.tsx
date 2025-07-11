"use client";
import { useEffect } from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  useEffect(() => {
    const buttons = document.querySelectorAll('.accordion-button');
    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        const arrow = btn.querySelector('.arrow-icon') as HTMLElement | null;
        const isCollapsed = btn.classList.contains('collapsed');
        if (arrow) {
          arrow.style.transform = isCollapsed ? 'rotate(-45deg)' : 'rotate(135deg)';
        }
      });
    });

    return () => {
      buttons.forEach(btn => {
        btn.removeEventListener('click', () => { });
      });
    };
  }, []);

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
          <div className="col-md-2 mb-2 border-end border-secondary d-flex flex-column align-items-start px-2">
            <h1 className="m-0 fw-bold text-white" style={{ fontFamily: 'monospace', fontSize: '1.1rem' }}>
              HOUSTON <span style={{ color: '#ffc107' }}>★</span> CHRONICLE
            </h1>
            <div className="d-flex gap-2 mt-2">
              {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, i) => (
                <div
                  key={i}
                  style={{
                    border: '1px solid white',
                    borderRadius: '50%',
                    width: '28px',
                    height: '28px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <Icon size={14} color="#ffffff" />
                </div>
              ))}
            </div>
          </div>

          <div className="col-md-5 mb-2 border-end border-secondary px-2 d-none d-md-block">
            <div className="row gx-4">
              {[
                { title: 'About', links: ['Our Company', 'Careers', 'Our Use of AI', 'Standards and Practices'] },
                { title: 'Contact', links: ['Customer Service', 'Frequently Asked Questions', 'Newsroom Contacts'] },
                { title: 'Services', links: ['Archives', 'Advertising'] },
              ].map((section, i) => (
                <div className="col" key={i}>
                  <h6 className="mb-2 fw-bold" style={{
                    fontSize: '14.224px',
                    fontFamily: "'Rubik', Arial, sans-serif", fontWeight: 700
                  }}>
                    {section.title}
                  </h6>

                  <ul className="list-unstyled mb-0">
                    {section.links.map((link, idx) => (
                      <li key={idx} style={{
                        marginBottom: '0.8rem'
                      }}>
                        <Link
                          href="#"
                          className="text-white text-decoration-none"
                          style={{
                            fontSize: '14.224px',
                            whiteSpace: 'nowrap',
                            maxWidth: '100%',
                            fontFamily: "'Rubik', Arial, sans-serif", fontWeight: 400
                          }}
                        >
                          {link}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="col-md-3 mb-2 ps-4 d-none d-md-block">
            <h6 className="text-uppercase mb-2 fw-bold" style={{ fontSize: '0.85rem' }}>Account</h6>
            <ul className="list-unstyled mb-0">
              {['Subscribe', 'E-Edition', 'Newsletters'].map((link, idx) => (
                <li className="mb-2" key={idx}>
                  <Link
                    href="#"
                    className="text-white text-decoration-none"
                    style={{ fontSize: '0.78rem', fontWeight: 'normal' }}
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="d-block d-md-none px-2">
            <div className="accordion" id="footerAccordion">
              {[
                { title: 'About', links: ['Our Company', 'Careers', 'Our Use of AI', 'Standards and Practices'] },
                { title: 'Contact', links: ['Customer Service', 'Frequently Asked Questions', 'Newsroom Contacts'] },
                { title: 'Services', links: ['Archives', 'Advertising'] },
                { title: 'Account', links: ['Subscribe', 'E-Edition', 'Newsletters'] }
              ].map((section, index) => (
                <div className="bg-transparent border-0" key={index}>
                  <h2 className="mb-1">
                    <button
                      className="accordion-button collapsed bg-transparent px-0 d-flex align-items-center"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#collapse${index}`}
                      aria-expanded="false"
                      aria-controls={`collapse${index}`}
                      style={{
                        color: 'white',
                        fontSize: '1rem',
                        fontWeight: 'bold',
                        backgroundColor: 'transparent',
                        boxShadow: 'none',
                        padding: 0,
                      }}
                    >
                      {section.title}
                    </button>
                  </h2>
                  <div id={`collapse${index}`} className="accordion-collapse collapse">
                    <div className="accordion-body px-0 pt-1 pb-1" style={{ marginBottom: '1%' }}>
                      <ul className="list-unstyled small mb-1">
                        {section.links.map((link, i) => (
                          <li className="mb-2" key={i}>
                            <Link href="#" className="text-white text-decoration-none">{link}</Link>
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
              ))}
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
                {/* <Image src="/small-logo.png" alt="Small Logo" width={60} height={20} /> */}

                <span className="text-nowrap">© 2025 Hearst Newspapers, LLC</span>

                <Link href="#" className="text-white text-decoration-none text-nowrap">Terms of Use</Link>

                <Link href="#" className="text-white text-decoration-none text-nowrap">Privacy Notice</Link>
              </div>


              <div className="d-flex flex-wrap align-items-center justify-content-center gap-2 gap-md-4 mt-2 mt-md-0 ms-md-4">
                <Link href="#" className="text-white text-decoration-none text-nowrap">
                  DAA Industry Opt Out
                </Link>
                <div
                  className="border border-light px-2 py-1 text-white text-nowrap"
                  style={{
                    borderRadius: '3px',
                    fontSize: 'clamp(0.5rem, 1vw, 0.95rem)',
                  }}
                >
                  Your Privacy Choices (Opt Out of Sale/Targeted Ads)
                </div>
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
