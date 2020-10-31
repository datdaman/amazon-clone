import React from 'react'
import CurrencyFormat from 'react-currency-format'
import { useBasketValue } from '../../context/BasketContext'
import { getBasketTotal } from '../../reducer/basketReducer'

import './Subtotal.css'

function Subtotal() {
  const [{ basket }, dispatch] = useBasketValue()
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
    </div>
  )
}

export default Subtotal
