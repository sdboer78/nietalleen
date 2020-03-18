import hash from 'object-hash'
import constants from '../constants/obi4wan-api'

const formatMessageContent = (message) => {
  const {
    fullName,
    emailAddress,
    postalCode,
    phoneNumber,
    requestType,
    requestMessage,
    consentPrivacy,
    requestAidFor,
    needyFullName,
    needyEmailAddress,
    needyPostalCode,
    needyPhoneNumber
  } = message

  return `
    Naam: ${fullName}
    Email: ${emailAddress}
    Telefoonnummer: ${phoneNumber}
    Postcode: ${postalCode}
    Hulpvraag: ${requestType}
    Ik zoek hulp bij: ${requestMessage}
    Ik vraag hulp voor: ${requestAidFor}
    ${requestAidFor.toLowerCase() !== 'mijzelf'
      ? `
        HULP-ONTVANGER:
        Naam: ${needyFullName}
        Email: ${needyEmailAddress}
        Telefoonnummer: ${needyPhoneNumber}
        Postcode: ${needyPostalCode}`
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

  const publishDateISO = new Date().toISOString()
  const messageId = hash(publishDateISO)
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
    published: publishDateISO,
    title: `Hulp gevraagd bij ${requestType}`,
    content
  }
}

export default formatMessage
