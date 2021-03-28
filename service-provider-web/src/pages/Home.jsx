import React, { useState } from 'react'
import AppButton from '../components/AppButton'
import { useGlobalContext } from '../globalContext'

const Home = () => {
  const { setProviderName } = useGlobalContext()
  const [name, setName] = useState('')

  const nameSubmitHandler = e => {
    e.preventDefault()

    setProviderName(name)
  }

  return (
    <main>
      <h2>Welcome to the Service Provider App</h2>

      <form className='form' onSubmit={nameSubmitHandler}>
        <label htmlFor='providerName' className='input-label'>
          Enter your name to start:{' '}
        </label>
        <input
          type='text'
          id='providerName'
          value={name}
          onChange={e => setName(e.target.value)}
        />

        <AppButton
          label='Start'
          submitHandler={nameSubmitHandler}
          isDisabled={!name || name.length <= 0}
        />
      </form>
    </main>
  )
}

export default Home
