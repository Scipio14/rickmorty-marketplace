import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartState {
  id: string | number;
  name: string;
  info: string;
  image: string;
}

const initialState: Array<CartState> = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartState>) => {},
    removeToCart: (state, action: PayloadAction<CartState>) => {},
  },
});

export const {} = cartSlice.actions;
export default cartSlice.reducer;
