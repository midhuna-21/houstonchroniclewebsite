 export type HighlightBlock = {
  slug:string;
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
    slug:'astros',
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
      slug:'astros',
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
    slug:'astros',
    subcategory: 'Trending',
    title: 'Houston Zoo welcomes birth of critically endangered eastern bongo calf',
    description: '',
    image: '/images/bongo.webp',
  },
  {
     slug:'astros',
    subcategory: 'Housing',
    title: 'Houston Housing Authority to pay $10k, settling lawsuit containing fake quotes',
    description:
      'The authority has ended its relationship with the outside law firm that wrote the brief.',
    image: '',
  },
  {
      slug:'astros',
    subcategory: 'Business',
    title: 'McDonald’s launches limited-time Happy Meal toy set for adults',
    description: '',
    image: '/images/happymeal.webp',
  },
   {
   slug:'astros',
    subcategory: 'Trending',
    title: "Lil Happy Meal miniatures include tiny McDonald's restaurant, micro PlayPlaces",
    description: "The Lil McDonald’s Happy Meal comes with one of 21 miniature McDonald's-themed toys starting on July 1. The toys are inspired by what customers see when they visit the restaurant, just mini.",
    image: '/images/toys.webp',
  },
  
];


export const editorsPicksData = [
  { 
      slug:'astros',
    title: 'Houston workers are moving farther away from their jobs',
    image: '/images/map.webp',
  },
  {
     slug:'astros',
    title: 'Falkenberg: This July 4th, I’m honoring two national anthems',
    image: '/images/singer.webp',
  },
  {
  slug:'astros',
    title: "Jay-Z, Beyoncé's family shoutout this Houston restaurant",
    image: '/images/party.webp',
  },
  {
    slug:'astros',
    title: 'Houston in June 1995: A month of partying',
    image: '/images/foody.webp',
  },
];


export const newsData = [
  {
    main: {
   slug:'astros',
      category: "SPORTS",
      title: "Astros OF Chas McCormick joining Triple-A Sugar Land for rehab assignment",
      description: "Chas McCormick, sidelined since May 29 with an injury, is set to start rehab assignment with the Astros’ Triple-A affiliate.",
      image: "/images/astros.webp"
    },
    side: [
      {
          slug:'astros',
        title: "Mayde Creek linebacker/edge rusher Kosi Okpala commits to Texas",
        description: "Kosi Okpala, ranked as the No. 35 overall player in Texas, chose Longhorns over Baylor, Houston and Miami."
      },
      {
         slug:'astros',
        title: "Astros pitcher warming up before game",
        image: "/images/astros.webp"
      }
    ],
    bottomCards: [
      {   slug:'astros',title: "Yordan Alvarez's setback due to inflammation", image: "/images/astros.webp" },
      {  slug:'astros', title: "U.S. vs. Mexico in Gold Cup final at NRG", image: "/images/astros.webp" },
      {   slug:'astros',title: "Rice to play at Notre Dame in 2026", image: "/images/astros.webp" },
      {   slug:'astros',title: "Astros go for a sweep at Rockies", image: "/images/astros.webp" }
    ]
  },
  {
    main: {
        slug:'astros',
      category: "BUSINESS",
      title: "Tesla delivered nearly 60K fewer vehicles in Q2 this year than in 2024",
      description: "Tesla said it delivered about 384,000 vehicles in Q2 this year, a significant drop from last year.",
      image: "/images/tesla.webp"
    },
    side: [
      {
         slug:'astros',
        title: "Perigold launches first physical store in Houston",
        description: "Luxury retailer Perigold opens its first physical store in Houston amid strong shopper demand."
      },
      {
         slug:'astros',
        title: "Credit card points benefit wealthy, burden poor",
        image: "/images/visa.webp"
      }
    ],
    bottomCards: [
      {  slug:'astros',title: "Apple sees record growth in India", image: "/images/switch.webp" },
      {   slug:'astros',title: "Amazon to invest $5B in Texas data centers", image: "/images/gatesfoundation.webp" },
      {   slug:'astros',title: "Mortgage rates hit 7%", image: "/images/exon.webp" },
      {   slug:'astros',title: "H-E-B expands tech grocery format", image: "/images/car.webp" }
    ]
  },
  {
    main: {
       slug:'astros',
      category: "Opinion",
      title: "OpenAI launches new voice assistant with GPT-5 base",
      description: "OpenAI introduces a smarter, more intuitive voice assistant powered by the latest GPT-5 model.",
      image: "/images/trump.webp"
    },
    side: [
      {
      slug:'astros',
        title: "Apple announces iOS 19 with enhanced AI tools",
        description: "iOS 19 features on-device AI, smarter Siri, and more privacy controls."
      },
      {
      slug:'astros',
        title: "New AI chip from NVIDIA promises 5x performance",
        image: "/images/ai.webp"
      }
    ],
    bottomCards: [
      {  slug:'astros',title: "Meta rolls out Threads 2.0 globally", image: "/images/office.webp" },
      {  slug:'astros',title: "Google Lens now supports real-time translation", image: "/images/uslady.webp" },
      {  slug:'astros',title: "Tesla’s humanoid robot prototype debuts", image: "/images/noodlesfood.webp" },
      {  slug:'astros',title: "Amazon expands drone delivery zones", image: "/images/waterdance.webp" }
    ]
  },
  {
    main: {
       slug:'astros',
      category: "Politics",
      title: "New obesity drug shows promising results in Phase 3 trials",
      description: "A breakthrough obesity drug has shown a 25% reduction in weight during testing.",
      image: "/images/politicman.webp"
    },
    side: [
      {
       slug:'astros',
        title: "Doctors warn against TikTok health trends",
        description: "Experts urge users to verify medical advice with licensed professionals."
      },
      {
         slug:'astros',
        title: "Fitness wearables track mental health signs",
        image: "/images/switch.webp"
      }
    ],
    bottomCards: [
      { slug:'astros', title: "FDA approves first gene therapy for sickle cell", image: "/images/camcar.webp" },
      {  slug:'astros',title: "Yoga linked to lower stress levels", image: "/images/roadway.webp" },
      {  slug:'astros',title: "Intermittent fasting boosts metabolism", image: "/images/manloud.webp" },
      {  slug:'astros',title: "Heart disease down 10% this year", image: "/images/assembly.webp" }
    ]
  },
  {
    main: {
      slug:'astros',
      category: "Food & Lifestyle",
      title: "Peace talks resume between neighboring nations after 5 years",
      description: "Diplomatic discussions restart in hopes of ending long-standing regional conflict.",
      image: "/images/flat.webp"
    },
    side: [
      {
      slug:'astros',
        title: "UN warns of global water crisis by 2030",
        description: "Water demand expected to surpass supply without major conservation efforts."
      },
      {
        slug:'astros',
        title: "Protests erupt in European capital over reform laws",
        image: "/images/hands.webp"
      }
    ],
    bottomCards: [
      {  slug:'astros',title: "Global inflation slows, still elevated", image: "/images/breakingnews.webp" },
      {  slug:'astros',title: "World leaders to meet at climate summit", image: "/images/grass.webp" },
      {  slug:'astros',title: "Africa sees tech-driven economic boom", image: "/images/building.webp" },
      { slug:'astros',title: "Global migration trends shifting rapidly", image: "/images/delicious.webp" }
    ]
  },
  {
    main: {
      slug:'astros',
      category: "Local",
      title: "Hollywood studios reach agreement to end strike",
      description: "Studios and unions agree on fair pay, AI limits, and working conditions after months of standstill.",
      image: "/images/localtalk.webp"
    },
    side: [
      {
      slug:'astros',
        title: "BTS returns with world tour in 2025",
        description: "The K-pop sensation is making a global comeback after a 2-year hiatus."
      },
      {
    slug:'astros',
        title: "Oscar nominations dominated by indie films",
        image: "/images/elementary.webp"
      }
    ],
    bottomCards: [
      { slug:'astros',title: "Netflix to release 30 original films this year", image: "/images/wokringpeople.webp" },
      { slug:'astros',title: "Barbie sequel confirmed for 2026", image: "/images/singing.webp" },
      { slug:'astros',title: "Taylor Swift sets new ticket sale record", image: "/images/craft.webp" },
      { slug:'astros',title: "Cannes Film Festival draws record attendance", image: "/images/petrol.webp" }
    ]
  },

   {
    main: {
    slug:'astros',
      category: "Bayou City History",
      title: "Hollywood studios reach agreement to end strike",
      description: "Studios and unions agree on fair pay, AI limits, and working conditions after months of standstill.",
      image: "/images/orca.webp"
    },
    side: [
      {
        slug:'astros',
        title: "BTS returns with world tour in 2025",
        description: "The K-pop sensation is making a global comeback after a 2-year hiatus."
      },
      {
       slug:'astros',
        title: "Oscar nominations dominated by indie films",
        image: "/images/arts.webp"
      }
    ],
    bottomCards: [
      { slug:'astros',title: "Netflix to release 30 original films this year", image: "/images/2floorb.webp" },
      { slug:'astros',title: "Barbie sequel confirmed for 2026", image: "/images/applause.webp" },
      { slug:'astros',title: "Taylor Swift sets new ticket sale record", image: "/images/guitar.webp" },
      { slug:'astros',title: "Cannes Film Festival draws record attendance", image: "/images/peoplespeaking.webp" }
    ]
  }

   
];

export const featureData = [
  {
    slug:'astros',
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
    slug:'astros',
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
    slug:'astros',
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


export const trendingData = [
  {
    slug:"astros",
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
    slug:"astros",
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
    slug:"astros",
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
    slug:"astros",
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
    slug:"astros",
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


export const trendingNavItems = [
  'Top News',
  'Elections 2025',
  'Global Markets',
  'Tech Innovations',
];


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
  { slug:"astros",title: 'Judge rules in favor of Texas voter ID law' },
  { slug:"astros",title: 'City council approves new downtown park project' },
  { slug:"astros",title: 'High school football season kicks off with big win' },
  { slug:"astros",title: 'Weather alert: Thunderstorms expected this weekend' },
  { slug:"astros",title: 'New restaurant opening brings fresh flavors to town' },
];

 


export const opinionArticles = [
  { slug:"astros",title: 'Why local journalism still matters in 2025' },
  { slug:"astros",title: 'The case for walkable neighborhoods' },
  { slug:"astros",title: 'Let teachers teach: a letter from the classroom' },
  { slug:"astros",title: 'Climate change needs more than awareness — it needs action' },
];



export interface EditorialItem {
  id: number;
  slug:string;
  title: string;
  description: string;
  image: string;
}


export const editorialData : EditorialItem[] = [
  {
    id: 1,
    slug:'astros',
    title: 'From The Editorial Board',
    description:
      'Celebrate the Fourth by reading the Declaration of Independence',
    image: '/images/usflag.webp',
  },
  {
    id: 2,
    slug:'astros',
    title: 'From The Editorial Board',
    description: 'Honor the Constitution by reflecting on its principles',
    image: '/images/carplace.webp', 
  },
  {   id: 3,
    slug:'astros',
    title: 'From The Editorial Board',
    description: 'Honor the Constitution by reflecting on its principles',
    image: '/images/greenbottle.webp', 
  },
  {   id: 4,
    slug:'astros',
    title: 'From The Editorial Board',
    description: 'Honor the Constitution by reflecting on its principles',
    image: '/images/trumpspeach.webp', 
  }
];





export interface NewsTextItem {
  id: number;
  slug:string
  title: string;
}


export const NewsTextData : NewsTextItem[] = [
  {
    id: 1,
    slug:"astros",
    title: "Leon Hale in 1966: Out where the bacon is crisper, the coffee weaker"
  },
  {
    id: 2,
    slug:"astros",
    title: "From 1975: 'Jaws' delivers on suspense",
    },
  {   id: 3,
    slug:"astros",
    title: "Sig Byrd in 1955: A visit to Friendsylvania on our coastal prairie",
    },
  {   id: 4,
    slug:"astros",
    title: "Leon Hale in 1980: Enjoying the day, starting at 5 a.m.",
     },
      {  id: 5,
    slug:"astros",
    title: "Sig Byrd in 1955: Some flashbacks from an 8-year-old nightmare",
     },
      {  id: 6,
    slug:"astros",
    title: "Leon Hale in 1983: The secrets of the junk drawer",
     },
     
      {   id: 7,
    slug:"astros",
    title: "Leon Hale in 1964: The true story of why he doesn't chew tobacco",
     },
];



export interface LottoItem {
  id: number;
  slug:string,
  title: string;
  description: string;
  image: string;
}

export const lottoData: LottoItem[] = [
  {
    id: 1,
    slug:"astros",
    title: 'Stacking the Odds',
    description:
      'How rich investors stacked the odds for a $95 million Texas Lotto win: A Houston Chronicle investigation',
    image:'/images/lottoimage.webp',
  },
];

export interface GameItem {
  id: number;
  name: string;
  image: string;
}

export const gameData: GameItem[] = [
  { id: 1, name: 'SpellTower', image: '/images/spelltower.webp' },
  { id: 2, name: 'Pile-up poker', image: '/images/pileuppoker.webp' },
  { id: 3, name: 'Typeshift', image: '/images/typeshift.webp' },
  { id: 4, name: 'Really Bad Chess', image: '/images/reallybadchess.webp' },
  { id: 5, name: 'Flipkart', image: '/images/flipkart.webp' },
  { id: 6, name: 'Crossword', image: '/images/crossword.webp' },
  { id: 7, name: 'Wordbind', image: '/images/wordbind.webp' },
  { id: 8, name: 'CubeClear', image: '/images/cubeclear.webp' },
  { id: 9, name: 'Bongo', image: '/images/bongo.webp' },
];


export interface PromoData {
  message: string;
  highlight: string;
  buttonText: string;
}

export const promoData: PromoData = {
  message: 'JULY FOURTH SALE! Get our best offer for a limited time:',
  highlight: '6 months for only 99¢.',
  buttonText: 'SAVE NOW',
};

