import React from 'react'
import { useBasketValue } from '../../context/BasketContext'
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct'
import Subtotal from '../Subtotal/Subtotal'
import './Checkout.css'

function Checkout() {
  const [{ basket }, dispatch] = useBasketValue()
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />
        <div>
          <h2 className="checkout__title">Your shopping Basket</h2>

          {basket.map((item, i) => (
            <CheckoutProduct
              position={i}
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
      <div className="checkout__right">
        <h2>Subtotal</h2>
        <Subtotal />
      </div>
    </div>
  )
}

export default Checkout
