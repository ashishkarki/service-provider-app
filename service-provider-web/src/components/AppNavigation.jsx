import React from 'react'
import { Button } from 'antd'
import { DoubleLeftOutlined, DoubleRightOutlined } from '@ant-design/icons'
import { useHistory } from 'react-router-dom'

const AppNavigation = ({ children }) => {
  const history = useHistory()

  return (
    <>
      <Button
        type='default'
        shape='round'
        icon={<DoubleLeftOutlined />}
        size='default'
        onClick={() => history.goBack()}
      >
        Back
      </Button>

      <Button
        type='primary'
        shape='round'
        icon={<DoubleRightOutlined />}
        size='default'
        onClick={() => history.goForward()}
      >
        Next
      </Button>
    </>
  )
}

export default AppNavigation
