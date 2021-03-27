const config = require('config')
const {
  createSkillsArray,
  createSrvRequestMaps,
} = require('../fake/fake-client-requests')

const BASE_URL = config.get('baseUrl')

/**
 * Description: get a list of all skills
 * Route: GET /api/v1/services/skills
 */
exports.getAllSkills = async (req, res, next) => {
  try {
    const allSkills = createSkillsArray()

    return res.status(200).json({
      success: true,
      data: allSkills,
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: `${err.message}`,
    })
  }
}

/**
 * Description: get a list of all skills
 * Route: POST /api/v1/services/skills
 */
exports.getSrvRequestMaps = async (req, res, next) => {
  try {
    const { selectedSkills } = req.body // array of selected skills

    const srvRequestMaps = createSrvRequestMaps() // array of request maps
    const srvReqMapWithSkills = srvRequestMaps.map(reqMap => {
      const skillObj = { skill: randomizer(selectedSkills) }
      return { ...reqMap, ...skillObj }
    })

    return res.status(200).json({
      success: true,
      data: srvReqMapWithSkills,
    })
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: `${err.message}`,
    })
  }
}

const randomizer = array => {
  // generate a random number between min and max, not including max
  const min = 0
  const max = array.length
  const randomIndex = Math.floor(Math.random() * (max - min) + min)

  return array[randomIndex]
}
