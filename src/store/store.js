import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/AuthSlice";
import prouductReducer from "../features/ProductSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    products: prouductReducer,
  },
});

export default store;
