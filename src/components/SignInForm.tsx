import Link from 'next/link'
import { useRouter } from 'next/router'
import { signIn } from 'next-auth/react'
import React, { useState } from 'react'

import { validateEmail } from '@/utils/validateEmail'

import Button from './Button'

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
    if (!result?.error) {
      router.replace(`${requestedPath}`)
    }

    //@ts-ignore
    if (result?.error) {
      setError(true)
    }
  }

  return (
    <div>
      {' '}
      <div className="w-[500px] rounded-md border-black p-4 shadow-md">
        <form onSubmit={handleSubmit} className="flex flex-col space-y-2">
          {/* email */}
          <div className="flex flex-col space-y-1">
            <label>Email</label>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <Button
            variant="contained"
            color="primary"
            size="medium"
            onclick={handleSubmit}
          >
            Submit
          </Button>
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
  )
}

export default SignInForm
