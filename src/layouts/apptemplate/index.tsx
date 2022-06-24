import { pageInformation, Routes } from 'constants/pages'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Router from 'next/router'
import { signOut, useSession } from 'next-auth/react'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { AiFillDribbbleCircle, AiFillLinkedin } from 'react-icons/ai'
import { ILayoutProps } from 'types/ILayoutProps'

import ContactForm from '@/components/ContactForm'
import InfiniteCarousel from '@/components/Home/InfiniteCarousel'
import Hero from '@/layouts/apptemplate/Footer'
import styles from '@/styles/home.module.css'

import Container from '../containers/Container'

// Track client-side page views with Segment
Router.events.on('routeChangeComplete', (url) => {
  window.analytics.page(url)
})

const AppTemplate = ({ children }: ILayoutProps) => {
  const router = useRouter()
  const pathname = router.pathname
  const { data: session, status } = useSession()
  const isUser = !!session
  const [displayLogin, setDisplayLogin] = useState<boolean>(false)

  useEffect(() => {
    if (status === 'loading') return

    if (!isUser) {
      setDisplayLogin(true)
    }

    if (isUser) {
      setDisplayLogin(false)
    }
  }, [isUser, status])

  return (
    <div>
      {/* navigation */}
      <nav className="relative z-50 flex h-12 w-full items-center justify-start text-dark">
        <div className="absolute bottom-0 h-[1.5px] w-full bg-gradient-to-r from-secondary to-tertiary"></div>
        <Container>
          <ul className="flex w-full items-center justify-between">
            <div className="flex items-center space-x-8">
              <li>
                <Link href={`${pageInformation[Routes.Home]!.path}`}>
                  <a
                    className={`${
                      pathname === `${pageInformation[Routes.Home]!.path}` &&
                      'font-bold'
                    }`}
                  >
                    Home
                  </a>
                </Link>
              </li>
              <li>
                <Link href={`${pageInformation[Routes.Resume]!.path}`}>
                  <a
                    className={`${
                      pathname === `${pageInformation[Routes.Resume]!.path}` &&
                      'font-bold'
                    }`}
                  >
                    Resume
                  </a>
                </Link>
              </li>
              <li>
                <Link href={`${pageInformation[Routes.Portfolio]!.path}`}>
                  <a
                    className={`${
                      pathname ===
                        `${pageInformation[Routes.Portfolio]!.path}` &&
                      'font-bold'
                    }`}
                  >
                    Portfolio
                  </a>
                </Link>
              </li>
            </div>
            <div className="flex space-x-16">
              {!displayLogin && (
                // (
                //   <li className="group relative">
                //     <h6 className="z-50 cursor-pointer px-2 font-bold uppercase tracking-wider">
                //       <Link href={pageInformation[Routes.RequestAccess]!.path}>
                //         Request access to all projects
                //       </Link>
                //     </h6>
                //     <span
                //       className="absolute top-0 left-0 h-full w-0 bg-secondary transition-all group-hover:w-full"
                //       style={{ zIndex: '-100' }}
                //     ></span>
                //   </li>
                // ) :
                <li
                  className="cursor-pointer"
                  onClick={() =>
                    signOut({
                      callbackUrl: `${pageInformation[Routes.Home]!.path}`,
                    })
                  }
                >
                  Sign out
                </li>
              )}
            </div>
          </ul>
        </Container>
      </nav>
      {children}
      {/* footer */}
      <div className="">
        <div className="relative z-0 w-screen overflow-hidden bg-dark text-white md:py-32">
          <div className={`${styles.container}`}></div>
          <Container>
            <div className="flex w-full flex-col space-y-16">
              <div className="relative z-50 flex flex-col space-y-16 py-16 md:flex-row md:items-start md:space-y-0">
                <div className="w-full lg:w-2/3">
                  <Hero />
                </div>
                <div className="w-full lg:w-1/3">
                  <ContactForm />
                </div>
              </div>
              <div className="self-start">
                <InfiniteCarousel />
              </div>
            </div>
          </Container>
          <div className="mt-32 flex w-full flex-col items-center justify-center space-y-8">
            <h6>
              ©Pierre Pariente Dimitrov Portfolio {new Date().getFullYear()}
            </h6>
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
      </div>
    </div>
  )
}

export default AppTemplate
