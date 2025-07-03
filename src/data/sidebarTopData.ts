import { NavKey } from './navData';

export const sidebarTopData: Partial<
  Record<
    NavKey,
    {
      image: string;
      heading: string;
      description: string;
    }
  >
> = {
  HISD: {
    image: '/images/hisd-highlight.webp',
    heading: 'Inside HISD’s classroom reform',
    description: 'Get the latest on how Houston ISD is reshaping student learning.',
  },
  Politics: {
    image: '/images/politics-highlight.webp',
    heading: 'Tracking political influence',
    description: 'We explore the forces shaping Texas and national policy decisions.',
  },

};
