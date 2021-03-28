import React from 'react'
import { Button } from 'antd'
import { DoubleLeftOutlined, DoubleRightOutlined } from '@ant-design/icons'
import { useHistory } from 'react-router-dom'
import { ROUTING_PATHS } from '../constants'

const AppNavigation = () => {
  const history = useHistory()

  return (
    <div className='app-navigation'>
      <Button
        type='default'
        shape='round'
        icon={<DoubleLeftOutlined />}
        size='default'
        onClick={() => history.goBack()}
        disabled={history.length < 2}
      >
        Back
      </Button>

      <Button
        type='primary'
        shape='round'
        icon={<DoubleRightOutlined />}
        size='default'
        onClick={() => history.push(ROUTING_PATHS.SKILLS_SELECTION)}
      >
        Next
      </Button>
    </div>
  )
}

export default AppNavigation
