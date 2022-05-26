export interface IButton {
  children: React.ReactNode
  color: string
  variant: string
  size: string
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}
