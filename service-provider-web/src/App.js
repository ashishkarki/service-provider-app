import axios from 'axios'
import React, { useEffect } from 'react'
import { API_BASE_URI } from './constants'
import './App.css'
import Routing from './Routing'
import { GlobalProvider } from './globalContext'

function App() {
  const getAllSkills = async () => {
    try {
      const response = await axios.get(`${API_BASE_URI}/skills`)

      console.log(`all skills: ${JSON.stringify(response.data)}`)
    } catch (error) {
      console.log(`DUDE, there was an error: ${error.message}`)
    }
  }

  useEffect(() => {
    const axiosSrc = axios.CancelToken.source()

    getAllSkills()

    return () => {
      axiosSrc.cancel()
    }
  }, [])

  return (
    <div className='App'>
      <GlobalProvider>
        <Routing />
      </GlobalProvider>
    </div>
  )
}

export default App
