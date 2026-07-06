import heroMap from '../assets/caseStudyMap/desktop-map.png'
import mapDesktop from '../assets/caseStudyMap/desktop-webmock-map.png'
import mapMobile from '../assets/caseStudyMap/iphone-webmock-map.png'
import mapMobileTwo from '../assets/caseStudyMap/iphone-webmock2-map.png'
import oldDesktopMap from '../assets/caseStudyMap/desktop-old-map.png'
import oldMobileMap from '../assets/caseStudyMap/mobile-old-map.png'

export type CaseStudySection = {
  kicker?: string
  title: string
  body: string[]
}

export type CaseStudyArtifact = {
  label: string
  title: string
  description: string
}

export type CaseStudy = {
  slug: string
  title: string
  eyebrow?: string
  subtitle: string
  description: string
  status: string
  featured?: boolean
  accent?: 'map' | 'wedding'
  heroImage?: string
  existingDesktopImage?: string
  existingMobileImage?: string
  desktopImage?: string
  mobileImage?: string
  mobileImageTwo?: string
  thumbnailImage?: string
  imageNote?: string
  role: string
  scope: string
  team: string
  outcome: string
  liveUrl?: string
  artifacts?: CaseStudyArtifact[]
  sections?: CaseStudySection[]
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'business-discovery-maps',
    eyebrow: 'Shipped work',
    title: 'Interactive Business Discovery',
    subtitle:
      'A location-first marketplace experience that makes local business discovery faster, more visual, and easier to navigate.',
    description: 'A public marketplace experience with map-first browsing.',
    status: 'Live project',
    featured: true,
    accent: 'map',
    heroImage: heroMap,
    existingDesktopImage: oldDesktopMap,
    existingMobileImage: oldMobileMap,
    desktopImage: mapDesktop,
    mobileImage: mapMobile,
    mobileImageTwo: mapMobileTwo,
    thumbnailImage: heroMap, 
    imageNote: 'Final screens recreated for presentation using the live public experience.',
    role: 'Product Design · Front-End Engineering',
    scope: 'UX, responsive design, interaction details, implementation',
    team: 'Product, design, engineering',
    outcome: 'A shipped public experience that brings location into the browsing flow.',
    liveUrl: 'https://www.bloomnation.com/best/best-florists-in-santa-monica-ca/',
    artifacts: [
      {
        label: '01',
        title: 'Location-first browsing',
        description: 'Made geography part of discovery, not a secondary detail.',
      },
      {
        label: '02',
        title: 'Map + list scanning',
        description: 'Kept business details, imagery, and location context visible together.',
      },
      {
        label: '03',
        title: 'Responsive patterns',
        description: 'Adapted the interaction for desktop and mobile browsing behaviors.',
      },
    ],
  },
  {
    slug: 'guest-experience-platform',
    eyebrow: 'Personal product',
    title: 'Guest Experience Platform',
    subtitle:
      'Designing a destination event site around travel, communication, and private RSVP flows.',
    description:
      'Currently designing a private destination wedding site focused on travel guidance, schedule details, guest communication, and RSVP flows.',
    status: 'In progress',
    featured: true,
    accent: 'wedding',
    role: 'Product Design · Front-End Build',
    scope: 'IA, visual direction, responsive design, RSVP planning',
    team: 'Personal project',
    outcome: 'Early build in progress.',
    artifacts: [
      {
        label: '01',
        title: 'Guest-first IA',
        description: 'Travel, stay, schedule, FAQ, and RSVP organized around guest needs.',
      },
      {
        label: '02',
        title: 'Private RSVP',
        description: 'Public information separated from private guest responses.',
      },
      {
        label: '03',
        title: 'Living product',
        description: 'A project I can keep designing and shipping publicly.',
      },
    ],
    sections: [
      {
        title: 'The focus',
        body: ['Turn a complicated destination event into a calmer guest experience.'],
      },
      {
        title: 'First version',
        body: ['Travel guidance, lodging, schedule, FAQs, and a secure RSVP direction.'],
      },
      {
        title: 'Next',
        body: ['Design the first live pages and document the product decisions as it evolves.'],
      },
    ],
  },
]
