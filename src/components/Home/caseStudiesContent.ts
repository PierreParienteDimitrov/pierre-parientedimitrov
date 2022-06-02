import { pageInformation, Routes } from 'constants/pages'

export const caseStudies = [
  {
    project: 'Tempso',
    description: 'UX Research & Design',
    href: pageInformation[Routes.TempsoUX]!.path,
    src: '/ux-case-study-tempso.png',
    alt: 'Tempso UX Case Study',
  },
  {
    project: 'Tempso',
    description: 'UI & High-fidelity mockups',
    href: pageInformation[Routes.Tempso]!.path,
    src: '/case-study-tempso.png',
    alt: 'Tempso UI',
  },
  {
    project: 'BlueCargo',
    description: 'UX/UI Design - Web App',
    href: pageInformation[Routes.BlueCargo]!.path,
    src: '/case-study-BlueCargo.png',
    alt: 'BlueCargo Case Study',
  },
  {
    project: 'Luxury Travel Agency',
    description: 'UX/UI Design - Website',
    href: pageInformation[Routes.LuxuryTravel]!.path,
    src: '/case-study-luxury-travel.png',
    alt: 'Luxury Travel Case Study',
  },
  {
    project: 'UI Shots',
    description: 'UX/UI Design - Practice',
    href: pageInformation[Routes.UIShots]!.path,
    src: '/case-study-ui-shots.png',
    alt: 'UI Shots',
  },
]
