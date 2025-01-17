import { createSlice } from "@reduxjs/toolkit";
import { uiActions } from "./ui";

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

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending cart data!",
      })
    );

    const sendRequest = async () => {
      const response = await fetch("[URL]", {
        method: "PUT",
        body: JSON.stringify(cart),
      });

      if (!response.ok) {
        throw new Error("Sending cart data failed.");
      }
    };

    try {
      await sendRequest();

      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Sent cartdata successfully.",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Failed to send cart data.",
        })
      );
    }
  };
};

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
