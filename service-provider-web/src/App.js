import React from 'react'
import './App.css'
import Routing from './Routing'
import { GlobalProvider } from './globalContext'

function App() {
  return (
    // <div className='App'>
    <GlobalProvider>
      <Routing />
    </GlobalProvider>
    // </div>
  )
}

export default App
