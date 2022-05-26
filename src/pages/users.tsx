import React, { useState } from 'react'
import { IUser } from 'types/IUser'

import Button from '@/components/Button'

import dbConnect from '../../lib/dbConnect'
import User from '../../models/User'

const Users: React.FC<{ users: IUser[] }> = ({ users }) => {
  const [firstName, setFirstName] = useState<string>('')
  const [lastName, setLastName] = useState<string>('')
  const [company, setCompany] = useState<string>('')
  const [email, setEmail] = useState<string>('')

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()
    const user: IUser = {
      first_name: firstName,
      last_name: lastName,
      company: company,
      email: email,
      has_access: false,
    }

    fetch('/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    })
  }

  return (
    <div>
      {users.map((user) => user.email)}
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
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </form>
      </div>
    </div>
  )
}

/* Retrieves user(s) data from mongodb database */
export async function getServerSideProps() {
  await dbConnect()

  /* find all the data in our database */
  const result = await User.find({})
  const users: IUser[] = result.map((doc) => {
    const user = doc.toObject()
    user._id = user._id.toString()
    return user
  })

  return { props: { users: users } }
}

export default Users
