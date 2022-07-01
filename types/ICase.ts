export interface ICase {
  client: string
  description: string
  href: string
  src: string
  alt: string
  external: boolean
  tags: string[]
}

export interface IDescription {
  year: string
  platform: string
  title: string
  description: string
  href: string
  button: string
  external: boolean
  projectType: string
  tags: string[]
  client: string
}

export interface IUseCasesItems {
  external: boolean
  src: string
  alt: string
  client: string
  year: string
  platform: string
  title: string
  description: string
  href: string
  projectType: string
  tags: string[]
}
