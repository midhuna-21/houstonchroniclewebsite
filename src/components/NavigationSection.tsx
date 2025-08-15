import Link from 'next/link';

const NavItems = [
  { label: 'Home', category: '' },
  { label: 'Business', category: 'business' },
  { label: 'Technology', category: 'technology' },
  { label: 'Sports', category: 'sports' },
  { label: 'Health', category: 'health' },
  { label: 'Science', category: 'science' },
  { label: 'Politics', category: 'politics' },
  { label: 'Education', category: 'education' },
  { label: 'Entertainment', category: 'entertainment' },
];

export default function NavigationSection() {
  return (
    <div
      className="w-100 border-bottom p-2"
      style={{
        borderBottom: '1px solid #ccc',
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
          WebkitOverflowScrolling: 'touch',
          gap: '3rem',
        }}
      >
        {NavItems.map((item) => (
          <Link
            key={item.category}
            href={`/${item.category}`}
            title={item.category}
            className="text-dark text-decoration-none"
            style={{
              whiteSpace: 'nowrap',
              flex: '0 0 auto',
              fontWeight: 900,
              fontSize: '16px',
              fontFamily: "'Rubik', Arial, sans-serif",
            }}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
