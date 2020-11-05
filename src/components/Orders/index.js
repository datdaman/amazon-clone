import React, { useState, useEffect } from 'react'
import { useBasketValue } from '../../context/BasketContext'
import { db } from '../../firebase'
import Order from './Order'
import './Orders.css'

function Orders() {
  const [{ basket, user }, dispatch] = useBasketValue()
  const [orders, setOrders] = useState([])

  useEffect(() => {
    db.collection('users')
      .doc('user')
      .collection('orders')
      .orderBy('createdAt', 'desc')
      .onSnapshot(snapshot => (
        setOrders(snapshot.docs.map(doc => ({
          id: doc.id,
          data: doc.data(),
        })))
      ))
  }, [])
  return (
    <div className="orders">
      <h1>Your Orders</h1>

      <div className="orders__order">
        {orders?.map(order => (
          <Order order={order} />
        ))}
      </div>
    </div>
  )
}

export default Orders
