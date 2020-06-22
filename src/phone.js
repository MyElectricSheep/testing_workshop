export const isPhoneNumber = (number) => {
  const sanitizedNumber = number ? number.replace(/[a-zA-Z]/g, "") : ''
  return /\+?[0-9 -.]{7,16}/.test(sanitizedNumber);
}
