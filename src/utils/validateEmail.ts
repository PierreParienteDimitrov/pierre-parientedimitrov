export const validateEmail = (emailAdress: string) => {
  const regexEmail = /^^\S+@\S+$/

  if (emailAdress.match(regexEmail)) {
    return true
  } else {
    return false
  }
}
