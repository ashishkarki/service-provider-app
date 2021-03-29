import React, { useCallback, useEffect, useState } from 'react'
import { Checkbox } from 'antd'
import axios from 'axios'
import { API_BASE_URI, ROUTING_PATHS } from '../constants'
import AppAlert from '../components/AppAlert'
import { useGlobalContext } from '../GlobalContext'

const SkillsSelection = () => {
  const { setAppNavigationParameters } = useGlobalContext()
  const [skillOptions, setSkillOptions] = useState([])
  const [selectedSkillOptions, setSelectedSkillOptions] = useState([])
  const [errorMsg, setErrorMsg] = useState('')

  const onCheckboxesChange = checkedValues => {
    console.log('checked options = ', checkedValues)
    setSelectedSkillOptions(checkedValues)
  }

  const getAllSkills = useCallback(async () => {
    try {
      const response = await axios.get(`${API_BASE_URI}/skills`)

      setSkillOptions(response.data.data)
    } catch (error) {
      //   console.log(`There was an error: ${error.message}`)
      setErrorMsg(error.message)
    }
  }, [])

  useEffect(() => {
    const axiosSrc = axios.CancelToken.source()

    getAllSkills()

    return () => {
      axiosSrc.cancel()
    }
  }, [getAllSkills])

  useEffect(() => {
    const flag = selectedSkillOptions.length <= 2 ? true : false

    setAppNavigationParameters({
      isBackBtnDisabled: false,
      isNextBtnDisabled: flag,
      nextBtnAction: ROUTING_PATHS.SKILLS_RATING,
    })
  }, [selectedSkillOptions, setAppNavigationParameters])

  return (
    <section>
      <h2>Please select at least 3 skills below</h2>

      {errorMsg && errorMsg.length !== '' ? (
        <AppAlert />
      ) : (
        <Checkbox.Group
          className='skills-checkbox-group'
          options={skillOptions}
          defaultValue={['Apple']}
          onChange={onCheckboxesChange}
        />
      )}
    </section>
  )
}

export default SkillsSelection
