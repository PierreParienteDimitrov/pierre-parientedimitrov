import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { IUser } from 'types/IUser'

import Button from '@/components/Button'

const AccessForm = () => {
  const router = useRouter()
  const [firstName, setFirstName] = useState<string>('')
  const [lastName, setLastName] = useState<string>('')
  const [company, setCompany] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [alertMessage, setAlertMessage] = useState<string>('')

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault()
    const user: IUser = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      has_access: false,
      company: company,
    }

    const res = await fetch(`/api/users/create-user`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    })

    const { message, data, success } = await res.json()

    if (message === 'access already requested') {
      setAlertMessage('You already requested access.')
    }

    if (success) {
      router.push('/portfolio/blue-cargo')
    }

    return data
  }

  return (
    <div className="m-auto w-2/6 rounded-md border-black p-4 shadow-md">
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
          onclick={handleSubmit}
        >
          Submit
        </Button>
      </form>
      {alertMessage.length > 0 && alertMessage}
    </div>
  )
}

export default AccessForm
