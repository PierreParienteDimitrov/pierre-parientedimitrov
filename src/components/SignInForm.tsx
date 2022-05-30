import { useRouter } from 'next/router'
import { signIn } from 'next-auth/react'
import React, { useState } from 'react'

import Button from './Button'

const SignInForm = () => {
  const router = useRouter()

  const [email, setEmail] = useState<string>('')

  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault()

    const enteredEmail = email

    // Add Validation

    const result = await signIn('credentials', {
      email: enteredEmail,
    })

    console.log(result)

    // if (!result[error]) {
    //   router.replace('/profile')
    // } else {
    //   alert('something went wrong')
    // }
  }

  return (
    <div>
      {' '}
      <div className="m-auto w-2/6 rounded-md border-black p-4 shadow-md">
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="flex flex-col space-y-2"
        >
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
      </div>
    </div>
  )
}

export default SignInForm
