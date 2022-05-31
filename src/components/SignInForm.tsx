import Link from 'next/link'
import { useRouter } from 'next/router'
import { signIn } from 'next-auth/react'
import React, { useState } from 'react'

import Button from './Button'

const SignInForm = () => {
  const router = useRouter()

  const [email, setEmail] = useState<string>('')
  const [error, setError] = useState<boolean>(false)

  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault()
    // Add Validation

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

    console.log('result is ' + result)

    //@ts-ignore
    if (!result?.error) {
      router.replace('/portfolio/blue-cargo')
    }

    //@ts-ignore
    if (result?.error) {
      setError(true)
    }
  }

  return (
    <div>
      {' '}
      <div className="m-auto w-2/6 rounded-md border-black p-4 shadow-md">
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
      </div>
    </div>
  )
}

export default SignInForm
