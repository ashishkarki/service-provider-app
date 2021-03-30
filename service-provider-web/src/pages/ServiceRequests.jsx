import React, { useEffect, useRef, useCallback, useState } from 'react'
import { useGlobalContext } from '../GlobalContext'
import axios from 'axios'
import { API_BASE_URI, ROUTING_PATHS, POST_REQUEST_COFIG } from '../constants'
import AppAlert from '../components/AppAlert'

function ServiceRequests() {
  const { skillRatingsMap, setAppNavigationParams } = useGlobalContext()
  const [errorMsg, setErrorMsg] = useState('')
  const [srvRequestMaps, setSrvRequestMaps] = useState([])

  let sortdSkillRatingsMap = new Map()
  const sortdMapRef = useRef(sortdSkillRatingsMap)

  const getSrvRequestMaps = useCallback(async () => {
    try {
      const skills = Array.from(sortdMapRef.current.keys())

      const response = await axios.post(
        `${API_BASE_URI}/requests`,
        { selectedSkills: skills },
        POST_REQUEST_COFIG
      )

      setSrvRequestMaps(response.data.data)
    } catch (error) {
      //   console.log(`There was an error: ${error.message}`)
      setErrorMsg(error.message)
    }
  }, [setSrvRequestMaps])

  useEffect(() => {
    sortdMapRef.current = new Map(
      [...skillRatingsMap.entries()].sort((a, b) => b[1] - a[1])
    )
    console.log('sorted map:', sortdMapRef.current)

    const axiosSrc = axios.CancelToken.source()

    getSrvRequestMaps()

    return () => {
      axiosSrc.cancel()
    }
  }, [skillRatingsMap, getSrvRequestMaps])

  useEffect(() => {
    setAppNavigationParams({
      isBackBtnDisabled: false,
      isNextBtnDisabled: false,
      nextBtnLabel: 'Start Again',
      nextBtnAction: ROUTING_PATHS.HOME_ROOT,
    })

    return () => {}
  }, [setAppNavigationParams])

  return (
    <>
      requests... <br />
      {console.log('imported skills map::' + [...skillRatingsMap.entries()])}
      <br />
      {errorMsg ? errorMsg : 'no error to report'}
    </>
  )
}

export default ServiceRequests
