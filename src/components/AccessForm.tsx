import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { IUser } from 'types/IUser'

import Button from '@/components/Button'

const AccessForm = () => {
  const router = useRouter()
  const [name, setName] = useState<string>('')
  const [company, setCompany] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [alertMessage, setAlertMessage] = useState<string>('')

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault()
    const user: IUser = {
      name,
      email,
      company,
    }

    const res = await fetch(`/api/users/create-user`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
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
        {/* name */}
        <div className="flex flex-col space-y-1">
          <label>Name</label>
          <input
            type="text"
            placeholder="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border border-black"
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
