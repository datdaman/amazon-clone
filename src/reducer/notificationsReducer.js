export const initialNotificationsState = {
  notifications: [],
}

const notificationsReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_NOTIFICATIONS':
      return {
        ...state,
        notifications: [...state.notifications, action.item],
      }
    case 'REMOVE_FROM_NOTIFICATIONS':
      return {
        ...state,
        notifications: state.notifications.filter(item => item.id !== action.id),
      }
    case 'CLEAR_NOTIFICATIONS':
      return {
        notifications: [],
      }
    default:
      return state
  }
}

export default notificationsReducer
