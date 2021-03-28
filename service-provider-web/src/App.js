import axios from 'axios'
import React, { useEffect } from 'react'
import { API_BASE_URI } from './constants'
import './App.css'

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

  return <div className='App'>hello service providers</div>
}

export default App
