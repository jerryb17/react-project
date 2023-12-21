export const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] };

    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter((c) => c.id !== action.payload.id),
      };
    case 'Change_Cart_QTY':
      return {
        ...state,
        cart: state.cart.filter((c) =>
          c.id === action.payload.id ? (c.qty = action.payload.qty) : c.qty
        ),
      };

    default:
      return state;
  }
};

export const prodReducer = (state, action) => {
  switch (action.type) {
    case 'Sort_By_Price':
      return { ...state, sort: action.payload };

    case 'Filter_By_Stock':
      return { ...state, byStock: !state.byStock };

    case 'Filter_By_Delivery':
      return { ...state, byFastDelivery: !state.byFastDelivery };

    case 'Filter_By_Rating':
      return { ...state, byRating: action.payload };

    case 'Filter_By_Search':
      return { ...state, searchQuery: action.payload };

    case 'Clear_Filter':
      return {
        byStock: false,
        byFastDelivery: false,
        byRating: 0,
        searchQuery: '',
      };

    default:
      return state;
  }
};
