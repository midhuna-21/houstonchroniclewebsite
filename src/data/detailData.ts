export type ArticleBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'notedParagraph'; text: string }
  | { type: 'italicParagraph'; text: string }
  | { type: 'important'; label: string; description:string }
  | { type: 'video'; src: string; title: string; caption: string; credit: string }
  | { type: 'heading'; text: string }
  | { type: 'image'; src: string; title: string; caption: string; credit: string };
  



  export interface ArticleSection {
  heading?: string | null;
  blocks: ArticleBlock[];
}

export interface Article {
  slug: string;
  category: string;
  title: string;
  author: string;
  role: string;
  date: string;
  content: string;
  images: string[];
  captions: string[];
  credits: string[];
  audioSrc: string;   
  audioTitle: string; 
 body: ArticleSection[]; 
}


export const articles: Article[] = [
  {
    slug: 'astros',
    category: 'Local // Trending',
    title:
      'Survivors of Texas floods witnessed homes being swept away, people trapped in cars screaming for help',
    author: 'Shakari Briggs',
    role: 'Quality of Life Reporter',
    date: 'July 4, 2025',
    content: 'Full article content here...',
    images: ['/images/astros.webp'],
    captions: [
      'River debris...',
      'Burleson family surveys...',
      'Vehicles swept away...',
    ],
    credits: ['Eric Gay/AP', 'Christopher Lee', 'Michel Fortier'],
    audioSrc: '/audio/audio1.mp3',
    audioTitle: 'Surviouc Burleson family surveys the damage around',
   body: [
  {
    heading: null,
    blocks: [
      { type: 'paragraph', text: 'Thomas [[Rux stood miles down the road]] from Riverside RV Park — where his trailer stood before rushing waters swept his home away.' },
      { type: 'notedParagraph', text: "Rux, like many in Central Texas, had to seek shelter after devastating floods claimed the lives of at least 24 and left many unaccounted for in Kerr County on Friday. " },
      { type: 'paragraph', text: '“If it wasn’t for these trees … I would’ve lost everything,” said Rux, who lives in nearby Ingram. “It would have been down the river and gone. I got to cherry pick, and I got all my guns out, my valuables, and I’m going in and just getting a few more stuff right now while I can.” ' },
      { type: 'paragraph', text: `Rux recalled getting a wake-up call from emergency first responders urging him to evacuate. The National Weather Service’s Austin/San Antonio office recorded the Guadalupe River’s gauge at a 22-foot rise in about two hours. The Associated Press reported the gauge failed after it recorded the river level at 29.5 feet. The Guadalupe River's “total length is approximately 250 miles” with its north and south forks in Kerr County, according to Texas Parks and Wildlife.` },
      { type: 'important', label: "MISSING GIRLS", description: `What we know about Camp Mystic, the Texas summer camp where 20 girls are missing after deadly floods` },
      { type: 'paragraph', text: `“I grabbed my keys, my wallet, turned on my alarm, shut the door, locked the doors and I left,” Rux said. “Then I got a call from my alarm company that I was getting robbed and I knew my trailer was gone. I already knew it at that point.”` },
     
       {
        type: 'image',
        src: '/images/astros.webp',
        title: 'Map',
        caption: '*Each gauge has a unique placement, though they are generally located below the streambed. Values shown are hourly maximums.',
        credit: 'Chart: Alexandra KanikSource: USGS',
      },

    ]
  },

  {
    heading: 'Swept away in the storm ',
    blocks: [
      {
        type: 'paragraph',
        text: 'Mud, water and debris is all that remains of the Blue Oak RV Park that housed more than a dozen trailer homes before they got washed away. Onlookers like Bud Bolton stood amazed at the sight where children once played. ',
      },
      {
        type: 'paragraph',
        text: '“There were 24 of them (homes) here and every one of them got lost,” said Bolton, pointing to a wide stretch of land.',
      },
       {
        type: 'paragraph',
        text: 'Bolton and other residents said they did not receive a warning. Bolton said local authorities should be held accountable for not sounding the alarm and giving residents a chance to safely evacuate before the situation became dire. The Guadalupe-Blanco River Authority, along with the Upper Guadalupe River Authority, the Texas Commission on Environmental Quality and the U.S. Geological Survey monitor the Guadalupe River.',
      }, {
        type: 'important',
        label:"WEATHER WARNINGS",
        description: 'Hill Country, Bexar County under flood watch Friday; flood warnings along Guadalupe River',
      },
      {
        type: 'paragraph',
        text: '“You have the river authorities and I know what they do,” Bolton said. “You cannot tell me it’s not their f---ing job to oversee this river and monitor this river, because that’s what they do. That’s their job.',
      },
      {
        type: 'paragraph',
        text: 'Where was the notification for all these families that needed to get out of here, because it had to be rising up that way first.',
      },
       {
        type: 'paragraph',
        text: "During a press conference, officials tried to quell concerns about the city and county's response to the overnight tragedy.",
      },
       {
        type: 'paragraph',
        text: `We didn't know this flood was coming," said Kerr County Judge Rob Kelly. "Rest assured no one knew this kind of flood was coming. We have floods all of the time. This is the most dangerous river valley in the United States.`,
      },
      {
        type: 'important',
        label:"AREA CAMPS",
        description: "Where are the summer camps affected by deadly floods in Texas? Here's what to know.",
      },
      {
        type: 'paragraph',
        text: `The National Weather Service initially issued a flash flood watch just after 1 p.m. on Thursday and by 1 a.m. Friday, the agency had issued a "life threatening" flash flood warning.`,
      },
      {
        type: 'paragraph',
        text: `"We had no reason to believe this was going to be anything like what's happened here," he said. "None whatsoever."`,
      },
      {
        type: 'paragraph',
        text: `Fighting back tears, Kerville Mayor Joe Herring, Jr. asked for prayers for the community. City manager Dalton Rice also reiterrated Kelly's sentiments about the suddeness of the flash flooding.`,
      },   
       {
        type: 'paragraph',
        text: `"This happened very quickly over a very short amount of time that could not be predicted," he said. "This is not like a tornado where you can have a siren. This is not a hurricane where you're planning weeks in advance. It hit.`,
      },   
       {
        type: 'paragraph',
        text: `"It hit hard and things like this happen in a very strategic, very isolated area and when those two things converge you have what happened today."`,
      },    
    ]
  },
    {
    heading: 'Running out of time',
    blocks: [
      {
        type: 'paragraph',
        text: `After driving to the edge of the river and not seeing any flooding near her business, Howdy’s Restaurant, Bar and Chill, Lorena Guillen returned home.  Guillen said when she called the sheriff’s office before 3 a.m., they didn’t indicate to her that she needed to evacuate her home. `,
      },
      {
        type: 'paragraph',
        text: `However, hours later, everything changed.`,
      },
       {
        type: 'paragraph',
        text: `“We couldn’t do much,” she said. “The water was rising so fast. Within 45 minutes at the most, the water was from where it is now to the deck. It was gone. Everything was gone.”`,
      }, 
      
      //  {
      //   type: 'video',
      //   src: '/video-thumbnail.jpg',
      //   title: 'Scenes from the devastating floods in Kerr County',
      //   caption: 'Thomas Rux talks about evacuating...',
      //   credit: 'Chris Lee / San Antonio-Express News',
      // },
      
      {
        type: 'paragraph',
        text: `Guillen said she could hear people trapped in their vehicles screaming for help as flood waters rushed them away.`,
      },
      {
        type: 'paragraph',
        text: `“We started seeing the cabins floating from the other RV Parks floating down the river,” she said. “We started seeing cars with lights on and people honking inside their cars and they were just floating away.”`,
      },

      {
        type: 'important',
        label:"HOUSTON IMPACT",
        description: `HISD elementary school student missing after Camp Mystic flooding in Texas, school PTO says`,
      },

       {
        type: 'paragraph',
        text: `Despite emergency crews rushing in to help, Guillen said for many, it was too little, too late. `,
      },
       {
        type: 'paragraph',
        text: `“It was at least 50 rescuers here and they were amazing at their job, but they couldn’t get to everybody,” she said. “There was too much loss — human loss and property loss. `,
      },

      {
        type: 'paragraph',
        text: `Dubbed the “best hideout” on the Guadalupe River, Howdy’s Restaurant, Bar and Chill served everything from fried chicken to Salisbury steak. The business hosted specials throughout the week like Taco and Tequila Tuesday and Fried Fish Friday. `,
      },
      {
        type: 'paragraph',
        text: `“We don’t know what we’re going to do,” said Guillen. “How are we going to pay our mortgage or how we’re going to survive this?”`,
      },
      {
        type: 'paragraph',
        text: `Fighting back tears, Kerville Mayor Joe Herring, Jr. asked for prayers for the community. City manager Dalton Rice also reiterrated Kelly's sentiments about the suddeness of the flash flooding.`,
      },   
       {
        type: 'italicParagraph',
        text: `San Antonio-Express News staff contributed to this report.`,
      }, 
    ]
  }
]

  },
];




  

