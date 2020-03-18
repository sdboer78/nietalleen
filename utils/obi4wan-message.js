import hash from 'object-hash'
import constants from '~/constants/obi4wan-api'

const formatMessageContent = (message) => {
  const {
    fullName,
    emailAddress,
    city,
    phoneNumber,
    requestType,
    requestMessage,
    consentPrivacy,
    requestAidFor,
    needyFullName,
    needyCity,
    needyPhoneNumber
  } = message

  return `
    Naam: ${fullName}
    Email: ${emailAddress}
    Telefoonnummer: ${phoneNumber}
    Plaats: ${city}
    Hulpvraag: ${requestType}
    Ik zoek hulp bij: ${requestMessage}
    Ik vraag hulp voor: ${requestAidFor}
    ${requestAidFor.toLowerCase() !== 'mijzelf'
      ? `
        HULPONTVANGER:
        Naam: ${needyFullName}
        Telefoonnummer: ${needyPhoneNumber}
        Plaats: ${needyCity}`
      : ''
    }
    Akkoord met privacy voorwaarden: ${consentPrivacy}`
}

const formatMessage = (message) => {
  const {
    fullName,
    emailAddress,
    requestType
  } = message

  const publishDate = new Date()
  const messageId = hash(publishDate.toISOString())
  const content = formatMessageContent(message)

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
    content
  }
}

export default formatMessage
