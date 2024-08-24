import { configureStore } from "@reduxjs/toolkit";
import { categoriesApi } from "./categoriesApi";
import { categoryApi } from "./categoryApi";
import { productsSlice } from "./productsSlice";
import { cartSlice } from "./cartSlice";
import { useSelector } from "react-redux";

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
export const useAppSelector = useSelector.withTypes<RootState>();


