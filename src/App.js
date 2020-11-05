import React, { useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { firebaseAuth } from './firebase'
import { useBasketValue } from './context/BasketContext'

import Header from './components/Header/Header'
import NotificationCard from './components/NotificationCard/NotificationCard'
import Home from './components/Home/Home'
import Checkout from './components/Checkout/Checkout'
import Orders from './components/Orders'
import Login from './components/Login/Login'
import ScrollToTop from './ScrollToTop'

import './App.css'

function App() {
  const [state, dispatch] = useBasketValue()

  useEffect(() => {
    firebaseAuth.onAuthStateChanged(authUser => {
      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser,
        })
      } else {
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
          <Route path="/orders">
            <Header />
            <Orders />
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
