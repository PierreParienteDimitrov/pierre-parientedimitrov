import { pageInformation, Routes } from 'constants/pages'

import { tags } from './tags'

export const caseStudies = [
  {
    key: 'charter',
    client: 'Charter Communications',
    year: '2023',
    platform: 'TVSDK (Mobile, TV and HDTV)',
    title: 'Design System',
    description:
      'Building and maintaining a design system for Spectrum TV-SDK kits.',
    href: pageInformation[Routes.Charter]!.path,
    src: '/case-study-charter.png',
    alt: 'Charter Design System',
    external: false,
    tags: [tags.mobile, tags.design],
    projectType: 'design',
    metrics: [
      '2022-2023',
      'design system for TVSDK, Apple TV, Android TV',
      'component library',
      'high-fidelity mockups',
      'contract',
    ],
    latest: true,
  },
  // {
  //   key: 'bluecargo_dashboard',
  //   client: 'BlueCargo',
  //   year: '2023',
  //   platform: 'desktop',
  //   title: 'Designing a Per Diem fee reporting system',
  //   description:
  //     'Designed a reporting system where Supply Chain professionals can analyze their per diem fees over a time period and compare it to the same time period in the past.',
  //   href: pageInformation[Routes.ContainerDashboard]!.path,
  //   src: '/case-study-container-management.png',
  //   alt: 'D&D Dashboard',
  //   external: false,
  //   tags: [tags.desktop, tags.design],
  //   projectType: 'design',
  //   latest: true,
  // },
  {
    key: 'bluecargo_home',
    client: 'BlueCargo',
    year: '2023',
    platform: 'desktop',
    title: 'Designing a homepage for container management',
    description:
      'Designed a homepage where users can quickly analyze the state of their operations and quickly access other pages of the app through shortcuts.',
    href: pageInformation[Routes.ContainerHomepage]!.path,
    src: '/case-study-homepage.png',
    alt: 'D&D Dashboard',
    external: false,
    tags: [tags.desktop, tags.design],
    projectType: 'design',
    metrics: [
      '2023',
      'user research, user experience, user interface',
      'wireframing, high-fidelity',
      'desktop',
      'sitemap, figma',
    ],
    latest: true,
  },
  // {
  //   key: 'bluecargo_signup',
  //   client: 'BlueCargo',
  //   year: '2022',
  //   platform: 'desktop',
  //   title: 'Designing a signup flow',
  //   description:
  //     'Designed a signup flow where users can create their profile and company, or join an existing company based on email domain recognition.',
  //   href: pageInformation[Routes.CheckoutFlow]!.path,
  //   src: '/case-study-signup.png',
  //   alt: 'Signup Flow Case Study',
  //   external: false,
  //   tags: [tags.desktop, tags.design],
  //   projectType: 'design',
  //   metrics: [
  //     '2021',
  //     'user experience, user interface',
  //     'wireframing',
  //     'desktop',
  //     'flow charts, figma',
  //   ],
  //   latest: true,
  // },
  {
    key: 'bluecargo_payment',
    client: 'BlueCargo',
    year: '2022',
    platform: 'desktop',
    title: 'Designing a checkout flow',
    description:
      'Designed a checkout flow for a Supply Chain software, where users have a choice between three plans, and can adjust their volume per plan.',
    href: pageInformation[Routes.CheckoutFlow]!.path,
    src: '/case-study-payment-plan.png',
    alt: 'Checkout Flow Case Study',
    external: false,
    tags: [tags.desktop, tags.design],
    projectType: 'design',
    metrics: [
      '2021',
      'user experience, user interface',
      'wireframing',
      'desktop',
      'flow charts, figma',
    ],
    latest: true,
  },
  {
    key: 'tempso',
    client: 'Tempso',
    year: '2019',
    platform: 'native (IOS & ANDROID)',
    title: 'Designing a Classical Music Streaming App',
    description:
      'Designed a classical music streaming application fully integrated with Apple Music and Spotify.',
    href: pageInformation[Routes.TempsoUX]!.path,
    src: '/case-study-tempso.png',
    alt: 'Tempso UX Case Study',
    external: false,
    tags: [tags.mobile, tags.design],
    projectType: 'design',
    metrics: [
      '2020',
      'user research, user experience, user interface',
      'user interviews, wireframing, usability studies',
      'native IOS & android',
      'miro mindmapping, octopus sitemap, figma',
    ],
    latest: true,
  },
  {
    key: 'kbwf',
    client: 'Know Better World Foundation',
    year: '2020',
    platform: 'desktop',
    title: 'Designing and building a website for a Foundation',
    description:
      'Designed and build a website for a foundation emporing women to become entrepeneur.',
    href: 'https://www.knowbetterworldfoundation.org/',
    src: '/case-study-kbwf.png',
    alt: 'Know Better World Foundation Website',
    external: true,
    tags: [tags.desktop, tags.web, tags.branding],
    projectType: 'design',
    latest: false,
  },
  {
    key: 'skoog',
    client: 'Skoog Media',
    year: '2020',
    platform: 'desktop',
    title: 'Designing and Building a Shopify Store for an interactive toy',
    description:
      'Redesigned a Shopify Store for an early-stage EduTech startup, seeking to scale the sales of a new,  interactive toy for kids.',
    href: 'https://skoog.media/',
    src: '/case-study-skoog.png',
    alt: 'Skoog Website',
    external: true,
    tags: [tags.desktop, tags.web, tags.branding],
    projectType: 'design',
    latest: false,
  },
  {
    key: 'technext',
    client: 'Technext',
    year: '2020',
    platform: 'desktop',
    title: 'Designing a website for a tech startup',
    description:
      'Redesigned the website for a deep tech startup involved in EduTech and GreenTech technologies.',
    href: 'https://www.technext.fr/?lang=en',
    src: '/case-study-technext.png',
    alt: 'Technext Website',
    external: true,
    tags: [tags.desktop, tags.web, tags.branding],
    projectType: 'design',
    latest: false,
  },
  {
    key: 'ui_shots',
    client: 'UI Shots',
    year: '2020',
    platform: 'desktop and mobile',
    title: '100 days of UI Challenge',
    description: 'Designed UI shots to explore different design universe.',
    href: pageInformation[Routes.UIShots]!.path,
    src: '/case-study-ui-shots.png',
    alt: 'UI Shots',
    external: false,
    tags: [tags.desktop, tags.mobile, tags.branding],
    projectType: 'design',
    latest: false,
  },
  {
    key: 'portfolio_website',
    client: 'Portfolio Website',
    year: '2022',
    platform: 'responsive web',
    title: 'Designed and built my own portfolio website.',
    description:
      'Designed and built the front-end and back-end of my portfolio website using Next.js, React.js, Node.js, Tailwind CSS, Mongoose and MongodB.',
    href: 'https://github.com/PierreParienteDimitrov/pierre-parientedimitrov',
    src: '/software-portfolio.png',
    alt: 'Portfolio Website',
    external: true,
    tags: [tags.software],
    projectType: 'software',
    latest: false,
  },
  {
    key: 'tempso_website',
    client: 'Tempso Landing Page',
    year: '2021',
    platform: 'responsive web',
    title: 'Designed and built Tempso landing page.',
    description:
      'Designed and built Tempso landing page using Next.js, React.js and Tailwind CSS.',
    href: 'https://github.com/PierreParienteDimitrov/tempso.com',
    src: '/case-study-tempso-landing-page.png',
    alt: 'Tempso Landing Page',
    external: true,
    tags: [tags.software],
    projectType: 'software',
    latest: false,
  },
]
