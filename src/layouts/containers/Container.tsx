import { ILayoutProps } from 'types/ILayoutProps'

const Container = ({ children }: ILayoutProps) => {
  return <div className="w-full px-4 md:px-24">{children}</div>
}

export default Container
