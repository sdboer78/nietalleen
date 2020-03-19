import axios from 'axios'
import formatMessage from './obi4wan-message'
import constants from '~/constants/obi4wan-api'

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
