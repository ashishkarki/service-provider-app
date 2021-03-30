import React from 'react'
import 'antd/dist/antd.css'
import { Alert } from 'antd'
import { ALERT_TYPES } from '../constants'

const AppAlert = ({
  alertMsg = 'info',
  type = ALERT_TYPES.INFO,
  showIcon = true,
}) => {
  return (
    <Alert message={alertMsg} type={type} showIcon={showIcon} banner closable />
  )
}

export default AppAlert
