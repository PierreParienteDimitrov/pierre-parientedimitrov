import { IUser } from 'types/IUser'

export const RequestAccess = async (
  name: string,
  email: string,
  company: string,
  design: boolean,
  engineering: boolean
) => {
  const user: IUser = {
    name,
    email,
    company,
    design,
    engineering,
  }

  const res = await fetch(`/api/users/create-user`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  })

  const { message, success } = await res.json()

  if (!success) {
    return message
  }

  if (success) {
    return success
  }
}
