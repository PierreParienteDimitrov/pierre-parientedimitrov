import React from 'react'
import { IUser } from 'types/IUser'

import AccessForm from '@/components/AccessForm'

import dbConnect from '../../lib/dbConnect'
import User from '../../models/User'

const Users: React.FC<{ users: IUser[] }> = ({ users }) => {
  return (
    <div>
      {users.map((user) => user.email)}
      <AccessForm />
    </div>
  )
}

/* Retrieves user(s) data from mongodb database */
export async function getServerSideProps(context) {
  console.log(context.id)
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
