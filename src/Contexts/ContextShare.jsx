import React, { createContext, useState } from 'react'

//create context api
export const isAuthTokenContext = createContext()

function ContextShare({children}) {
  const [isAuthToken, setIsAuthToken] = useState(false)
  return (
    <>
    <isAuthTokenContext.Provider value={{isAuthToken, setIsAuthToken}}>{children}</isAuthTokenContext.Provider>
    </>
  )
}

export default ContextShare