import React from 'react'

const AppButton = ({ label, isDisabled, submitHandler }) => {
  return (
    <button
      className='app-button'
      type='submit'
      onClick={submitHandler}
      disabled={isDisabled}
    >
      {label}
    </button>
  )
}

export default AppButton
