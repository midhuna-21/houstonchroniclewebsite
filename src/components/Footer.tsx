import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="text-white pt-5 pb-3" style={{ backgroundColor: '#1c2146' }}>
      <div className="container-fluid px-4">
        <div className="row pt-4 pb-5 align-items-stretch gx-2">

          {/* Left Column (Logo + Social) */}
          <div className="col-md-2 mb-4 border-end border-secondary h-100 d-flex flex-column align-items-start px-2">
            <h1 className="m-0 fw-bold text-white" style={{ fontFamily: 'monospace', fontSize: '1.1rem' }}>
              HOUSTON <span className="text-warning">★</span> CHRONICLE
            </h1>
            <div className="d-flex gap-2 mt-3">
              {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, i) => (
                <div
                  key={i}
                  style={{
                    border: '1px solid white',
                    borderRadius: '50%',
                    width: '32px',
                    height: '32px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <Icon size={16} color="#ffffff" />
                </div>
              ))}
            </div>
          </div>

          {/* Center Columns - Only on md and up */}
          <div className="col-md-5 mb-4 border-end border-secondary h-100 px-2 d-none d-md-block">
            <div className="row h-100">
              <div className="col">
                <h6 className="text-uppercase">About</h6>
                <ul className="list-unstyled small">
                  <li className="mb-3"><Link href="#" className="text-white text-decoration-none">Our Company</Link></li>
                  <li className="mb-3"><Link href="#" className="text-white text-decoration-none">Careers</Link></li>
                </ul>
              </div>
              <div className="col">
                <h6 className="text-uppercase">Contact</h6>
                <ul className="list-unstyled small">
                  <li className="mb-3"><Link href="#" className="text-white text-decoration-none">Customer Service</Link></li>
                  <li className="mb-3"><Link href="#" className="text-white text-decoration-none">FAQs</Link></li>
                </ul>
              </div>
              <div className="col">
                <h6 className="text-uppercase">Services</h6>
                <ul className="list-unstyled small">
                  <li className="mb-3"><Link href="#" className="text-white text-decoration-none">Archives</Link></li>
                  <li className="mb-3"><Link href="#" className="text-white text-decoration-none">Advertising</Link></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column - Only on md and up */}
          <div className="col-md-3 mb-4 ps-4 h-100 d-none d-md-block">
            <h6 className="text-uppercase">Account</h6>
            <ul className="list-unstyled small">
              <li className="mb-3"><Link href="#" className="text-white text-decoration-none">Subscribe</Link></li>
              <li className="mb-3"><Link href="#" className="text-white text-decoration-none">E-Edition</Link></li>
            </ul>
          </div>

          {/* Accordions - Only on small screens */}
          <div className="d-block d-md-none px-2">
            <div className="accordion" id="footerAccordion">
              {[
                { title: 'About', links: ['Our Company', 'Careers'] },
                { title: 'Contact', links: ['Customer Service', 'FAQs'] },
                { title: 'Services', links: ['Archives', 'Advertising'] },
                { title: 'Account', links: ['Subscribe', 'E-Edition'] }
              ].map((section, index) => (
                <div className="accordion-item bg-transparent border-0" key={index}>
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed bg-transparent text-white px-0"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#collapse${index}`}
                      aria-expanded="false"
                      aria-controls={`collapse${index}`}
                    >
                      {section.title}
                    </button>
                  </h2>
                  <div
                    id={`collapse${index}`}
                    className="accordion-collapse collapse"
                    data-bs-parent="#footerAccordion"
                  >
                    <div className="accordion-body px-0 pt-0">
                      <ul className="list-unstyled small">
                        {section.links.map((link, i) => (
                          <li className="mb-2" key={i}>
                            <Link href="#" className="text-white text-decoration-none">{link}</Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <hr className="border-secondary my-4" />

        {/* Footer Bottom */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-2 small text-center text-md-start">
          <Image src="/small-logo.png" alt="Small Logo" width={60} height={20} />

          <div className="d-flex flex-wrap gap-3 justify-content-center">
            <span>© 2025 Hearst Newspapers, LLC</span>
            <Link href="#" className="text-white text-decoration-none">Terms of Use</Link>
            <Link href="#" className="text-white text-decoration-none">Privacy Notice</Link>
            <Link href="#" className="text-white text-decoration-none">DAA Industry Opt Out</Link>
          </div>

          <div
            className="border border-light px-3 py-1 text-white"
            style={{ whiteSpace: 'nowrap', borderRadius: '3px' }}
          >
            Your Privacy Choices (Opt Out of Sale/Targeted Ads)
          </div>
        </div>
      </div>
    </footer>
  );
}
