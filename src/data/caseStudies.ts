import heroMap from '../assets/caseStudyMap/desktop-map.png'
import mapDesktop from '../assets/caseStudyMap/desktop-webmock-map.png'
import mapMobile from '../assets/caseStudyMap/iphone-webmock-map.png'
import mapMobileTwo from '../assets/caseStudyMap/iphone-webmock2-map.png'
import oldDesktopMap from '../assets/caseStudyMap/desktop-old-map.png'
import oldMobileMap from '../assets/caseStudyMap/mobile-old-map.png'

import templateHero from '../assets/caseStudyHomepageEditor/luna-hero.png'
import editorTemplateSelection from '../assets/caseStudyHomepageEditor/editor-template-selection.png'
import editorAddSection from '../assets/caseStudyHomepageEditor/editor-add-section.png'
import editorConfigureSection from '../assets/caseStudyHomepageEditor/editor-configure-section.png'
import editorLivePreview from '../assets/caseStudyHomepageEditor/editor-live-preview.png'
import sectionHero from '../assets/caseStudyHomepageEditor/section-hero.png'
import sectionServices from '../assets/caseStudyHomepageEditor/section-services.png'
import sectionGallery from '../assets/caseStudyHomepageEditor/section-gallery.png'
import sectionTestimonials from '../assets/caseStudyHomepageEditor/section-testimonials.png'
import sectionAbout from '../assets/caseStudyHomepageEditor/section-about.png'
import sectionFooter from '../assets/caseStudyHomepageEditor/section-footer.png'
import brandModernClean from '../assets/caseStudyHomepageEditor/brand-modern-clean.png'
import brandBespoke from '../assets/caseStudyHomepageEditor/brand-bespoke.png'
import brandRustic from '../assets/caseStudyHomepageEditor/brand-rustic.png'

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

export type CaseStudyGallery = {
  eyebrow?: string
  title: string
  description?: string
  columns?: 2 | 3 | 4
  // Drop the card behind each image
  plain?: boolean
  // Hairline outline on each image (for screenshots with white edges)
  framed?: boolean
  // Masonry layout: items are placed in the given column, natural heights kept
  masonry?: boolean
  items: { image: string; caption: string; column?: number }[]
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
  heroDetails?: string[]
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

  galleries?: CaseStudyGallery[]
  artifactsEyebrow?: string
  artifacts?: CaseStudyArtifact[]
  sectionsEyebrow?: string
  sections?: CaseStudySection[]
  story?: CaseStudyStoryBlock[]
  closingStory?: CaseStudyStoryBlock[]
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'business-discovery-maps',
    eyebrow: '01',
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
    eyebrow: '02',
    title: 'Homepage Template System',
    subtitle: 'A reusable system for building branded, responsive florist storefronts.',
    description:
      'A library of homepage templates and reusable sections that helps internal teams build polished, responsive websites for wedding florists.',
    status: 'Design system',
    featured: true,
    accent: 'template',
    heroImage: templateHero,
    thumbnailImage: templateHero,
    role: 'Product Design · Design Systems',
    scope: 'Template system, editor flows, reusable sections, responsive design',
    team: 'Product, design, engineering',
    outcome:
      'A reusable system that lets teams build distinct florist storefronts without a custom homepage for each business',
    galleries: [
      {
        eyebrow: 'Website editor',
        title: 'Designing the editor',
        description: 'A configurable tool for building and managing homepage content.',
        columns: 2,
        plain: true,
        framed: true,
        items: [
          { image: editorTemplateSelection, caption: '01 Template selection' },
          { image: editorAddSection, caption: '02 Section selection' },
          { image: editorConfigureSection, caption: '03 Section configuration' },
          { image: editorLivePreview, caption: '04 Live preview' },
        ],
      },
      {
        eyebrow: 'The system',
        title: 'A system of reusable sections',
        description:
          'Flexible, modular sections that can be combined and restyled across storefronts. Shown here as they appear on different florist sites.',
        plain: true,
        framed: true,
        masonry: true,
        items: [
          { image: sectionHero, caption: 'Hero', column: 0 },
          { image: sectionServices, caption: 'Services', column: 1 },
          { image: sectionGallery, caption: 'Gallery', column: 0 },
          { image: sectionTestimonials, caption: 'Testimonials', column: 1 },
          { image: sectionAbout, caption: 'About', column: 1 },
          { image: sectionFooter, caption: 'Footer', column: 0 },
        ],
      },
      {
        eyebrow: 'Storefronts',
        title: 'One system. Different storefronts.',
        description:
          'The same underlying system adapts to each florist’s content and visual identity.',
        plain: true,
        items: [
          { image: brandModernClean, caption: 'Modern & Minimal' },
          { image: brandBespoke, caption: 'Elegant & Luxury' },
          { image: brandRustic, caption: 'Warm & Organic' },
        ],
      },
    ],
    artifactsEyebrow: 'Outcome',
    artifacts: [
      {
        label: '01',
        title: 'Reusable system',
        description: 'Shared sections and layouts replaced one-off homepage designs.',
      },
      {
        label: '02',
        title: 'Flexible customization',
        description:
          'Florists could adapt content and visual presentation within a consistent structure.',
      },
      {
        label: '03',
        title: 'Scalable templates',
        description: 'A shared foundation could support different storefronts and content needs.',
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
