import { pageInformation, Routes } from 'constants/pages'

export const caseStudies = [
  {
    project: 'Tempso',
    description: 'UX Research & Wireframes',
    href: pageInformation[Routes.TempsoUX]!.path,
    src: '/ux-case-study-tempso.png',
    alt: 'Tempso UX Case Study',
    external: false,
  },
  {
    project: 'Tempso',
    description: 'UI & High-fidelity mockups',
    href: pageInformation[Routes.Tempso]!.path,
    src: '/case-study-tempso.png',
    alt: 'Tempso UI',
    external: false,
  },
  {
    project: 'BlueCargo',
    description: 'UX Research & Wireframes',
    href: pageInformation[Routes.ContainerTracking]!.path,
    src: '/case-study-container-management.png',
    alt: 'Container Tracking Case Study',
    external: false,
  },
  {
    project: 'Luxury Travel Agency',
    description: 'UX/UI Design - Website',
    href: pageInformation[Routes.LuxuryTravel]!.path,
    src: '/case-study-luxury-travel.png',
    alt: 'Luxury Travel Case Study',
    external: false,
  },
  {
    project: 'UI Shots',
    description: 'UX/UI Design - Practice',
    href: pageInformation[Routes.UIShots]!.path,
    src: '/case-study-ui-shots.png',
    alt: 'UI Shots',
    external: false,
  },
  {
    project: 'Portfolio Website',
    description: 'Front-end & Back-end',
    href: 'https://github.com/PierreParienteDimitrov/pierre-parientedimitrov',
    src: '/software-portfolio.png',
    alt: 'Portfolio Website',
    external: true,
  },
  {
    project: 'Tempso Landing Page',
    description: 'UX/UI Design & Front-end',
    href: 'https://github.com/PierreParienteDimitrov/tempso.com',
    src: '/case-study-tempso-landing-page.png',
    alt: 'Tempso Landing Page',
    external: true,
  },
  {
    project: 'Know Better World Foundation',
    description: 'UX/UI Design & Squarespace',
    href: 'https://www.knowbetterworldfoundation.org/',
    src: '/case-study-kbwf.png',
    alt: 'Know Better World Foundation Website',
    external: true,
  },
  {
    project: 'Skoog Media',
    description: 'UX/UI Design & Shopify',
    href: 'https://skoog.media/',
    src: '/case-study-skoog.png',
    alt: 'Skoog Website',
    external: true,
  },
  {
    project: 'Technext',
    description: 'X/UI Design & Wix',
    href: 'https://www.technext.fr/?lang=en',
    src: '/case-study-technext.png',
    alt: 'Technext Website',
    external: true,
  },
]
