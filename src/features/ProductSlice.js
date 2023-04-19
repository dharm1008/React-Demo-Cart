import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    quantity: 0,
    total: 0,
    products: [],
  },
  reducers: {
    addItem(state, action) {
      state.quantity += 1;
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.quantity;
    },
    delItem(state, action) {
      console.log(action.payload);
      const arr = state.products.filter(
        (item) => item.id !== action.payload.id
      );
      state.products = arr;
      state.quantity -= 1;
    },
    emptyCart(state, action) {
      state.quantity = 0;
      state.total = 0;
      state.products = [];
    },
  },
});

export const { addItem, delItem, emptyCart } = productSlice.actions;

export default productSlice.reducer;
