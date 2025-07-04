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


export const newsData = [
  {
    // Section 0: Sports
    main: {
      category: "SPORTS",
      title: "Astros OF Chas McCormick joining Triple-A Sugar Land for rehab assignment",
      description: "Chas McCormick, sidelined since May 29 with an injury, is set to start rehab assignment with the Astros’ Triple-A affiliate.",
      image: "/images/astros.webp"
    },
    side: [
      {
        title: "Mayde Creek linebacker/edge rusher Kosi Okpala commits to Texas",
        description: "Kosi Okpala, ranked as the No. 35 overall player in Texas, chose Longhorns over Baylor, Houston and Miami."
      },
      {
        title: "Astros pitcher warming up before game",
        image: "/images/astros.webp"
      }
    ],
    bottomCards: [
      { title: "Yordan Alvarez's setback due to inflammation", image: "/images/astros.webp" },
      { title: "U.S. vs. Mexico in Gold Cup final at NRG", image: "/images/astros.webp" },
      { title: "Rice to play at Notre Dame in 2026", image: "/images/astros.webp" },
      { title: "Astros go for a sweep at Rockies", image: "/images/astros.webp" }
    ]
  },
  {
    // Section 1: Business
    main: {
      category: "BUSINESS",
      title: "Tesla delivered nearly 60K fewer vehicles in Q2 this year than in 2024",
      description: "Tesla said it delivered about 384,000 vehicles in Q2 this year, a significant drop from last year.",
      image: "/images/tesla.webp"
    },
    side: [
      {
        title: "Perigold launches first physical store in Houston",
        description: "Luxury retailer Perigold opens its first physical store in Houston amid strong shopper demand."
      },
      {
        title: "Credit card points benefit wealthy, burden poor",
        image: "/images/visa.webp"
      }
    ],
    bottomCards: [
      { title: "Apple sees record growth in India", image: "/images/switch.webp" },
      { title: "Amazon to invest $5B in Texas data centers", image: "/images/gatesfoundation.webp" },
      { title: "Mortgage rates hit 7%", image: "/images/exon.webp" },
      { title: "H-E-B expands tech grocery format", image: "/images/car.webp" }
    ]
  },
  {
    // Section 2: Technology
    main: {
      category: "Opinion",
      title: "OpenAI launches new voice assistant with GPT-5 base",
      description: "OpenAI introduces a smarter, more intuitive voice assistant powered by the latest GPT-5 model.",
      image: "/images/trump.webp"
    },
    side: [
      {
        title: "Apple announces iOS 19 with enhanced AI tools",
        description: "iOS 19 features on-device AI, smarter Siri, and more privacy controls."
      },
      {
        title: "New AI chip from NVIDIA promises 5x performance",
        image: "/images/ai.webp"
      }
    ],
    bottomCards: [
      { title: "Meta rolls out Threads 2.0 globally", image: "/images/office.webp" },
      { title: "Google Lens now supports real-time translation", image: "/images/uslady.webp" },
      { title: "Tesla’s humanoid robot prototype debuts", image: "/images/noodlesfood.webp" },
      { title: "Amazon expands drone delivery zones", image: "/images/waterdance.webp" }
    ]
  },
  {
    // Section 3: Health
    main: {
      category: "Politics",
      title: "New obesity drug shows promising results in Phase 3 trials",
      description: "A breakthrough obesity drug has shown a 25% reduction in weight during testing.",
      image: "/images/politicman.webp"
    },
    side: [
      {
        title: "Doctors warn against TikTok health trends",
        description: "Experts urge users to verify medical advice with licensed professionals."
      },
      {
        title: "Fitness wearables track mental health signs",
        image: "/images/switch.webp"
      }
    ],
    bottomCards: [
      { title: "FDA approves first gene therapy for sickle cell", image: "/images/camcar.webp" },
      { title: "Yoga linked to lower stress levels", image: "/images/roadway.webp" },
      { title: "Intermittent fasting boosts metabolism", image: "/images/manloud.webp" },
      { title: "Heart disease down 10% this year", image: "/images/assembly.webp" }
    ]
  },
  {
    // Section 4: World
    main: {
      category: "Food & Lifestyle",
      title: "Peace talks resume between neighboring nations after 5 years",
      description: "Diplomatic discussions restart in hopes of ending long-standing regional conflict.",
      image: "/images/flat.webp"
    },
    side: [
      {
        title: "UN warns of global water crisis by 2030",
        description: "Water demand expected to surpass supply without major conservation efforts."
      },
      {
        title: "Protests erupt in European capital over reform laws",
        image: "/images/hands.webp"
      }
    ],
    bottomCards: [
      { title: "Global inflation slows, still elevated", image: "/images/breakingnews.webp" },
      { title: "World leaders to meet at climate summit", image: "/images/grass.webp" },
      { title: "Africa sees tech-driven economic boom", image: "/images/building.webp" },
      { title: "Global migration trends shifting rapidly", image: "/images/delicious.webp" }
    ]
  },
  {
    // Section 5: Entertainment
    main: {
      category: "Local",
      title: "Hollywood studios reach agreement to end strike",
      description: "Studios and unions agree on fair pay, AI limits, and working conditions after months of standstill.",
      image: "/images/localtalk.webp"
    },
    side: [
      {
        title: "BTS returns with world tour in 2025",
        description: "The K-pop sensation is making a global comeback after a 2-year hiatus."
      },
      {
        title: "Oscar nominations dominated by indie films",
        image: "/images/elementary.webp"
      }
    ],
    bottomCards: [
      { title: "Netflix to release 30 original films this year", image: "/images/wokringpeople.webp" },
      { title: "Barbie sequel confirmed for 2026", image: "/images/singing.webp" },
      { title: "Taylor Swift sets new ticket sale record", image: "/images/craft.webp" },
      { title: "Cannes Film Festival draws record attendance", image: "/images/petrol.webp" }
    ]
  },

   {
    // Section 6: Entertainment
    main: {
      category: "Bayou City History",
      title: "Hollywood studios reach agreement to end strike",
      description: "Studios and unions agree on fair pay, AI limits, and working conditions after months of standstill.",
      image: "/images/orca.webp"
    },
    side: [
      {
        title: "BTS returns with world tour in 2025",
        description: "The K-pop sensation is making a global comeback after a 2-year hiatus."
      },
      {
        title: "Oscar nominations dominated by indie films",
        image: "/images/arts.webp"
      }
    ],
    bottomCards: [
      { title: "Netflix to release 30 original films this year", image: "/images/2floorb.webp" },
      { title: "Barbie sequel confirmed for 2026", image: "/images/applause.webp" },
      { title: "Taylor Swift sets new ticket sale record", image: "/images/guitar.webp" },
      { title: "Cannes Film Festival draws record attendance", image: "/images/peoplespeaking.webp" }
    ]
  }

   
];

export const featureData = [
  {
    section: "Energy",
    articles: [
      {
        id: 1,
        title: "Black Lion makes last-minute $8B bid in high-stakes Citgo auction"
      },
      {
        id: 2,
        title: "Shell denies reported talks to acquire BP in potential mega oil merger"
      },
      {
        id: 3,
        title: "Why Rick Perry wants to build a Trump-inspired nuclear power complex in Texas",
        description: "Former Gov. Rick Perry's new company is trying to build a nuclear homage to President Donald Trump near Amarillo to propel the country's AI ambitions.",
        image: "/images/energy.webp"
      },
      {
        id: 4,
        title: "Cheniere Energy approves $2.9 Billion expansion at Corpus Christi LNG facility"
      },
      {
        id: 5,
        title: "Encino Energy layoffs expected following sale to EOG Resources"
      }
    ]
  },

  {
    section: "Entertainment",
    articles: [
      {
        id: 6,
        title: "Houston home prices rise as inventory tightens"
      },
      {
        id: 7,
        title: "Downtown sees boom in apartment construction"
      },
      {
        id: 8,
        title: "Luxury condo sales spike in The Woodlands",
        description: "The luxury condo market in The Woodlands is seeing record-high demand in Q2 2025.",
        image: "/images/entertainment.webp"
      },
      {
        id: 9,
        title: "New mixed-use development breaks ground in Katy"
      },
      {
        id: 10,
        title: "Texas developers shift focus to rural areas"
      }
    ]
  },

   {
    section: "Investigations",
    articles: [
      {
        id: 6,
        title: "Houston home prices rise as inventory tightens"
      },
      {
        id: 7,
        title: "Downtown sees boom in apartment construction"
      },
      {
        id: 8,
        title: "Luxury condo sales spike in The Woodlands",
        description: "The luxury condo market in The Woodlands is seeing record-high demand in Q2 2025.",
        image: "/images/investigation.webp"
      },
      {
        id: 9,
        title: "New mixed-use development breaks ground in Katy"
      },
      {
        id: 10,
        title: "Texas developers shift focus to rural areas"
      }
    ]
  }
];



// trendingData.ts
export const trendingData = [
  {
    section: "Trending In Sports",
    items: [
      {
        author: "Matt Young",
        role: "Trending Sports Reporter",
        image: "/images/person.webp",
        title: "Former Texans linebacker Bryan Braman battling rare form of cancer",
        description:
          "Bryan Braman was a Houston Texans fan favorite for his wild style of play, including once losing his helmet and using his head to tackle a Titans punt returner.",
      },
      {
        author: "Amy Smith",
        role: "Sports Editor",
        image: "/images/person.webp",
        title: "Astros rally to win late against Yankees",
        description: "A clutch performance from Alvarez seals the victory for Houston.",
      }
    ]
  },
  {
    section: "Trending In Business",
    items: [
      {
        author: "John Doe",
        role: "Business Reporter",
        image: "/images/person.webp",
        title: "Tesla slashes EV prices amid global competition",
        description: "Tesla's price cut reflects pressure from rising EV makers in China and Europe.",
      },
      {
        author: "Emily Taylor",
        role: "Finance Correspondent",
        image: "/images/person.webp",
        title: "Wall Street ends higher after Fed minutes",
        description: "Markets gained slightly after insights from the Federal Reserve meeting were released.",
      },
         {
        author: "Emily Taylor",
        role: "Finance Correspondent",
        image: "/images/person.webp",
        title: "Wall Street ends higher after Fed minutes",
        description: "Markets gained slightly after insights from the Federal Reserve meeting were released.",
      },
         {
        author: "Emily Taylor",
        role: "Finance Correspondent",
        image: "/images/person.webp",
        title: "Wall Street ends higher after Fed minutes",
        description: "Markets gained slightly after insights from the Federal Reserve meeting were released.",
      }
    ]
  },
   {
    section: "Politics",
    items: [
      {
        author: "Matt Young",
        role: "Trending Sports Reporter",
        image: "/images/person.webp",
        title: "Former Texans linebacker Bryan Braman battling rare form of cancer",
        description:
          "Bryan Braman was a Houston Texans fan favorite for his wild style of play, including once losing his helmet and using his head to tackle a Titans punt returner.",
      },
      {
        author: "Amy Smith",
        role: "Sports Editor",
        image: "/images/person.webp",
        title: "Astros rally to win late against Yankees",
        description: "A clutch performance from Alvarez seals the victory for Houston.",
      }
    ]
  },
   {
    section: "Freatures Writer",
    items: [
      {
        author: "Matt Young",
        role: "Trending Sports Reporter",
        image: "/images/person.webp",
        title: "Former Texans linebacker Bryan Braman battling rare form of cancer",
        description:
          "Bryan Braman was a Houston Texans fan favorite for his wild style of play, including once losing his helmet and using his head to tackle a Titans punt returner.",
      },
      {
        author: "Amy Smith",
        role: "Sports Editor",
        image: "/images/person.webp",
        title: "Astros rally to win late against Yankees",
        description: "A clutch performance from Alvarez seals the victory for Houston.",
      },
      {
        author: "Amy Smith",
        role: "Sports Editor",
        image: "/images/person.webp",
        title: "Astros rally to win late against Yankees",
        description: "A clutch performance from Alvarez seals the victory for Houston.",
      },
      {
        author: "Amy Smith",
        role: "Sports Editor",
        image: "/images/person.webp",
        title: "Astros rally to win late against Yankees",
        description: "A clutch performance from Alvarez seals the victory for Houston.",
      }
    ]
  },
   {
    section: "New Columns",
    items: [
      {
        author: "Matt Young",
        role: "Trending Sports Reporter",
        image: "/images/person.webp",
        title: "Former Texans linebacker Bryan Braman battling rare form of cancer",
        description:
          "Bryan Braman was a Houston Texans fan favorite for his wild style of play, including once losing his helmet and using his head to tackle a Titans punt returner.",
      },
      {
        author: "Amy Smith",
        role: "Sports Editor",
        image: "/images/person.webp",
        title: "Astros rally to win late against Yankees",
        description: "A clutch performance from Alvarez seals the victory for Houston.",
      }
    ]
  },

];


// homeData.js 

export const trendingNavItems = [
  'Top News',
  'Elections 2025',
  'Global Markets',
  'Tech Innovations',
];


// data/dailyPuzzlesData.js

export const dailyPuzzles = [
  {
    title: "Crossword",
    description: "Challenge your vocabulary today.",
    image: "/images/bongo.webp",
    bgColor: "#f2f2f2",
  },
  {
    title: "Sudoku",
    description: "Sharpen your logic skills.",
    image: "/images/spelltower.webp",
    bgColor: "#e6f7ff",
  },
  {
    title: "Jumble",
    description: "Unscramble words for fun.",
    image: "/images/flipkart.webp",
    bgColor: "#fff0f5",
  },
  {
    title: "Jumble",
    description: "Unscramble words for fun.",
    image: "/images/flipkart.webp",
    bgColor: "#fff0f5",
  },
];


export const popularArticles = [
  { title: 'Judge rules in favor of Texas voter ID law' },
  { title: 'City council approves new downtown park project' },
  { title: 'High school football season kicks off with big win' },
  { title: 'Weather alert: Thunderstorms expected this weekend' },
  { title: 'New restaurant opening brings fresh flavors to town' },
];

 


export const opinionArticles = [
  { title: 'Why local journalism still matters in 2025' },
  { title: 'The case for walkable neighborhoods' },
  { title: 'Let teachers teach: a letter from the classroom' },
  { title: 'Climate change needs more than awareness — it needs action' },
];

 
