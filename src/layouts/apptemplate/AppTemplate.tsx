import { pageInformation, Routes } from 'constants/pages'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { ILayoutProps } from 'types/ILayoutProps'

import Container from '../containers/Container'

const AppTemplate = ({ children }: ILayoutProps) => {
  const router = useRouter()
  const pathname = router.pathname
  const session = useSession()
  const [displayLogin, setDisplayLogin] = useState<boolean>(false)

  useEffect(() => {
    if (session.status === 'unauthenticated') {
      setDisplayLogin(true)
    }
  }, [])

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
            <div className="flex space-x-16">
              <li>
                <Link href="/contact" passHref>
                  Contact Me
                </Link>
              </li>
              {displayLogin && (
                <li>
                  <Link href={pageInformation[Routes.SignIn]!.path}>Login</Link>
                </li>
              )}
            </div>
          </ul>
        </Container>
      </nav>
      {children}
    </div>
  )
}

export default AppTemplate
