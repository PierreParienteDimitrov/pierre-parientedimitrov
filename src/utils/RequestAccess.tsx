import { IUser } from 'types/IUser'

export const RequestAccess = async (email: string) => {
  const user: IUser = {
    email,
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
    window.analytics.track('User Requested Access', {
      email,
    })
    return success
  }
}
