export interface IPage {
  title: string
  path: string
  isPublic: boolean
}

export enum Routes {
  About = '/about',
  Contact = '/contact',
  Home = '/',
  RequestAccess = '/request-access',
  SignIn = '/signin',
  ThankYou = '/thank-you',
  Tempso = '/portfolio/tempso',
  TempsoUX = '/portfolio/tempso-ux',
  BlueCargo = '/portfolio/blue-cargo',
  LuxuryTravel = '/portfolio/luxury-travel',
  UIShots = '/portfolio/ui-shots',
  Portfolio = '/portfolio/portfolio',
}

export const pageInformation: Record<string, IPage> = {
  [Routes.About]: {
    title: 'About',
    path: Routes.About,
    isPublic: true,
  },
  [Routes.Contact]: {
    title: 'Contact',
    path: Routes.Contact,
    isPublic: true,
  },
  [Routes.Home]: {
    title: 'Home',
    path: Routes.Home,
    isPublic: true,
  },
  [Routes.RequestAccess]: {
    title: 'RequestAccess',
    path: Routes.RequestAccess,
    isPublic: true,
  },
  [Routes.SignIn]: {
    title: 'SignIn',
    path: Routes.SignIn,
    isPublic: true,
  },
  [Routes.ThankYou]: {
    title: 'Thank you',
    path: Routes.ThankYou,
    isPublic: true,
  },
  [Routes.Tempso]: {
    title: 'Tempso',
    path: Routes.Tempso,
    isPublic: true,
  },
  [Routes.TempsoUX]: {
    title: 'TempsoUX',
    path: Routes.TempsoUX,
    isPublic: true,
  },
  [Routes.BlueCargo]: {
    title: 'BlueCargo',
    path: Routes.BlueCargo,
    isPublic: false,
  },
  [Routes.LuxuryTravel]: {
    title: 'LuxuryTravel',
    path: Routes.LuxuryTravel,
    isPublic: false,
  },
  [Routes.UIShots]: {
    title: 'UIShots',
    path: Routes.UIShots,
    isPublic: true,
  },
  [Routes.Portfolio]: {
    title: 'Portfolio',
    path: Routes.Portfolio,
    isPublic: true,
  },
}
