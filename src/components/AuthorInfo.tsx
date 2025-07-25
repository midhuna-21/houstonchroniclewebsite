'use client';

import { FaXTwitter } from 'react-icons/fa6';
import React from 'react';
import ArticleWrapper from './ArticleWrapper';
import Link from 'next/link';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';


const socialLinks = [
  {
    icon: FaFacebookF,
    url: '#',
    label: 'Visit our Facebook page',
  },
  {
    icon: FaXTwitter,
    url: 'https://x.com/TangentWeekly',
    label: 'Visit our Twitter (X) page',
  },
  {
    icon: FaInstagram,
    url: 'https://www.instagram.com/tangentweekly/',
    label: 'Visit our Instagram page',
  },
];

interface AuthorInfoProps {
  date: string;
  name: string;
  role: string;
}

const AuthorInfo: React.FC<AuthorInfoProps> = ({
  date,
  name,
  role,
}) => {
  return (
    <ArticleWrapper>
      <p className="text-muted mb-3" style={{ fontSize: '0.95rem' }}>
        {date}
      </p>

      <div className="d-flex justify-content-between align-items-start flex-wrap gap-2">
        <div className="d-flex align-items-center gap-3">

          <div>
            <Link title='about-tangent-weekly' href="/about-tangent-weekly">
              <div
                className="fw-bold text-dark"
                style={{
                  fontSize: '18px',
                  fontFamily: "'Archivo', Arial, sans-serif",
                  fontWeight: 700,
                  textDecoration: 'underline',
                  color: '#000000',
                }}
              >
                {name}
              </div>
            </Link>
            <div
              className="text-uppercase"
              style={{
                color: '#767676',
                fontWeight: 700,
                fontSize: '14px',
                fontFamily: "'Rubik', Arial, sans-serif'"
              }}
            >
              {role}
            </div>
          </div>
        </div>

        <div className="d-flex align-items-center gap-2">
          {socialLinks.map(({ icon: Icon, url, label }, i) => (
            <a
              key={i}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-decoration-none"
              style={{ color: 'inherit' }}
            >
              <div
                className="rounded-circle border p-2 d-flex align-items-center justify-content-center"
                style={{ width: 32, height: 32 }}
              >
                <Icon size={14} />
              </div>
            </a>

          ))}
        </div>
      </div>

    </ArticleWrapper>
  );
};

export default AuthorInfo;
