import Link from 'next/link'
import { useRouter } from 'next/router'
import { ILayoutProps } from 'types/ILayoutProps'

const AppTemplate = ({ children }: ILayoutProps) => {
  const router = useRouter()
  const pathname = router.pathname

  console.log(pathname)

  return (
    <div>
      <nav className="h-16 w-full">
        <ul className="flex h-full w-full items-center justify-center space-x-8">
          <li>
            <Link href="/">
              <a className={`${pathname === '/' && 'underline'}`}>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a className={`${pathname === '/about' && 'underline'}`}>About</a>
            </Link>
          </li>
        </ul>
      </nav>
      {children}
    </div>
  )
}

export default AppTemplate
