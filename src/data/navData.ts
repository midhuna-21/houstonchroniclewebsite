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

};



export const navData: Record<NavKey, NavSection> =
 {

  'Houston News': {
    subheading: 'Local',
    items: ['Suburbs', 'Trending', 'Crime'],
  },
  'HISD': {
    subheading: 'HISD',
    items: [], 
  },
  'Astros': {
    subheading: 'Houston Astros',
    items: ['Main', 'Astros', 'Texans', 'Rockets', 'Dynamo & Dash', 'Colleges', 'Bohls', 'High Schools', 'Podcasts', 'Newsletter'],
  },
  'Politics': {
    subheading: 'National Politics',
    items: ['White House', 'Congress', 'Elections'],
    
  },
  'Weather': {
    subheading: 'Weather',
    items: ['Forecasts','Storm Tracker','Heat Tracker','Power Outage Tracker','Air Quality Tracker','Hurricane Guide'],
  
  },
  'Business': {
    subheading: 'Buisness',
    items: ['Texas property map','Top Workplaces 2024',"Houston's top-paid executives",'The Chronicle 100','Real Estate','Texas Brands Series'],
    
  },
   'Food': {
     subheading: 'Food & Culture',
     items: ['EntertainmentRestaurants & Bars','Culture','Health','Design','Home & Garden','Religion'],
   
  },
  'Opinion': {
    subheading: 'Opinion',
    items: ['Food & CultureEditorials','Outlook','Letters to the Editor','Featured Columnists','Editorial Board'],
   
  },
  'Investigations': {
    subheading: 'Investigations',
    items: ['Crash & Burn','Unchecked Forces','Zombie Wells','Unfair Burden','No Escape Plan','Failures of Power',' Denied/Denied Again'],
  
  }, 
 
};


export const slugToKeyMap: Record<string, NavKey> = Object.keys(navData).reduce((acc, key) => {
  const slug = slugify(key);
  acc[slug] = key as NavKey;
  return acc;
}, {} as Record<string, NavKey>);