import React from 'react'
import StarRoundedIcon from '@material-ui/icons/StarRounded'

import './CheckoutProduct.css'
import { useBasketValue } from '../../context/BasketContext'

function CheckoutProduct({
  position, id, title, image, price, rating, hideButton,
}) {
  const [{ basket }, dispatch] = useBasketValue()
  const removeFromBasket = () => {
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      id,
      position,
    })
  }
  return (
    <div className="checkoutProduct" key={id}>
      <img className="checkoutProduct__image" src={image} alt="" />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>£</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array.from(Array(rating).keys()).map(value => (
            <StarRoundedIcon
              key={value}
              style={{ color: '#ffeb3b' }}
            />
          ))}
        </div>
        {!hideButton && <button type="button" onClick={removeFromBasket}>Remove from basket</button>}
      </div>
    </div>
  )
}

export default CheckoutProduct
