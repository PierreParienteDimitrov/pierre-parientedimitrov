interface LayoutProps {
  children: React.ReactNode
}

const Container = ({ children }: LayoutProps) => {
  return <div className="px-4 md:px-24">{children}</div>
}

export default Container
