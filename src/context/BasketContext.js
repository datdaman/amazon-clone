import React, { createContext, useContext, useReducer } from 'react'

export const BasketContext = createContext()

export const BasketContextProvider = ({ reducer, initialState, children }) => (
  <BasketContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </BasketContext.Provider>
)

export const useBasketValue = () => useContext(BasketContext)
