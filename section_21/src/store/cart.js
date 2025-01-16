import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {
  cart: [],
  showCart: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    addItem(state, action) {
      if (state.cart.length > 0) {
        state.cart[0].quantity++;
      } else {
        state.cart = [{ ...action.payload, quantity: 1 }];
      }
    },
    removeItem(state) {
      if (state.cart[0].quantity <= 1) {
        state.cart = [];
      } else {
        state.cart[0].quantity--;
      }
    },
    showCart(state) {
      state.showCart = true;
    },
    hideCart(state) {
      state.showCart = false;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
