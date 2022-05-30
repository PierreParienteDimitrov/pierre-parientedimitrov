import User from 'models/User'
import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

export default NextAuth({
  session: {
    strategy: 'jwt',
    maxAge: 3 * 60 * 60, // 3 hours
  },
  secret: process.env.NEXTAUTH_SECRET,

  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: 'submit your email',
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        email: {
          label: 'email',
          type: 'email',
          placeholder: 'email@email.com',
        },
      },
      authorize: async (credentials) => {
        try {
          const res = await credentials?.email
          console.log(res)
          const user = await User.findOne({
            email: res,
          })
          if (user) {
            return {
              res,
            }
          }

          if (!user) {
            mongoose.connection.close()
          }
          return null // Add this line to satisfy the `authorize` typings
        } catch (error) {
          //const errorMessage = e.response.data.message;
          //throw new Error(errorMessage);
          return null
        }
      },
    }),
  ],
  pages: { signIn: '/signin' },

  // Providers.Credentials({
  //   async authorize(credentials) {
  //     await dbConnect()

  //     // is there a user
  //     const user = await User.findOne({
  //       email: credentials.email,
  //     }).exec()

  //     console.log(user)

  //     if (!user) {
  //       mongoose.connection.close()
  //       throw new Error('No user found')
  //     }

  //     return {
  //       email: user.email,
  //     }
  //   },
  // }),
})
