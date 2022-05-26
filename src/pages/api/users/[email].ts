import dbConnect from 'lib/dbConnect'
import User from 'models/User'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    query: { email },
    method,
  } = req

  await dbConnect()

  switch (method) {
    case 'GET':
      try {
        const user = await User.find({ email: email })
        res.status(200).json({ success: true, data: user })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    case 'POST':
      try {
        const isExisting = await User.find({ email: req.body.email })
        console.log(isExisting)

        if (isExisting.length === 0) {
          const user = await User.create(req.body)
          res.status(201).json({ success: true, data: user })
        }
      } catch (error) {
        res.status(400).json({ sucess: false })
      }
      break
    default:
      res.status(400).json({ success: false })
  }
}
