import React from 'react'
import './App.css'
import AppLayout from './components/AppLayout'
import { GlobalProvider } from './GlobalContext'

function App() {
  return (
    <div className='App'>
      <GlobalProvider>
        <AppLayout />
      </GlobalProvider>
    </div>
  )
}

export default App
