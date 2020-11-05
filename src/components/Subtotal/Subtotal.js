import React from 'react'
import CurrencyFormat from 'react-currency-format'
import { useHistory } from 'react-router-dom'
import { useBasketValue } from '../../context/BasketContext'
import { getBasketTotal } from '../../reducer/basketReducer'
import { db, timestamp } from '../../firebase'

import './Subtotal.css'

function Subtotal() {
  const history = useHistory()
  const [{ basket }, dispatch] = useBasketValue()

  const checkOut = () => {
    db.collection('users')
      .doc('user')
      .collection('orders')
      .doc('order') // orderid
      .set({
        basket,
        amount: getBasketTotal(basket),
        createdAt: timestamp(),
      })
      .then(() => {
        console.log('Document successfully written!')
        history.push('/orders')
      })
      .catch(error => {
        console.error('Error writing document: ', error)
      })
  }

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={value => (
          <>
            <p>
              Subtotal ({basket?.length} items):
              <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType="text"
        thousandSeparator
        prefix="£"
      />
      <button type="button" onClick={checkOut}>Checkout</button>
    </div>
  )
}

export default Subtotal
