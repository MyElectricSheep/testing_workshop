export default function isPhoneNumber(number) {
  return /\+?[0-9 ]{7,14}/.test(number);
}
