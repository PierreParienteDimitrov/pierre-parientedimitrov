import React from 'react'

import ContactForm from '@/components/ContactForm'
import Container from '@/layouts/containers/Container'

const Users: React.FC = () => {
  return (
    <div className="h-screen bg-dark text-white">
      <Container>
        <div className="py-16">
          {' '}
          <div className="flex flex-col items-center space-y-4 md:m-auto md:w-2/4">
            <h5 className="text-center font-bold uppercase tracking-wider">
              Fill the form to request access
            </h5>
            <ContactForm />
          </div>
        </div>
      </Container>
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
