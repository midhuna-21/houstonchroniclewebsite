import Link from 'next/link';
import { NavKey } from '../data/navData';
import { slugify } from '../utils/slugify';

const categories: NavKey[] = [
  'Houston News', 'HISD', 'Astros', 'Politics',
  'Weather', 'Business', 'Food', 'Opinion', 'Investigations',
];

export default function NavigationSection() {
  return (
    <div className="w-100 border-bottom" style={{ borderBottom: '1px solid #ccc', backgroundColor: '#fff' }}>
      <div className="d-flex flex-wrap gap-5 px-5 py-2" style={{ overflowX: 'auto', fontWeight: 'bold' }}>
        {categories.map((label) => (
         <Link href={`/category/${slugify(label)}`}
                     className="text-dark text-decoration-none"
            style={{ whiteSpace: 'nowrap' }}
         >
  {label}
</Link>
        ))}
      </div>
    </div>
  );
}
