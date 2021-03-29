import React from 'react'
import { InputNumber } from 'antd'

const AppRating = ({ skillName, skillIndex }) => {
  console.log(skillName, skillIndex)
  const onChange = () => {}
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'normal',
        justifyContent: 'space-around',
      }}
    >
      <span>{skillName}: </span>
      <InputNumber min={1} max={10} defaultValue={1} onChange={onChange} />
    </div>
  )
}

export default AppRating
