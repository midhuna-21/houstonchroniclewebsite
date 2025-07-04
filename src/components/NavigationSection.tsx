import Link from 'next/link';
import { NavKey } from '../data/navData';
import { slugify } from '../utils/slugify';

const categories: NavKey[] = [
  'Houston News', 'HISD', 'Astros', 'Politics',
  'Weather', 'Business', 'Food', 'Opinion', 'Investigations',
];

export default function NavigationSection() {
  return (
<div
  className="w-100 border-bottom"
  style={{ borderBottom: '1px solid #ccc', backgroundColor: '#fff' }}
>
  <div
    className="d-flex justify-content-start justify-content-md-center px-3 py-2"
    style={{
      whiteSpace: 'nowrap',
      fontWeight: 'bold',
      WebkitOverflowScrolling: 'touch',
      gap: '3rem',
    }}
  >
    {categories.map((label) => (
      <Link
        key={label}
        href={`/category/${slugify(label)}`}
        className="text-dark text-decoration-none"
        style={{
          whiteSpace: 'nowrap',
          flex: '0 0 auto',
        }}
      >
        {label}
      </Link>
    ))}
  </div>
</div>


  );
}
