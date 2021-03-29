import React, { useEffect } from 'react'
import { useGlobalContext } from '../GlobalContext'
import AppRating from '../components/AppRating'
import { ROUTING_PATHS } from '../constants'

const SkillsRating = () => {
  const { selectedSkillOptions, setAppNavigationParams } = useGlobalContext()

  const onChange = value => {
    console.log('changed', value)
  }

  useEffect(() => {
    setAppNavigationParams({
      isBackBtnDisabled: false,
      isNextBtnDisabled: false,
      nextBtnAction: ROUTING_PATHS.SERVICE_REQUESTS,
    })
  }, [selectedSkillOptions, setAppNavigationParams])

  return (
    <section>
      <h2>Rate your competancy in each (1=Beginner, 10=Expert)</h2>

      <div className='app-grid-box'>
        {selectedSkillOptions.map((skill, index) => (
          <AppRating key={index} skillName={skill} skillIndex={index} />
        ))}
      </div>
    </section>
  )
}

export default SkillsRating
