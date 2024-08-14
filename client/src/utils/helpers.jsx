export const SERVER_URL = import.meta.env.VITE_SERVER_URL

export const ReCAPTCHA_SITE_KEY = import.meta.env.VITE_ReCAPTCHA_SITE_KEY

export const formatDate = (str) => {
  const date = new Date(str)
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, "0")
  const day = String(date.getDate()).padStart(2, "0")

  const formattedDate = `${year}/${month}/${day}`

  return formattedDate
}
