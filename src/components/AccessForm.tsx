import React, { useState } from 'react'
import { IUser } from 'types/IUser'

import Button from '@/components/Button'

const AccessForm = () => {
  const [firstName, setFirstName] = useState<string>('')
  const [lastName, setLastName] = useState<string>('')
  const [company, setCompany] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [existingUser, setExistingUser] = useState<boolean>(false)
  const [thankYouMessage, setThankYouMessage] = useState<boolean>(false)

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault()
    const user: IUser = {
      first_name: firstName,
      last_name: lastName,
      company: company,
      email: email,
      has_access: false,
    }

    const res = await fetch(`/api/users/${email}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    const dbUser = await res.json()
    const { data } = dbUser
    const newUser = data.length > 0 ? false : true
    if (newUser) {
      fetch('/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      })
      setThankYouMessage(true)
    }

    if (!newUser) {
      setExistingUser(true)
    }
  }
  return (
    <div className="m-auto w-2/6 rounded-md border-black p-4 shadow-md">
      {existingUser ? (
        <p>Access already requested. I will come back to you shortly</p>
      ) : thankYouMessage ? (
        <p>thank you for your submission</p>
      ) : (
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="flex flex-col space-y-2"
        >
          {/* first name */}
          <div className="flex flex-col space-y-1">
            <label>first name</label>
            <input
              type="text"
              placeholder="First name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="border border-black"
              required
            />
          </div>
          {/* last name */}
          <div className="flex flex-col space-y-1">
            <label>Last Name</label>
            <input
              type="text"
              placeholder="Last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
          {/* company */}
          <div className="flex flex-col space-y-1">
            <label>Company</label>
            <input
              type="text"
              placeholder="Company"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              required
            />
          </div>
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
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </form>
      )}
    </div>
  )
}

export default AccessForm
