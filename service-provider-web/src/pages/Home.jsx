import React, { useState, useEffect } from 'react'
import { useGlobalContext } from '../GlobalContext'
import { ROUTING_PATHS } from '../constants'

const Home = () => {
  const { setProviderName, setAppNavigationParameters } = useGlobalContext()

  const [name, setName] = useState('')

  const nameSubmitHandler = e => {
    e.preventDefault()

    setProviderName(name)
  }

  useEffect(() => {
    const flag = name.length <= 0 ? true : false

    setAppNavigationParameters({
      isNextBtnDisabled: flag,
      nextBtnAction: ROUTING_PATHS.SKILLS_SELECTION,
    })
  }, [name, setAppNavigationParameters])

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
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </form>
    </main>
  )
}

export default Home
