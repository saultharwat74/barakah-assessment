import { Product } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type CartState = {
  allSelected: boolean;
  products: Product[];
};

export const initialState: CartState = {
  allSelected: false,
  products: [],
};
export const cartSlice = createSlice({
  initialState,
  name: "cartSlice",
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const index = state.products.findIndex(
        (product) => product.id === action.payload.id
      );

      if (index === -1) {
        state.products = [
          ...state.products,
          { ...action.payload, quantity: 1, selected: true },
        ];
      } else {
        state.products = [
          ...state.products.map((product, i) => {
            if (i === index) {
              return {
                ...product,
                price: product.price + action.payload.price,
                quantity: product.quantity + 1,
              };
            }
            return product;
          }),
        ];
      }
      state.allSelected = state.products.every((product) => product.selected);
    },

    removeFromCart: (state, action: PayloadAction<number>) => {
      const index = state.products.findIndex(
        (product) => product.id === action.payload
      );
      const oldProduct = state.products[index];

      const oldQuantity = oldProduct?.quantity ?? 1;

      if (oldQuantity > 1) {
        state.products = [
          ...state.products.map((product, i) => {
            if (i === index) {
              return {
                ...product,
                price: product.price - 0,
                quantity: product.quantity - 1,
              };
            }
            return product;
          }),
        ];
      } else {
        state.products = state.products.filter(
          (product) => product.id !== action.payload
        );
      }
      state.allSelected = state.products.every((product) => product.selected);
    },

    setSelectedProduct: (state, action: PayloadAction<number>) => {
      state.products = state.products.map((product) => ({
        ...product,
        selected:
          product.id === action.payload ? !product.selected : product.selected,
      }));
      state.allSelected = state.products.every((product) => product.selected);
    },
    toggleSelectAll: (state) => {
      state.allSelected = !state.allSelected;
      state.products = state.products.map((product) => ({
        ...product,
        selected: state.allSelected,
      }));
    },
    resetCart: (state) => {
      state.allSelected = false;
      state.products = [];
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  setSelectedProduct,
  toggleSelectAll,
  resetCart,
} = cartSlice.actions;

export default cartSlice.reducer;
