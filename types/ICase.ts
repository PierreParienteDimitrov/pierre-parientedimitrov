export interface ICase {
  project: string
  description: string
  href: string
  src: string
  alt: string
  external: boolean
  tags: string[]
}

export interface IDescription {
  project: string
  year: string
  platform: string
  title: string
  description: string
  href: string
  button: string
  external: boolean
  projectType: string
  tags: string[]
}

export interface IUseCasesItems {
  external: boolean
  src: string
  alt: string
  project: string
  year: string
  platform: string
  title: string
  description: string
  href: string
  projectType: string
  tags: string[]
}
