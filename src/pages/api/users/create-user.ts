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
        }

        const isExistingEmail = await User.findOne({ email })

        if (isExistingEmail) {
          res.status(422).json({
            message: 'access already requested',
            success: false,
            data: {},
          })
          mongoose.connection.close()
          return
        }

        const user = await User.create(data)
        res.status(201).json({
          success: true,
          data: user,
          message: 'user successfully created',
        })
      } catch (error) {
        res
          .status(400)
          .json({ sucess: false, message: 'server error', data: {} })
      }
      break
    default:
      res
        .status(400)
        .json({ success: false, message: 'server error', data: {} })
  }
}
