import React from 'react'
import { Button } from 'antd'
import { DoubleLeftOutlined, DoubleRightOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'

const AppButton = ({ label, isDisabled, submitHandler, linkTo }) => {
  return (
    // <button
    //   className='app-button'
    //   type='submit'
    //   onClick={submitHandler}
    //   disabled={isDisabled}
    // >
    //   <Link to={linkTo}>{label}</Link>
    // </button>

    <Button
      type='default'
      shape='round'
      icon={<DoubleLeftOutlined />}
      size='default'
      onClick={() => submitHandler}
      disabled={isDisabled}
    >
      <Link to={linkTo}>{label}</Link>
    </Button>
  )
}

export default AppButton
