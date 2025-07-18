'use client';

import { FaXTwitter } from 'react-icons/fa6';
import React from 'react';
import ArticleWrapper from './ArticleWrapper';
import Link from 'next/link';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';

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
          {[FaFacebookF, FaXTwitter, FaInstagram].map((Icon, i) => {
            const urls = [
              "#",
              "https://x.com/TangentWeekly",
              "https://www.instagram.com/tangentweekly/",
            ];

            return (
              <a
                key={i}
                href={urls[i]}
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none"
                style={{ color: 'inherit', textDecoration: 'none' }}
              >
                <div
                  className="rounded-circle border p-2 d-flex align-items-center justify-content-center"
                  style={{ width: 32, height: 32 }}
                >
                  <Icon size={14} />
                </div>
              </a>
            );
          })}
        </div>
      </div>

    </ArticleWrapper>
  );
};

export default AuthorInfo;
