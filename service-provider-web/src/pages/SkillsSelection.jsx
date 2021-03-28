import React, { useCallback, useEffect, useState } from 'react'
import { Checkbox } from 'antd'
import axios from 'axios'
import { API_BASE_URI, ALERT_TYPES } from '../constants'
import AppAlert from '../components/AppAlert'

const SkillsSelection = () => {
  const [skillOptions, setSkillOptions] = useState([])
  const [errorMsg, setErrorMsg] = useState('')

  const onCheckboxesChange = checkedValues => {
    console.log('checked = ', checkedValues)
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

  return (
    <section>
      <h2>Please select at least 3 skills below</h2>

      {errorMsg && errorMsg.length !== '' ? (
        <AppAlert />
      ) : (
        <Checkbox.Group
          options={skillOptions}
          defaultValue={['Apple']}
          onChange={onCheckboxesChange}
        />
      )}
    </section>
  )
}

export default SkillsSelection
