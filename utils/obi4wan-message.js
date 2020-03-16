import hash from 'object-hash'
import constants from '../constants/obi4wan-api'

export const formatMessage = (message) => {
  const {
    fullName,
    emailAddress,
    city,
    phoneNumber,
    requestType,
    requestMessage,
    privacyConsent
  } = message

  const publishDate = new Date()
  const messageId = hash(publishDate.toISOString())

  // {
  //   "channelIdentifier": "58f2aa7d-9828-46b8-9916-539fa7b559a7",
  //   "threadId": "email@provider.tld",
  //   "messageId": "current date hash",
  //   "url": "https://optional.link/",
  //   "published": "2019-10-28T00:00:00.000+00:00",
  //   "title": "Message Title (Optional)",
  //   "content": "Message Content",
  //   "sender": {
  //     "username": "Firstname Lastname",
  //     "userId": "email@provider.tld"
  //   }
  //  }

  return {
    threadId: emailAddress,
    messageId,
    channelIdentifier: constants.API_CHANNEL_ID,
    sender: {
      username: fullName,
      userId: emailAddress
    },
    url: 'https://nietalleen.nl',
    published: publishDate,
    title: `Hulp gevraagd bij ${requestType}`,
    content: `
      Naam: ${fullName}
      Email: ${emailAddress}
      Telefoonnummer: ${phoneNumber}
      Plaats: ${city}
      Hulpvraag: ${requestType}
      Ik zoek hulp bij: ${requestMessage}
      Akkoord met privacy voorwaarden: ${privacyConsent}
    `
  }
}
