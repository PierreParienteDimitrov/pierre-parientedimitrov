import { pageInformation, Routes } from 'constants/pages'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { AiFillDribbbleCircle, AiFillLinkedin } from 'react-icons/ai'
import { ILayoutProps } from 'types/ILayoutProps'

import Container from '../containers/Container'

const AppTemplate = ({ children }: ILayoutProps) => {
  const router = useRouter()
  const pathname = router.pathname
  const { data: session, status } = useSession()
  const isUser = !!session?.user
  const [displayLogin, setDisplayLogin] = useState<boolean>(false)

  useEffect(() => {
    if (status === 'loading') return
    if (!isUser) {
      setDisplayLogin(true)
    }
  }, [isUser, status])

  return (
    <div>
      <nav className="relative z-50 flex h-12 w-full items-center justify-start bg-dark text-white">
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
      <div className="mt-16 flex w-full flex-col items-center justify-center space-y-2 border-t py-8">
        <h6>©Pierre Pariente Dimitrov Portfolio {new Date().getFullYear()}</h6>
        <h6>All rights reserved</h6>
        <div className="flex space-x-4">
          <a
            href="https://www.linkedin.com/in/pierre-pariente-97835742/"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillLinkedin size={32} className="text-primary" />
          </a>
          <a
            href="https://dribbble.com/Pariente"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillDribbbleCircle size={32} className="text-secondary" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default AppTemplate
