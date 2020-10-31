import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { firebaseAuth } from '../../firebase'
import './Login.css'

function Login() {
  const history = useHistory()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const signIn = e => {
    e.preventDefault()
    firebaseAuth.signInWithEmailAndPassword(email, password)
      .then(() => {
        history.push('/')
      }).catch(error => console.log(error.message))
  }

  const register = e => {
    e.preventDefault()
    firebaseAuth.createUserWithEmailAndPassword(email, password)
      .then(auth => {
        if (auth) {
          history.push('/')
        }
      })
  }

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>
      <div className="login__container">
        <h1>Sign in</h1>
        <form action="">
          <h5>Email</h5>
          <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
          <h5>Password</h5>
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
          <button type="submit" className="login__signInButton" onClick={signIn}>Sign in</button>
        </form>

        <p>
          By signing in you are selling your soul to Mr Dat and
          agree to the Conditions of Use & Sale. You should carefully read our
          Privacy Notice, our Cookies Notice and our Interested Ads Notice.
        </p>

        <button type="button" className="login__registerButton" onClick={register}>Create your Amazon Account</button>

      </div>
    </div>
  )
}

export default Login
