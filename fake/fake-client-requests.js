const faker = require('faker')
const moment = require('moment')
const {
  DATE_FORMAT,
  NUM_TOTAL_SKILLS,
  NUM_SERVICE_REQUESTS,
} = require('../utils/constants')

const createSkillsArray = () => {
  const skillsArray = []

  for (let i = 0; i < NUM_TOTAL_SKILLS; i++) {
    const fakeWord = faker.random.word()

    if (skillsArray.includes(fakeWord)) {
      i -= 1 // go back and try to find new unique word
    } else {
      skillsArray.push(fakeWord)
    }
  }

  return skillsArray
}

const createSrvRequestMaps = () => {
  const srvRequestMaps = []

  for (let i = 0; i < NUM_SERVICE_REQUESTS; i++) {
    const clientId = faker.random.alphaNumeric(6)
    const clientFullName = faker.name.firstName() + ' ' + faker.name.lastName()

    const srvRequirementDesc = faker.lorem.sentences(2)

    const soon = faker.date.soon()
    const serviceStartDate = moment(soon).format(DATE_FORMAT)

    const future = faker.date.future()
    const serviceEndDate = moment(future).format(DATE_FORMAT)

    const serviceRequest = {
      clientId,
      clientFullName,
      srvRequirementDesc,
      serviceStartDate,
      serviceEndDate,
    }

    srvRequestMaps.push(serviceRequest)
  }

  return srvRequestMaps
}

/**
 * For debugging and testing of generated fake data
 */
const createFakeData = () => {
  const skillsArray = createSkillsArray()
  const srvRequestMaps = createSrvRequestMaps()

  console.log('skillsArray:', skillsArray)
  console.log('srvRequestMaps', srvRequestMaps)
}

module.exports = {
  createFakeData,
  createSkillsArray,
  createSrvRequestMaps,
}
