import axios from 'axios'
import constants from '../constants/obi4wan-api'

const api = axios.create({
  baseURL: constants.API_URL
})

export const postMessage = async (formMessage) => {
  const message = {
    threadId: formMessage.emailAddress,
    channelIdentifier: constants.API_CHANNEL_ID,
    sender: {
      username: formMessage.fullName,
      userId: formMessage.emailAddress
    },

    ...formMessage
  }

  const response = await api.post(message)
  return response
}
