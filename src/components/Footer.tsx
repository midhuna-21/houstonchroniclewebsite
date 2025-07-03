'use client';

import Link from 'next/link';
import Image from 'next/image';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn
} from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-dark text-white pt-5 pb-3">
      <div className="container-fluid px-4">
      <div className="row pt-4 pb-5 align-items-stretch gx-2">

          <div className="col-md-2 mb-4 border-end border-secondary h-100 d-flex flex-column align-items-start px-2">
            {/* <Image src="" alt="Logo" width={120} height={40} style={{ display: 'block' }} /> */}
            <div className="d-flex gap-2 mt-3">
              {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, i) => (
                <div
                  key={i}
                  style={{
                    backgroundColor: 'transparent',
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

<div className="col-md-5 mb-4 border-end border-secondary h-100 px-2">
            <div className="row h-100">
              <div className="col">
                <h6 className="text-uppercase">About</h6>
                <ul className="list-unstyled small">
                  <li><Link href="#" className="text-white text-decoration-none">Our Company</Link></li>
                  <li><Link href="#" className="text-white text-decoration-none">Careers</Link></li>
                </ul>
              </div>
              <div className="col">
                <h6 className="text-uppercase">Contact</h6>
                <ul className="list-unstyled small">
                  <li><Link href="#" className="text-white text-decoration-none">Customer Service</Link></li>
                  <li><Link href="#" className="text-white text-decoration-none">FAQs</Link></li>
                </ul>
              </div>
              <div className="col">
                <h6 className="text-uppercase">Services</h6>
                <ul className="list-unstyled small">
                  <li><Link href="#" className="text-white text-decoration-none">Archives</Link></li>
                  <li><Link href="#" className="text-white text-decoration-none">Advertising</Link></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-md-3 mb-4 ps-4 h-100">
            <h6 className="text-uppercase">Account</h6>
            <ul className="list-unstyled small">
              <li><Link href="#" className="text-white text-decoration-none">Subscribe</Link></li>
              <li><Link href="#" className="text-white text-decoration-none">E-Edition</Link></li>
            </ul>
          </div>
        </div>
        <hr className="border-secondary my-4" />

        <div className="d-flex flex-wrap justify-content-between align-items-center gap-2">
          <Image src="/small-logo.png" alt="Small Logo" width={60} height={20} />

          <div className="d-flex flex-wrap gap-3 small">
            <span>© 2025 Hearst Newspapers, LLC</span>
            <Link href="#" className="text-white text-decoration-none">Terms of Use</Link>
            <Link href="#" className="text-white text-decoration-none">Privacy Notice</Link>
            <Link href="#" className="text-white text-decoration-none">DAA Industry Opt Out</Link>
          </div>
          <div
            className="border border-light px-3 py-1 small text-white"
            style={{ whiteSpace: 'nowrap', borderRadius: '3px' }}
          >
            Your Privacy Choices (Opt Out of Sale/Targeted Ads)
          </div>
        </div>
      </div>
    </footer>
  );
}
