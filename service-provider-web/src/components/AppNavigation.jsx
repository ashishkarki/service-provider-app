import React from 'react'
import { Button } from 'antd'
import { DoubleLeftOutlined, DoubleRightOutlined } from '@ant-design/icons'
import { useHistory } from 'react-router-dom'
import { useGlobalContext } from '../GlobalContext'

const AppNavigation = () => {
  const {
    isBackBtnDisabled,
    isNextBtnDisabled,
    backBtnLabel,
    nextBtnLabel,
    nextBtnAction,
  } = useGlobalContext()

  const history = useHistory()

  return (
    <div className='app-navigation'>
      <Button
        type='default'
        shape='round'
        icon={<DoubleLeftOutlined />}
        size='default'
        onClick={() => history.goBack()}
        disabled={isBackBtnDisabled}
      >
        {backBtnLabel ? backBtnLabel : 'Back'}
      </Button>

      <Button
        type='primary'
        shape='round'
        icon={<DoubleRightOutlined />}
        size='default'
        onClick={() => history.push(nextBtnAction)}
        disabled={isNextBtnDisabled}
      >
        {nextBtnLabel ? nextBtnLabel : 'Next'}
      </Button>
    </div>
  )
}

export default AppNavigation
