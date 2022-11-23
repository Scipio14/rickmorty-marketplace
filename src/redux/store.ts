import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cart.slice";
// ...

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

//Infer the RootState and AppDispatch from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
