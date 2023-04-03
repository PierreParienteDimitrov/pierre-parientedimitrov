export const RequestAccess = async (email: string) => {
  const res = await fetch(`/api/users/create-user`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(email),
  })

  const data = await res.json()
  const { success } = data

  if (!success) {
    return data
  }

  if (success) {
    window.analytics.track('User Requested Access', {
      email,
    })
    return data
  }
}
