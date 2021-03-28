import React, { useContext, useState } from 'react'

const GlobalContext = React.createContext()

const GlobalProvider = ({ children }) => {
  const [providerName, setProviderName] = useState('John Doe')

  return (
    <GlobalContext.Provider
      value={{
        providerName,

        setProviderName,
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
