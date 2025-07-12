import Link from 'next/link';
import { slugify } from '../utils/slugify';

const NavItems = [
  { label: 'Business', slug: 'business' },
  { label: 'Technology', slug: 'technology' },
  { label: 'Sports', slug: 'sports' },
  { label: 'Health', slug: 'health' },
  { label: 'Science', slug: 'science' },
  { label: 'Politics', slug: 'politics' },
];

export default function NavigationSection() {
  return (
    <div
      className="w-100 border-bottom"
      style={{
        borderBottom: '1px solid #ccc',
        backgroundColor: '#fff',
        fontSize: '16px',
        fontFamily: "'Rubik', Arial, sans-serif"
      }}
    >
      <div
        className="d-flex justify-content-start justify-content-md-center px-3 py-2"
        style={{
          whiteSpace: 'nowrap',
          overflowX: 'auto',
          overflowY: 'hidden',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          fontWeight: 'bold',
          WebkitOverflowScrolling: 'touch',
          gap: '3rem',
        }}
      >
        {NavItems.map((item) => (
          <Link
            key={item.slug}
            href={`/${slugify(item.slug)}`}
            className="text-dark text-decoration-none"
            style={{
              whiteSpace: 'nowrap',
              flex: '0 0 auto',
            }}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
