'use client';

import NavigationSection from '@/components/NavigationSection';
import LatestHighlightsSection from '@/components/HighlightsSection';
import TopNewsSection from '@/components/TopNewsSection';
import EditorsPicksSection from '@/components/EditorsPick';

export default function Home() {
  return (
    <div className="bg-white">
      <NavigationSection />
      <div style={{ marginTop: '3cm' }} />
      <main className="px-3 px-md-4">
        
        <div className="mb-5">
          <LatestHighlightsSection />
        </div>

        <div className="mb-5">
          <TopNewsSection />
        </div>

        <div className="mb-5">
          <EditorsPicksSection />
        </div>
      </main>
      <div style={{ marginBottom: '5rem' }} />
    </div>
  );
}
