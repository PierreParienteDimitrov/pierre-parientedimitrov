/* eslint-disable no-var */

declare global {
  var mongoose: globalThis
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    analytics: any
  }
}

export {}
