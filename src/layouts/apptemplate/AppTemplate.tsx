import { LayoutProps } from 'types/LayoutProps'

const AppTemplate = ({ children }: LayoutProps) => {
  return (
    <div>
      <nav>this is the nav</nav>
      {children}
    </div>
  )
}

export default AppTemplate
