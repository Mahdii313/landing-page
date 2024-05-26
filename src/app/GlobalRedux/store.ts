import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./features/userSlice";
import CartReducer from "./features/cartSlice";

export const store = configureStore({
  reducer: {
    user: UserReducer,
    cart: CartReducer,
  },
});
