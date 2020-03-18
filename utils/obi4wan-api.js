import axios from 'axios'
import constants from '../constants/obi4wan-api'
import formatMessage from './obi4wan-message'

const api = axios.create({
  baseURL: constants.API_URL
})

const postMessage = async (formMessage) => {
  const message = formatMessage(formMessage)

  const response = await api.post(constants.API_ENDPOINT, message, {
    params: {
      token: constants.API_TOKEN
    }
  })
  return response
}

export default postMessage
