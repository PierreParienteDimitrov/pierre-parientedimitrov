import { useRouter } from 'next/router'
import signIn from 'next-auth'
import { useRef, useState } from 'react'

import Container from '@/layouts/containers/Container'

// Create User /api/auth/signup
async function createUser(email: string, password: string) {
  const response = await fetch('/api/users/createuser', {
    method: 'POST',
    body: JSON.stringify({ email, password }),
    headers: {
      'Content-Type': 'application/json',
    },
  })

  const data = await response.json()

  if (!response.ok) {
    throw new Error(data.message || 'Something went wrong!')
  }

  return data
}

// Sign up form
export default function AuthForm() {
  // User email and password inputs
  const emailInputRef = useRef()
  const passwordInputRef = useRef()

  // Switch to show either login or signup
  const [isLogin, setIsLogin] = useState(true)

  // Router
  const router = useRouter()

  function switchAuthModeHandler() {
    setIsLogin((prevState) => !prevState)
  }

  // Submit Function
  async function submitHandler(event: React.SyntheticEvent) {
    event.preventDefault()

    const enteredEmail = emailInputRef.current ? emailInputRef.value : ''
    const enteredPassword = passwordInputRef.current?.value || ''

    // console.log(enteredEmail);

    // Add Validation

    if (isLogin) {
      const result = await signIn('credentials', {
        redirect: false,
        email: enteredEmail,
        password: enteredPassword,
      })

      if (!result.error) {
        router.replace('/profile')
      } else {
        alert('something went wrong')
      }

      // console.log(result);
    } else {
      try {
        const result = await createUser(enteredEmail, enteredPassword)

        console.log(result.success)

        if (result.success) {
          console.log('just before router replace')
          router.replace('/protected')
        } else {
          alert('something went wrong')
        }
      } catch (error) {
        console.log(error)
      }
    }
  }

  return (
    <Container>
      <section>
        <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
        <form onSubmit={submitHandler}>
          {/* Email */}
          <div>
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" required ref={emailInputRef} />
          </div>
          {/* Password */}
          <div>
            <label htmlFor="password">Your Password</label>
            <input
              type="password"
              id="password"
              required
              ref={passwordInputRef}
            />
          </div>
          {/* Actions */}
          <button>{isLogin ? 'Login' : 'Create Account'}</button>

          <br />
          <br />
          <br />
          <h1>Or</h1>

          <button type="button" onClick={switchAuthModeHandler}>
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </form>
      </section>
    </Container>
  )
}
