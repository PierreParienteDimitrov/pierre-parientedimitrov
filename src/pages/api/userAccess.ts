import { NextApiRequest, NextApiResponse } from 'next'

import { ResponseFuncs } from '../../../types/IUserAccess'
import { connect } from '../../../utils/mongodb'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  //capture request method, we type it as a key of ResponseFunc to reduce typing later
  const method: keyof ResponseFuncs = req.method as keyof ResponseFuncs

  //function for catch errors
  const catcher = (error: Error) => res.status(400).json({ error })

  // Potential Responses
  const handleCase: ResponseFuncs = {
    // RESPONSE FOR GET REQUESTS
    GET: async () => {
      const { UserAccess } = await connect() // connect to database
      res.json(await UserAccess.find({}).catch(catcher))
    },
    // RESPONSE POST REQUESTS
    POST: async () => {
      const { UserAccess } = await connect() // connect to database
      res.json(await UserAccess.create(req.body).catch(catcher))
    },
  }

  // Check if there is a response for the particular method, if so invoke it, if not response with an error
  const response = handleCase[method]
  if (response) response(req, res)
  else res.status(400).json({ error: 'No Response for This Request' })
}

export default handler
