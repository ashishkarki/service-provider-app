import React, { useEffect } from 'react'
import { useGlobalContext } from '../GlobalContext'
import AppRating from '../components/AppRating'
import { ROUTING_PATHS } from '../constants'

const SkillsRating = () => {
  const {
    selectedSkillOptions,
    skillRatingsMap,

    // setSkillRatingsMap,
    setAppNavigationParams,
  } = useGlobalContext()

  const onInputValueChange = (skillName, newValue) => {
    skillRatingsMap.set(skillName, newValue)
    console.log('local skills map::' + [...skillRatingsMap.entries()])

    // setSkillRatingsMap(new Map(skillRatingsMap))
  }

  useEffect(() => {
    selectedSkillOptions.forEach(skillName => skillRatingsMap.set(skillName, 1))

    setAppNavigationParams({
      isBackBtnDisabled: false,
      isNextBtnDisabled: false,
      nextBtnAction: ROUTING_PATHS.SERVICE_REQUESTS,
    })

    return () => {}
  }, [skillRatingsMap, selectedSkillOptions, setAppNavigationParams])

  return (
    <section>
      <h2>Rate your competency in each (1=Beginner, 10=Expert)</h2>

      <div className='app-grid-box'>
        {selectedSkillOptions.map((skillName, index) => (
          <AppRating
            key={index}
            skillName={skillName}
            onInputValueChange={onInputValueChange}
          />
        ))}
      </div>
    </section>
  )
}

export default React.memo(SkillsRating)
