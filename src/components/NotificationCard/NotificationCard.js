import React, { useEffect } from 'react'
import FlipMove from 'react-flip-move'

import { useNotificationsValue } from '../../context/NotificationsContext'

import './NotificationCard.css'

function NotificationCard() {
  const [{ notifications }, dispatchNotification] = useNotificationsValue()

  useEffect(() => () => {
    console.log('cleanup')
    dispatchNotification({
      type: 'CLEAR_NOTIFICATIONS',
    })
  }, [])
  useEffect(() => {
    if (!notifications.length) {
      return null
    }
    const myTimeout = setTimeout(() => {
      dispatchNotification({
        type: 'REMOVE_FROM_NOTIFICATIONS',
        id: notifications[0].id,
      })
    }, 1000)

    return () => {
      clearTimeout(myTimeout)
      console.log('cleanup')
    }
  }, [notifications])

  const ticketNotVisibleState = {
    transform: 'translateX(100%)',
    opacity: 0.1,
  }

  const removeNotification = id => {
    dispatchNotification({
      type: 'REMOVE_FROM_NOTIFICATIONS',
      id,
    })
  }

  return (
    <div className="notificationCard__container">
      <FlipMove
        enterAnimation={{
          from: ticketNotVisibleState,
          to: {},
        }}
        leaveAnimation={{
          from: {},
          to: ticketNotVisibleState,
        }}
        maintainContainerHeight
      >
        {notifications.map(item => (
          <div className="notificationCard" key={item.id}>
            <img src={item.image} alt="" />
            <p>{item.title}</p>
            <button type="button" onClick={() => removeNotification(item.id)}>x</button>
          </div>
        ))}
      </FlipMove>
    </div>
  )
}

export default NotificationCard
