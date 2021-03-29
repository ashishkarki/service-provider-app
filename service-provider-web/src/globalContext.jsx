import React, { useContext, useState } from 'react'
import { ROUTING_PATHS } from './constants'

const GlobalContext = React.createContext()

const GlobalProvider = ({ children }) => {
  const [providerName, setProviderName] = useState('Enter your name..')
  const [isBackBtnDisabled, setIsBackBtnDisabled] = useState(true)
  const [isNextBtnDisabled, setIsNextBtnDisabled] = useState(false)
  const [backBtnLabel, setBackBtnLabel] = useState('Back')
  const [nextBtnLabel, setNextBtnLabel] = useState('Next')
  const [nextBtnAction, setNextBtnAction] = useState(ROUTING_PATHS.HOME_ROOT)

  const setAppNavigationParameters = ({
    isBackBtnDisabled = true,
    isNextBtnDisabled = true,
    backBtnLabel = 'Back',
    nextBtnLabel = 'Next',
    nextBtnAction = ROUTING_PATHS.HOME_ROOT,
  }) => {
    setIsBackBtnDisabled(isBackBtnDisabled)
    setIsNextBtnDisabled(isNextBtnDisabled)
    setBackBtnLabel(backBtnLabel)
    setNextBtnLabel(nextBtnLabel)
    setNextBtnAction(nextBtnAction)
  }

  return (
    <GlobalContext.Provider
      value={{
        providerName,
        isBackBtnDisabled,
        isNextBtnDisabled,
        backBtnLabel,
        nextBtnLabel,
        nextBtnAction,

        setProviderName,
        setAppNavigationParameters,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(GlobalContext)
}

export { GlobalContext, GlobalProvider }
