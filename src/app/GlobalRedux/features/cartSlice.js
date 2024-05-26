import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: function (state, action) {
      let item = state.find((i) => i.id === action.payload.id);
      if (item) {
        item.count++;
      } else {
        action.payload.count = 1;
        state.push(action.payload);
      }
    },

    removeFromCart: function (state, action) {
      let item = state.find((i) => i.id === action.payload.id);
      if (item.count > 1) {
        item.count--;
      } else {
        let newState = state.filter((i) => i.id !== item.id);
        return newState;
      }
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
