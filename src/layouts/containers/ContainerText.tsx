import { ILayoutProps } from 'types/ILayoutProps'

const ContainerText = ({ children }: ILayoutProps) => {
  return <div className="m-auto w-full lg:w-8/12 2xl:w-8/12">{children}</div>
}

export default ContainerText
