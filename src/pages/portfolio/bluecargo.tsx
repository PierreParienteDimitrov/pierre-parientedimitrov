import React, { useRef, useState } from 'react'

import Button from '@/components/Button'

const BLUE_CARGO_PASSWORD = 'BL7;$wKZF)UaGd24'

const Bluecargo: React.FC = () => {
  const inputEl = useRef<HTMLFormElement>(null)

  const [hasAccess, setHasAccess] = useState<boolean>(false)
  const [alert, setAlert] = useState<boolean>(false)

  const [password, setPassword] = useState<string>('')

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()
    if (password === BLUE_CARGO_PASSWORD) {
      setHasAccess(true)
    }

    return setAlert(true)
  }

  return (
    <div>
      {!hasAccess ? (
        <>
          <h4>Enter password</h4>
          <Button variant="primary" size="medium" color="primary">
            <form onSubmit={(e) => handleSubmit(e)} ref={inputEl}>
              <input
                type="password"
                value={password}
                className="border border-black"
                onChange={(e) => setPassword(e.target.value)}
              />
            </form>
          </Button>
          {alert && <h4>incorrect password</h4>}
        </>
      ) : (
        <h4>User has access</h4>
      )}
    </div>
  )
}

export default Bluecargo
