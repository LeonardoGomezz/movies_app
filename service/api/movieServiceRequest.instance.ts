import axios from "axios"

export const movieServiceRequest = (method: string) =>{
  return axios.create({
    baseURL: process.env.NEXT_PUBLIC_URL_BASE,
    method: method,
    headers: {
      'accept': 'application/json',
      'Authorization': `Bearer ${process.env.NEXT_PUBLIC_AUTH_TOKEN}`
    }
  })
}