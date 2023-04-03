import { useRouter } from 'next/router'
import { signIn } from 'next-auth/react'
import React, { useState } from 'react'

import Container from '@/layouts/containers/Container'
import { validateEmail } from '@/utils/validateEmail'
import { RequestAccess } from '@/utils/RequestAccess'

const SignInForm = () => {
  const router = useRouter()
  const { query } = router

  const [email, setEmail] = useState<string>('')
  const [requestAccess, setRequestAccess] = useState<boolean>(false)
  const [emailError, setEmailError] = useState<boolean>(false)
  const [path, setPath] = useState<string>('')

  React.useEffect(() => {
    const requestedPath = query.project
    setPath(`${requestedPath}`)
  }, [])

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault()

    // Add Validation
    const isEmailValid = validateEmail(email)
    if (!isEmailValid) {
      setEmailError(true)
      return
    }

    // Fetch user
    const result = await signIn('credentials', {
      redirect: false,
      email: email,
    })

    // If user exists and path exists, user is redirected to the right page
    //@ts-ignore
    if (!result?.error && path.length > 0) {
      router.push(`${path}`)
    }

    // If user exists and path does not exist, user is redirected to the homepage
    //@ts-ignore
    if (!result?.error && path.length === 0) {
      router.push(`/`)
    }

    // If user does not exist, user request is created and user is notified that is request is processed
    //@ts-ignore
    if (result?.error) {
      setRequestAccess(true)
      RequestAccess(email)
    }

    return
  }

  return (
    <Container>
      <div className="mb-16">
        {requestAccess ? (
          <div className="flex justify-center items-center flex-col space-y-8">
            <h2>Thank you for requesing access!</h2>
            <h5>I will get back to you shortly to grant you access.</h5>
          </div>
        ) : (
          <div className="flex flex-col items-center space-y-4">
            <h5 className="font-bold uppercase tracking-wider">
              You need to login to access this page.
            </h5>
            <h6>Enter your email to continue</h6>
            <form
              onSubmit={(e) => handleSubmit(e)}
              className="flex w-full flex-col space-y-8 md:m-auto md:w-2/4"
            >
              {/* email */}
              <div className="flex flex-col space-y-1 text-black">
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="border-b border-black px-4 py-2"
                />
              </div>
              {/* Submit */}
              <div className="flex flex-col items-center -space-y-4">
                <h2 className="opacity-20">↵</h2>
                <h6>Press return to validate</h6>
              </div>
            </form>
            {emailError && (
              <h5 className="text-red-500">Please enter a valid email</h5>
            )}
          </div>
        )}{' '}
      </div>
    </Container>
  )
}

export default SignInForm
