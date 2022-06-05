import dbConnect from 'lib/dbConnect'
import User from 'models/User'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req

  await dbConnect()

  switch (method) {
    case 'POST':
      try {
        const data = req.body
        const { email } = data

        // email validation
        if (!email || !email.includes('@')) {
          res
            .status(422)
            .json({ message: 'invalid email', success: false, data: {} })

          mongoose.connection.close()
        }

        const isExistingEmail = await User.findOne({ email })

        if (isExistingEmail) {
          return res.status(422).json({
            message: 'access already requested',
            success: false,
            data: {},
          })
        }

        const user = await User.create(data)
        return res.status(201).json({
          success: true,
          data: user,
          message: 'user successfully created',
        })
      } catch (error) {
        return res
          .status(400)
          .json({ sucess: false, message: 'server error', data: {} })
      }
    default:
      return res
        .status(400)
        .json({ success: false, message: 'server error', data: {} })
  }
}
