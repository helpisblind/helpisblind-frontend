import React, { createContext, useReducer, useContext } from 'react'
import { reducer, initialState } from './reducer'

const DiscountsStateContext = createContext()
const DiscountsDispatchContext = createContext()

function DiscountsProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <DiscountsStateContext.Provider value={state}>
      <DiscountsDispatchContext.Provider value={dispatch}>
        {children}
      </DiscountsDispatchContext.Provider>
    </DiscountsStateContext.Provider>
  )
}

function useDiscounts() {
  return [
    useContext(DiscountsStateContext),
    useContext(DiscountsDispatchContext)
  ]
}

export {
  DiscountsProvider,
  useDiscounts,
}
