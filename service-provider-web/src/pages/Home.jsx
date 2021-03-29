import React, { useEffect } from 'react'
import { useGlobalContext } from '../GlobalContext'
import { ROUTING_PATHS } from '../constants'

const Home = () => {
  const {
    providerName,
    setProviderName,
    setAppNavigationParams,
  } = useGlobalContext()

  const nameSubmitHandler = e => {
    e.preventDefault()
  }

  useEffect(() => {
    const flag = providerName.length <= 0 ? true : false

    setAppNavigationParams({
      isNextBtnDisabled: flag,
      nextBtnAction: ROUTING_PATHS.SKILLS_SELECTION,
    })
  }, [providerName, setAppNavigationParams])

  return (
    <main>
      <h2>Welcome to the Service Provider App</h2>

      <form className='form' onSubmit={nameSubmitHandler}>
        <label htmlFor='providerName' className='input-label'>
          Enter your name to start:
        </label>
        <input
          type='text'
          id='providerName'
          value={providerName}
          onChange={e => setProviderName(e.target.value)}
        />
      </form>
    </main>
  )
}

export default Home
