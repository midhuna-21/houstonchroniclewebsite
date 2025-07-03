 export type HighlightBlock = {
  category: string;
  headline: string;
  description: string;
  related: string[];
  image?: string;
  extra?: {
    subcategory: string;
    title: string;
    image?: string
    related?:string[],
  }[];
};

export const latestHighlightsData: HighlightBlock[] = [
  {
    category: 'Astros',
    headline: `'They all mean a lot': Jose Altuve passes Jeff Bagwell on Astros' hits list`,
    description: `Hall of Famer Craig Biggio is the only player with more hits in an Astros uniform than Jose Altuve.`,
    related: [
      'A milestone night for three Astros as Houston beats Rockies once again',
      "Should Astros' Hunter Brown be AL's starting pitcher in All-Star Game?",
      "Astros' August games vs. Red Sox, Yankees will be streaming exclusives",
    ],
    image: '/images/astros.webp',
    extra: [
      {
        subcategory: 'Restaurants & Bars',
        title: 'Best restaurants in Houston for summer 2025',
        image:'/images/foody.webp',
        related:[],
      },
      {
        subcategory: 'Trending',
        title: 'Kemah Trump Burger files lawsuit against landlord, claims unlawful takeover',
        image:'/',
        related:[],
      },
    ],
    
  },
   {
    category: 'Local',
    headline: `Texas AG defends shutdown of midwife's health clinics amid abortion prosecution`,
    description: `Lawyers for Texas Attorney General Ken Paxton said that accused abortionist Maria Rojas didn't use her opportunity to defend against the closure in March.`,
    related: [
      'How many Texas women travel for abortions and where do they go? New study shows.',
      'Abortion fund groups dealt setback in bid to avoid prosecution for providing aid',
    ],
    image: '/images/familycare.webp', 
    extra: [
      {
        subcategory: 'Immigration',
        title: 'Houston bondsman indicted in ICE bribery scheme to lift immigration jail holds',
        image: '/images/ice.webp',
        related: ['Head of Harris County misdemeanor court appointments leaving after complaints'],
      },
    ],
  },


];


export const topNewsData = [
  {
    subcategory: 'Trending',
    title: 'Houston Zoo welcomes birth of critically endangered eastern bongo calf',
    description: '',
    image: '/images/bongo.webp',
  },
  {
    subcategory: 'Housing',
    title: 'Houston Housing Authority to pay $10k, settling lawsuit containing fake quotes',
    description:
      'The authority has ended its relationship with the outside law firm that wrote the brief.',
    image: '',
  },
  {
    subcategory: 'Business',
    title: 'McDonald’s launches limited-time Happy Meal toy set for adults',
    description: '',
    image: '/images/happymeal.webp',
  },
   {
    subcategory: 'Trending',
    title: "Lil Happy Meal miniatures include tiny McDonald's restaurant, micro PlayPlaces",
    description: "The Lil McDonald’s Happy Meal comes with one of 21 miniature McDonald's-themed toys starting on July 1. The toys are inspired by what customers see when they visit the restaurant, just mini.",
    image: '/images/toys.webp',
  },
  
];

// data/editorsPicksData.ts

export const editorsPicksData = [
  {
    title: 'Houston workers are moving farther away from their jobs',
    image: '/images/map.webp',
  },
  {
    title: 'Falkenberg: This July 4th, I’m honoring two national anthems',
    image: '/images/singer.webp',
  },
  {
    title: "Jay-Z, Beyoncé's family shoutout this Houston restaurant",
    image: '/images/party.webp',
  },
  {
    title: 'Houston in June 1995: A month of partying',
    image: '/images/foody.webp',
  },
];
