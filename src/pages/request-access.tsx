import React from 'react'

import AccessForm from '@/components/AccessForm'

const Users: React.FC = () => {
  return (
    <div>
      <h1>Request Access</h1>
      <AccessForm />
    </div>
  )
}

/* Retrieves user(s) data from mongodb database */
// export const getServerSideProps: GetServerSideProps = async () => {
//   await dbConnect()

//   /* find all the data in our database */
//   const result = await User.find({})
//   const users: IUser[] = result.map((doc) => {
//     const user = doc.toObject()
//     user._id = user._id.toString()
//     return user
//   })

//   return { props: { users: users } }
// }

export default Users
