export const initialBasketState = {
  basket: [],
  user: null,
}

export const getBasketTotal = basket => basket?.reduce((amount, item) => item.price + amount, 0)

const basketReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_BASKET':
      return {
        ...state,
        basket: [...state.basket, action.item],
      }
    case 'REMOVE_FROM_BASKET':
      return {
        ...state,
        basket: state.basket.filter((_, i) => i !== action.position),
      }
    case 'SET_USER':
      return {
        ...state,
        user: action.user,
      }
    default:
      return state
  }
}

export default basketReducer
