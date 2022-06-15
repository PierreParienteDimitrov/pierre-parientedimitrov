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
    title: 'Pierre Pariente Dimitrov - Resume',
    path: Routes.Resume,
    isPublic: true,
  },
  [Routes.Contact]: {
    title: 'Pierre Pariente Dimitrov - Contact',
    path: Routes.Contact,
    isPublic: true,
  },
  [Routes.Home]: {
    title: 'Pierre Pariente Dimitrov',
    path: Routes.Home,
    isPublic: true,
  },
  [Routes.RequestAccess]: {
    title: 'Pierre Pariente Dimitrov - Request Access',
    path: Routes.RequestAccess,
    isPublic: true,
  },
  [Routes.SignIn]: {
    title: 'Pierre Pariente Dimitrov - Sign In',
    path: Routes.SignIn,
    isPublic: true,
  },
  [Routes.ThankYou]: {
    title: 'Pierre Pariente Dimitrov - Thank you',
    path: Routes.ThankYou,
    isPublic: true,
  },
  [Routes.Tempso]: {
    title: 'Pierre Pariente Dimitrov - Tempso',
    path: Routes.Tempso,
    isPublic: true,
  },
  [Routes.TempsoUX]: {
    title: 'Pierre Pariente Dimitrov - Tempso UX',
    path: Routes.TempsoUX,
    isPublic: true,
  },
  [Routes.ContainerTracking]: {
    title: 'Pierre Pariente Dimitrov - Container Tracking',
    path: Routes.ContainerTracking,
    isPublic: false,
  },
  [Routes.LuxuryTravel]: {
    title: 'Pierre Pariente Dimitrov - Luxury Travel',
    path: Routes.LuxuryTravel,
    isPublic: false,
  },
  [Routes.UIShots]: {
    title: 'Pierre Pariente Dimitrov - Tempso UI Shots',
    path: Routes.UIShots,
    isPublic: true,
  },
  [Routes.Portfolio]: {
    title: 'Pierre Pariente Dimitrov - Portfolio',
    path: Routes.Portfolio,
    isPublic: true,
  },
}
