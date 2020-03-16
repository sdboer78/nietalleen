import axios from 'axios'
import constants from '../constants/obi4wan-api'
import formatMessage from './obi4wan-message'

const api = axios.create({
  baseURL: constants.API_URL
})

export const postMessage = async (formMessage) => {
  const message = formatMessage(formMessage)
  const response = await api.post(message, {
    params: {
      token: constants.API_TOKEN
    }
  })
  return response
}
