import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { BasketContextProvider } from './context/BasketContext'
import { NotificationsContextProvider } from './context/NotificationsContext'
import basketReducer, { initialBasketState } from './reducer/basketReducer'
import notificationsReducer, { initialNotificationsState } from './reducer/notificationsReducer'

ReactDOM.render(
  <React.StrictMode>
    <NotificationsContextProvider
      initialState={initialNotificationsState}
      reducer={notificationsReducer}
    >
      <BasketContextProvider initialState={initialBasketState} reducer={basketReducer}>
        <App />
      </BasketContextProvider>
    </NotificationsContextProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
