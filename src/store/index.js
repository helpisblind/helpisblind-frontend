import React, { createContext, useReducer, useContext } from 'react'
import { reducer, initialState } from './reducer'

const StoreStateContext = createContext()
const StoreDispatchContext = createContext()

function StoreProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <StoreStateContext.Provider value={state}>
      <StoreDispatchContext.Provider value={dispatch}>
        {children}
      </StoreDispatchContext.Provider>
    </StoreStateContext.Provider>
  )
}

function useStore() {
  return [
    useContext(StoreStateContext),
    useContext(StoreDispatchContext)
  ]
}

export {
  StoreProvider,
  useStore,
}
