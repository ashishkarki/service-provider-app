import React from 'react'
import { Link } from 'react-router-dom'

const AppButton = ({ label, isDisabled, submitHandler, linkTo }) => {
  return (
    <button
      className='app-button'
      type='submit'
      onClick={submitHandler}
      disabled={isDisabled}
    >
      <Link to={linkTo}>{label}</Link>
    </button>
  )
}

export default AppButton
