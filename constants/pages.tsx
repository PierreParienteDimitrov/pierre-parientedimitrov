export interface IPage {
  title: string
  path: string
  isPublic: boolean
}

export enum Routes {
  Resume = '/resume',
  Contact = '/contact',
  Home = '/',
  RequestAccess = '/request-access',
  SignIn = '/signin',
  ThankYou = '/thank-you',
  Tempso = '/portfolio/tempso',
  TempsoUX = '/portfolio/tempso-ux',
  ContainerTracking = '/portfolio/container-tracking',
  LuxuryTravel = '/portfolio/luxury-travel',
  UIShots = '/portfolio/ui-shots',
  Portfolio = '/portfolio',
}

export const pageInformation: Record<string, IPage> = {
  [Routes.Resume]: {
    title: 'Resume',
    path: Routes.Resume,
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
  [Routes.ContainerTracking]: {
    title: 'Container Tracking',
    path: Routes.ContainerTracking,
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
