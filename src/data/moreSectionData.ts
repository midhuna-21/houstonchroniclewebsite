import { NavKey } from './navData';

export interface MoreSectionContent {
  image: string;
  heading: string;
  description: string;
  title: string;
}

export const moreSectionData: Partial<Record<NavKey, MoreSectionContent[]>> = {
  HISD: [
    {
      image: '/images/hisd.webp',
      heading: 'HISD makes bold new curriculum shift',
      description: 'The Houston Independent School District has announced changes to its core teaching plan...',
      title: 'BY ROBERTO VILLALPANDO',
    },
    {
      image: '/images/hisd-more2.webp',
      heading: 'HISD boosts teacher pay in upcoming budget',
      description: 'Teachers in HISD will receive an average 7% raise as part of new financial allocations...',
      title: 'BY STAFF REPORT',
    },
  ],
  Politics: [
    {
      image: '/images/politics-more1.webp',
      heading: 'New legislation could reshape local governance',
      description: 'Senators are pushing for legislation that could have wide impacts across Texas...',
      title: 'BY ROBERTO VILLALPANDO',
    },
    {
      image: '/images/politics-more2.webp',
      heading: 'Voting reform bill sparks debate across parties',
      description: 'Lawmakers remain split over key provisions of the newly introduced voting bill...',
      title: 'BY AUSTIN CORRESPONDENT',
    },
  ],
};
