import heroMap from '../assets/caseStudyMap/desktop-map.png'
import mapDesktop from '../assets/caseStudyMap/desktop-webmock-map.png'
import mapMobile from '../assets/caseStudyMap/iphone-webmock-map.png'
import mapMobileTwo from '../assets/caseStudyMap/iphone-webmock2-map.png'
import oldDesktopMap from '../assets/caseStudyMap/desktop-old-map.png'
import oldMobileMap from '../assets/caseStudyMap/mobile-old-map.png'

import templateHero from '../assets/caseStudyHomepageEditor/luna-hero.png'
import templateFlow from '../assets/caseStudyHomepageEditor/atelier-userflow.png'
import templateWireframes from '../assets/caseStudyHomepageEditor/atelier-wireframes.png'
import templateDesktop from '../assets/caseStudyHomepageEditor/luna-desktop-hero.png'
import templateMobile from '../assets/caseStudyHomepageEditor/luna-mobile-header.png'
import templateServices from '../assets/caseStudyHomepageEditor/luna-services-section.png'
import templateGallery from '../assets/caseStudyHomepageEditor/luna-gallery-section.png'

export type CaseStudySection = {
  kicker?: string
  title: string
  body: string[]
}

export type CaseStudyStoryBlock = {
  title: string
  body?: string[]
  list?: string[]
  items?: { title: string; body: string }[]
}

export type CaseStudyArtifact = {
  label: string
  title: string
  description: string
}

export type CaseStudyMeta = {
  label: string
  value: string
}

export type CaseStudy = {
  slug: string
  title: string
  eyebrow?: string
  subtitle: string
  description: string
  status: string
  featured?: boolean
  accent?: 'map' | 'wedding' | 'template'

  heroImage?: string
  thumbnailImage?: string
  imageNote?: string

  role: string
  scope: string
  team: string
  outcome: string
  liveUrl?: string
  meta?: CaseStudyMeta[]

  existingEyebrow?: string
  existingTitle?: string
  existingDescription?: string
  existingDesktopImage?: string
  existingMobileImage?: string
  existingDesktopCaption?: string
  existingMobileCaption?: string

  finalEyebrow?: string
  finalTitle?: string
  finalDescription?: string
  desktopImage?: string
  mobileImage?: string
  mobileImageTwo?: string
  desktopCaption?: string
  mobileCaption?: string
  mobileTwoCaption?: string

  flowEyebrow?: string
  flowTitle?: string
  flowDescription?: string
  flowImage?: string
  flowCaption?: string

  wireframeEyebrow?: string
  wireframeTitle?: string
  wireframeDescription?: string
  wireframeImage?: string
  wireframeCaption?: string

  templateEyebrow?: string
  templateTitle?: string
  templateDescription?: string
  templateImage?: string
  templateImageTwo?: string
  templateCaption?: string

  artifacts?: CaseStudyArtifact[]
  sections?: CaseStudySection[]
  story?: CaseStudyStoryBlock[]
  closingStory?: CaseStudyStoryBlock[]
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
    thumbnailImage: heroMap,
    imageNote: 'Final screens recreated for presentation using the live public experience.',
    role: 'Product Design · Front-End Engineering',
    scope: 'UX, responsive design, interaction details, implementation',
    team: 'Product, design, engineering',
    outcome: 'A shipped public experience that brings location into the browsing flow.',
    liveUrl: 'https://www.bloomnation.com/best/best-florists-in-santa-monica-ca/',
    existingEyebrow: 'Existing experience',
    existingTitle: 'Location was buried in long-form pages.',
    existingDescription:
      'The previous flow separated business details from geographic context, making comparison feel slower.',
    existingDesktopCaption: 'Existing desktop experience',
    existingMobileCaption: 'Existing mobile experience',
    desktopImage: mapDesktop,
    mobileImage: mapMobile,
    mobileImageTwo: mapMobileTwo,
    finalEyebrow: 'Final design',
    finalTitle: 'A map-first experience across screen sizes.',
    finalDescription:
      'The final design keeps result details and location context close together, with mobile patterns tailored for smaller screens.',
    desktopCaption: 'Desktop split view pairs results with map context.',
    mobileCaption: 'Mobile list view prioritizes quick scanning.',
    mobileTwoCaption: 'Mobile map view keeps nearby options visible.',
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
    slug: 'homepage-template-system',
    eyebrow: 'Product Design · Design Systems',
    title: 'Homepage Template System',
    subtitle:
      'A library of homepage templates and reusable sections that helps internal teams build polished, responsive websites for wedding florists.',
    description:
      'A library of homepage templates and reusable sections that helps internal teams build polished, responsive websites for wedding florists.',
    status: 'Case study',
    featured: true,
    accent: 'template',
    heroImage: templateHero,
    thumbnailImage: templateHero,
    role: 'Product Design · Design Systems',
    scope: 'UX flow, template structure, visual design, responsive implementation',
    team: 'Design, product, implementation, engineering',
    outcome:
      'Expanded homepage flexibility with a modular structure that supported more varied storefront layouts within an existing system.',
    meta: [
      { label: 'Role', value: 'Product Designer' },
      { label: 'Focus', value: 'Design systems, templates' },
      { label: 'Users', value: 'Internal web teams' },
      { label: 'Platform', value: 'Desktop & mobile' },
    ],
    story: [
      {
        title: 'Overview',
        body: [
          'Wedding florists sell through their imagery. Their homepage is their portfolio, first impression, and inquiry funnel. I designed a template system that lets our internal teams build these sites faster without losing what makes each florist distinct.',
        ],
      },
      {
        title: 'The Challenge',
        body: [
          'Building each site from scratch was slow and produced inconsistent results. The team needed a faster starting point that still felt custom to each florist.',
        ],
      },
      {
        title: 'Goals',
        list: [
          'Speed up homepage builds',
          'Keep quality consistent across sites',
          'Let each florist’s style come through',
          'Work seamlessly on mobile',
        ],
      },
      {
        title: 'Approach',
        items: [
          {
            title: 'Designing for two audiences',
            body: 'The system had to be easy for the team to build with and compelling for the couples browsing the site.',
          },
          {
            title: 'Modular by default',
            body: 'I broke the homepage into reusable sections (hero, services, gallery, about, testimonials, inquiry) with variants that combine into distinct pages.',
          },
          {
            title: 'Built for real photography',
            body: 'Layouts adapt to varied image sizes and styles so every page looks intentional.',
          },
          {
            title: 'Responsive from the start',
            body: 'Every section was designed for desktop and mobile together.',
          },
        ],
      },
      {
        title: 'The System',
        list: [
          'Homepage templates tuned to different aesthetics',
          'Reusable sections with flexible variants',
          'Shared spacing, type, and image rules',
          'Defined responsive behavior for every component',
        ],
      },
    ],
    closingStory: [
      {
        title: 'Outcome',
        body: [
          'The system gives the team a faster, more consistent way to build florist websites, with every site still feeling personal to the florist.',
        ],
      },
      {
        title: 'Reflection',
        body: [
          'Designing for both the builders and the end audience showed me that a good system has to be easy to use and still produce work that feels custom.',
        ],
      },
    ],
    flowEyebrow: 'Workflow',
    flowTitle: 'From template selection to publish.',
    flowDescription:
      'A guided flow takes the team from choosing a template to publishing a finished homepage.',
    flowImage: templateFlow,
    flowCaption: 'End-to-end build flow, from dashboard to published homepage.',
    wireframeEyebrow: 'Wireframes',
    wireframeTitle: 'Defining structure before visual polish.',
    wireframeDescription:
      'Layouts were set in low fidelity first, so each section worked in any combination.',
    wireframeImage: templateWireframes,
    wireframeCaption: 'Early wireframes exploring section order and layout variants.',
    finalEyebrow: 'Concept homepage',
    finalTitle: 'A premium homepage for a wedding florist.',
    finalDescription:
      'A concept homepage built with real wedding florist work to show what the system can produce.',
    desktopImage: templateDesktop,
    mobileImage: templateMobile,
    desktopCaption: 'Desktop and mobile views of the concept homepage.',
    mobileCaption: '',
    templateEyebrow: 'Section design',
    templateTitle: 'Showing the system through selected sections.',
    templateDescription:
      'Each section is designed to stand on its own and work in any combination.',
    templateImage: templateServices,
    templateImageTwo: templateGallery,
    templateCaption: 'Services and gallery sections from the concept homepage.',
    artifacts: [
      {
        label: '01',
        title: 'Reusable section system',
        description: 'A shared library of sections replaced one-off page builds.',
      },
      {
        label: '02',
        title: 'Internal workflow support',
        description: 'A guided flow from template selection to publish.',
      },
      {
        label: '03',
        title: 'Responsive templates',
        description: 'Every layout works across desktop and mobile.',
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
    featured: false,
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
