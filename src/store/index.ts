import { configureStore } from "@reduxjs/toolkit";
import { categoriesApi } from "./apis/categoriesApi";
import { categoryApi } from "./apis/categoryApi";
import { productsSlice } from "./slices/productsSlice";
import { cartSlice } from "./slices/cartSlice";

export const store = configureStore({
  reducer: {
    [categoriesApi.reducerPath]: categoriesApi.reducer,
    [categoryApi.reducerPath]: categoryApi.reducer,
    [productsSlice.reducerPath]: productsSlice.reducer,
    [cartSlice.reducerPath]: cartSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(categoriesApi.middleware)
      .concat(categoryApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
