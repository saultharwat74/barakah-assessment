import { Product } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { colors } from "colors";
import { showMessage } from "react-native-flash-message";
import Toast from "react-native-toast-message";

export type CartState = {
  allSelected: boolean;
  cartItems: Product[];
};

export const initialState: CartState = {
  allSelected: false,
  cartItems: [],
};
export const cartSlice = createSlice({
  initialState,
  name: "cartSlice",
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const index = state.cartItems.findIndex(
        (product) => product.id === action.payload.id
      );

      if (index === -1) {
        state.cartItems = [
          ...state.cartItems,
          { ...action.payload, quantity: 1, selected: true },
        ];
      } else {
        state.cartItems = [
          ...state.cartItems.map((product, i) => {
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
      state.allSelected = state.cartItems.every((product) => product.selected);
      showMessage({
        message: "Added to cart",
        description: `${action.payload.title} added to cart`,
        type: "success",
        backgroundColor: colors.success,
      });
    },

    removeFromCart: (state, action: PayloadAction<number>) => {
      const index = state.cartItems.findIndex(
        (product) => product.id === action.payload
      );
      const oldProduct = state.cartItems[index];

      const oldQuantity = oldProduct?.quantity ?? 1;

      if (oldQuantity > 1) {
        state.cartItems = [
          ...state.cartItems.map((product, i) => {
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
        state.cartItems = state.cartItems.filter(
          (product) => product.id !== action.payload
        );
      }
      state.allSelected = state.cartItems.every((product) => product.selected);
       showMessage({
         message: "Removed from cart",
         description: `${oldProduct?.title} removed from cart`,
         type: "success",
         backgroundColor: colors.success,
       });
    },

    setSelectedProduct: (state, action: PayloadAction<number>) => {
      state.cartItems = state.cartItems.map((product) => ({
        ...product,
        selected:
          product.id === action.payload ? !product.selected : product.selected,
      }));
      state.allSelected = state.cartItems.every((product) => product.selected);
    },
    toggleSelectAll: (state) => {
      state.allSelected = !state.allSelected;
      state.cartItems = state.cartItems.map((product) => ({
        ...product,
        selected: state.allSelected,
      }));
    },
    resetCart: (state) => {
      state.allSelected = false;
      state.cartItems = [];
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
