import React, { useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Header from './components/Header/Header'
import NotificationCard from './components/NotificationCard/NotificationCard'
import Home from './components/Home/Home'
import Checkout from './components/Checkout/Checkout'

import './App.css'
import Login from './components/Login/Login'
import { firebaseAuth } from './firebase'
import { useBasketValue } from './context/BasketContext'
import ScrollToTop from './ScrollToTop'

function App() {
  const [state, dispatch] = useBasketValue()

  useEffect(() => {
    firebaseAuth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>>', authUser)
      if (authUser) {
        console.log('logged in')
        dispatch({
          type: 'SET_USER',
          user: authUser,
        })
      } else {
        console.log('logged out')
        dispatch({
          type: 'SET_USER',
          user: null,
        })
      }
    })
  }, [])

  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/">
            <Header />
            <NotificationCard />
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
