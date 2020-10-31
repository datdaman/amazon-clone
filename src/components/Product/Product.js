import React from 'react'
import { random } from 'faker'
import StarRoundedIcon from '@material-ui/icons/StarRounded'
import { useBasketValue } from '../../context/BasketContext'
import { useNotificationsValue } from '../../context/NotificationsContext'

import './Product.css'

function Product({
  id, title, image, price, rating,
}) {
  const [{ basket }, dispatch] = useBasketValue()
  const [{ notifications }, dispatchNotification] = useNotificationsValue()
  const obj = {
    test: '',
    hello: 2,
  }
  const addToNotifcations = () => {
    dispatchNotification({
      type: 'ADD_TO_NOTIFICATIONS',
      item: {
        id: random.uuid(),
        image,
        title,
      },
    })
  }

  const addToBasket = () => {
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id,
        title,
        image,
        price,
        rating,
      },
    })
  }

  const CTA = () => {
    addToBasket()
    addToNotifcations()
  }

  return (
    <div className="product" key={id}>
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>£</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array.from(Array(rating).keys()).map(value => (
            <StarRoundedIcon
              key={value}
              style={{ color: '#ffeb3b' }}
            />
          ))}

        </div>
      </div>

      <img
        src={image}
        alt=""
      />
      <button type="button" onClick={CTA}>Add to basket</button>
    </div>
  )
}

export default Product
