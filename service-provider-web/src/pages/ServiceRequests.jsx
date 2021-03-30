import React, { useEffect, useRef, useCallback, useState } from 'react'
import { useGlobalContext } from '../GlobalContext'
import axios from 'axios'
import 'antd/dist/antd.css'
import { Space, Button } from 'antd'
import { API_BASE_URI, ROUTING_PATHS, POST_REQUEST_COFIG } from '../constants'
import AppAlert from '../components/AppAlert'
import AppDataTable from '../components/AppDataTable'

const SRV_REQUESTS_TABLE_COLS = [
  {
    title: 'Client Full Name',
    dataIndex: 'clientFullName',
    key: 'clientFullName',
    // render: text => <a>{text}</a>,
  },
  {
    title: 'Client Id',
    dataIndex: 'clientId',
    key: 'clientId',
  },
  {
    title: 'Service Start Date',
    dataIndex: 'serviceStartDate',
    key: 'serviceStartDate',
  },
  {
    title: 'Service End Date',
    dataIndex: 'serviceEndDate',
    key: 'serviceEndDate',
  },
  {
    title: 'Skill',
    dataIndex: 'skill',
    key: 'skill',
  },
  // {
  //   title: 'Service Requirement Desc',
  //   dataIndex: 'srvRequirementDesc',
  //   key: 'srvRequirementDesc',
  // },
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <Space size='middle'>
        <Button type='default'>Accept</Button>

        <Button type='default' danger>
          Reject
        </Button>
      </Space>
    ),
  },
]

function ServiceRequests() {
  const { skillRatingsMap, setAppNavigationParams } = useGlobalContext()
  const [errorMsg, setErrorMsg] = useState('')
  const [srvRequestMaps, setSrvRequestMaps] = useState([])
  const [requestLoading, setRequestLoading] = useState(true)

  let sortdSkillRatingsMap = new Map()
  const sortdMapRef = useRef(sortdSkillRatingsMap)

  const getSrvRequestMaps = useCallback(async () => {
    try {
      const skills = Array.from(sortdMapRef.current.keys())

      setRequestLoading(true)
      const response = await axios.post(
        `${API_BASE_URI}/requests`,
        { selectedSkills: skills },
        POST_REQUEST_COFIG
      )

      const responseWithKey = response.data.data.map((d, index) => {
        const keyObj = { key: index }
        return { ...d, ...keyObj }
      })
      setSrvRequestMaps(responseWithKey)
      setRequestLoading(false)
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
    <section>
      <h2>Cheers!! Here is list of matching Service Requests</h2>

      {errorMsg && errorMsg.length !== '' ? (
        <AppAlert />
      ) : (
        <AppDataTable
          columns={SRV_REQUESTS_TABLE_COLS}
          data={srvRequestMaps}
          loading={requestLoading}
        />
      )}
    </section>
  )
}

export default ServiceRequests
