import { slugify } from '../utils/slugify';


export type NavKey =
  | 'Houston News'
  | 'HISD'
  | 'Astros'
  | 'Politics'
  | 'Weather'
  | 'Business'
  | 'Food'
  | 'Opinion'
  | 'Investigations'

export type NavSection = {
  subheading: string;
  items: string[];
   mainContent: {
    image: string;
    title: string;
    heading: string;
    description: string;
  };
  sideContent: {
    image: string;
    subheading: string;
    heading: string;
  }[];
};



export const navData: Record<NavKey, NavSection> = {
  'Houston News': {
    subheading: 'Local',
    items: ['Suburbs', 'Trending', 'Crime'],
    mainContent: {
      image:'/images/enviornment.webp',
      title: 'Enviornment',
      heading: 'Houston prepares for upcoming hurricane season with new strategies',
      description: 'The city of Houston is bolstering its infrastructure and emergency response plans...',
    },
    sideContent: [
      {
        image: '/images/Trending1.webp',
        subheading: 'Weather Alert',
        heading: 'Heat wave expected to continue this week',
      },
      {
        image: '/images/Trending1.webp',
        subheading: 'Local Crime',
        heading: 'Police investigate robbery in downtown',
      },
      {
        image: '/images/Trending1.webp',
        subheading: 'Education',
        heading: 'HISD approves new school policies',
      },
      {
        image: '/images/Trending1.webp',
        subheading: 'Transportation',
        heading: 'New metro lines open in suburban areas',
      },
    ],
  },
  'HISD': {
    subheading: 'HISD',
    items: [], 
    mainContent: {
      image: '/images/hisd.webp',
      title: 'By John Doe',
      heading: 'Houston prepares for upcoming hurricane season with new strategies',
      description: 'The city of Houston is bolstering its infrastructure and emergency response plans...',
    },
    sideContent: [
      {
        image: '/images/houston-small1.jpg',
        subheading: 'Weather Alert',
        heading: 'Heat wave expected to continue this week',
      },
      {
        image: '/images/houston-small2.jpg',
        subheading: 'Local Crime',
        heading: 'Police investigate robbery in downtown',
      },
      {
        image: '/images/houston-small3.jpg',
        subheading: 'Education',
        heading: 'HISD approves new school policies',
      },
      {
        image: '/images/houston-small4.jpg',
        subheading: 'Transportation',
        heading: 'New metro lines open in suburban areas',
      },
    ],
  },
  'Astros': {
    subheading: 'Houston Astros',
    items: ['Main', 'Astros', 'Texans', 'Rockets', 'Dynamo & Dash', 'Colleges', 'Bohls', 'High Schools', 'Podcasts', 'Newsletter'],
    mainContent: {
      image: '/astros/astros.webp',
      title: 'By John Doe',
      heading: 'Houston prepares for upcoming hurricane season with new strategies',
      description: 'The city of Houston is bolstering its infrastructure and emergency response plans...',
    },
    sideContent: [
      {
        image: '/images/Trending1.webp',
        subheading: 'Weather Alert',
        heading: 'Heat wave expected to continue this week',
      },
      {
        image: '/images/Trending1.webp',
        subheading: 'Local Crime',
        heading: 'Police investigate robbery in downtown',
      },
      {
        image: '/images/Trending1.webp',
        subheading: 'Education',
        heading: 'HISD approves new school policies',
      },
      {
        image: '/images/Trending1.webp',
        subheading: 'Transportation',
        heading: 'New metro lines open in suburban areas',
      },
    ],
  },
  'Politics': {
    subheading: 'National Politics',
    items: ['White House', 'Congress', 'Elections'],
    mainContent: {
      image: '/images/houston-main.jpg',
      title: 'By John Doe',
      heading: 'Houston prepares for upcoming hurricane season with new strategies',
      description: 'The city of Houston is bolstering its infrastructure and emergency response plans...',
    },
    sideContent: [
      {
        image: '/images/houston-small1.jpg',
        subheading: 'Weather Alert',
        heading: 'Heat wave expected to continue this week',
      },
      {
        image: '/images/houston-small2.jpg',
        subheading: 'Local Crime',
        heading: 'Police investigate robbery in downtown',
      },
      {
        image: '/images/houston-small3.jpg',
        subheading: 'Education',
        heading: 'HISD approves new school policies',
      },
      {
        image: '/images/houston-small4.jpg',
        subheading: 'Transportation',
        heading: 'New metro lines open in suburban areas',
      },
    ],
  },
  'Weather': {
    subheading: 'Weather',
    items: ['Forecasts','Storm Tracker','Heat Tracker','Power Outage Tracker','Air Quality Tracker','Hurricane Guide'],
    mainContent: {
      image: '/images/houston-main.jpg',
      title: 'By John Doe',
      heading: 'Houston prepares for upcoming hurricane season with new strategies',
      description: 'The city of Houston is bolstering its infrastructure and emergency response plans...',
    },
    sideContent: [
      {
        image: '/images/houston-small1.jpg',
        subheading: 'Weather Alert',
        heading: 'Heat wave expected to continue this week',
      },
      {
        image: '/images/houston-small2.jpg',
        subheading: 'Local Crime',
        heading: 'Police investigate robbery in downtown',
      },
      {
        image: '/images/houston-small3.jpg',
        subheading: 'Education',
        heading: 'HISD approves new school policies',
      },
      {
        image: '/images/houston-small4.jpg',
        subheading: 'Transportation',
        heading: 'New metro lines open in suburban areas',
      },
    ],
  },
  'Business': {
    subheading: 'Buisness',
    items: ['Texas property map','Top Workplaces 2024',"Houston's top-paid executives",'The Chronicle 100','Real Estate','Texas Brands Series'],
    mainContent: {
      image: '/images/houston-main.jpg',
      title: 'By John Doe',
      heading: 'Houston prepares for upcoming hurricane season with new strategies',
      description: 'The city of Houston is bolstering its infrastructure and emergency response plans...',
    },
    sideContent: [
      {
        image: '/images/houston-small1.jpg',
        subheading: 'Weather Alert',
        heading: 'Heat wave expected to continue this week',
      },
      {
        image: '/images/houston-small2.jpg',
        subheading: 'Local Crime',
        heading: 'Police investigate robbery in downtown',
      },
      {
        image: '/images/houston-small3.jpg',
        subheading: 'Education',
        heading: 'HISD approves new school policies',
      },
      {
        image: '/images/houston-small4.jpg',
        subheading: 'Transportation',
        heading: 'New metro lines open in suburban areas',
      },
    ],
  },
   'Food': {
     subheading: 'Food & Culture',
     items: ['EntertainmentRestaurants & Bars','Culture','Health','Design','Home & Garden','Religion'],
     mainContent: {
       image: '/images/houston-main.jpg',
       title: 'By John Doe',
      heading: 'Houston prepares for upcoming hurricane season with new strategies',
      description: 'The city of Houston is bolstering its infrastructure and emergency response plans...',
    },
    sideContent: [
      {
        image: '/images/houston-small1.jpg',
        subheading: 'Weather Alert',
        heading: 'Heat wave expected to continue this week',
      },
      {
        image: '/images/houston-small2.jpg',
        subheading: 'Local Crime',
        heading: 'Police investigate robbery in downtown',
      },
      {
        image: '/images/houston-small3.jpg',
        subheading: 'Education',
        heading: 'HISD approves new school policies',
      },
      {
        image: '/images/houston-small4.jpg',
        subheading: 'Transportation',
        heading: 'New metro lines open in suburban areas',
      },
    ],
  },
  'Opinion': {
    subheading: 'Opinion',
    items: ['Food & CultureEditorials','Outlook','Letters to the Editor','Featured Columnists','Editorial Board'],
    mainContent: {
      image: '/images/houston-main.jpg',
      title: 'By John Doe',
      heading: 'Houston prepares for upcoming hurricane season with new strategies',
      description: 'The city of Houston is bolstering its infrastructure and emergency response plans...',
    },
    sideContent: [
      {
        image: '/images/houston-small1.jpg',
        subheading: 'Weather Alert',
        heading: 'Heat wave expected to continue this week',
      },
      {
        image: '/images/houston-small2.jpg',
        subheading: 'Local Crime',
        heading: 'Police investigate robbery in downtown',
      },
      {
        image: '/images/houston-small3.jpg',
        subheading: 'Education',
        heading: 'HISD approves new school policies',
      },
      {
        image: '/images/houston-small4.jpg',
        subheading: 'Transportation',
        heading: 'New metro lines open in suburban areas',
      },
    ],
  },
  'Investigations': {
    subheading: 'Investigations',
    items: ['Crash & Burn','Unchecked Forces','Zombie Wells','Unfair Burden','No Escape Plan','Failures of Power',' Denied/Denied Again'],
    mainContent: {
      image: '/images/houston-main.jpg',
      title: 'By John Doe',
      heading: 'Houston prepares for upcoming hurricane season with new strategies',
      description: 'The city of Houston is bolstering its infrastructure and emergency response plans...',
    },
    sideContent: [
      {
        image: '/images/houston-small1.jpg',
        subheading: 'Weather Alert',
        heading: 'Heat wave expected to continue this week',
      },
      {
        image: '/images/houston-small2.jpg',
        subheading: 'Local Crime',
        heading: 'Police investigate robbery in downtown',
      },
      {
        image: '/images/houston-small3.jpg',
        subheading: 'Education',
        heading: 'HISD approves new school policies',
      },
      {
        image: '/images/houston-small4.jpg',
        subheading: 'Transportation',
        heading: 'New metro lines open in suburban areas',
      },
    ],
  }, 
 
};


export const slugToKeyMap: Record<string, NavKey> = Object.keys(navData).reduce((acc, key) => {
  const slug = slugify(key);
  acc[slug] = key as NavKey;
  return acc;
}, {} as Record<string, NavKey>);