import { pageInformation, Routes } from 'constants/pages'

export const caseStudies = [
  {
    project: 'TempsoUX',
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
    project: 'Container Tracking',
    description: 'UX/UI Design - Web App',
    href: pageInformation[Routes.ContainerTracking]!.path,
    src: '/case-study-BlueCargo.png',
    alt: 'Container Tracking Case Study',
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
  {
    project: 'Portfolio Website',
    description: 'Front-end & Back-end',
    href: pageInformation[Routes.Portfolio]!.path,
    src: '/software-portfolio.png',
    alt: 'Portfolio Website',
  },
]
