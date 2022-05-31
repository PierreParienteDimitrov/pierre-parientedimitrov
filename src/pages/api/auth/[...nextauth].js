import User from 'models/User'
import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import dbConnect from 'lib/dbConnect'

export default NextAuth({
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        await dbConnect()

        const user = await User.findOne({
          email: credentials?.email,
        })

        if (!user) {
          return null
        }

        if (user) {
          return user
        }
      },
    }),
  ],
  pages: { signIn: '/signin' },
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    session: async (session) => {
      if (!session) return

      await dbConnect()

      const userSession = await User.findOne({
        email: session.session.user.email,
      })

      return {
        user: {
          email: userSession.email,
          has_access: userSession.has_access,
        },
      }
    },
  },
})
