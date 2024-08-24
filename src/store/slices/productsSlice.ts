import { Product } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export type ProductsState = {
  categoriesBySlug: {
    [key: string]: Product[];
  };
  categories: string[];
  shownProducts: Product[];
  selectedProduct: Product | null;
  products: Product[];
};

const initialState: ProductsState = {
  categoriesBySlug: {},
  categories: [],
  shownProducts: [],
  selectedProduct: null,
  products: [],
};

export const productsSlice = createSlice({
  initialState,
  name: "productsSlice",
  reducers: {
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.categoriesBySlug = {
        ...state.categoriesBySlug,
        [action.payload[0].category]: action.payload,
      };
      state.categories = [...state.categories, action.payload[0].category];
      state.shownProducts = [...Object.values(state.categoriesBySlug)[0]];
      state.products = [...Object.values(state.categoriesBySlug)[0]];
    },

    selectProduct: (state, action: PayloadAction<Product>) => {
      state.selectedProduct = action.payload;
    },
    searchForProducts: (state, action: PayloadAction<string>) => {
      state.shownProducts = state.products.filter((category) =>
        category.title.toLowerCase().includes(action.payload.toLowerCase())
      );
    },
    filterByCategory: (state, action: PayloadAction<string>) => {
      state.shownProducts = state.categoriesBySlug[action.payload];
      state.products = state.categoriesBySlug[action.payload];
    },
  },
});

export const {
  setProducts,
  selectProduct,
  searchForProducts,
  filterByCategory,
} = productsSlice.actions;
export default productsSlice.reducer;
