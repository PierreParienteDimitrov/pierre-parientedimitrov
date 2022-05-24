import Link from 'next/link'
import { useRouter } from 'next/router'
import { ILayoutProps } from 'types/ILayoutProps'

import Button from '@/components/Button'

import Container from '../containers/Container'

const AppTemplate = ({ children }: ILayoutProps) => {
  const router = useRouter()
  const pathname = router.pathname

  return (
    <div>
      <nav className="relative z-50 flex h-12 w-full items-center justify-start">
        <div className="absolute bottom-0 h-[1.5px] w-full bg-gradient-to-r from-secondary to-tertiary"></div>
        <Container>
          <ul className="flex w-full items-center justify-between">
            <div className="flex items-center space-x-8">
              <li>
                <Link href="/">
                  <a className={`${pathname === '/' && 'font-bold'}`}>Home</a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a className={`${pathname === '/about' && 'font-bold'}`}>
                    About
                  </a>
                </Link>
              </li>
            </div>
            <li>
              <Button variant="outlined" size="small" color="primary">
                <Link href="/contact" passHref>
                  Contact Me
                </Link>
              </Button>
            </li>
          </ul>
        </Container>
      </nav>
      {children}
    </div>
  )
}

export default AppTemplate
