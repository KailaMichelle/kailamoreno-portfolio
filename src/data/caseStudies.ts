import heroMap from '../assets/caseStudyMap/desktop-map.png'
import mapDesktop from '../assets/caseStudyMap/desktop-webmock-map.png'
import mapMobile from '../assets/caseStudyMap/iphone-webmock-map.png'
import mapMobileTwo from '../assets/caseStudyMap/iphone-webmock2-map.png'
import oldDesktopMap from '../assets/caseStudyMap/desktop-old-map.png'
import oldMobileMap from '../assets/caseStudyMap/mobile-old-map.png'

import templateHero from '../assets/caseStudyHomepageEditor/atelier-hero.png'
import templateFlow from '../assets/caseStudyHomepageEditor/atelier-userflow.png'
import templateWireframes from '../assets/caseStudyHomepageEditor/atelier-wireframes.png'
import templateDesktop from '../assets/caseStudyHomepageEditor/atelier--desktop-hero.png'
import templateMobile from '../assets/caseStudyHomepageEditor/atelier-mobile-header.png'
import templateFull from '../assets/caseStudyHomepageEditor/atelier-contact-section.png'

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
  accent?: 'map' | 'wedding' | 'template'

  heroImage?: string
  thumbnailImage?: string
  imageNote?: string

  role: string
  scope: string
  team: string
  outcome: string
  liveUrl?: string

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
  templateCaption?: string

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
    eyebrow: 'Recreated case study',
    title: 'Homepage Template System',
    subtitle:
      'A flexible homepage template system designed to help internal teams create more polished, brand-aligned storefront experiences.',
    description:
      'An anonymized recreation of confidential product work focused on homepage templates, reusable sections, and responsive implementation.',
    status: 'Case study',
    featured: true,
    accent: 'template',
    heroImage: templateHero,
    thumbnailImage: templateHero,
    imageNote:
      'Recreated with fictional interior design content to protect confidential work while preserving the original product logic, layout structure, and implementation approach.',
    role: 'Product Design · UX Engineering',
    scope: 'UX flow, template structure, visual design, responsive implementation',
    team: 'Design, product, implementation, engineering',
    outcome:
      'Expanded homepage flexibility with a modular structure that supported more varied storefront layouts within an existing system.',
    sections: [
      {
        kicker: 'Context',
        title: 'Expanding an existing system.',
        body: [
          'I worked within an existing website management platform used by internal teams to build and configure storefront homepages.',
        ],
      },
      {
        kicker: 'Problem',
        title: 'Limited homepage flexibility.',
        body: [
          'The existing template options made it difficult to create distinct, brand-aligned pages without one-off design or development support.',
        ],
      },
      {
        kicker: 'Approach',
        title: 'Reusable, modular sections.',
        body: [
          'I focused on flexible homepage sections, configurable content areas, and responsive patterns that could scale across different visual directions.',
        ],
      },
    ],
    flowEyebrow: 'User flow',
    flowTitle: 'From template selection to publish.',
    flowDescription:
      'I mapped the internal workflow around how implementation teams select, customize, preview, and publish homepage templates.',
    flowImage: templateFlow,
    flowCaption:
      'The flow helped define where template selection, style direction, section editing, preview, and publishing fit within the existing workflow.',
    wireframeEyebrow: 'Wireframes',
    wireframeTitle: 'Defining structure before visual polish.',
    wireframeDescription:
      'I used low-fidelity wireframes to define the homepage structure, template selection moment, and editor layout before moving into higher-fidelity design.',
    wireframeImage: templateWireframes,
    wireframeCaption:
      'Early wireframes focused on hierarchy, reusable sections, and how the homepage editor could support common customization tasks.',
    finalEyebrow: 'Recreated final direction',
    finalTitle: 'A premium homepage template for a service-based business.',
    finalDescription:
      'The final mockups use fictional interior design content to show how the template system could support a polished homepage across desktop and mobile.',
    desktopImage: templateDesktop,
    mobileImage: templateMobile,
    desktopCaption:
      'Desktop template showing a brand-forward hero, portfolio cards, process content, testimonials, inquiry form, and footer.',
    mobileCaption:
      'Mobile crop showing how portfolio content and visual hierarchy adapt to smaller screens.',
    templateEyebrow: 'Template sections',
    templateTitle: 'Showing the system through selected page sections.',
    templateDescription:
      'The full homepage is intentionally long, so the case study highlights a few representative sections instead of showing the entire page at once.',
    templateImage: templateFull,
    templateCaption:
      'Selected sections from the recreated homepage template, including gallery imagery and an inquiry form.',
    artifacts: [
      {
        label: '01',
        title: 'Reusable section system',
        description:
          'Broke the homepage into flexible sections that could support different brands without starting from scratch.',
      },
      {
        label: '02',
        title: 'Internal workflow support',
        description:
          'Centered the flow around how implementation teams select, customize, preview, and publish homepage layouts.',
      },
      {
        label: '03',
        title: 'Responsive templates',
        description:
          'Designed and implemented templates to adapt across desktop and mobile while preserving content hierarchy.',
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
