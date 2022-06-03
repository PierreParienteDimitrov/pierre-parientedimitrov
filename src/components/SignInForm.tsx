import Link from 'next/link'
import { useRouter } from 'next/router'
import { signIn } from 'next-auth/react'
import React, { useState } from 'react'

import Container from '@/layouts/containers/Container'
import { validateEmail } from '@/utils/validateEmail'

const SignInForm = () => {
  const router = useRouter()
  const { query } = router
  const requestedPath = query.path

  const [email, setEmail] = useState<string>('')
  const [error, setError] = useState<boolean>(false)
  const [emailError, setEmailError] = useState<boolean>(false)

  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault()
    // Add Validation
    const isEmailValid = validateEmail(email)

    if (!isEmailValid) {
      setEmailError(true)
      return
    }

    interface IResult {
      error: string | null
      ok: boolean
      status: number
      url: string | null
    }

    const result: IResult | undefined = await signIn('credentials', {
      redirect: false,
      email: email,
    })

    //@ts-ignore
    if (!result?.error && requestedPath) {
      router.replace(`${requestedPath}`)
    }

    //@ts-ignore
    if (result?.error) {
      setError(true)
    }

    return router.replace('/thank-you')
  }

  return (
    <Container>
      <div className="mb-16">
        {' '}
        <div className="flex flex-col items-center space-y-4">
          <h5 className="font-bold uppercase tracking-wider">
            Login to access restricted pages
          </h5>
          <h6>Enter your email to continue</h6>
          <form
            onSubmit={handleSubmit}
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
            {/* <Button
            variant="contained"
            color="primary"
            size="medium"
            onclick={handleSubmit}
          >
            Submit
          </Button> */}
          </form>
          {error && (
            <div>
              <h5>Email does not exist.</h5>
              <Link href="/request-access">Please request access instead</Link>
            </div>
          )}
          {emailError && (
            <h5 className="text-red-500">Please enter a valid email</h5>
          )}
        </div>
      </div>
    </Container>
  )
}

export default SignInForm
