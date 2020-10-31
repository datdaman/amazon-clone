import React, { createContext, useContext, useReducer } from 'react'

export const NotificationsContext = createContext()

export const NotificationsContextProvider = ({ reducer, initialState, children }) => (
  <NotificationsContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </NotificationsContext.Provider>
)

export const useNotificationsValue = () => useContext(NotificationsContext)
