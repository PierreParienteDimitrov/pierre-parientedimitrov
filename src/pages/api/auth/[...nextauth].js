import dbConnect from 'lib/dbConnect'
import User from 'models/User'
import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

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
    maxAge: 60 * 60 * 24 * 30,
  },
  callbacks: {
    session: async (session) => {
      if (!session) return

      await dbConnect()
      const userSession = await User.findOne({
        email: session.session.user.email,
      })

      return {
        session: {
          user: {
            email: userSession.email,
            hasAccess: userSession.hasAccess,
          },
        },
      }
    },
  },
  secret: process.env.NEXTAUTH_SECRET, // SECRET env variable
})
