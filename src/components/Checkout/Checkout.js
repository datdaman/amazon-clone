import React, { forwardRef } from 'react'
import FlipMove from 'react-flip-move'
import { useBasketValue } from '../../context/BasketContext'
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct'
import Subtotal from '../Subtotal/Subtotal'
import './Checkout.css'

const FunctionalCheckoutProduct = forwardRef((props, ref) => (
  <div ref={ref}>
    <CheckoutProduct {...props} />
  </div>
))

function Checkout() {
  const [{ basket }, dispatch] = useBasketValue()
  const ticketNotVisibleState = {
    transform: 'translateX(-100%)',
    opacity: 0.1,
  }
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
          <FlipMove
            leaveAnimation={{
              to: ticketNotVisibleState,
              from: {},
            }}
            maintainContainerHeight
          >
            {basket?.map((item, i) => (
              <FunctionalCheckoutProduct
                key={item.id}
                position={i}
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </FlipMove>
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
