export const BUSINESS_INFO = {
  name: "Ravo's Landscaping & Property Maintenance",
  shortName: "Ravo's",
  address: {
    street: '7 Factory Road',
    suburb: 'Trafalgar',
    state: 'VIC',
    postcode: '3824',
    country: 'Australia',
    full: '7 Factory Road, Trafalgar VIC 3824, Australia',
  },
  phones: [
    { display: '0447 167 416', href: 'tel:0447167416', label: 'Primary mobile' },
    { display: '0494 123 909', href: 'tel:0494123909', label: 'Secondary mobile' },
  ],
  links: {
    website: 'https://www.ravosmaintenance.com.au/',
    instagram: 'https://www.instagram.com/ravos_landscaping/',
    facebook: 'https://www.facebook.com/profile.php?id=100063685218651',
  },
  serviceAreas: [
    'Trafalgar',
    'West Gippsland',
    'South Gippsland',
    'Latrobe Valley',
  ],
} as const;

export const MEDIA = {
  hero: '/src/assets/images/hero_australian_landscape_1795692093004.jpg',
  approachGarden: '/src/assets/images/approach_garden_detail_1795692093605.jpg',
  deckFirepit: '/src/assets/images/landscaping_deck_firepit_1795692096023.jpg',
  retainingWallSteps: '/src/assets/images/retaining_wall_steps_1795692098042.jpg',
  propertyMaintenance: '/src/assets/images/property_maintenance_lawn_1795692097290.jpg',
  timberMilling: '/src/assets/images/specialist_timber_milling_1795692097518.jpg',
  transformBefore: '/src/assets/images/transform_before_1795692099750.jpg',
  transformAfter: '/src/assets/images/transform_after_1795692099987.jpg',
} as const;

export const NAV_LINKS = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'approach', label: 'Our Approach', href: '#approach' },
  { id: 'services', label: 'Services', href: '#services' },
  { id: 'portfolio', label: 'Our Work', href: '#portfolio' },
  { id: 'why-ravos', label: "Why Ravo's", href: '#why-ravos' },
  { id: 'contact', label: 'Contact', href: '#contact' },
] as const;

export interface ServicePathwayData {
  id: 'landscaping' | 'maintenance' | 'specialist';
  number: string;
  title: string;
  subtitle: string;
  description: string;
  ctaLabel: string;
  sectionAnchor: string;
  defaultQuoteService: string;
  image: string;
  imageAlt: string;
  services: string[];
}

export const SERVICE_PATHWAYS: ServicePathwayData[] = [
  {
    id: 'landscaping',
    number: '01',
    title: 'Landscape Transformations',
    subtitle: 'Design, build & reshape your outdoor living space',
    description:
      'For property owners looking to improve or completely rework their outdoor areas with considered layouts, retaining walls, planting and timber structures.',
    ctaLabel: 'Explore Landscaping',
    sectionAnchor: '#landscaping',
    defaultQuoteService: 'Landscaping',
    image: MEDIA.deckFirepit,
    imageAlt:
      'Representative Australian backyard makeover with spotted gum timber deck, stone fire pit and native garden beds',
    services: [
      'Landscaping',
      'Garden makeovers',
      'Retaining walls',
      'Landscape construction',
      'Decking and outdoor spaces',
    ],
  },
  {
    id: 'maintenance',
    number: '02',
    title: 'Property Care',
    subtitle: 'Dependable ongoing or one-off upkeep',
    description:
      'For residential, commercial and public properties that need regular lawn care, garden attention, pruning, gutter clearing or rubbish removal.',
    ctaLabel: 'Explore Property Care',
    sectionAnchor: '#maintenance',
    defaultQuoteService: 'Property Maintenance',
    image: MEDIA.propertyMaintenance,
    imageAlt:
      'Representative freshly mowed residential lawn, neatly pruned boundary hedge and clean garden beds',
    services: [
      'Lawn mowing',
      'Gardening',
      'Tree and bush pruning',
      'General property maintenance',
      'Gutter cleaning',
      'Rubbish removal',
    ],
  },
  {
    id: 'specialist',
    number: '03',
    title: 'Specialist Outdoor Work',
    subtitle: 'Practical construction, timber milling & site tasks',
    description:
      'For properties requiring concreting, outdoor steps, custom timber milling orders, small tree removal or practical handyman repairs.',
    ctaLabel: 'Explore Specialist Services',
    sectionAnchor: '#specialist',
    defaultQuoteService: 'Custom Timber Milling',
    image: MEDIA.timberMilling,
    imageAlt:
      'Representative stack of freshly custom-milled Australian hardwood timber slabs in an outdoor yard',
    services: [
      'Concreting',
      'Fire pits',
      'Outdoor steps',
      'Custom timber milling',
      'Handyman services',
      'Small tree removal',
    ],
  },
];

export const LANDSCAPING_SERVICES = [
  {
    number: '01',
    title: 'Landscaping',
    description:
      'Thoughtful landscaping solutions that bring together garden elements, outdoor spaces and the character of your property.',
    quoteService: 'Landscaping',
    image: MEDIA.hero,
    imageAlt:
      'Representative Australian landscape with natural stone stepping path, lawn and native garden border',
  },
  {
    number: '02',
    title: 'Garden Makeovers',
    description:
      'Give an existing garden a new direction through considered planting, layout improvements and outdoor transformations.',
    quoteService: 'Garden Makeover',
    image: MEDIA.approachGarden,
    imageAlt:
      'Representative garden bed bordered with steel edging, dark organic mulch and Australian native shrubs',
  },
  {
    number: '03',
    title: 'Retaining Walls',
    description:
      'Practical retaining wall solutions that help manage changes in ground levels and define outdoor spaces.',
    quoteService: 'Retaining Walls',
    image: MEDIA.retainingWallSteps,
    imageAlt:
      'Representative hardwood sleeper retaining wall and outdoor steps managing a sloped garden terrain',
  },
  {
    number: '04',
    title: 'Decking & Outdoor Structures',
    description:
      'Create additional outdoor living opportunities with decking, steps and outdoor structures.',
    quoteService: 'Decking',
    image: MEDIA.deckFirepit,
    imageAlt:
      'Representative timber deck stepping down to an outdoor entertaining courtyard',
  },
  {
    number: '05',
    title: 'Fire Pits',
    description:
      'Introduce a dedicated outdoor gathering feature that adds another dimension to your outdoor environment.',
    quoteService: 'Fire Pits',
    image: MEDIA.deckFirepit,
    imageAlt:
      'Representative stone and steel outdoor fire pit framed by timber bench seating',
  },
] as const;

export const MAINTENANCE_SERVICES = [
  {
    title: 'Lawn Mowing',
    description: 'Keep lawns maintained and outdoor areas tidy.',
    quoteService: 'Lawn Mowing',
  },
  {
    title: 'Gardening',
    description: 'Maintain garden areas and improve their overall appearance.',
    quoteService: 'Gardening',
  },
  {
    title: 'Tree & Bush Pruning',
    description: 'Manage overgrown branches and garden vegetation.',
    quoteService: 'Tree/Bush Pruning',
  },
  {
    title: 'Property Maintenance',
    description: 'Support the ongoing upkeep of residential and other properties.',
    quoteService: 'Property Maintenance',
  },
  {
    title: 'Gutter Cleaning',
    description: 'Help maintain clean and functional gutters.',
    quoteService: 'Gutter Cleaning',
  },
  {
    title: 'Rubbish Removal',
    description: 'Assist with clearing unwanted rubbish from properties.',
    quoteService: 'Rubbish Removal',
  },
] as const;

export const SPECIALIST_SERVICES = [
  {
    number: '01',
    title: 'Custom Timber Milling',
    description:
      'Custom timber milling orders for projects requiring tailored timber preparation.',
    quoteService: 'Custom Timber Milling',
    image: MEDIA.timberMilling,
    imageAlt:
      'Representative freshly milled Australian hardwood timber slabs stacked neatly to season',
  },
  {
    number: '02',
    title: 'Handyman Services',
    description:
      'Practical assistance with property repairs and maintenance tasks.',
    quoteService: 'Handyman Service',
  },
  {
    number: '03',
    title: 'Concreting',
    description:
      'Concrete work for outdoor property improvements.',
    quoteService: 'Concreting',
  },
  {
    number: '04',
    title: 'Tree Removal',
    description:
      'Small tree removal services to help address unwanted or obstructive trees.',
    quoteService: 'Tree Removal',
  },
  {
    number: '05',
    title: 'Outdoor Steps & Fire Pits',
    description:
      'Outdoor features that contribute to the functionality and character of a property.',
    quoteService: 'Fire Pits',
    image: MEDIA.retainingWallSteps,
    imageAlt:
      'Representative concrete and hardwood timber outdoor garden steps along a terraced garden',
  },
] as const;

export type PortfolioCategory =
  | 'All Projects'
  | 'Landscaping'
  | 'Garden Makeovers'
  | 'Outdoor Construction'
  | 'Property Maintenance';

export const PORTFOLIO_CATEGORIES: PortfolioCategory[] = [
  'All Projects',
  'Landscaping',
  'Garden Makeovers',
  'Outdoor Construction',
  'Property Maintenance',
];

export interface ShowcaseProject {
  id: string;
  title: string;
  category: Exclude<PortfolioCategory, 'All Projects'>;
  projectType: string;
  aspectClass: string;
  spanClass: string;
  image: string;
  galleryImages: { src: string; alt: string; caption: string }[];
  theSpace: string;
  theWork: string;
  theResult: string;
  quoteService: string;
}

export const SHOWCASE_PROJECTS: ShowcaseProject[] = [
  {
    id: 'outdoor-living-deck-firepit',
    title: 'Hardwood Deck & Fire Pit Courtyard',
    category: 'Outdoor Construction',
    projectType: 'Decking, Fire Pit & Garden Framing',
    aspectClass: 'aspect-[16/10]',
    spanClass: 'lg:col-span-7',
    image: MEDIA.deckFirepit,
    galleryImages: [
      {
        src: MEDIA.deckFirepit,
        alt: 'Representative outdoor entertaining space with timber deck and circular fire pit courtyard',
        caption: 'Timber deck transition into gravel fire pit gathering zone',
      },
      {
        src: MEDIA.hero,
        alt: 'Representative wide garden layout linking stepping stones, lawn and timber decking',
        caption: 'Connected pathway and garden edge framing the outdoor living area',
      },
    ],
    theSpace:
      'A residential backyard requiring a practical connection between indoor living spaces, lawn area and an evening gathering zone.',
    theWork:
      'Representative scope demonstrating raised timber decking, wide access steps, gravel courtyard preparation, a defined fire pit hub and perimeter garden planting.',
    theResult:
      'A structured outdoor living zone with clear circulation between the house, seating area and lawn.',
    quoteService: 'Decking',
  },
  {
    id: 'terraced-retaining-wall-steps',
    title: 'Terraced Sleeper Retaining Wall & Steps',
    category: 'Outdoor Construction',
    projectType: 'Retaining Walls & Concrete-Timber Steps',
    aspectClass: 'aspect-[4/5]',
    spanClass: 'lg:col-span-5',
    image: MEDIA.retainingWallSteps,
    galleryImages: [
      {
        src: MEDIA.retainingWallSteps,
        alt: 'Representative timber sleeper retaining walls paired with wide concrete and timber steps',
        caption: 'Multi-level retaining tiers with wide integrated outdoor steps',
      },
      {
        src: MEDIA.approachGarden,
        alt: 'Representative terraced planting bed bordered by sleeper timber retaining edge',
        caption: 'Structured garden edging and mulch planting along level transitions',
      },
    ],
    theSpace:
      'A sloping yard where elevation changes made garden access and planting difficult to manage cleanly.',
    theWork:
      'Representative scope illustrating tiered hardwood retaining walls, stepped pedestrian access in concrete and timber, and mulched ornamental grass beds.',
    theResult:
      'Defined ground levels, safer movement between upper and lower sections of the property, and tidy, low-clutter planting tiers.',
    quoteService: 'Retaining Walls',
  },
  {
    id: 'bluestone-path-native-landscape',
    title: 'Stone Pathway & Layered Native Lawn',
    category: 'Landscaping',
    projectType: 'General Landscaping & Stonework',
    aspectClass: 'aspect-[16/10]',
    spanClass: 'lg:col-span-6',
    image: MEDIA.hero,
    galleryImages: [
      {
        src: MEDIA.hero,
        alt: 'Representative Australian garden featuring dark bluestone stepping stones, level turf and native shrubs',
        caption: 'Stepping stone alignment set cleanly into an open residential lawn',
      },
      {
        src: MEDIA.transformAfter,
        alt: 'Representative backyard lawn and retaining wall upgrade',
        caption: 'Clean turf surface bordered by raised timber garden beds',
      },
    ],
    theSpace:
      'An expansive residential block surrounded by mature eucalyptus trees needing cohesive structure between the deck and garden boundary.',
    theWork:
      'Representative scope covering turf preparation, natural stone stepping path placement, low retaining edge construction and native shrub planting.',
    theResult:
      'An open, inviting lawn framed by natural textures that sit comfortably within the surrounding Victorian bushland setting.',
    quoteService: 'Landscaping',
  },
  {
    id: 'garden-border-makeover',
    title: 'Structured Garden Bed Makeover',
    category: 'Garden Makeovers',
    projectType: 'Garden Makeover & Native Planting',
    aspectClass: 'aspect-[4/3]',
    spanClass: 'lg:col-span-6',
    image: MEDIA.approachGarden,
    galleryImages: [
      {
        src: MEDIA.approachGarden,
        alt: 'Representative curved steel-edged garden bed with native grasses, silvery foliage and sleeper wall',
        caption: 'Defined garden line separating lawn from layered native planting',
      },
      {
        src: MEDIA.transformAfter,
        alt: 'Representative refreshed backyard planting along timber sleeper retaining tiers',
        caption: 'Fresh dark mulch and structured native foliage along fence line',
      },
    ],
    theSpace:
      'An established yard needing clearer separation between lawn areas and planting beds to simplify ongoing upkeep.',
    theWork:
      'Representative scope featuring curved garden edging, soil preparation, organic mulching, low timber sleeper retention and layered hardy planting.',
    theResult:
      'Sharper visual lines across the front and side yard with planting beds that look considered year-round.',
    quoteService: 'Garden Makeover',
  },
  {
    id: 'residential-property-care',
    title: 'Complete Residential Lawn & Hedge Care',
    category: 'Property Maintenance',
    projectType: 'Lawn Mowing, Pruning & Property Care',
    aspectClass: 'aspect-[16/9]',
    spanClass: 'lg:col-span-7',
    image: MEDIA.propertyMaintenance,
    galleryImages: [
      {
        src: MEDIA.propertyMaintenance,
        alt: 'Representative neatly mowed residential lawn, squared hedge and clean swept driveway',
        caption: 'Even lawn finish, crisp hedge pruning and clean hard surfaces',
      },
    ],
    theSpace:
      'A family home requiring consistent presentation across lawns, boundary hedges, paths and garden beds.',
    theWork:
      'Representative scope highlighting scheduled lawn mowing, edge trimming, boundary hedge shaping and general tidy-up of garden beds and pathways.',
    theResult:
      'A well-kept, welcoming exterior maintained cleanly through once-off visits or an ongoing schedule.',
    quoteService: 'Property Maintenance',
  },
  {
    id: 'custom-timber-milling-prep',
    title: 'Custom Hardwood Timber Milling',
    category: 'Landscaping',
    projectType: 'Custom Timber Milling & Feature Preparation',
    aspectClass: 'aspect-[4/3]',
    spanClass: 'lg:col-span-5',
    image: MEDIA.timberMilling,
    galleryImages: [
      {
        src: MEDIA.timberMilling,
        alt: 'Representative freshly milled thick Australian hardwood timber slabs stacked neatly',
        caption: 'Tailored hardwood slabs prepared to project requirements',
      },
    ],
    theSpace:
      'Projects requiring bespoke timber sections for outdoor seating, garden edges or custom property features.',
    theWork:
      'Representative view of custom timber milling preparation, cutting raw logs into practical slab dimensions ready for seasoning and project use.',
    theResult:
      'Distinctive timber stock tailored to individual outdoor builds and custom orders.',
    quoteService: 'Custom Timber Milling',
  },
];

export const WORK_PROCESS_STEPS = [
  {
    number: '01',
    title: 'Tell Us What You Need',
    description:
      'Discuss your landscaping, maintenance or property requirements — whether it is a once-off task, ongoing care or a larger outdoor build.',
  },
  {
    number: '02',
    title: 'Understand The Job',
    description:
      'Establish the work required, site access and relevant project details so expectations are clear from the start.',
  },
  {
    number: '03',
    title: 'Plan The Work',
    description:
      'Determine the appropriate practical approach, materials and sequencing for the requested service.',
  },
  {
    number: '04',
    title: 'Get The Work Done',
    description:
      'Carry out the agreed work with a focus on reliability, punctuality and professional execution.',
  },
] as const;

export const WHY_RAVOS_PILLARS = [
  {
    metric: '15+',
    unit: 'Years Experience',
    title: 'Over 15 Years of Experience',
    description:
      'Over 15 years of hands-on landscaping and property maintenance experience across residential, commercial and public spaces.',
  },
  {
    metric: '02',
    unit: 'Local Roots',
    title: 'Family-Owned Business',
    description:
      'A family-owned business based in Trafalgar with a genuine local presence and direct, practical communication.',
  },
  {
    metric: '03',
    unit: 'Peace of Mind',
    title: 'Fully Insured',
    description:
      'Fully insured across our landscaping, outdoor construction and property maintenance work.',
  },
  {
    metric: '04',
    unit: 'Your Schedule',
    title: 'Ongoing or Once-Off Work',
    description:
      'Flexible service options tailored to different property requirements — from single clean-ups and builds to regular maintenance.',
  },
] as const;

export const QUOTE_SERVICE_OPTIONS = [
  'Landscaping',
  'Garden Makeover',
  'Retaining Walls',
  'Lawn Mowing',
  'Gardening',
  'Tree/Bush Pruning',
  'Property Maintenance',
  'Decking',
  'Fire Pits',
  'Concreting',
  'Custom Timber Milling',
  'Handyman Service',
  'Tree Removal',
  'Gutter Cleaning',
  'Rubbish Removal',
  'Other',
] as const;

export const JOB_FREQUENCY_OPTIONS = [
  'One-off job',
  'Ongoing maintenance',
  'Not sure yet',
] as const;
