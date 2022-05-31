export interface IButton {
  children: React.ReactNode
  color: string
  variant: string
  size: string
  onclick: React.MouseEventHandler<HTMLButtonElement>
}
