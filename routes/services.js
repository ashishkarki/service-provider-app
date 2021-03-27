const express = require('express')
const { getAllSkills, getSrvRequestMaps } = require('../controllers/services')

const router = express.Router()

router.route('/skills').get(getAllSkills)

router.route('/requests').post(getSrvRequestMaps)

module.exports = router
